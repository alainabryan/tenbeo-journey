
import { useEffect, useState } from 'react';
import { ArrowDown, Heart, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [userCount, setUserCount] = useState(1530);
  const [authCount, setAuthCount] = useState(28490);
  
  // Simulate updating statistics
  useEffect(() => {
    const userInterval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    const authInterval = setInterval(() => {
      setAuthCount(prev => prev + Math.floor(Math.random() * 10));
    }, 1000);
    
    return () => {
      clearInterval(userInterval);
      clearInterval(authInterval);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(87,19,203,0.15),transparent_70%)]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tenbeo/5 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-tenbeo/10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10 flex flex-col items-center px-4 md:px-8">
        <div className="text-center mb-8">
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tenbeo-light to-tenbeo">TENBEO</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto">
            Authenticate with your unique heartbeat signature
          </p>
        </div>
        
        {/* Calabeo Visualization - Central Element */}
        <div className="w-full max-w-2xl aspect-square relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-tenbeo-dark/20 to-tenbeo-light/20 rounded-full blur-3xl opacity-30"></div>
          <img 
            src="/lovable-uploads/4ae18c97-f220-4a36-82c7-34d563cfb97b.png" 
            alt="Calabeo Heartbeat Visualization" 
            className="w-full h-full object-contain animate-float"
          />
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-tenbeo/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-tenbeo/40 animate-heartbeat"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Unhackable</h3>
            <p className="text-sm text-muted-foreground">Your heartbeat can't be stolen</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-tenbeo/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-tenbeo/40 animate-heartbeat"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Private</h3>
            <p className="text-sm text-muted-foreground">Your data never leaves your device</p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-tenbeo/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-tenbeo/40 animate-heartbeat"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Unique</h3>
            <p className="text-sm text-muted-foreground">Every heart has its own signature</p>
          </div>
        </div>
        
        <div className="flex gap-6 mb-12">
          <Link to="/checkout" className="inline-block">
            <Button size="lg" className="bg-tenbeo hover:bg-tenbeo-dark text-white font-medium px-8">
              Pre-order Now
            </Button>
          </Link>
          
          <div className="flex items-center justify-center h-12 px-8 rounded-full border border-tenbeo bg-background hover:bg-accent hover:text-accent-foreground">
            <HeartPulse className="mr-2 text-tenbeo animate-pulse-slow" />
            <span>Pre-order now available</span>
          </div>
        </div>
        
        <div className="flex gap-16 my-4 glassmorphism px-8 py-4 rounded-full">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Users</p>
            <p className="text-2xl font-bold text-tenbeo animate-pulse-slow">{userCount.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Authentications</p>
            <p className="text-2xl font-bold text-tenbeo animate-pulse-slow">{authCount.toLocaleString()}</p>
          </div>
        </div>
        
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-float text-muted-foreground hover:text-foreground transition-colors mt-8"
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
