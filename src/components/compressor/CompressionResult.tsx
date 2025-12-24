import { motion } from "framer-motion";
import { CheckCircle2, Download, FileText, ArrowDown, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompressionResultProps {
  fileName: string;
  originalSize: number;
  compressedSize: number;
  onDownload: () => void;
  onReset: () => void;
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
  onDownload,
  onReset,
}: CompressionResultProps) => {
  const savings = Math.round(((originalSize - compressedSize) / originalSize) * 100);

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
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-success/10"
        >
          <CheckCircle2 className="h-10 w-10 text-success" />
        </motion.div>

        <h3 className="mt-6 text-xl font-semibold">Compression Complete!</h3>
        
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10"
            >
              <ArrowDown className="h-5 w-5 text-success" />
            </motion.div>
            
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Compressed</p>
              <p className="mt-1 text-lg font-semibold text-success">{formatFileSize(compressedSize)}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Reduced by <span className="font-semibold text-success">{savings}%</span>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <Button variant="hero" size="lg" onClick={onDownload} className="w-full">
            <Download className="h-5 w-5" />
            Download PDF
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
