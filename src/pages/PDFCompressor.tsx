import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToolHero from "@/components/compressor/ToolHero";
import ToolTrustStrip from "@/components/compressor/ToolTrustStrip";
import ToolHowItWorks from "@/components/compressor/ToolHowItWorks";
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />

          <div className="container relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
            <ToolHero />

            {/* Tool Section */}
            <div className="mt-16 max-w-2xl mx-auto">
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
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            >
              <Shield className="h-4 w-4" />
              <span>Your files are processed locally and never uploaded to our servers</span>
            </motion.div>
          </div>
        </section>

        {/* Trust Strip */}
        <ToolTrustStrip />

        {/* How It Works */}
        <ToolHowItWorks />
      </main>

      <Footer />
    </div>
  );
};

export default PDFCompressor;
