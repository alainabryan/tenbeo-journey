
import { cn } from '@/lib/utils';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-16 bg-gradient-to-b from-background to-tenbeo-darker/30 border-t border-border overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-tenbeo/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-tenbeo/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo column - takes up more space */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="flex flex-col">
              <img src="/lovable-uploads/896fc80b-1af9-4e22-9117-ccf475bfa0c0.png" alt="Tenbeo" className="h-auto max-w-[180px] mb-4" />
              <p className="text-muted-foreground text-sm mb-6 max-w-md">
                Revolutionizing digital security with heartbeat-based biometric authentication.
              </p>
              
              <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-tenbeo-light" />
                  <span>contact@tenbeo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-tenbeo-light" />
                  <span>+1 (800) TENBEO</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-tenbeo-light" />
                  <span>123 Heartbeat Plaza, San Francisco, CA</span>
                </div>
              </div>
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
        
        <div className="pt-12 mt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tenbeo Inc. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground mr-2">Made with</span>
            <Heart className="w-4 h-4 text-tenbeo animate-heartbeat" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
