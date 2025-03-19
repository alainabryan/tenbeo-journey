
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-16 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo column - takes up more space */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/0ed14a87-1ccd-43b5-a0eb-e996c57f32b7.png" 
                alt="Tenbeo" 
                className="h-24" 
              />
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
