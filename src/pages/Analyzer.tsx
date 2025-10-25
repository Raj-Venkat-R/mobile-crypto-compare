import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Zap, MemoryStick, Battery, Shield } from "lucide-react";
import { toast } from "sonner";

interface AnalysisResult {
  encryptionTime: number;
  decryptionTime: number;
  memoryUsage: number;
  batteryImpact: number;
  securityLevel: string;
}

const Analyzer = () => {
  const [algorithm, setAlgorithm] = useState<string>("ecc");
  const [keySize, setKeySize] = useState<string>("256");
  const [messageLength, setMessageLength] = useState<string>("1024");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateEfficiency = () => {
    setLoading(true);
    
    // Simulate analysis calculation
    setTimeout(() => {
      const keySizeNum = parseInt(keySize);
      const messageLengthNum = parseInt(messageLength);
      
      let encTime, decTime, memory, battery, security;
      
      if (algorithm === "ecc") {
        // ECC is generally faster with smaller keys
        encTime = (keySizeNum / 256) * 12 + (messageLengthNum / 1024) * 5;
        decTime = (keySizeNum / 256) * 15 + (messageLengthNum / 1024) * 6;
        memory = (keySizeNum / 8) + (messageLengthNum * 0.5);
        battery = encTime * 0.8;
        security = keySizeNum >= 256 ? "High" : "Medium";
      } else {
        // RSA is slower with larger keys
        encTime = (keySizeNum / 2048) * 45 + (messageLengthNum / 1024) * 15;
        decTime = (keySizeNum / 2048) * 180 + (messageLengthNum / 1024) * 25;
        memory = (keySizeNum / 8) * 2 + (messageLengthNum * 1.2);
        battery = encTime * 1.5;
        security = keySizeNum >= 2048 ? "High" : "Medium";
      }

      setResult({
        encryptionTime: parseFloat(encTime.toFixed(2)),
        decryptionTime: parseFloat(decTime.toFixed(2)),
        memoryUsage: parseFloat(memory.toFixed(2)),
        batteryImpact: parseFloat(battery.toFixed(2)),
        securityLevel: security,
      });
      
      setLoading(false);
      toast.success("Analysis complete!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Efficiency Analyzer
            </h1>
            <p className="text-muted-foreground text-lg">
              Compare ECC and RSA performance metrics for your use case
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calculator className="h-6 w-6 text-accent" />
                Configuration
              </h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="algorithm" className="text-base mb-2 block">
                    Algorithm
                  </Label>
                  <Select value={algorithm} onValueChange={setAlgorithm}>
                    <SelectTrigger id="algorithm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecc">ECC (Elliptic Curve Cryptography)</SelectItem>
                      <SelectItem value="rsa">RSA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="keySize" className="text-base mb-2 block">
                    Key Size (bits)
                  </Label>
                  <Select value={keySize} onValueChange={setKeySize}>
                    <SelectTrigger id="keySize">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {algorithm === "ecc" ? (
                        <>
                          <SelectItem value="256">256 bits</SelectItem>
                          <SelectItem value="384">384 bits</SelectItem>
                          <SelectItem value="521">521 bits</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="1024">1024 bits</SelectItem>
                          <SelectItem value="2048">2048 bits</SelectItem>
                          <SelectItem value="4096">4096 bits</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="messageLength" className="text-base mb-2 block">
                    Message Length (bytes)
                  </Label>
                  <Input
                    id="messageLength"
                    type="number"
                    value={messageLength}
                    onChange={(e) => setMessageLength(e.target.value)}
                    min="64"
                    max="16384"
                    placeholder="Enter message length"
                  />
                </div>

                <Button
                  onClick={calculateEfficiency}
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? "Analyzing..." : "Analyze Efficiency"}
                </Button>
              </div>
            </Card>

            {/* Results Display */}
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold mb-6">Results</h2>

              {result ? (
                <div className="space-y-4 animate-slide-up">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-chart-1" />
                      <span className="font-medium">Encryption Time</span>
                    </div>
                    <p className="text-2xl font-bold">{result.encryptionTime} ms</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-chart-2" />
                      <span className="font-medium">Decryption Time</span>
                    </div>
                    <p className="text-2xl font-bold">{result.decryptionTime} ms</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MemoryStick className="h-5 w-5 text-chart-3" />
                      <span className="font-medium">Memory Usage</span>
                    </div>
                    <p className="text-2xl font-bold">{result.memoryUsage} KB</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Battery className="h-5 w-5 text-chart-4" />
                      <span className="font-medium">Battery Impact</span>
                    </div>
                    <p className="text-2xl font-bold">{result.batteryImpact} mAh</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-chart-5" />
                      <span className="font-medium">Security Level</span>
                    </div>
                    <p className="text-2xl font-bold">{result.securityLevel}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <p>Configure parameters and run analysis to see results</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
