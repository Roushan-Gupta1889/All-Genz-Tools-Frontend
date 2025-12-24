import { Link } from "react-router-dom";
import { FileDown } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/50 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <FileDown className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold">All Genz Tools</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/pdf-compressor" className="transition-colors hover:text-foreground">
              PDF Compressor
            </Link>
            <span className="text-border">·</span>
            <span>Privacy-first</span>
            <span className="text-border">·</span>
            <span>Free forever</span>
          </nav>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} All Genz Tools. No data stored. No signup required.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
