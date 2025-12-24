import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const ToolHero = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-soft"
      >
        <FileDown className="h-4 w-4 text-primary" />
        <span>Free PDF Compression</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
      >
        Compress PDFs
        <span className="block text-primary">in seconds</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-xl mx-auto"
      >
        Reduce file size up to 90% while keeping quality.
        <br className="hidden sm:block" />
        No signup. No uploads stored. Just fast compression.
      </motion.p>
    </div>
  );
};

export default ToolHero;
