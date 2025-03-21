
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Calabeo from './Calabeo';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [userCount, setUserCount] = useState(1535);
  const [authCount, setAuthCount] = useState(28616);
  const isMobile = useIsMobile();
  
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
      </div>
      
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-8">
        {/* Left column with main text and stats */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Authenticate<br />
            with your<br />
            <span className="text-tenbeo">heart</span>
            <span className="inline-block ml-4 w-16 h-16 rounded-full bg-tenbeo/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-tenbeo/40 animate-pulse"></div>
            </span>
          </h1>
          
          {/* Stats at the bottom left */}
          <div className="mt-20 space-y-6">
            <div className="px-6 py-4 rounded-2xl bg-black/20 backdrop-blur-sm w-64">
              <p className="text-sm text-muted-foreground">Number of Users</p>
              <p className="text-3xl font-bold text-tenbeo">{userCount.toLocaleString()}</p>
            </div>
            
            <div className="px-6 py-4 rounded-2xl bg-black/20 backdrop-blur-sm w-64">
              <p className="text-sm text-muted-foreground">Total Encryptions</p>
              <p className="text-3xl font-bold text-tenbeo">{authCount.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        {/* Center column with Calabeo */}
        <div className="relative mx-auto my-10 md:my-0">
          <Calabeo size={isMobile ? "lg" : "xl"} variant="spiral" className="z-10" />
        </div>
        
        {/* Right column with feature cards */}
        <div className="w-full md:w-1/3 space-y-4 flex flex-col">
          {/* Feature Cards */}
          <div className="p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-tenbeo/20">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-tenbeo/10 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-tenbeo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Private</h3>
            </div>
            <p className="text-muted-foreground">Your data never leaves your device</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-tenbeo/20">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-tenbeo/10 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-tenbeo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Productivity Boost</h3>
            </div>
            <p className="text-muted-foreground">Eliminate password resets and streamline authentication for all employees</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-tenbeo/20">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-tenbeo/10 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-tenbeo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Security First</h3>
            </div>
            <p className="text-muted-foreground">Enhanced security with biometric authentication that can't be stolen</p>
          </div>
          
          {/* Pre-order now available with pulsedot outside */}
          <div className="mt-auto flex items-center justify-end gap-4 h-10">
            {/* Pulsedot */}
            <div className="h-10 w-10 rounded-full bg-tenbeo/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-tenbeo/40 animate-pulse"></div>
            </div>
            
            {/* Now available button */}
            <div className="h-10 px-6 rounded-full border border-tenbeo bg-transparent flex items-center">
              <span className="text-sm font-medium">Pre-order now available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
