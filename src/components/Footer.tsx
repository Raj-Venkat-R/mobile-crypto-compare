import { Shield, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold">Crypto Analyzer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Educational tool for comparing cryptographic efficiency in mobile environments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/analyzer" className="hover:text-foreground transition-colors">Analyzer</a></li>
              <li><a href="/background" className="hover:text-foreground transition-colors">Background</a></li>
              <li><a href="/best-practices" className="hover:text-foreground transition-colors">Best Practices</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Crypto Efficiency Analyzer. Educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
