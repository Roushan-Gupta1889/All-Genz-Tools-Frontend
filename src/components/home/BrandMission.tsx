import { motion } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create beautifully simple tools that respect your privacy and save your time. We believe technology should empower, not complicate.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where essential digital tools are free, fast, and accessible to everyone. No barriers, no data harvesting, no bloat.",
  },
  {
    icon: Rocket,
    title: "Our Promise",
    description:
      "Every tool we build runs locally on your device. Your files stay yours. We never see, store, or sell your data. Period.",
  },
];

const BrandMission = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why All Genz Tools?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building the tools we wish existed—fast, private, and designed for the way you work.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              id={index === 0 ? "mission" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group scroll-mt-20"
            >
              <div className="gradient-card rounded-2xl border border-border/50 p-8 shadow-soft transition-all duration-300 hover:shadow-elevated hover:border-primary/20 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMission;
