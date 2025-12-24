import { motion } from "framer-motion";
import { Shield, Zap, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens in your browser. We never see your files.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "No uploads, no waiting. Get results in seconds, not minutes.",
  },
  {
    icon: Heart,
    title: "Free Forever",
    description: "No subscriptions, no hidden fees. Quality tools for everyone.",
  },
  {
    icon: Globe,
    title: "Works Anywhere",
    description: "Use on any device with a browser. No app downloads needed.",
  },
];

const BrandValues = () => {
  return (
    <section className="border-y border-border/50 bg-card">
      <div className="container mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
