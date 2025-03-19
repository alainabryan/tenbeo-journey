import { Layers, Cpu, Fingerprint, Braces, Bluetooth, Battery, Heart, Activity, Waves, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const Technology = () => {
  return (
    <section id="technology" className="section-container blueprint-bg relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(87,19,203,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16">
          <span className="inline-block text-sm font-medium text-tenbeo-light mb-3 tracking-wider">ADVANCED TECHNOLOGY</span>
          <h2 className="section-title">The Science Behind Tenbeo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mt-6">
            Our technology leverages the most advanced biometric science and machine learning to create an authentication system based on your unique cardiac pattern.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in">
            <div className="relative z-10 border-2 border-tenbeo/30 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-tenbeo/5 to-tenbeo/10"></div>
              <div className="relative z-10 p-6">
                <h3 className="text-center font-light text-xl text-tenbeo-light mb-8">WELLUE DUOEK ECG SENSOR</h3>
                
                {/* Main blueprint container */}
                <div className="relative rounded-lg overflow-hidden">
                  {/* Blueprint background grid */}
                  <div className="absolute inset-0 blueprint-bg opacity-80"></div>
                  
                  {/* Main content area */}
                  <div className="relative z-10 p-8 flex flex-col items-center">
                    {/* Sensor visualization */}
                    <div className="relative w-full max-w-md mx-auto">
                      {/* Photo-realistic ECG device with purple color scheme */}
                      <div className="relative w-full h-64 flex items-center justify-center">
                        {/* Main ECG device image - with purple color styling */}
                        <svg className="w-full h-full" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
                          {/* Background glow effect */}
                          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                          
                          {/* Device body */}
                          <g transform="rotate(-15, 200, 125)">
                            {/* Purple glow around device */}
                            <ellipse cx="200" cy="125" rx="110" ry="55" fill="rgba(141, 82, 233, 0.15)" filter="url(#glow)" />
                            
                            {/* Main body of the ECG device */}
                            <ellipse cx="200" cy="125" rx="100" ry="50" fill="url(#deviceGradient)" />
                            <defs>
                              <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3E0C94" />
                                <stop offset="50%" stopColor="#5713CB" />
                                <stop offset="100%" stopColor="#8D52E9" />
                              </linearGradient>
                            </defs>
                            
                            {/* Sensor pad top */}
                            <ellipse cx="200" cy="85" rx="45" ry="25" fill="#2A0864" stroke="#8D52E9" strokeWidth="1" />
                            
                            {/* Sensor pad bottom */}
                            <ellipse cx="200" cy="165" rx="45" ry="25" fill="#2A0864" stroke="#8D52E9" strokeWidth="1" />
                            
                            {/* Center display screen */}
                            <ellipse cx="200" cy="125" rx="25" ry="20" fill="#121212" stroke="#A87DF0" strokeWidth="1" />
                            
                            {/* ECG line on display */}
                            <path d="M 180 125 L 185 125 L 190 115 L 195 135 L 200 125 L 205 125 L 210 125 L 215 125 L 220 125" 
                                  stroke="#A87DF0" strokeWidth="1.5" fill="none" />
                            
                            {/* Button left */}
                            <circle cx="155" cy="125" r="8" fill="#2A0864" stroke="#8D52E9" strokeWidth="1" />
                            
                            {/* Button right */}
                            <circle cx="245" cy="125" r="8" fill="#2A0864" stroke="#8D52E9" strokeWidth="1" />
                            
                            {/* Power indicator */}
                            <circle cx="170" cy="105" r="3" fill="#A87DF0">
                              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                            </circle>
                            
                            {/* Reflections */}
                            <ellipse cx="170" cy="105" rx="80" ry="10" fill="rgba(255, 255, 255, 0.1)" transform="rotate(-15, 170, 105)" />
                            <ellipse cx="230" cy="145" rx="70" ry="8" fill="rgba(0, 0, 0, 0.2)" transform="rotate(-15, 230, 145)" />
                            
                            {/* Brand logo */}
                            <circle cx="265" cy="115" r="10" fill="#5713CB" stroke="#A87DF0" strokeWidth="1" />
                            <text x="265" y="119" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">W</text>
                          </g>
                        </svg>
                      </div>
                      
                      {/* Feature callouts - keeping these as in the original */}
                      <div className="absolute -top-4 -right-4">
                        <div className="bg-[#0b0f1a]/80 border border-tenbeo-light/30 rounded-lg p-3">
                          <div className="text-xs text-tenbeo-light font-light mb-1">WIRELESS CONNECTIVITY</div>
                          <div className="flex items-center space-x-2">
                            <Bluetooth className="w-4 h-4 text-tenbeo-light" />
                            <span className="text-xs text-white/70">BLE 5.0</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute -top-4 -left-4">
                        <div className="bg-[#0b0f1a]/80 border border-tenbeo-light/30 rounded-lg p-3">
                          <div className="text-xs text-tenbeo-light font-light mb-1">BATTERY LIFE</div>
                          <div className="flex items-center space-x-2">
                            <Battery className="w-4 h-4 text-tenbeo-light" />
                            <span className="text-xs text-white/70">8+ HOURS</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#0b0f1a]/80 border border-tenbeo-light/30 rounded-lg p-3">
                          <div className="text-xs text-tenbeo-light font-light mb-1">ELECTRODE TECHNOLOGY</div>
                          <div className="flex items-center space-x-2">
                            <Heart className="w-4 h-4 text-tenbeo-light heartbeat-animation" />
                            <span className="text-xs text-white/70">DUAL CONTACT POINTS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Feature explanations */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="bg-[#0b0f1a]/60 border border-tenbeo-light/20 rounded-lg p-3 flex flex-col items-center">
                        <Waves className="w-6 h-6 text-tenbeo-light mb-2" />
                        <div className="text-xs text-center text-white/90">1-LEAD ECG<br/>250Hz SAMPLING</div>
                      </div>
                      
                      <div className="bg-[#0b0f1a]/60 border border-tenbeo-light/20 rounded-lg p-3 flex flex-col items-center">
                        <ShieldCheck className="w-6 h-6 text-tenbeo-light mb-2" />
                        <div className="text-xs text-center text-white/90">512-BIT<br/>ENCRYPTION</div>
                      </div>
                      
                      <div className="bg-[#0b0f1a]/60 border border-tenbeo-light/20 rounded-lg p-3 flex flex-col items-center">
                        <Cpu className="w-6 h-6 text-tenbeo-light mb-2" />
                        <div className="text-xs text-center text-white/90">AI-POWERED<br/>PROCESSING</div>
                      </div>
                    </div>
                    
                    {/* Key highlight */}
                    <div className="mt-8 bg-tenbeo/10 border border-tenbeo-light/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-tenbeo/20 p-2 rounded-lg">
                          <Fingerprint className="w-6 h-6 text-tenbeo-light" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-tenbeo-light mb-1">UNIQUE CARDIAC SIGNATURE</h4>
                          <p className="text-xs text-white/80">Each person's ECG pattern is as unique as a fingerprint, creating a biometric identifier that cannot be replicated or stolen.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-tenbeo/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-tenbeo/5 rounded-full blur-3xl z-0"></div>
          </div>

          <div className="space-y-8">
            <div className="glassmorphism p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tenbeo/10">
                  <Fingerprint className="w-6 h-6 text-tenbeo-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cardiac Biometrics</h3>
                  <p className="text-muted-foreground">
                    Your ECG pattern is determined by the unique physical characteristics of your heart, including size, position, and orientation. 
                    This creates a biometric signature that is impossible to duplicate.
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tenbeo/10">
                  <Cpu className="w-6 h-6 text-tenbeo-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Neural Processing</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI uses a proprietary deep learning algorithm to analyze 250+ features of your ECG waveform, 
                    creating a mathematical model unique to you with 99.98% accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tenbeo/10">
                  <Layers className="w-6 h-6 text-tenbeo-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Layer Security</h3>
                  <p className="text-muted-foreground">
                    Tenbeo combines your heartbeat signature with advanced cryptography to create a multi-layered security system 
                    that is resistant to all known forms of spoofing and replay attacks.
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tenbeo/10">
                  <Braces className="w-6 h-6 text-tenbeo-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Processing</h3>
                  <p className="text-muted-foreground">
                    All biometric processing happens on your local device. Your ECG data never leaves your computer, 
                    ensuring complete privacy and eliminating cloud-based vulnerability points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
