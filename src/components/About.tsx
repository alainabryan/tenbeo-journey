
import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Sparkles } from 'lucide-react';
import Calabeo from './Calabeo';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [calabeoRotation, setCalabeoRotation] = useState(0);
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
      if (!aboutRef.current) return;
      
      // Get scroll position relative to aboutRef
      const { top, height } = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only start rotation after scrolling past the hero section
      if (top <= windowHeight) {
        // Calculate how far we've scrolled into the section (0 to 1)
        const scrolled = Math.max(0, Math.min(1, (windowHeight - top) / height));
        setScrollPosition(scrolled);
        
        // Rotate Calabeo based on scroll (0 to 270 degrees)
        const rotation = scrolled * 270;
        setCalabeoRotation(rotation);
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
    >
      {/* Fixed position container for the Calabeo - this will stay centered on screen during scroll */}
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
          <Calabeo size="xl" variant="purple-wave" animated={true} />
        </div>
      </div>
      
      {/* Content sections - these will scroll past the fixed Calabeo */}
      <div className="relative z-10">
        {/* Spacer to push content down so first section appears after Calabeo is visible */}
        <div style={{ height: '40vh' }}></div>
        
        {/* Content sections positioned at specific scroll points */}
        {sections.map((section, index) => (
          <div 
            key={index}
            className="min-h-screen w-full flex items-center"
            style={{ 
              position: 'sticky',
              top: `${index * 20}vh`,
              zIndex: 10 
            }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl ml-0 md:ml-8 lg:ml-16">
                <div className="flex mb-6">
                  <div className="p-4 rounded-full bg-tenbeo/10 backdrop-blur-sm">
                    {section.icon}
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-left" 
                    style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}>
                  {section.description}
                </h2>
                
                <div className="glassmorphism rounded-xl p-6 border-l-4 border-tenbeo-light inline-block text-left mt-4">
                  <p className="text-xl font-medium text-white">
                    {section.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Divider to create clear separation between About and PreOrderCTA */}
        <div className="py-20 relative z-20">
          <div className="container mx-auto px-4">
            <Separator className="h-[2px] bg-tenbeo/20 w-full mx-auto max-w-2xl" />
          </div>
        </div>
        
        {/* Add extra space after the last section to prevent overlap with PreOrderCTA */}
        <div style={{ height: '30vh' }}></div>
      </div>
      
      {/* Scroll progress indicator dots */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-2 z-20">
        {[0, 1, 2].map((index) => {
          // Calculate if this dot should be active based on scroll position
          const isActive = scrollPosition >= index / 3 && scrollPosition <= (index + 1) / 3;
          return (
            <div 
              key={index}
              className={`w-1 h-12 rounded-full transition-all duration-300 ${
                isActive ? 'bg-tenbeo opacity-100' : 'bg-gray-500 opacity-50'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default About;
