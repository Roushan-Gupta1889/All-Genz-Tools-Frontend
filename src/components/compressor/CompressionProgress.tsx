import { motion } from "framer-motion";
import { FileText, Loader2 } from "lucide-react";

interface CompressionProgressProps {
  fileName: string;
  progress: number;
}

const CompressionProgress = ({ fileName, progress }: CompressionProgressProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="gradient-card rounded-2xl border border-border/50 p-8 shadow-soft"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-primary/10" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="h-10 w-10 text-primary" />
          </motion.div>
        </div>

        <h3 className="mt-6 text-xl font-semibold">Compressing your PDF...</h3>
        
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span className="max-w-[200px] truncate">{fileName}</span>
        </div>

        <div className="mt-8 w-full max-w-xs">
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full gradient-accent rounded-full"
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{progress}% complete</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompressionProgress;
