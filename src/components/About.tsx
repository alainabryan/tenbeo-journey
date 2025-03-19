
import { Shield, Lock, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container relative overflow-hidden bg-gradient-to-b from-background to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(87,19,203,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="mb-10">
          <span className="inline-block text-sm font-medium text-tenbeo-light mb-3 tracking-wider">OUR MISSION</span>
          <h2 className="section-title">A new era of digital security</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground animate-fade-in">
              We built Tenbeo for a world where traditional security measures are no longer enough. 
              Passwords can be cracked. Phones can be stolen. Fingerprints can be replicated.
            </p>

            <p className="text-xl md:text-2xl font-semibold animate-fade-in" style={{ animationDelay: '0.3s' }}>
              But your heartbeat is <span className="text-tenbeo">uniquely yours</span>. It cannot be stolen, hacked, or duplicated.
            </p>

            <div className="glassmorphism rounded-xl p-6 border-l-4 border-tenbeo-light animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-lg italic">
                "We believe the future of security lies within ourselves — not in what we know or what we have, but in who we are at our core."
              </p>
              <p className="mt-2 text-muted-foreground">— Tenbeo Founding Team</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glassmorphism p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tenbeo/10">
                  <Shield className="w-6 h-6 text-tenbeo-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">For the security-minded</h3>
                  <p className="text-muted-foreground">You understand that digital security is only as strong as its weakest link. With Tenbeo, that link becomes unbreakable.</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tenbeo/10">
                  <Lock className="w-6 h-6 text-tenbeo-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">For the privacy-focused</h3>
                  <p className="text-muted-foreground">Your personal data should remain yours. Tenbeo processes your biometric data locally, never sending it to the cloud.</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tenbeo/10">
                  <Cpu className="w-6 h-6 text-tenbeo-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">For the future-oriented</h3>
                  <p className="text-muted-foreground">You embrace cutting-edge technology and understand that biometrics are the next frontier in authentication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
