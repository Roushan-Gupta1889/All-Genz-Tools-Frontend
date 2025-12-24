import { motion } from "framer-motion";
import { Shield, Zap, UserX } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Private",
    description: "Files processed locally",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Compress in seconds",
  },
  {
    icon: UserX,
    title: "No Signup",
    description: "Use instantly, free",
  },
];

const TrustStrip = () => {
  return (
    <section className="border-y border-border/50 bg-card">
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
