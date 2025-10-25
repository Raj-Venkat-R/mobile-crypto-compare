import { Card } from "@/components/ui/card";
import { ShieldCheck, Code, Lock, Zap, RefreshCw, Key } from "lucide-react";

const BestPractices = () => {
  const practices = [
    {
      icon: Key,
      title: "Use Appropriate Key Sizes",
      description: "Select key sizes that balance security and performance for your threat model.",
      recommendations: [
        "ECC: Minimum 256-bit for standard security, 384-bit for high security",
        "RSA: Minimum 2048-bit, 3072-bit for long-term protection",
        "Never use deprecated key sizes (RSA 1024-bit or smaller)",
        "Consider future security needs - keys should remain secure for data lifetime"
      ]
    },
    {
      icon: Lock,
      title: "Secure Key Management",
      description: "Protecting cryptographic keys is as important as the algorithms themselves.",
      recommendations: [
        "Store private keys in secure hardware elements (iOS Secure Enclave, Android Keystore)",
        "Never hardcode keys in application code",
        "Implement key rotation policies",
        "Use key derivation functions (KDF) for deriving keys from passwords",
        "Enable remote key revocation capabilities"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Leverage Platform Security Features",
      description: "Modern mobile platforms provide robust cryptographic APIs and hardware acceleration.",
      recommendations: [
        "Use platform-provided crypto libraries (CommonCrypto on iOS, Keystore on Android)",
        "Enable hardware acceleration when available",
        "Utilize secure biometric authentication",
        "Implement certificate pinning for network communications",
        "Use secure random number generators provided by the OS"
      ]
    },
    {
      icon: RefreshCw,
      title: "Keep Libraries Updated",
      description: "Cryptographic libraries evolve to address new vulnerabilities and improve performance.",
      recommendations: [
        "Regularly update cryptographic libraries and dependencies",
        "Monitor security advisories for your crypto stack",
        "Test updates in staging before production deployment",
        "Maintain backward compatibility during transitions",
        "Subscribe to security mailing lists for your crypto libraries"
      ]
    },
    {
      icon: Code,
      title: "Implementation Best Practices",
      description: "Proper implementation is crucial for maintaining security.",
      recommendations: [
        "Always validate certificates in TLS connections",
        "Use authenticated encryption (e.g., AES-GCM) for symmetric encryption",
        "Implement proper error handling without leaking sensitive information",
        "Use constant-time comparison for sensitive operations",
        "Avoid rolling your own cryptography - use established libraries"
      ]
    },
    {
      icon: Zap,
      title: "Optimize Performance",
      description: "Balance security with user experience through smart optimization.",
      recommendations: [
        "Cache session keys to reduce handshake overhead",
        "Use ECC for most mobile applications due to better efficiency",
        "Implement lazy loading for crypto operations",
        "Profile and optimize hot paths in cryptographic code",
        "Consider async operations to avoid blocking the UI thread"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Best Practices
            </h1>
            <p className="text-muted-foreground text-lg">
              Guidelines for implementing secure and efficient mobile cryptography
            </p>
          </div>

          <div className="space-y-6">
            {practices.map((practice, index) => (
              <Card 
                key={index} 
                className="p-8 shadow-card hover:shadow-card-hover transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-hero p-3 rounded-lg shrink-0">
                    <practice.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{practice.title}</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {practice.description}
                    </p>
                    
                    <div className="bg-muted rounded-lg p-6">
                      <h3 className="font-semibold mb-4 text-lg">Recommendations:</h3>
                      <ul className="space-y-3">
                        {practice.recommendations.map((rec, recIndex) => (
                          <li key={recIndex} className="flex items-start gap-3">
                            <span className="text-accent font-bold shrink-0 mt-1">•</span>
                            <span className="leading-relaxed">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-card border-accent/50 shadow-card-hover">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stay informed about the latest developments in mobile cryptography
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-background/80 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Standards</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• NIST Cryptographic Standards</li>
                    <li>• IETF RFCs for TLS</li>
                    <li>• OWASP Mobile Security</li>
                  </ul>
                </div>
                
                <div className="bg-background/80 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Documentation</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Apple CryptoKit</li>
                    <li>• Android Keystore System</li>
                    <li>• OpenSSL Documentation</li>
                  </ul>
                </div>
                
                <div className="bg-background/80 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Tools</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• SSL Labs Testing</li>
                    <li>• OWASP Dependency Check</li>
                    <li>• Mobile Security Framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
