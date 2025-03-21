
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Heart, Shield, Check, Minus, Plus, MapPin, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const products = {
  earlybird: {
    title: "Early Bird",
    sensorPrice: 80, // 20% off regular price
    monthlyPrice: 5.99,
    description: "Limited time offer with special benefits",
    freeMonths: 3,
    features: [
      "Tenbeo hardware sensor",
      "Browser extension",
      "Unlimited authentications",
      "Email verification",
      "Biometric login to websites",
      "End-to-end email encryption",
      "Support for up to 3 devices"
    ],
    spotsLeft: 92,
    totalSpots: 100
  },
  premium: {
    title: "Premium",
    sensorPrice: 100,
    monthlyPrice: 5.99,
    description: "Enhanced security for professionals and power users",
    freeMonths: 1,
    features: [
      "Tenbeo hardware sensor",
      "Browser extension",
      "Unlimited authentications",
      "Email verification",
      "Biometric login to websites",
      "End-to-end email encryption",
      "Support for up to 3 devices"
    ]
  }
};

// Shipping options
const shippingOptions = [
  { id: 'standard', name: 'Standard Shipping', price: 4.99, days: '3-5' },
  { id: 'express', name: 'Express Shipping', price: 9.99, days: '1-2' },
  { id: 'free', name: 'Free Shipping', price: 0, days: '5-7' }
];

const Checkout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialProductId = searchParams.get('product') || 'premium';
  
  const [productId, setProductId] = useState(initialProductId);
  const [checkoutStep, setCheckoutStep] = useState('product'); // 'product', 'shipping', 'payment', 'confirmation'
  
  const product = products[productId] || products.premium;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    quantity: 1,
    billingCycle: 'monthly',
    shipping: 'standard'
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }));
    } else if (action === 'decrease' && formData.quantity > 1) {
      setFormData(prev => ({ ...prev, quantity: prev.quantity - 1 }));
    }
  };
  
  const handleContinue = () => {
    if (checkoutStep === 'product') {
      setCheckoutStep('shipping');
    } else if (checkoutStep === 'shipping') {
      setCheckoutStep('payment');
    } else if (checkoutStep === 'payment') {
      // Simulate processing payment
      toast({
        title: "Processing Order",
        description: "Your order is being processed. Please wait a moment.",
      });
      
      setTimeout(() => {
        setCheckoutStep('confirmation');
      }, 1500);
    }
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    if (checkoutStep === 'shipping') {
      setCheckoutStep('product');
    } else if (checkoutStep === 'payment') {
      setCheckoutStep('shipping');
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Calculate totals
  const selectedShipping = shippingOptions.find(option => option.id === formData.shipping) || shippingOptions[0];
  const sensorTotal = product.sensorPrice * formData.quantity;
  const monthlyTotal = product.monthlyPrice;
  const shippingTotal = selectedShipping.price;
  const todayTotal = sensorTotal + shippingTotal;
  
  const renderProductStep = () => (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="md:sticky md:top-10 self-start">
          <div className="bg-tenbeo/5 p-10 rounded-xl flex items-center justify-center">
            <img 
              src="/public/lovable-uploads/17d92135-806a-4456-a110-c6b0c23b1816.png" 
              alt="Tenbeo Heartbeat Sensor" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Tenbeo Heartbeat Sensor</h1>
          <p className="text-lg text-muted-foreground mb-4">{product.description}</p>
          
          <div className="flex items-center mb-6">
            <div className="text-3xl font-bold">{product.sensorPrice}€</div>
            <span className="text-muted-foreground ml-2">One-time purchase</span>
          </div>
          
          <div className="mb-6">
            <div className="text-lg font-medium mb-2">Monthly Subscription</div>
            <div className="flex items-center">
              <div className="text-2xl font-bold">{product.monthlyPrice}€</div>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            {product.freeMonths > 0 && (
              <div className="mt-1 text-tenbeo-light font-medium">
                First {product.freeMonths} {product.freeMonths === 1 ? "month" : "months"} free
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <div className="text-lg font-medium mb-2">Choose your plan</div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setProductId('earlybird')}
                className={`relative p-3 border-2 rounded-md ${productId === 'earlybird' 
                  ? 'border-tenbeo bg-tenbeo/10' 
                  : 'border-border hover:border-muted-foreground'}`}
              >
                <div className="text-sm font-medium">Early Bird</div>
                <div className="text-xs text-muted-foreground">80€ - 3 months free</div>
                {productId === 'earlybird' && (
                  <Check className="absolute top-2 right-2 h-4 w-4 text-tenbeo" />
                )}
                {products.earlybird.spotsLeft > 0 && (
                  <div className="mt-1 text-xs text-amber-500">
                    {products.earlybird.spotsLeft}/{products.earlybird.totalSpots} spots left
                  </div>
                )}
              </button>
              
              <button 
                onClick={() => setProductId('premium')}
                className={`relative p-3 border-2 rounded-md ${productId === 'premium' 
                  ? 'border-tenbeo bg-tenbeo/10' 
                  : 'border-border hover:border-muted-foreground'}`}
              >
                <div className="text-sm font-medium">Premium</div>
                <div className="text-xs text-muted-foreground">100€ - 1 month free</div>
                {productId === 'premium' && (
                  <Check className="absolute top-2 right-2 h-4 w-4 text-tenbeo" />
                )}
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="text-lg font-medium mb-2">Quantity</div>
            <div className="flex items-center">
              <Button 
                onClick={() => handleQuantityChange('decrease')} 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full"
                disabled={formData.quantity <= 1}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="mx-4 min-w-10 text-center">{formData.quantity}</span>
              <Button 
                onClick={() => handleQuantityChange('increase')} 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
          
          <div className="glassmorphism p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span>Sensor ({formData.quantity})</span>
              <span>{sensorTotal.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Monthly subscription (after free period)</span>
              <span>{monthlyTotal.toFixed(2)}€/month</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t border-border">
              <span>Total Today</span>
              <span>{sensorTotal.toFixed(2)}€</span>
            </div>
          </div>
          
          <Button 
            onClick={handleContinue} 
            className="w-full bg-tenbeo hover:bg-tenbeo-dark text-white"
          >
            Continue to Shipping
          </Button>
          
          <div className="mt-4 flex items-center text-sm text-muted-foreground">
            <Shield className="h-4 w-4 mr-2" />
            <span>Secure transaction. 30-day money back guarantee.</span>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Product Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glassmorphism p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">What's Included</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-tenbeo-light mt-0.5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Why Choose Tenbeo</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tenbeo-light mt-0.5 mr-2 flex-shrink-0" />
                <span>Unbreakable biometric authentication</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tenbeo-light mt-0.5 mr-2 flex-shrink-0" />
                <span>Your data never leaves your device</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tenbeo-light mt-0.5 mr-2 flex-shrink-0" />
                <span>Unique heart signature can't be spoofed</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tenbeo-light mt-0.5 mr-2 flex-shrink-0" />
                <span>Easy setup within minutes</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-tenbeo-light mt-0.5 mr-2 flex-shrink-0" />
                <span>Compatible with major browsers and apps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderShippingStep = () => (
    <div className="container mx-auto px-4 py-8">
      <button onClick={handleBack} className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Product
      </button>
      
      <h1 className="text-3xl font-bold mb-8">Shipping & Delivery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <div className="glassmorphism p-6 rounded-xl mb-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium mb-1">ZIP Code</label>
                  <Input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                <Select 
                  name="country" 
                  value={formData.country} 
                  onValueChange={(value) => handleSelectChange('country', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">United States</SelectItem>
                    <SelectItem value="CA">Canada</SelectItem>
                    <SelectItem value="UK">United Kingdom</SelectItem>
                    <SelectItem value="AU">Australia</SelectItem>
                    <SelectItem value="JP">Japan</SelectItem>
                    <SelectItem value="DE">Germany</SelectItem>
                    <SelectItem value="FR">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
            <RadioGroup 
              value={formData.shipping}
              onValueChange={(value) => handleSelectChange('shipping', value)}
              className="space-y-3"
            >
              {shippingOptions.map((option) => (
                <div key={option.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-secondary/10">
                  <div className="flex items-center">
                    <RadioGroupItem value={option.id} id={option.id} className="mr-3" />
                    <div>
                      <label htmlFor={option.id} className="text-sm font-medium cursor-pointer">
                        {option.name}
                      </label>
                      <p className="text-xs text-muted-foreground">
                        {option.days} business days
                      </p>
                    </div>
                  </div>
                  <div className="font-medium">
                    {option.price === 0 ? "FREE" : `${option.price.toFixed(2)}€`}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
        
        <div className="md:col-span-4">
          <div className="glassmorphism p-6 rounded-xl sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-tenbeo/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-tenbeo flex items-center justify-center">
                  <span className="animate-heartbeat inline-block w-5 h-5 rounded-full bg-tenbeo-light"></span>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Tenbeo Heartbeat Sensor</h3>
                <p className="text-sm text-muted-foreground">{product.title} Package</p>
                <p className="text-sm">Qty: {formData.quantity}</p>
              </div>
            </div>
            
            <div className="border-t border-border pt-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Sensor ({formData.quantity})</span>
                <span>{sensorTotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Shipping</span>
                <span>{selectedShipping.price.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subscription (after free period)</span>
                <span>{monthlyTotal.toFixed(2)}€/month</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total Today</span>
                <span>{todayTotal.toFixed(2)}€</span>
              </div>
            </div>
            
            <Button 
              onClick={handleContinue} 
              className="w-full bg-tenbeo hover:bg-tenbeo-dark text-white"
            >
              Continue to Payment
            </Button>
            
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Shield className="h-4 w-4 mr-2" />
              <span>Secure transaction. 30-day money back guarantee.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderPaymentStep = () => (
    <div className="container mx-auto px-4 py-8">
      <button onClick={handleBack} className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shipping
      </button>
      
      <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <div className="glassmorphism p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                <div className="relative">
                  <Input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="pl-10"
                  />
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cardExpiry" className="block text-sm font-medium mb-1">Expiry Date</label>
                  <Input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cardCvc" className="block text-sm font-medium mb-1">CVC</label>
                  <Input
                    type="text"
                    id="cardCvc"
                    name="cardCvc"
                    placeholder="123"
                    value={formData.cardCvc}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 py-2">
                <Shield className="h-4 w-4 text-tenbeo-light" />
                <span className="text-sm text-muted-foreground">Your payment information is secure and encrypted</span>
              </div>
            </form>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl mt-6">
            <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
            <div className="flex items-start mb-4">
              <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-1" />
              <div>
                <p>{formData.name}</p>
                <p>{formData.address}</p>
                <p>{formData.city}, {formData.zipCode}</p>
                <p>{formData.country}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Truck className="h-5 w-5 text-muted-foreground mr-2 mt-1" />
              <div>
                <p className="font-medium">
                  {shippingOptions.find(option => option.id === formData.shipping)?.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Estimated delivery: {shippingOptions.find(option => option.id === formData.shipping)?.days} business days
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-4">
          <div className="glassmorphism p-6 rounded-xl sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-tenbeo/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-tenbeo flex items-center justify-center">
                  <span className="animate-heartbeat inline-block w-5 h-5 rounded-full bg-tenbeo-light"></span>
                </div>
              </div>
              <div>
                <h3 className="font-medium">Tenbeo Heartbeat Sensor</h3>
                <p className="text-sm text-muted-foreground">{product.title} Package</p>
                <p className="text-sm">Qty: {formData.quantity}</p>
              </div>
            </div>
            
            <div className="border-t border-border pt-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Sensor ({formData.quantity})</span>
                <span>{sensorTotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Shipping</span>
                <span>{selectedShipping.price.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subscription (after free period)</span>
                <span>{monthlyTotal.toFixed(2)}€/month</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total Today</span>
                <span>{todayTotal.toFixed(2)}€</span>
              </div>
            </div>
            
            <Button 
              onClick={handleContinue} 
              className="w-full bg-tenbeo hover:bg-tenbeo-dark text-white"
            >
              Place Your Order
            </Button>
            
            <div className="mt-4 text-sm text-muted-foreground">
              <p>By placing your order, you agree to Tenbeo's privacy policy and terms of service.</p>
              <div className="flex items-center mt-2">
                <Shield className="h-4 w-4 mr-2" />
                <span>Secure transaction. 30-day money back guarantee.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderConfirmationStep = () => (
    <div className="container mx-auto px-4 py-16 text-center max-w-3xl">
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full bg-tenbeo/10 flex items-center justify-center">
          <Heart className="h-12 w-12 text-tenbeo animate-heartbeat" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
      
      <div className="glassmorphism p-8 rounded-xl mb-8">
        <p className="text-xl mb-6">
          Your {formData.quantity} Tenbeo {formData.quantity === 1 ? 'sensor' : 'sensors'} will be shipped within 2-3 business days.
        </p>
        
        <div className="text-left mb-6 inline-block">
          <h3 className="font-semibold mb-2">Order Details:</h3>
          <ul className="space-y-2">
            <li><span className="text-muted-foreground">Product:</span> Tenbeo Heartbeat Sensor ({product.title})</li>
            <li><span className="text-muted-foreground">Quantity:</span> {formData.quantity}</li>
            <li><span className="text-muted-foreground">Shipping:</span> {shippingOptions.find(option => option.id === formData.shipping)?.name}</li>
            <li><span className="text-muted-foreground">Total Paid:</span> {todayTotal.toFixed(2)}€</li>
          </ul>
        </div>
        
        <div className="flex items-center justify-center space-x-2 mb-4 text-tenbeo-light">
          <Check className="h-5 w-5" />
          <span>Your subscription will start after your {product.freeMonths} {product.freeMonths === 1 ? 'month' : 'months'} free trial.</span>
        </div>
        
        <p className="text-muted-foreground">
          A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
        </p>
      </div>
      
      <Button
        onClick={() => navigate('/')}
        className="bg-tenbeo hover:bg-tenbeo-dark text-white px-8"
      >
        Return to Home
      </Button>
    </div>
  );
  
  // Render the appropriate step
  if (checkoutStep === 'product') {
    return renderProductStep();
  } else if (checkoutStep === 'shipping') {
    return renderShippingStep();
  } else if (checkoutStep === 'payment') {
    return renderPaymentStep();
  } else {
    return renderConfirmationStep();
  }
};

export default Checkout;
