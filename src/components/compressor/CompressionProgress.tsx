import { motion } from "framer-motion";
import { FileText, Loader2, Zap } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

interface CompressionProgressProps {
  fileName: string;
  progress: number;
  fileSize: number;
}

const CompressionProgress = ({ fileName, progress, fileSize }: CompressionProgressProps) => {
  const [statusMessage, setStatusMessage] = useState("Uploading your PDF...");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  // Calculate estimated compression time based on file size
  const estimatedTime = useMemo(() => {
    const sizeMB = fileSize / (1024 * 1024);
    if (sizeMB < 1) return 5;
    if (sizeMB < 5) return 10;
    if (sizeMB < 15) return 30;
    if (sizeMB < 30) return 60;
    if (sizeMB < 40) return 90;
    return 120;
  }, [fileSize]);

  // Dynamic message stages
  const stages = useMemo(() => {
    const stage1 = Math.floor(estimatedTime * 0.15);
    const stage2 = Math.floor(estimatedTime * 0.30);
    const stage3 = Math.floor(estimatedTime * 0.55);
    const stage4 = Math.floor(estimatedTime * 0.80);
    const stage5 = Math.floor(estimatedTime * 0.95);
    return { stage1, stage2, stage3, stage4, stage5 };
  }, [estimatedTime]);

  // Track elapsed time
  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate progress based on TIME (not API response)
  // 0s = 0%, 30s = 25%, 60s = 50%, 90s = 75%, 120s = 100%
  useEffect(() => {
    const maxTime = 120; // 2 minutes
    const timeProgress = Math.min((elapsedTime / maxTime) * 100, 99);
    setSmoothProgress(Math.floor(timeProgress));
  }, [elapsedTime]);

  // Update status message based on elapsed time
  useEffect(() => {
    if (elapsedTime < stages.stage1) {
      setStatusMessage("Uploading your PDF...");
    } else if (elapsedTime < stages.stage2) {
      setStatusMessage("Analyzing file structure...");
    } else if (elapsedTime < stages.stage3) {
      setStatusMessage("Compressing images and fonts...");
    } else if (elapsedTime < stages.stage4) {
      setStatusMessage("Optimizing PDF layout...");
    } else if (elapsedTime < stages.stage5) {
      setStatusMessage("Almost done, finalizing...");
    } else {
      setStatusMessage("Processing large file, please wait...");
    }
  }, [elapsedTime, stages]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="gradient-card rounded-2xl border border-border/50 p-8 shadow-soft"
    >
      <div className="flex flex-col items-center text-center">
        {/* Animated Icon */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-md"
          />

          {/* Rotating icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg"
          >
            <Zap className="h-8 w-8 text-white" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-semibold">Compressing PDF</h3>

        {/* File name */}
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span className="max-w-[200px] truncate">{fileName}</span>
        </div>

        {/* Dynamic status message */}
        <motion.p
          key={statusMessage}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-sm font-medium text-primary"
        >
          {statusMessage}
        </motion.p>

        {/* Modern Progress Bar with Percentage */}
        <div className="mt-8 w-full max-w-md">
          {/* Percentage Display */}
          <div className="mb-3 flex items-center justify-center">
            <motion.div
              key={smoothProgress}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              {smoothProgress}%
            </motion.div>
          </div>

          {/* Progress Bar Container */}
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted/50 shadow-inner">
            {/* Background glow effect */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
            />

            {/* Progress fill with gradient */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${smoothProgress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] shadow-lg"
            >
              {/* Animated shimmer effect */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              {/* Glow effect at the end */}
              {smoothProgress > 5 && (
                <div className="absolute right-0 top-0 h-full w-8 bg-white/50 blur-sm" />
              )}
            </motion.div>
          </div>

          {/* Progress milestones */}
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span className={smoothProgress >= 25 ? "text-primary font-medium" : ""}>
              25%
            </span>
            <span className={smoothProgress >= 50 ? "text-primary font-medium" : ""}>
              50%
            </span>
            <span className={smoothProgress >= 75 ? "text-primary font-medium" : ""}>
              75%
            </span>
          </div>
        </div>

        {/* Help text for large files */}
        {estimatedTime > 60 && elapsedTime > 15 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-xs text-muted-foreground max-w-xs"
          >
            Large PDFs may take up to 2 minutes. Advanced compression in progress...
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default CompressionProgress;
