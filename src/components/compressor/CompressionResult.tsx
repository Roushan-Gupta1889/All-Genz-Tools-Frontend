import { motion } from "framer-motion";
import { CheckCircle2, Download, FileText, ArrowDown, RotateCcw, AlertCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompressionResultProps {
  fileName: string;
  originalSize: number;
  compressedSize: number;
  quality: string;
  onDownload: () => void;
  onReset: () => void;
  onTryStrongQuality?: () => void;
}

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const CompressionResult = ({
  fileName,
  originalSize,
  compressedSize,
  quality,
  onDownload,
  onReset,
  onTryStrongQuality,
}: CompressionResultProps) => {
  const savings = Math.round(((originalSize - compressedSize) / originalSize) * 100);
  const isNegative = savings < 0;
  const isMinimal = savings >= 0 && savings < 5;
  const showStrongSuggestion = (isNegative || isMinimal) && quality !== "strong";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="gradient-card rounded-2xl border border-border/50 p-8 shadow-soft"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`flex h-20 w-20 items-center justify-center rounded-2xl ${isNegative || isMinimal ? "bg-warning/10" : "bg-success/10"
            }`}
        >
          {isNegative || isMinimal ? (
            <AlertCircle className="h-10 w-10 text-warning" />
          ) : (
            <CheckCircle2 className="h-10 w-10 text-success" />
          )}
        </motion.div>

        <h3 className="mt-6 text-xl font-semibold">
          {isNegative
            ? "PDF Already Compressed!"
            : isMinimal
              ? "Minimal Compression"
              : "Compression Complete!"}
        </h3>

        {/* Warning message for negative/minimal compression */}
        {(isNegative || isMinimal) && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 max-w-md rounded-lg bg-warning/10 border border-warning/20 p-3"
          >
            <p className="text-sm text-muted-foreground">
              {isNegative
                ? "This PDF is already well-optimized. The compressed version is slightly larger due to processing overhead."
                : "This PDF had limited compression potential. It may already be optimized."}
            </p>
          </motion.div>
        )}

        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span className="max-w-[200px] truncate">{fileName}</span>
        </div>

        {/* Size comparison */}
        <div className="mt-8 w-full max-w-sm rounded-xl bg-muted/50 p-6">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Original</p>
              <p className="mt-1 text-lg font-semibold">{formatFileSize(originalSize)}</p>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`flex h-10 w-10 items-center justify-center rounded-full ${isNegative ? "bg-warning/10" : "bg-success/10"
                }`}
            >
              <ArrowDown
                className={`h-5 w-5 ${isNegative ? "text-warning rotate-180" : "text-success"}`}
              />
            </motion.div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">Compressed</p>
              <p
                className={`mt-1 text-lg font-semibold ${isNegative ? "text-warning" : "text-success"
                  }`}
              >
                {formatFileSize(compressedSize)}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {isNegative ? "Increased by " : "Reduced by "}
              <span
                className={`font-semibold ${isNegative ? "text-warning" : "text-success"}`}
              >
                {Math.abs(savings)}%
              </span>
            </p>
          </div>
        </div>

        {/* Strong quality suggestion */}
        {showStrongSuggestion && onTryStrongQuality && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 w-full max-w-sm rounded-xl border-2 border-primary/20 bg-primary/5 p-4"
          >
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1 text-left">
                <p className="font-semibold text-sm">Try Strong Compression</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Strong quality uses aggressive compression and may achieve better results.
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onTryStrongQuality}
              className="w-full mt-3 border-primary/30 hover:bg-primary/10"
            >
              <Zap className="h-4 w-4 mr-2" />
              Retry with Strong Quality
            </Button>
          </motion.div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <Button variant="hero" size="lg" onClick={onDownload} className="w-full">
            <Download className="h-5 w-5" />
            Download {isNegative ? "Original" : "PDF"}
          </Button>

          <Button variant="outline" size="lg" onClick={onReset} className="w-full">
            <RotateCcw className="h-4 w-4" />
            Compress Another
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CompressionResult;
