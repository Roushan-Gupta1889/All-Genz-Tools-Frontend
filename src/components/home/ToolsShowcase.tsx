import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: FileDown,
    title: "PDF Compressor",
    description: "Reduce PDF file sizes up to 90% while maintaining quality. Fast, free, and private.",
    href: "/pdf-compressor",
    available: true,
  },
];

const ToolsShowcase = () => {
  return (
    <section id="tools" className="py-24 sm:py-32 border-t border-border/50 scroll-mt-20">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Tools
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start with what you need. More tools coming soon.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={tool.href}
                className="group block gradient-card rounded-2xl border border-border/50 p-8 shadow-soft transition-all duration-300 hover:shadow-elevated hover:border-primary/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold flex items-center gap-2">
                  {tool.title}
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            </motion.div>
          ))}

          {/* Coming Soon Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-card rounded-2xl border border-dashed border-border/50 p-8 flex flex-col items-center justify-center text-center"
          >
            <span className="text-muted-foreground text-sm font-medium">Coming Soon</span>
            <p className="mt-2 text-lg font-semibold text-muted-foreground/60">More tools on the way</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
