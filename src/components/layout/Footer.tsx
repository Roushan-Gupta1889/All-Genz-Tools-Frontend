import { Link } from "react-router-dom";
import { Mail, Twitter, Github, Linkedin, Heart } from "lucide-react";
import Logo from "@/assets/Logo.png";

const footerLinks = {
  tools: [
    { name: "PDF Compressor", href: "/pdf-compressor" },
    { name: "Image Optimizer", href: "#", coming: true },
    { name: "File Converter", href: "#", coming: true },
    { name: "QR Generator", href: "#", coming: true },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Our Mission", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Blog", href: "#", coming: true },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:allgenztool@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <img src={Logo} alt="All Genz Tools Logo" className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-semibold tracking-tight">All Genz Tools</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Modern, privacy-first utilities designed for speed and simplicity.
              No accounts. No tracking. Just powerful tools.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Tools
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-sm transition-colors hover:text-foreground ${link.coming ? "text-muted-foreground/60" : "text-muted-foreground"
                      }`}
                  >
                    {link.name}
                    {link.coming && (
                      <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-sm transition-colors hover:text-foreground ${link.coming ? "text-muted-foreground/60" : "text-muted-foreground"
                      }`}
                  >
                    {link.name}
                    {link.coming && (
                      <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visitor Counter */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-border/50 pt-8">
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=20387997&style=0006&nbdigits=6&type=page&initCount=0"
            alt="Visit counter For Websites"
            className="h-[30px] w-[200px] border-0"
          />
          <p className="text-xl font-semibold" style={{ color: '#1523da', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Visitor Counter
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All Genz Tools. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> for the GenZ community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
