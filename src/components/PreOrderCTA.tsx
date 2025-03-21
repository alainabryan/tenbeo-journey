
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Calabeo from './Calabeo';

interface PreOrderCTAProps {
  variant?: 'primary' | 'secondary';
  showHeartbeat?: boolean;
}

const PreOrderCTA = ({ variant = 'primary', showHeartbeat = true }: PreOrderCTAProps) => {
  return (
    <section className={cn(
      "py-20 relative overflow-hidden",
      variant === 'primary' 
        ? "bg-gradient-to-r from-tenbeo-darker to-tenbeo-dark" 
        : "glassmorphism bg-background/50"
    )}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tenbeo-light/10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-tenbeo-light/15 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Secure Your Tenbeo Device Today
          </h2>
          
          <p className="text-lg text-white/80 mb-6 max-w-xl">
            Be among the first to experience unbreakable authentication with your unique heartbeat signature. 
            Limited early-bird spots available with 6 months free subscription.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="inline-block w-3 h-3 rounded-full bg-tenbeo-light"></span>
              <span>Hardware sensor: 80€</span>
            </div>
            
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="inline-block w-3 h-3 rounded-full bg-tenbeo-light"></span>
              <span>Monthly subscription: 5.99€</span>
            </div>
            
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="inline-block w-3 h-3 rounded-full bg-tenbeo-light"></span>
              <span>6 months free</span>
            </div>
          </div>
          
          <Link to="/checkout?product=earlybird">
            <Button size="lg" className="bg-white hover:bg-white/90 text-tenbeo font-medium mt-2">
              Pre-order Now <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        {showHeartbeat && (
          <div className="md:w-1/2 flex justify-center">
            <Calabeo size="lg" variant={variant === 'primary' ? 'purple' : 'gradient'} />
          </div>
        )}
      </div>
    </section>
  );
};

export default PreOrderCTA;
