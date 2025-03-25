
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Heart, Brain, Lock, Mail } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const steps = [
  {
    id: 'step1',
    title: 'Create Your Heart Signature',
    icon: Heart,
    description: 'Place your thumb on the Tenbeo sensor to record your unique electrocardiogram (ECG) pattern. This takes just 30 seconds and only needs to be done once.',
    details: 'The Tenbeo sensor captures the electrical signals from your heart, creating a unique profile based on the specific way your heart beats. This signature is impossible to replicate and is determined by your unique cardiac anatomy.',
    color: 'from-rose-500 to-tenbeo'
  },
  {
    id: 'step2',
    title: 'Train Your AI Model',
    icon: Brain,
    description: 'Our proprietary AI analyzes your heartbeat pattern and creates a secure mathematical model that represents your unique cardiac signature.',
    details: 'The AI uses advanced machine learning algorithms to identify the distinct features of your ECG pattern. This model is then stored securely on your device, not in the cloud, ensuring your biometric data remains private.',
    color: 'from-amber-500 to-tenbeo'
  },
  {
    id: 'step3',
    title: 'Authenticate with Tenbeo',
    icon: Lock,
    description: 'When you need to log in to a website or app, simply place your thumb on the sensor. The browser extension verifies it\'s really you in under a second.',
    details: 'The Tenbeo browser extension compares your live heartbeat with your stored signature. Authentication is instant and requires no passwords or security keys, just you and your unique heart pattern.',
    color: 'from-emerald-500 to-tenbeo'
  },
  {
    id: 'step4',
    title: 'Encrypt Emails Securely',
    icon: Mail,
    description: 'Send emails that can only be decrypted by the recipient\'s heartbeat, ensuring that only the intended person can access sensitive information.',
    details: 'The Tenbeo extension encrypts your emails using the recipient\'s public key. The recipient can only decrypt the message after authenticating with their heartbeat, providing unparalleled security for sensitive communications.',
    color: 'from-blue-500 to-tenbeo'
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState('step1');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    // Auto-cycle through tabs when the section is visible
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      if (!isScrollingRef.current) {
        setActiveStep(prevStep => {
          const currentIndex = steps.findIndex(step => step.id === prevStep);
          const nextIndex = (currentIndex + 1) % steps.length;
          return steps[nextIndex].id;
        });
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  // Throttled scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      isScrollingRef.current = true;
      
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = window.setTimeout(() => {
        if (!sectionRef.current || !isVisible) {
          isScrollingRef.current = false;
          return;
        }
        
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (top <= windowHeight && top > -height) {
          const scrollProgress = Math.min(1, Math.max(0, (windowHeight - top) / (windowHeight + height)));
          const stepIndex = Math.min(steps.length - 1, Math.floor(scrollProgress * steps.length));
          setActiveStep(steps[stepIndex].id);
        }
        
        isScrollingRef.current = false;
      }, 100); // Throttle to 100ms
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  const currentStep = steps.find(step => step.id === activeStep) || steps[0];
  const currentStepIndex = steps.findIndex(step => step.id === activeStep);
  const progressValue = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <section id="how-it-works" ref={sectionRef} className="section-container relative overflow-hidden bg-gradient-to-b from-black to-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,19,203,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-12 text-center">
          <span className="inline-block text-sm font-medium text-tenbeo-light mb-3 tracking-wider">SIMPLE TO USE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How Tenbeo Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure authentication in four simple steps, using the most unique identifier you possess — your heartbeat.
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          {/* Visual representation of current step */}
          <div className={cn(
            "w-32 h-32 mb-8 rounded-full flex items-center justify-center bg-gradient-to-br p-[2px]",
            `${currentStep.color}`,
            isVisible ? "animate-scale-in" : "opacity-0"
          )}>
            <div className="bg-card w-full h-full rounded-full flex items-center justify-center">
              <currentStep.icon className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Horizontal Tabs */}
        <Tabs 
          value={activeStep} 
          onValueChange={setActiveStep}
          className="w-full max-w-3xl mx-auto flex flex-col"
        >
          <div className="flex flex-col space-y-6 mb-8 w-full">
            {/* Progress Bar */}
            <div className="w-full px-4">
              <Progress value={progressValue} className="h-2" 
                // Custom styling for the progress indicator
                style={{
                  background: "rgba(87, 19, 203, 0.2)"
                }}
              />
            </div>
            
            {/* Tab Buttons */}
            <TabsList className="w-full grid grid-cols-4 h-auto py-2">
              {steps.map((step, index) => (
                <TabsTrigger 
                  key={step.id} 
                  value={step.id}
                  className={cn(
                    "flex flex-col items-center gap-2 py-4 data-[state=active]:bg-tenbeo/20",
                    "transition-all duration-300 relative",
                    { "text-tenbeo": step.id === activeStep },
                    { "bg-tenbeo/10": index <= currentStepIndex }
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    `bg-gradient-to-br ${step.color}`,
                    { "ring-2 ring-tenbeo ring-offset-2 ring-offset-background": step.id === activeStep }
                  )}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium line-clamp-2 px-1 text-center">
                    {step.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                  
                  {/* Add number indicator for the step */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-tenbeo text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content */}
          <div className="glassmorphism rounded-xl p-8 transition-all duration-500 min-h-[300px] mt-6">
            {steps.map((step) => (
              <TabsContent 
                key={step.id} 
                value={step.id}
                className={cn(
                  "space-y-6 focus-visible:outline-none focus-visible:ring-0",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  {step.title}
                </h3>
                
                <p className="text-xl text-center text-muted-foreground mb-8">
                  {step.description}
                </p>

                <div className="w-full p-6 rounded-lg bg-tenbeo/5 border border-tenbeo/20">
                  <p className="text-muted-foreground">
                    {step.details}
                  </p>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;
