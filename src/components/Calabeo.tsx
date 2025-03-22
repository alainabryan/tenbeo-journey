
import { useEffect, useRef, useState } from 'react';

interface CalabeoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
  variant?: 'purple' | 'gradient' | 'multicolor' | 'spiro' | 'vector' | 'spiral' | 'new-purple';
}

const Calabeo = ({ 
  size = 'md', 
  animated = true, 
  className = '',
  variant = 'purple'
}: CalabeoProps) => {
  const [currentVariant, setCurrentVariant] = useState(variant);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getSize = () => {
    switch(size) {
      case 'sm': return 'w-32 h-32';
      case 'md': return 'w-64 h-64';
      case 'lg': return 'w-96 h-96';
      case 'xl': return 'w-[32rem] h-[32rem]';
      default: return 'w-64 h-64';
    }
  };

  const getImage = () => {
    switch(currentVariant) {
      case 'purple': return '/lovable-uploads/6538196a-8eec-4579-a9b5-e02aa0fcc292.png';
      case 'gradient': return '/lovable-uploads/54ca9832-cba8-4b53-b564-690fc09f0414.png';
      case 'multicolor': return '/lovable-uploads/5aed3fda-aea9-413b-9c6b-d07277dea5e1.png';
      case 'spiro': return '/lovable-uploads/4ae18c97-f220-4a36-82c7-34d563cfb97b.png';
      case 'vector': return '/lovable-uploads/5967b6b5-022e-4268-9dca-002b78015cdc.png';
      case 'spiral': return '/lovable-uploads/da4504bd-15f8-44f8-8b45-9514c4314364.png';
      // Since we're having issues with the new-purple variant, let's default to the working purple one
      case 'new-purple': return '/lovable-uploads/6538196a-8eec-4579-a9b5-e02aa0fcc292.png';
      default: return '/lovable-uploads/6538196a-8eec-4579-a9b5-e02aa0fcc292.png';
    }
  };

  const handleImageError = () => {
    console.log(`Failed to load image for variant: ${currentVariant}`);
    if (currentVariant !== 'purple') {
      console.log('Falling back to purple variant');
      setCurrentVariant('purple');
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`relative ${getSize()} ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-tenbeo/40 to-tenbeo-light/40"></div>
      
      {/* Calabeo image */}
      <img 
        src={getImage()} 
        alt="Calabeo Heartbeat Visualization" 
        className={`w-full h-full object-contain ${animated ? 'animate-float' : ''}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      
      {/* Optional sparkle effects */}
      {animated && currentVariant !== 'vector' && currentVariant !== 'spiral' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-tenbeo-light animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-tenbeo animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-tenbeo-lighter animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        </>
      )}
    </div>
  );
};

export default Calabeo;
