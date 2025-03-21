
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const PricingCard = ({ 
  title, 
  sensorPrice,
  monthlyPrice,
  description, 
  features, 
  highlighted = false, 
  buttonText = "Pre-order now",
  unavailableFeatures = [],
  contactSales = false,
  productId = "",
  earlyBird = false,
  freeMonths = 0,
  spotsLeft = 0,
  totalSpots = 0
}) => {
  return (
    <div className={cn(
      "pricing-card flex flex-col h-full animate-fade-in relative bg-background/50 backdrop-blur-sm rounded-xl border border-border p-6 shadow-sm",
      highlighted && "border-tenbeo",
      earlyBird && "border-amber-300/50" // Using a less distracting yellow
    )}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tenbeo px-4 py-1 rounded-full text-white text-sm font-medium">
          Most Popular
        </div>
      )}
      
      {earlyBird && spotsLeft > 0 && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 px-4 py-1 rounded-full text-white text-sm font-medium z-10">
          Limited Offer: {spotsLeft}/{totalSpots} spots
        </div>
      )}
      
      <div className="mb-6 mt-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-end mb-2">
          <span className="text-4xl font-bold">{sensorPrice}€</span>
          <span className="text-muted-foreground ml-1 mb-1">one-time</span>
        </div>
        <div className="flex items-end">
          <span className="text-2xl font-bold">{monthlyPrice}€</span>
          <span className="text-muted-foreground ml-1 mb-1">/month</span>
        </div>
        {freeMonths > 0 && (
          <div className="mt-2 text-tenbeo-light font-medium">
            {freeMonths} {freeMonths === 1 ? "month" : "months"} free
          </div>
        )}
      </div>
      
      <div className="flex-grow mb-8">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-tenbeo-light mt-0.5 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          
          {unavailableFeatures.map((feature, index) => (
            <li key={index} className="flex items-start text-muted-foreground">
              <X className="w-5 h-5 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {contactSales ? (
        <Button 
          className={cn(
            "w-full",
            highlighted ? "bg-tenbeo hover:bg-tenbeo-dark text-white" : ""
          )}
        >
          {buttonText}
        </Button>
      ) : (
        <Link to={`/checkout?product=${productId}`} className="block w-full">
          <Button 
            className={cn(
              "w-full",
              highlighted ? "bg-tenbeo hover:bg-tenbeo-dark text-white" : "",
              earlyBird ? "bg-amber-500 hover:bg-amber-600 text-white" : ""
            )}
          >
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
};

const Pricing = () => {
  // State for early bird spots
  const [earlyBirdSpots, setEarlyBirdSpots] = useState({
    total: 100,
    remaining: 92 // Arbitrary number for demonstration
  });

  return (
    <section id="pricing" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(87,19,203,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block text-sm font-medium text-tenbeo-light mb-3 tracking-wider">PRICING PLANS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Security Level</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the plan that best fits your security needs, from individual users to enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Early Bird"
            sensorPrice={80} // 20% off 100€
            monthlyPrice={5.99}
            description="Limited time offer with special benefits"
            features={[
              "Tenbeo hardware sensor",
              "Browser extension",
              "Unlimited authentications",
              "Email verification",
              "Verify received emails",
              "Send humanity-verified emails",
              "Send and receive encrypted emails",
              "Support for up to 3 devices"
            ]}
            productId="earlybird"
            earlyBird={true}
            freeMonths={3}
            spotsLeft={earlyBirdSpots.remaining}
            totalSpots={earlyBirdSpots.total}
          />
          
          <PricingCard
            title="Standard"
            sensorPrice={90}
            monthlyPrice={3.99}
            description="Essential security for individual users"
            features={[
              "Tenbeo hardware sensor",
              "Browser extension",
              "Unlimited authentications",
              "Email verification",
              "Verify received emails",
              "Send humanity-verified emails",
              "Support for up to 2 devices"
            ]}
            unavailableFeatures={[
              "Send and receive encrypted emails"
            ]}
            productId="standard"
          />
          
          <PricingCard
            title="Premium"
            sensorPrice={100}
            monthlyPrice={5.99}
            description="Enhanced security for professionals and power users"
            features={[
              "Tenbeo hardware sensor",
              "Browser extension",
              "Unlimited authentications",
              "Email verification",
              "Verify received emails",
              "Send humanity-verified emails",
              "Send and receive encrypted emails",
              "Support for up to 3 devices"
            ]}
            highlighted={true}
            productId="premium"
            freeMonths={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
