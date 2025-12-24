import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Tools", path: "/#tools" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];

const Header = () => {
  const location = useLocation();

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
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <FileDown className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">All Genz Tools</span>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-muted/50 p-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                isActive(link.path)
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu - simplified for now */}
        <div className="md:hidden">
          <Link
            to="/pdf-compressor"
            className="px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground"
          >
            Tools
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center justify-end w-[140px]">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
