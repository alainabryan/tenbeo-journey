
import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Sparkles } from 'lucide-react';
import Calabeo from './Calabeo';

const About = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [calabeoRotation, setCalabeoRotation] = useState(0);
  const [visibleSection, setVisibleSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Define sections outside of render for cleaner code
  const sections = [
    {
      title: "For the Future-Oriented",
      description: "You're not just keeping up with technology—you're defining its trajectory. As a pioneer in digital authentication, you understand that true innovation isn't about incremental improvements, but paradigm shifts. Your heartbeat encryption doesn't just make you an early adopter; it makes you part of the vanguard reshaping the future of security.",
      icon: <Sparkles className="w-8 h-8 text-tenbeo-light" />,
      highlight: "Join the pioneers of next-generation security"
    },
    {
      title: "For the Security-Minded",
      description: "In a world of escalating digital threats, you recognize that conventional safeguards are increasingly vulnerable. Your approach to security isn't reactionary—it's revolutionary. With cryptographic protection derived from your unique cardiac signature, you're establishing an unprecedented level of defense that transcends traditional authentication methods.",
      icon: <Shield className="w-8 h-8 text-tenbeo-light" />,
      highlight: "Unbreakable security based on your unique biological signature"
    },
    {
      title: "For the Privacy-Focused",
      description: "You believe that maintaining control over your personal data isn't just a preference—it's a principle. With Tenbeo, your biometric information never leaves your device. Your heartbeat remains yours alone, processed locally and protected absolutely, ensuring that your most intimate identifier stays exactly where it belongs: with you.",
      icon: <Lock className="w-8 h-8 text-tenbeo-light" />,
      highlight: "Your data stays on your device—always"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionElement = sectionRef.current;
      const { top, height } = sectionElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll percentage through the entire section (0 to 1)
      const scrollableDistance = height - viewportHeight;
      const scrolledAmount = Math.max(0, -top);
      const percentage = Math.min(1, scrolledAmount / scrollableDistance);
      
      setScrollPercentage(percentage);
      
      // Set rotation based on scroll percentage (0 to 270 degrees)
      const newRotation = percentage * 270;
      setCalabeoRotation(newRotation);
      
      // Determine which section should be visible (0, 1, or 2)
      // Each section takes up 1/3 of the scroll range
      const newVisibleSection = Math.min(2, Math.floor(percentage * 3));
      setVisibleSection(newVisibleSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize values
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-background to-black"
      style={{ height: '300vh' }} // Three times viewport height for scrolling
    >
      {/* Background container - fixed position */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Background glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,19,203,0.15),transparent_70%)]"></div>
        </div>
        
        {/* Calabeo that rotates - on the background layer */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-0"
          style={{ transform: `rotate(${calabeoRotation}deg)` }}
        >
          <Calabeo size="xl" variant="spiro" animated={true} />
        </div>
        
        {/* Content sections - positioned vertically one after another */}
        <div className="relative z-10 container mx-auto px-4">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`transition-opacity duration-700 max-w-3xl mx-auto text-center ${
                visibleSection === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-tenbeo/10 backdrop-blur-sm">
                  {section.icon}
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                {section.title}
              </h2>
              
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8">
                {section.description}
              </p>
              
              <div className="glassmorphism rounded-xl p-6 border-l-4 border-tenbeo-light inline-block text-left">
                <p className="text-xl font-medium text-tenbeo">
                  {section.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll progress indicators instead of breadcrumbs */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col space-y-2 z-20">
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
      </div>
    </section>
  );
};

export default About;
