
import { useEffect, useState } from 'react';
import { ArrowDown, Heart, Lock, Shield } from 'lucide-react';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(87,19,203,0.15),transparent_70%)]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tenbeo/5 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-tenbeo/10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col items-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-tenbeo/10 border border-tenbeo/20 text-sm">
          <span className="text-tenbeo-light">Pre-order now available</span>
        </div>
        
        {/* Featured heartbeat animation */}
        <div className="mb-6 relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-tenbeo flex items-center justify-center">
            <span className="animate-heartbeat inline-block w-10 h-10 rounded-full bg-tenbeo-light"></span>
          </div>
          <div className="w-24 h-24 rounded-full bg-tenbeo/30 absolute -top-4 -left-4 animate-pulse-slow"></div>
          <div className="w-20 h-20 rounded-full bg-tenbeo/20 absolute -bottom-3 -right-3 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight tracking-tight">
          Authenticate with your <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-tenbeo-light to-tenbeo">heartbeat signature</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-tenbeo/20 -z-10 rounded-full transform translate-y-2"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-3xl mb-8 animate-fade-in">
          Tenbeo provides unbreakable biometric authentication using your unique cardiac pattern. 
          Secure, impossible to spoof, and completely private.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="glassmorphism p-6 rounded-xl text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-3">
              <Shield className="w-10 h-10 text-tenbeo" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unhackable</h3>
            <p className="text-muted-foreground">Your heartbeat can't be stolen or replicated</p>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center mb-3">
              <Lock className="w-10 h-10 text-tenbeo" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Private</h3>
            <p className="text-muted-foreground">Your data never leaves your device</p>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-center mb-3">
              <Heart className="w-10 h-10 text-tenbeo" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unique</h3>
            <p className="text-muted-foreground">Every heart has its own signature</p>
          </div>
        </div>
        
        <div className="flex gap-16 mt-4 mb-16 glassmorphism px-8 py-4 rounded-full">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Users</p>
            <p className="text-3xl font-bold text-tenbeo animate-pulse-slow">{userCount.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Authentications</p>
            <p className="text-3xl font-bold text-tenbeo animate-pulse-slow">{authCount.toLocaleString()}</p>
          </div>
        </div>
        
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-float text-muted-foreground hover:text-foreground transition-colors"
        >
          <div className="flex flex-col items-center">
            <span className="mb-2">Learn more</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
