
import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Sparkles } from 'lucide-react';
import Calabeo from './Calabeo';

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [calabeoRotation, setCalabeoRotation] = useState(0);
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
      
      // Calculate percentage scrolled through the entire section
      // Adjust the calculation to account for viewport height
      const totalScrollableHeight = height - viewportHeight;
      const scrolledPast = -top;
      const scrollPercentage = Math.max(0, Math.min(1, scrolledPast / totalScrollableHeight));
      
      // Calculate which of the 3 sections is visible (0, 1, or 2)
      const newSection = Math.min(
        2,
        Math.max(0, Math.floor(scrollPercentage * 3))
      );
      
      // Calculate rotation angle (0 to 270 degrees - 90 degrees per section)
      const newRotation = scrollPercentage * 270;
      
      setCalabeoRotation(newRotation);
      setCurrentSection(newSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-background to-black"
      // Set a height that's 3x the viewport height to ensure enough scrollable content
      style={{ height: '300vh' }}
    >
      {/* Sticky container that stays fixed in viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,19,203,0.15),transparent_70%)]"></div>
        </div>
        
        {/* Centered Calabeo that rotates */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
          style={{ transform: `rotate(${calabeoRotation}deg)` }}
        >
          <Calabeo size="xl" variant="spiro" animated={true} />
        </div>
        
        {/* Content container - this holds all sections */}
        <div className="container relative z-10 mx-auto px-4">
          {/* We render all sections, but only show the current one */}
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`max-w-3xl mx-auto text-center transition-opacity duration-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                currentSection === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
        
        {/* Progress indicator dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {[0, 1, 2].map((dot) => (
            <div 
              key={dot}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === dot 
                  ? 'bg-tenbeo scale-125' 
                  : 'bg-gray-500 scale-100'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
