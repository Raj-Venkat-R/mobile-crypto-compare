import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, MemoryStick, Battery, TrendingDown, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-crypto.jpg";

const Home = () => {
  const comparisonData = [
    {
      metric: "Key Size",
      ecc: "256-bit",
      rsa: "3072-bit",
      advantage: "ecc"
    },
    {
      metric: "Encryption Speed",
      ecc: "Fast",
      rsa: "Slower",
      advantage: "ecc"
    },
    {
      metric: "Memory Usage",
      ecc: "Low",
      rsa: "High",
      advantage: "ecc"
    },
    {
      metric: "Battery Impact",
      ecc: "Minimal",
      rsa: "Significant",
      advantage: "ecc"
    },
    {
      metric: "Security Level",
      ecc: "128-bit equivalent",
      rsa: "128-bit equivalent",
      advantage: "equal"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <img 
          src={heroImage} 
          alt="Cryptography visualization" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              ECC vs RSA Efficiency Analyzer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Compare cryptographic performance for mobile devices and make informed security decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/analyzer">
                  Try Analyzer <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-lg">
                <Link to="/background">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Cryptographic Efficiency Matters on Mobile
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mobile devices have unique constraints that make the choice of cryptographic algorithms crucial. 
              Understanding the trade-offs between ECC and RSA helps developers build secure, performant applications 
              that don't drain battery or compromise user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Processing Speed</h3>
              <p className="text-muted-foreground">
                Faster encryption and decryption operations
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MemoryStick className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Memory Efficiency</h3>
              <p className="text-muted-foreground">
                Lower RAM usage for cryptographic operations
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Battery className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Battery Life</h3>
              <p className="text-muted-foreground">
                Reduced power consumption extends device usage
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Strong Security</h3>
              <p className="text-muted-foreground">
                Maintain high security with smaller key sizes
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Quick Comparison Overview
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Side-by-side comparison of ECC and RSA for equivalent security levels
            </p>

            <Card className="overflow-hidden shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-hero">
                    <tr>
                      <th className="px-6 py-4 text-left text-primary-foreground font-semibold">Metric</th>
                      <th className="px-6 py-4 text-center text-primary-foreground font-semibold">ECC</th>
                      <th className="px-6 py-4 text-center text-primary-foreground font-semibold">RSA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 font-medium">{row.metric}</td>
                        <td className={`px-6 py-4 text-center ${row.advantage === 'ecc' ? 'bg-accent/10 font-semibold' : ''}`}>
                          {row.ecc}
                          {row.advantage === 'ecc' && <CheckCircle2 className="inline ml-2 h-4 w-4 text-accent" />}
                        </td>
                        <td className={`px-6 py-4 text-center ${row.advantage === 'rsa' ? 'bg-accent/10 font-semibold' : ''}`}>
                          {row.rsa}
                          {row.advantage === 'rsa' && <CheckCircle2 className="inline ml-2 h-4 w-4 text-accent" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Want to see detailed performance metrics for your specific use case?
              </p>
              <Button asChild size="lg">
                <Link to="/analyzer">
                  Run Custom Analysis <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center shadow-card-hover bg-gradient-card">
            <TrendingDown className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Mobile Cryptography?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use our interactive analyzer to compare ECC and RSA performance metrics, 
              understand the technical background, and learn best practices for secure mobile development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/analyzer">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/best-practices">View Best Practices</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
