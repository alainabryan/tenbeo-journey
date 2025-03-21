
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-4 glassmorphism shadow-md" : "py-6 bg-transparent"
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
        <div className="hidden md:flex space-x-1 bg-card/80 backdrop-blur-sm rounded-full px-2 py-1 mx-auto">
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
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
