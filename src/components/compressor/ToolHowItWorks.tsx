import { motion } from "framer-motion";
import { Upload, Cpu, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload your PDF",
    description: "Drag & drop or click to select. Files stay on your device.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "We compress it",
    description: "Smart algorithms reduce size while preserving quality.",
  },
  {
    number: "03",
    icon: Download,
    title: "Download & done",
    description: "Get your smaller PDF instantly. No email required.",
  },
];

const ToolHowItWorks = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three simple steps. No learning curve.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="gradient-card rounded-2xl border border-border/50 p-8 shadow-soft transition-all duration-300 hover:shadow-elevated hover:border-primary/20">
                <span className="text-5xl font-bold text-muted/50">{step.number}</span>

                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolHowItWorks;
