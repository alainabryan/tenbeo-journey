
import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Sparkles } from 'lucide-react';
import Calabeo from './Calabeo';

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [calabeoRotation, setCalabeoRotation] = useState(0);
  const [visibleSection, setVisibleSection] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  // Define sections with shorter, more impactful quotes
  const sections = [
    {
      title: "For the Future-Oriented",
      description: "Defining tomorrow's security standards today.",
      icon: <Sparkles className="w-8 h-8 text-tenbeo-light" />,
      highlight: "Join the pioneers of next-generation authentication"
    },
    {
      title: "For the Security-Minded",
      description: "Protection beyond passwords, secured by your heartbeat.",
      icon: <Shield className="w-8 h-8 text-tenbeo-light" />,
      highlight: "Unbreakable security from your unique cardiac signature"
    },
    {
      title: "For the Privacy-Focused",
      description: "Your biometric data never leaves your device.",
      icon: <Lock className="w-8 h-8 text-tenbeo-light" />,
      highlight: "Total control over your most personal identifier"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position relative to top of page
      const scrollY = window.scrollY;
      
      if (!aboutRef.current) return;
      
      const { top, height } = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only start rotation after scrolling past the hero section
      if (top <= windowHeight) {
        // Calculate how far we've scrolled into the section
        const scrolled = Math.max(0, -top / (height - windowHeight));
        setScrollPosition(scrolled);
        
        // Rotate Calabeo based on scroll (0 to 270 degrees)
        const rotation = scrolled * 270;
        setCalabeoRotation(rotation);
        
        // Determine which text section should be visible (0, 1, or 2)
        const sectionIndex = Math.min(2, Math.floor(scrolled * 3));
        setVisibleSection(sectionIndex);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize values
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="relative bg-gradient-to-b from-background to-black"
      style={{ height: '300vh' }} // Three times viewport height for scrolling
    >
      {/* Fixed position container for the Calabeo - this will keep it centered on screen */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-full h-screen flex items-center justify-center">
        {/* Background glow */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,19,203,0.15),transparent_70%)]"></div>
        </div>
        
        {/* Calabeo that rotates with scroll */}
        <div 
          className="relative z-0"
          style={{ transform: `rotate(${calabeoRotation}deg)` }}
        >
          <Calabeo size="xl" variant="spiro" animated={true} />
        </div>
      </div>
      
      {/* Content sections - these will scroll past the fixed Calabeo */}
      <div className="relative z-10">
        {/* Spacer to push content down so first section appears after Calabeo is visible */}
        <div style={{ height: '100vh' }}></div>
        
        {/* Content sections positioned at specific scroll points */}
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`sticky top-0 h-screen w-full flex items-center justify-center transition-opacity duration-700 ${
              visibleSection === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: 10 }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-tenbeo/10 backdrop-blur-sm">
                    {section.icon}
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  {section.title}
                </h2>
                
                <p className="text-2xl md:text-3xl leading-tight font-semibold mb-8 text-white">
                  {section.description}
                </p>
                
                <div className="glassmorphism rounded-xl p-6 border-l-4 border-tenbeo-light inline-block text-left">
                  <p className="text-xl font-medium text-tenbeo">
                    {section.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll progress indicators */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-2 z-20">
        {[0, 1, 2].map((index) => (
          <div 
            key={index}
            className={`w-1 h-12 rounded-full transition-all duration-300 ${
              visibleSection === index 
                ? 'bg-tenbeo opacity-100' 
                : 'bg-gray-500 opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
