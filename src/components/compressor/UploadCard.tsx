import { useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, FileText } from "lucide-react";

interface UploadCardProps {
  onFileSelect: (file: File) => void;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
}

const UploadCard = ({ onFileSelect, isDragging, setIsDragging }: UploadCardProps) => {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, [setIsDragging]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, [setIsDragging]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      onFileSelect(files[0]);
    }
  }, [onFileSelect, setIsDragging]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <label
        htmlFor="pdf-upload"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`group relative flex min-h-[320px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 ${
          isDragging
            ? "border-primary bg-primary/5 scale-[1.02]"
            : "border-border hover:border-primary/50 hover:bg-muted/50"
        }`}
      >
        <input
          id="pdf-upload"
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleFileInput}
          className="sr-only"
        />

        <motion.div
          animate={{ scale: isDragging ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/15"
        >
          {isDragging ? (
            <FileText className="h-10 w-10 text-primary" />
          ) : (
            <Upload className="h-10 w-10 text-primary" />
          )}
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">
            {isDragging ? "Drop your PDF here" : "Drag & drop your PDF"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            or <span className="text-primary font-medium">click to browse</span>
          </p>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Supports PDF files up to 100MB
        </p>
      </label>
    </motion.div>
  );
};

export default UploadCard;
