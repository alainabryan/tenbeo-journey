
import { Shield, Server, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const EnterpriseSection = () => {
  return (
    <section id="enterprise" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,19,203,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block text-sm font-medium text-tenbeo-light mb-3 tracking-wider">ENTERPRISE SOLUTIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Your Business</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored security solutions for organizations of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Transform Your Workplace Security</h3>
            <p className="text-lg mb-6">
              Tenbeo Enterprise revolutionizes workplace authentication, replacing traditional password systems with seamless biometric security that's impossible to compromise.
            </p>
            <p className="text-lg mb-6">
              Our enterprise solution eliminates credential-based vulnerabilities while enhancing employee productivity through lightning-fast logins — no more forgotten passwords or time-consuming resets.
            </p>
            <p className="text-lg">
              With custom SSO integration and dedicated support, Tenbeo Enterprise provides a scalable security framework that grows with your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glassmorphism">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Shield className="h-12 w-12 text-tenbeo-light" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Enhanced Security</h4>
                <p className="text-muted-foreground">
                  Military-grade biometric authentication that eliminates password vulnerabilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Server className="h-12 w-12 text-tenbeo-light" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Custom Integration</h4>
                <p className="text-muted-foreground">
                  Seamless integration with your existing systems, including SSO solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Users className="h-12 w-12 text-tenbeo-light" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Productivity Boost</h4>
                <p className="text-muted-foreground">
                  Eliminate password resets and streamline authentication for all employees.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Building className="h-12 w-12 text-tenbeo-light" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Scalable Solution</h4>
                <p className="text-muted-foreground">
                  Grows with your organization, from small teams to large enterprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button size="lg" className="bg-tenbeo hover:bg-tenbeo-dark text-white px-8">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
