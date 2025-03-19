
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Heart, Brain, Lock, Mail } from 'lucide-react';

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const currentStep = steps.find(step => step.id === activeStep) || steps[0];

  return (
    <section id="how-it-works" className="section-container relative overflow-hidden bg-gradient-to-b from-black to-background">
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

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 glassmorphism rounded-xl p-6 flex flex-col">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Process Steps</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Select a step to see the details of how Tenbeo's heartbeat authentication works.
              </p>
            </div>

            <div className="space-y-2 flex-grow">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3",
                    activeStep === step.id
                      ? "bg-tenbeo/20 text-white"
                      : "hover:bg-tenbeo/10 text-muted-foreground"
                  )}
                >
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-white",
                    `bg-gradient-to-br ${step.color}`
                  )}>
                    {index + 1}
                  </div>
                  <span>{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-2/3 glassmorphism rounded-xl p-8 flex flex-col items-center transition-all duration-500">
            <div className={cn(
              "w-32 h-32 mb-8 rounded-full flex items-center justify-center bg-gradient-to-br p-[2px]",
              `${currentStep.color}`,
              isVisible ? "animate-scale-in" : "opacity-0"
            )}>
              <div className="bg-card w-full h-full rounded-full flex items-center justify-center">
                <currentStep.icon className="w-16 h-16 text-white" />
              </div>
            </div>

            <h3 className={cn(
              "text-2xl md:text-3xl font-bold mb-4 text-center",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}>
              {currentStep.title}
            </h3>

            <p className={cn(
              "text-xl text-center text-muted-foreground mb-8",
              isVisible ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '0.2s' }}>
              {currentStep.description}
            </p>

            <div className={cn(
              "w-full p-6 rounded-lg bg-tenbeo/5 border border-tenbeo/20",
              isVisible ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '0.4s' }}>
              <p className="text-muted-foreground">
                {currentStep.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
