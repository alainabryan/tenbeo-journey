
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
            {/* Stylized marketing-oriented blueprint of the Wellue DuoEK ECG sensor */}
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
                      {/* The sensor device */}
                      <div className="relative bg-white/5 backdrop-blur-sm border border-tenbeo-light/20 rounded-3xl p-6 mb-12">
                        {/* Main device body */}
                        <div className="relative bg-white/10 rounded-3xl p-4 flex flex-col items-center">
                          {/* Top section with logo */}
                          <div className="w-16 h-16 rounded-full bg-white/10 border border-tenbeo-light/30 mb-4 flex items-center justify-center">
                            <div className="text-2xl font-bold text-tenbeo-light">R</div>
                          </div>
                          
                          {/* Display screen */}
                          <div className="w-full h-16 bg-black/40 rounded-xl mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Activity className="w-32 h-8 text-tenbeo-light opacity-70" />
                            </div>
                            {/* Connection line to ECG Reading feature */}
                            <div className="absolute top-1/2 right-0 w-16 h-px bg-tenbeo-light/40"></div>
                          </div>
                          
                          {/* Control buttons */}
                          <div className="flex justify-around w-full mb-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 border border-tenbeo-light/30 flex items-center justify-center">
                              <div className="text-sm font-light text-tenbeo-light">+</div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/10 border border-tenbeo-light/30 flex items-center justify-center">
                              <div className="text-sm font-light text-tenbeo-light">-</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 70% 20% L 90% 10%" stroke="rgba(141, 82, 233, 0.4)" strokeWidth="1" strokeDasharray="3 2" fill="none" />
                          <path d="M 30% 20% L 10% 10%" stroke="rgba(141, 82, 233, 0.4)" strokeWidth="1" strokeDasharray="3 2" fill="none" />
                          <path d="M 50% 80% L 50% 100%" stroke="rgba(141, 82, 233, 0.4)" strokeWidth="1" strokeDasharray="3 2" fill="none" />
                        </svg>
                        
                        {/* Feature callouts */}
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
