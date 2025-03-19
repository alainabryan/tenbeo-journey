
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
              <div className="absolute inset-0 bg-tenbeo/5"></div>
              <div className="relative z-10 p-1">
                <div className="bg-tenbeo/10 p-8 rounded-lg">
                  {/* Wellue DuoEK ECG Sensor Blueprint */}
                  <div className="relative w-full aspect-square bg-[#0b0f1a] rounded-lg overflow-hidden">
                    {/* Blueprint grid lines */}
                    <div className="absolute inset-0 blueprint-bg"></div>
                    
                    {/* Sensor outline */}
                    <div className="absolute inset-8 border-2 border-tenbeo-light/50 rounded-lg flex items-center justify-center">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-2 py-1 bg-[#0b0f1a] text-tenbeo-light text-xs">
                        WELLUE DUOEK ECG SENSOR
                      </div>
                      
                      {/* Main sensor body */}
                      <div className="w-3/4 h-1/2 bg-tenbeo/10 border border-tenbeo-light/40 rounded-lg relative">
                        {/* Screen area */}
                        <div className="absolute top-4 left-4 right-4 h-8 border border-tenbeo-light/60 rounded bg-tenbeo/5">
                          <div className="h-full flex items-center justify-center">
                            <Waves className="w-20 h-4 text-tenbeo-light/70" />
                          </div>
                          <div className="absolute -top-2 left-2 px-1 bg-[#0b0f1a] text-[10px] text-tenbeo-light/70">Display</div>
                        </div>
                        
                        {/* Sensor electrodes */}
                        <div className="absolute -bottom-6 left-1/4 w-8 h-8 rounded-full border-2 border-tenbeo-light/60 bg-tenbeo/20 flex items-center justify-center">
                          <Heart className="w-4 h-4 text-tenbeo-light heartbeat-animation" />
                          <div className="absolute -top-5 -left-4 text-[10px] text-tenbeo-light/70">Electrode 1</div>
                        </div>
                        
                        <div className="absolute -bottom-6 right-1/4 w-8 h-8 rounded-full border-2 border-tenbeo-light/60 bg-tenbeo/20 flex items-center justify-center">
                          <Heart className="w-4 h-4 text-tenbeo-light heartbeat-animation" />
                          <div className="absolute -top-5 -right-4 text-[10px] text-tenbeo-light/70">Electrode 2</div>
                        </div>
                        
                        {/* Controls */}
                        <div className="absolute top-16 left-4 right-4 h-6 flex justify-center space-x-8">
                          <div className="w-6 h-6 rounded-full border border-tenbeo-light/60 bg-tenbeo/10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-tenbeo-light/70"></div>
                            <div className="absolute -bottom-4 text-[10px] text-tenbeo-light/70">Power</div>
                          </div>
                          
                          <div className="w-6 h-6 rounded-full border border-tenbeo-light/60 bg-tenbeo/10 flex items-center justify-center">
                            <Bluetooth className="w-3 h-3 text-tenbeo-light/70" />
                            <div className="absolute -bottom-4 text-[10px] text-tenbeo-light/70">Sync</div>
                          </div>
                        </div>
                        
                        {/* Battery indicator */}
                        <div className="absolute top-3 right-3 flex items-center">
                          <Battery className="w-4 h-4 text-tenbeo-light/70" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Connection labels and arrows */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {/* Processor to electrodes connection */}
                      <path d="M 50% 60% L 30% 80%" stroke="rgba(141, 82, 233, 0.5)" strokeWidth="1" strokeDasharray="4 2" fill="none" />
                      <path d="M 50% 60% L 70% 80%" stroke="rgba(141, 82, 233, 0.5)" strokeWidth="1" strokeDasharray="4 2" fill="none" />
                      
                      {/* Bluetooth to cloud connection */}
                      <path d="M 55% 45% L 85% 25%" stroke="rgba(141, 82, 233, 0.5)" strokeWidth="1" strokeDasharray="4 2" fill="none" />
                    </svg>
                    
                    {/* Technical specifications */}
                    <div className="absolute top-2 right-2 w-32 h-24 border border-tenbeo-light/30 bg-[#0b0f1a]/80 p-2 rounded-sm">
                      <div className="text-[10px] text-tenbeo-light/80 font-mono space-y-1">
                        <div>• 1-lead ECG</div>
                        <div>• 250Hz sampling</div>
                        <div>• 512-bit encryption</div>
                        <div>• 8hr battery life</div>
                        <div>• BLE 5.0 protocol</div>
                      </div>
                    </div>
                    
                    {/* AI Processing Unit */}
                    <div className="absolute bottom-2 right-2 w-32 h-18 border border-tenbeo-light/30 bg-[#0b0f1a]/80 p-1 rounded-sm">
                      <div className="text-[8px] text-tenbeo-light/70 text-center mb-1">AI PROCESSING UNIT</div>
                      <div className="flex justify-center">
                        <Cpu className="w-5 h-5 text-tenbeo-light" />
                      </div>
                    </div>
                    
                    {/* Security module */}
                    <div className="absolute bottom-2 left-2 w-32 h-18 border border-tenbeo-light/30 bg-[#0b0f1a]/80 p-1 rounded-sm">
                      <div className="text-[8px] text-tenbeo-light/70 text-center mb-1">SECURITY MODULE</div>
                      <div className="flex justify-center">
                        <ShieldCheck className="w-5 h-5 text-tenbeo-light" />
                      </div>
                    </div>
                    
                    {/* Measurement indicators */}
                    <div className="absolute top-2 left-2 w-40 h-24 border border-tenbeo-light/30 bg-[#0b0f1a]/80 p-2 rounded-sm">
                      <div className="text-[8px] text-tenbeo-light/70 mb-1">BIOMETRIC SIGNATURES</div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Activity className="w-3 h-3 text-tenbeo-light" />
                        <div className="text-[8px] text-tenbeo-light/80">P-QRS-T Morphology</div>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Activity className="w-3 h-3 text-tenbeo-light" />
                        <div className="text-[8px] text-tenbeo-light/80">R-R Interval Analysis</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Activity className="w-3 h-3 text-tenbeo-light" />
                        <div className="text-[8px] text-tenbeo-light/80">250+ Feature Points</div>
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
