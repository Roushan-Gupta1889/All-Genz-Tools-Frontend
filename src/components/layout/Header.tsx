import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Tools", path: "/#tools" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    if (path.startsWith("/#")) {
      return location.pathname === "/" && location.hash === path.slice(1);
    }
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0">
          <img src={Logo} alt="All Genz Tools Logo" className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-semibold tracking-tight">All Genz Tools</span>
        </Link>

        {/* Center: Compress Link + Navigation Links (adjacent) */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/pdf-compressor"
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Compress
          </Link>

          <nav className="flex items-center gap-1 rounded-full bg-muted/50 p-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive(link.path)
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Mobile Menu + Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Theme Toggle - Desktop (Far Right) */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <nav className="container mx-auto max-w-6xl px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-border/50 mt-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
