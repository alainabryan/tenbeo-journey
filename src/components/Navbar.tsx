
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'technology', label: 'Technology' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQs' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background based on scroll
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Determine active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      // Add hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        sectionElements.unshift({ id: 'hero', element: heroSection });
      }

      // Find the section that is currently in view
      const currentSection = sectionElements.find(section => {
        const rect = section.element?.getBoundingClientRect();
        return rect && rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-3 glassmorphism shadow-md" : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo - Left aligned */}
        <a 
          href="#hero" 
          className="text-2xl font-bold text-foreground flex items-center group"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          <img 
            src="/lovable-uploads/896fc80b-1af9-4e22-9117-ccf475bfa0c0.png" 
            alt="Tenbeo" 
            className="h-8 mr-2 transition-transform group-hover:scale-105" 
          />
        </a>
        
        {/* Navigation - Centered */}
        <div className="hidden md:flex space-x-1 bg-card/80 backdrop-blur-sm rounded-full px-2 py-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "nav-item transition-all duration-300",
                activeSection === section.id ? "active" : ""
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
            >
              {section.label}
            </a>
          ))}
        </div>
        
        {/* Pre-order button - Right aligned */}
        <Link to="/checkout" className="hidden md:block">
          <Button 
            className="bg-tenbeo hover:bg-tenbeo-dark text-white font-medium px-6 py-2"
          >
            Pre-order Now
          </Button>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md bg-card/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glassmorphism mt-2 mx-4 rounded-xl p-4 border border-white/10">
          <div className="flex flex-col space-y-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  activeSection === section.id ? "bg-tenbeo/20 text-white" : "text-muted-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                {section.label}
              </a>
            ))}
            <Link 
              to="/checkout"
              className="mt-2 px-4 py-2 bg-tenbeo text-white rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pre-order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
