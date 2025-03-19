
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-16 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo column - takes up more space */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="flex flex-col">
              <img 
                src="/lovable-uploads/896fc80b-1af9-4e22-9117-ccf475bfa0c0.png" 
                alt="Tenbeo" 
                className="h-auto max-w-xs mb-4" 
              />
              <p className="text-muted-foreground text-[11px] xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base mb-1">
                Tenbeo is revolutionizing digital security with heartbeat-based biometric authentication.
              </p>
              <p className="text-muted-foreground text-[11px] xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base">
                Our mission is to create a more secure digital world, one heartbeat at a time.
              </p>
            </div>
          </div>
          
          {/* Company column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          {/* Resources column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>
        
        {/* Hidden heartbeat animation that can be revealed elsewhere */}
        <div className="hidden">
          <div className="w-12 h-12 rounded-full bg-tenbeo/10 flex items-center justify-center">
            <span className="animate-heartbeat inline-block w-6 h-6 rounded-full bg-tenbeo/40"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
