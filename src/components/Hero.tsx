
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Calabeo from './Calabeo';
import { useIsMobile } from '@/hooks/use-mobile';
import { Lock, Fingerprint, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const [userCount, setUserCount] = useState(1535);
  const [authCount, setAuthCount] = useState(28616);
  const isMobile = useIsMobile();
  
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
      </div>
      
      <div className="container relative z-10 flex flex-col items-center justify-between px-4 md:px-8">
        {/* Calabeo placed in background on mobile, positioned absolutely */}
        <div className={`${isMobile ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 -z-10' : 'relative order-2 my-10 md:my-0'}`}>
          <Calabeo size={isMobile ? "xl" : "xl"} variant="spiro" className="z-0" />
        </div>
        
        <div className="w-full md:flex md:flex-row justify-between items-start gap-6 z-10">
          {/* Left column */}
          <div className="w-full md:w-1/3 flex flex-col items-start mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Authenticate<br />
              with your<br />
              <span className="text-tenbeo">heart</span>
              <span className="inline-block ml-4 w-16 h-16 rounded-full bg-tenbeo/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-tenbeo/40 animate-pulse"></div>
              </span>
            </h1>
            
            <div className="mt-10 space-y-4">
              <div className="px-6 py-4 rounded-2xl bg-black/50 backdrop-blur-sm w-64">
                <p className="text-sm text-muted-foreground">Number of Users</p>
                <p className="text-3xl font-bold text-tenbeo">{userCount.toLocaleString()}</p>
              </div>
              
              <div className="px-6 py-4 rounded-2xl bg-black/50 backdrop-blur-sm w-64">
                <p className="text-sm text-muted-foreground">Total Encryptions</p>
                <p className="text-3xl font-bold text-tenbeo">{authCount.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          {/* Right column - feature boxes */}
          <div className="w-full md:w-1/3 space-y-4 flex flex-col">
            <div className="p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-tenbeo/20">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-tenbeo/10 flex items-center justify-center mr-3">
                  <Lock className="w-5 h-5 text-tenbeo" />
                </div>
                <h3 className="text-xl font-bold">Private</h3>
              </div>
              <p className="text-muted-foreground">Your data never leaves your device</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-tenbeo/20">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-tenbeo/10 flex items-center justify-center mr-3">
                  <Fingerprint className="w-5 h-5 text-tenbeo" />
                </div>
                <h3 className="text-xl font-bold">Unique</h3>
              </div>
              <p className="text-muted-foreground">Authentication as individual as your heartbeat</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-tenbeo/20">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-tenbeo/10 flex items-center justify-center mr-3">
                  <ShieldCheck className="w-5 h-5 text-tenbeo" />
                </div>
                <h3 className="text-xl font-bold">Secure</h3>
              </div>
              <p className="text-muted-foreground">Biometric authentication that can't be stolen</p>
            </div>
            
            <div className="mt-auto flex items-center justify-end gap-4 h-10">
              <div className="h-10 w-10 rounded-full bg-tenbeo/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-tenbeo/40 animate-pulse"></div>
              </div>
              
              <div className="h-10 px-6 rounded-full border border-tenbeo bg-transparent flex items-center">
                <span className="text-sm font-medium">Pre-order now available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
