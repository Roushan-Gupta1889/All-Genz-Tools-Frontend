import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UploadCard from "@/components/compressor/UploadCard";
import CompressionProgress from "@/components/compressor/CompressionProgress";
import CompressionResult from "@/components/compressor/CompressionResult";

type CompressionState = "idle" | "compressing" | "complete";

const PDFCompressor = () => {
  const [state, setState] = useState<CompressionState>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);

  const handleFileSelect = useCallback((selectedFile: File) => {
    setFile(selectedFile);
    setState("compressing");
    setProgress(0);
  }, []);

  // Simulate compression progress
  useEffect(() => {
    if (state !== "compressing") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setState("complete");
          // Simulate 40-70% compression
          if (file) {
            const compressionRatio = 0.3 + Math.random() * 0.3;
            setCompressedSize(Math.round(file.size * compressionRatio));
          }
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [state, file]);

  const handleDownload = useCallback(() => {
    // In a real app, this would download the compressed file
    // For demo purposes, we'll just show an alert
    if (file) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.download = `compressed_${file.name}`;
      link.click();
    }
  }, [file]);

  const handleReset = useCallback(() => {
    setState("idle");
    setFile(null);
    setProgress(0);
    setCompressedSize(0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 gradient-hero">
        <div className="container mx-auto max-w-2xl px-6 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              PDF Compressor
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Reduce your PDF file size while maintaining quality
            </p>
          </motion.div>

          <div className="mt-12">
            {state === "idle" && (
              <UploadCard
                onFileSelect={handleFileSelect}
                isDragging={isDragging}
                setIsDragging={setIsDragging}
              />
            )}

            {state === "compressing" && file && (
              <CompressionProgress
                fileName={file.name}
                progress={Math.min(Math.round(progress), 99)}
              />
            )}

            {state === "complete" && file && (
              <CompressionResult
                fileName={file.name}
                originalSize={file.size}
                compressedSize={compressedSize}
                onDownload={handleDownload}
                onReset={handleReset}
              />
            )}
          </div>

          {/* Privacy Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <Shield className="h-4 w-4" />
            <span>Your files are processed locally and never uploaded to our servers</span>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PDFCompressor;
