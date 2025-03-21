
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Heart, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = {
  standard: {
    title: "Standard",
    price: 99,
    description: "Perfect for individuals seeking secure authentication",
    features: [
      "Tenbeo hardware sensor",
      "Browser extension",
      "Unlimited authentications",
      "Email verification",
      "Biometric login to websites"
    ]
  },
  premium: {
    title: "Premium",
    price: 149,
    description: "Enhanced security for professionals and power users",
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

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product') || 'standard';
  const product = products[productId] || products.standard;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });
  
  const [stage, setStage] = useState('details'); // 'details', 'payment', 'confirmation'
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmitDetails = (e) => {
    e.preventDefault();
    setStage('payment');
  };
  
  const handleSubmitPayment = (e) => {
    e.preventDefault();
    // In a real application, you would process payment here
    setStage('confirmation');
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column - Order details */}
          <div className="md:col-span-7 lg:col-span-8">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            
            {stage === 'details' && (
              <div className="glassmorphism p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Your Information</h2>
                <form onSubmit={handleSubmitDetails}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-1">Shipping Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium mb-1">ZIP Code</label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="JP">Japan</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button type="submit" className="w-full bg-tenbeo hover:bg-tenbeo-dark text-white">
                      Continue to Payment
                    </Button>
                  </div>
                </form>
              </div>
            )}
            
            {stage === 'payment' && (
              <div className="glassmorphism p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <form onSubmit={handleSubmitPayment}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                        />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cardExpiry" className="block text-sm font-medium mb-1">Expiry Date</label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cardCvc" className="block text-sm font-medium mb-1">CVC</label>
                        <input
                          type="text"
                          id="cardCvc"
                          name="cardCvc"
                          placeholder="123"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-1 focus:ring-tenbeo focus:border-tenbeo outline-none transition"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 py-2">
                      <Shield className="h-4 w-4 text-tenbeo-light" />
                      <span className="text-sm text-muted-foreground">Your payment information is secure and encrypted</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Button type="submit" className="w-full bg-tenbeo hover:bg-tenbeo-dark text-white">
                      Complete Order
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setStage('details')}
                    >
                      Back to Personal Details
                    </Button>
                  </div>
                </form>
              </div>
            )}
            
            {stage === 'confirmation' && (
              <div className="glassmorphism p-6 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-tenbeo/10 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-tenbeo animate-heartbeat" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Thank You for Your Order!</h2>
                <p className="text-muted-foreground mb-6">Your Tenbeo device will be shipped within 2-3 business days.</p>
                <p className="mb-4">Order confirmation has been sent to <span className="font-semibold">{formData.email}</span></p>
                <div className="mt-6">
                  <Link to="/">
                    <Button className="bg-tenbeo hover:bg-tenbeo-dark text-white">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Right column - Order summary */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="glassmorphism p-6 rounded-xl sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 glassmorphism rounded-lg flex items-center justify-center bg-tenbeo/10">
                  <div className="w-8 h-8 rounded-full bg-tenbeo flex items-center justify-center">
                    <span className="animate-heartbeat inline-block w-4 h-4 rounded-full bg-tenbeo-light"></span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">{product.title} Package</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-tenbeo-light mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Your order will be shipped within 2-3 business days after payment confirmation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
