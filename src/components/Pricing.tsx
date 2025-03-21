
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { plans, Plan } from '@/config/plans';

// PricingCard component accepts a Plan object and any overrides
const PricingCard = ({ 
  plan,
  spotsLeftOverride,
}: { 
  plan: Plan, 
  spotsLeftOverride?: number 
}) => {
  const {
    title,
    sensorPrice,
    monthlyPrice,
    description,
    features,
    highlighted = false,
    buttonText = "Pre-order now",
    unavailableFeatures = [],
    contactSales = false,
    id: productId = "",
    earlyBird = false,
    freeMonths = 0,
    spotsLeft = 0,
    totalSpots = 0
  } = plan;

  // Use the override value if provided
  const currentSpotsLeft = spotsLeftOverride !== undefined ? spotsLeftOverride : spotsLeft;

  return (
    <div className={cn(
      "pricing-card flex flex-col h-full animate-fade-in relative bg-background/50 backdrop-blur-sm rounded-xl border border-border p-6 shadow-sm",
      highlighted && "border-tenbeo",
      earlyBird && "border-amber-300/50" // Less distracting yellow
    )}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tenbeo px-4 py-1 rounded-full text-white text-sm font-medium">
          Most Popular
        </div>
      )}
      
      {earlyBird && currentSpotsLeft > 0 && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 px-4 py-1 rounded-full text-white text-sm font-medium z-10">
          {currentSpotsLeft}/{totalSpots} spots
        </div>
      )}
      
      <div className="mb-6 mt-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="mb-6">
        {sensorPrice && (
          <div className="flex items-end mb-2">
            <span className="text-4xl font-bold">{sensorPrice}€</span>
            <span className="text-muted-foreground ml-1 mb-1">one-time</span>
          </div>
        )}
        {monthlyPrice && (
          <div className="flex items-end">
            <span className="text-2xl font-bold">{monthlyPrice}€</span>
            <span className="text-muted-foreground ml-1 mb-1">/month</span>
          </div>
        )}
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
  // We now only track the number of spots remaining for early bird
  const earlyBirdSpotsRemaining = 92;

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
            plan={plans.earlybird} 
            spotsLeftOverride={earlyBirdSpotsRemaining} 
          />
          <PricingCard plan={plans.standard} />
          <PricingCard plan={plans.premium} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
