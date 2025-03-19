
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false, 
  buttonText = "Pre-order now",
  unavailableFeatures = []
}) => {
  return (
    <div className={cn(
      "pricing-card flex flex-col h-full animate-fade-in",
      highlighted && "border-tenbeo"
    )}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tenbeo px-4 py-1 rounded-full text-white text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-end">
          <span className="text-4xl font-bold">${price}</span>
          {price > 0 && <span className="text-muted-foreground ml-1 mb-1">/device</span>}
        </div>
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
      
      <button className={cn(
        "w-full py-3 px-4 rounded-lg font-medium transition-all",
        highlighted 
          ? "bg-tenbeo hover:bg-tenbeo-dark text-white" 
          : "bg-secondary hover:bg-secondary/80 text-foreground"
      )}>
        {buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
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
            title="Standard"
            price={99}
            description="Perfect for individuals seeking secure authentication"
            features={[
              "Tenbeo hardware sensor",
              "Browser extension",
              "Unlimited authentications",
              "Email verification",
              "Biometric login to websites"
            ]}
            unavailableFeatures={[
              "Email encryption",
              "Multi-device support",
              "API access"
            ]}
          />
          
          <PricingCard
            title="Premium"
            price={149}
            description="Enhanced security for professionals and power users"
            features={[
              "Tenbeo hardware sensor",
              "Browser extension",
              "Unlimited authentications",
              "Email verification",
              "Biometric login to websites",
              "End-to-end email encryption",
              "Support for up to 3 devices"
            ]}
            unavailableFeatures={[
              "API access"
            ]}
            highlighted={true}
          />
          
          <PricingCard
            title="Enterprise"
            price={0}
            description="Custom security solutions for businesses of all sizes"
            features={[
              "Custom number of Tenbeo sensors",
              "Browser extension",
              "Unlimited authentications",
              "Email verification & encryption",
              "SSO integration",
              "API access for custom integration",
              "Dedicated account manager",
              "Employee onboarding support"
            ]}
            buttonText="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
