
import { Layers, Cpu, Fingerprint, Braces } from 'lucide-react';
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
                  {/* Blueprint-style sensor diagram */}
                  <div className="w-full aspect-square rounded-full border-2 border-tenbeo-light/50 relative flex items-center justify-center">
                    <div className="absolute w-3/4 h-3/4 rounded-full border border-tenbeo-light/30 flex items-center justify-center">
                      <div className="absolute w-1/2 h-1/2 rounded-full border border-tenbeo-light/30 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-tenbeo/30 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Sensor parts labels */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-tenbeo-light">Electrode Array</div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-tenbeo-light">Signal Processor</div>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-tenbeo-light">Neural Core</div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-tenbeo-light">Bio Sensor</div>
                    
                    {/* Connection lines */}
                    <div className="absolute w-full h-[1px] bg-tenbeo-light/30"></div>
                    <div className="absolute h-full w-[1px] bg-tenbeo-light/30"></div>
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
