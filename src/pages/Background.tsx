import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Key, Cpu, Smartphone } from "lucide-react";

const Background = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Cryptography Background
            </h1>
            <p className="text-muted-foreground text-lg">
              Understanding ECC and RSA algorithms
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ecc">ECC</TabsTrigger>
              <TabsTrigger value="rsa">RSA</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Impact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="animate-fade-in">
              <Card className="p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-8 w-8 text-accent" />
                  <h2 className="text-3xl font-bold">Public Key Cryptography</h2>
                </div>
                
                <div className="prose prose-slate max-w-none space-y-6">
                  <p className="text-lg leading-relaxed">
                    Public key cryptography, also known as asymmetric cryptography, uses pairs of keys: 
                    public keys for encryption and private keys for decryption. This enables secure 
                    communication without sharing secret keys.
                  </p>

                  <div className="bg-muted p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">Why Efficiency Matters on Mobile</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Limited Processing Power:</strong> Mobile devices have less computational capacity than servers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Battery Constraints:</strong> Cryptographic operations consume significant power</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Memory Limitations:</strong> Mobile devices have restricted RAM and storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Network Bandwidth:</strong> Smaller key sizes reduce data transmission overhead</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    The choice between ECC and RSA significantly impacts mobile application performance, 
                    user experience, and device longevity. Understanding these trade-offs is crucial for 
                    developers building secure mobile applications.
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="ecc" className="animate-fade-in">
              <Card className="p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Key className="h-8 w-8 text-secondary" />
                  <h2 className="text-3xl font-bold">Elliptic Curve Cryptography (ECC)</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    ECC is based on the algebraic structure of elliptic curves over finite fields. 
                    It provides the same level of security as RSA with significantly smaller key sizes.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-secondary">Advantages</h3>
                      <ul className="space-y-2">
                        <li>✓ Smaller key sizes</li>
                        <li>✓ Faster computations</li>
                        <li>✓ Lower power consumption</li>
                        <li>✓ Reduced bandwidth requirements</li>
                        <li>✓ Less memory usage</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-destructive">Disadvantages</h3>
                      <ul className="space-y-2">
                        <li>✗ More complex mathematics</li>
                        <li>✗ Newer technology (less tested)</li>
                        <li>✗ Patent concerns (historically)</li>
                        <li>✗ Fewer implementations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Security Equivalence</h3>
                    <p className="mb-3">ECC key sizes compared to RSA for equivalent security:</p>
                    <ul className="space-y-2">
                      <li>• ECC 256-bit ≈ RSA 3072-bit</li>
                      <li>• ECC 384-bit ≈ RSA 7680-bit</li>
                      <li>• ECC 521-bit ≈ RSA 15360-bit</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="rsa" className="animate-fade-in">
              <Card className="p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">RSA Cryptography</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    RSA (Rivest–Shamir–Adleman) is one of the first public-key cryptosystems. 
                    Its security is based on the practical difficulty of factoring the product of two large prime numbers.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-secondary">Advantages</h3>
                      <ul className="space-y-2">
                        <li>✓ Well-established and tested</li>
                        <li>✓ Widely supported</li>
                        <li>✓ Simple mathematical foundation</li>
                        <li>✓ No patent restrictions</li>
                        <li>✓ Extensive documentation</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-destructive">Disadvantages</h3>
                      <ul className="space-y-2">
                        <li>✗ Large key sizes required</li>
                        <li>✗ Slower computations</li>
                        <li>✗ Higher power consumption</li>
                        <li>✗ More bandwidth needed</li>
                        <li>✗ Greater memory requirements</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Common RSA Key Sizes</h3>
                    <ul className="space-y-3">
                      <li>
                        <strong>1024-bit:</strong> Deprecated - no longer considered secure
                      </li>
                      <li>
                        <strong>2048-bit:</strong> Current minimum recommendation for most applications
                      </li>
                      <li>
                        <strong>4096-bit:</strong> High security applications, but significant performance impact
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="animate-fade-in">
              <Card className="p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="h-8 w-8 text-chart-1" />
                  <h2 className="text-3xl font-bold">Mobile Cryptography Considerations</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Mobile devices present unique challenges for cryptographic operations due to their 
                    resource constraints and usage patterns.
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-6 py-3">
                      <h3 className="font-semibold text-lg mb-2">Processing Power</h3>
                      <p className="text-muted-foreground">
                        Mobile processors are optimized for battery life, not raw performance. 
                        ECC operations complete 5-10x faster than equivalent RSA operations on mobile CPUs.
                      </p>
                    </div>

                    <div className="border-l-4 border-secondary pl-6 py-3">
                      <h3 className="font-semibold text-lg mb-2">Battery Life</h3>
                      <p className="text-muted-foreground">
                        Cryptographic operations directly impact battery consumption. ECC's smaller key 
                        sizes and faster operations result in 40-60% less battery drain compared to RSA.
                      </p>
                    </div>

                    <div className="border-l-4 border-chart-3 pl-6 py-3">
                      <h3 className="font-semibold text-lg mb-2">Memory Constraints</h3>
                      <p className="text-muted-foreground">
                        Mobile apps must share limited RAM. ECC requires significantly less memory for 
                        key storage and cryptographic operations.
                      </p>
                    </div>

                    <div className="border-l-4 border-chart-4 pl-6 py-3">
                      <h3 className="font-semibold text-lg mb-2">Network Efficiency</h3>
                      <p className="text-muted-foreground">
                        Smaller ECC keys reduce the amount of data transmitted during handshakes and 
                        certificate exchanges, improving performance on mobile networks.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-card p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-xl mb-4">Recommendation for Mobile</h3>
                    <p className="text-lg">
                      For most mobile applications, <strong className="text-secondary">ECC is the preferred choice</strong> due 
                      to its superior efficiency profile. Modern mobile operating systems (iOS, Android) 
                      provide robust ECC implementations, and the technology is now mature and widely adopted.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Background;
