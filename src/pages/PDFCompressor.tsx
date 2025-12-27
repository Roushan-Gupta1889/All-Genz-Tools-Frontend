import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Shield, AlertCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToolHero from "@/components/compressor/ToolHero";
import ToolTrustStrip from "@/components/compressor/ToolTrustStrip";
import ToolHowItWorks from "@/components/compressor/ToolHowItWorks";
import UploadCard from "@/components/compressor/UploadCard";
import CompressionProgress from "@/components/compressor/CompressionProgress";
import CompressionResult from "@/components/compressor/CompressionResult";
import { compressPDF, APIError } from "@/lib/api.service";
import type { CompressionQuality } from "@/lib/api.config";
import { useToast } from "@/hooks/use-toast";
import FileReadyCard from "@/components/compressor/FileReadyCard";
import { SEO } from "@/components/SEO";

type CompressionState = "idle" | "ready" | "compressing" | "complete" | "error";

const PDFCompressor = () => {
  const { toast } = useToast();
  const [state, setState] = useState<CompressionState>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  const [compressedSize, setCompressedSize] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [quality, setQuality] = useState<CompressionQuality>("recommended");

  const handleFileSelect = useCallback((selectedFile: File) => {
    setFile(selectedFile);
    setState("ready");
    setError(null);
  }, []);

  const handleCompress = useCallback(async () => {
    if (!file) return;

    setState("compressing");
    setProgress(0);
    setError(null);

    try {
      // Call real API
      const blob = await compressPDF(file, quality, (progressValue) => {
        setProgress(progressValue);
      });

      // Success - store compressed file
      setCompressedBlob(blob);
      setCompressedSize(blob.size);
      setState("complete");

      // Show toast notification
      toast({
        title: "Files are automatically deleted after processing",
        description: "Your privacy is protected - no files are stored on our servers.",
        className: "top-0 left-0 flex fixed md:max-w-[420px] md:top-4 md:left-4",
      });
    } catch (err) {
      console.error('Compression failed:', err);
      setState("error");

      if (err instanceof APIError) {
        // Handle specific API errors
        if (err.statusCode === 429) {
          const minutes = Math.ceil((err.retryAfter || 600) / 60);
          setError(`Rate limit exceeded. Please try again in ${minutes} minutes.`);
        } else if (err.statusCode === 413) {
          setError('File size is too large. Maximum file size is 50 MB.');
        } else if (err.statusCode === 400) {
          setError(err.message || 'Invalid file. Please upload a valid PDF.');
        } else if (err.statusCode === 0) {
          setError('Unable to connect to the server. Please check your internet connection and try again.');
        } else {
          setError(err.message || 'Compression failed. Please try again.');
        }
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  }, [file, quality, toast]);

  const handleDownload = useCallback(() => {
    if (compressedBlob && file) {
      const url = URL.createObjectURL(compressedBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `compressed_${file.name}`;
      link.click();
      URL.revokeObjectURL(url);
    }
  }, [compressedBlob, file]);

  const handleTryStrongQuality = useCallback(() => {
    setQuality("strong");
    setState("ready");
  }, []);

  const handleReset = useCallback(() => {
    setFile(null);
    setState("idle");
    setProgress(0);
    setCompressedBlob(null);
    setCompressedSize(0);
    setError(null);
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

              {state === "ready" && file && (
                <FileReadyCard
                  fileName={file.name}
                  fileSize={file.size}
                  quality={quality}
                  onQualityChange={setQuality}
                  onCompress={handleCompress}
                  onCancel={handleReset}
                />
              )}

              {state === "compressing" && file && (
                <CompressionProgress
                  fileName={file.name}
                  fileSize={file.size}
                  progress={Math.min(Math.round(progress), 99)}
                />
              )}

              {state === "complete" && file && (
                <CompressionResult
                  fileName={file.name}
                  originalSize={file.size}
                  compressedSize={compressedSize}
                  quality={quality}
                  onDownload={handleDownload}
                  onReset={handleReset}
                  onTryStrongQuality={handleTryStrongQuality}
                />
              )}

              {state === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-8"
                >
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-destructive mb-2">
                        Compression Failed
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {error}
                      </p>
                  Try Again
                </button>
              </div>
            </div>
        <ToolTrustStrip />

        {/* How It Works */}
              <ToolHowItWorks />
            </main>

            <Footer />
          </div>
          );
};

          export default PDFCompressor;
