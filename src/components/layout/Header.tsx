import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <FileDown className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">All Genz Tools</span>
        </Link>

        <nav className="flex items-center gap-2">
          {!isHome && (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">Home</Link>
            </Button>
          )}
          <Button variant={isHome ? "default" : "outline"} size="sm" asChild>
            <Link to="/pdf-compressor">
              <FileDown className="h-4 w-4" />
              Compress PDF
            </Link>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
