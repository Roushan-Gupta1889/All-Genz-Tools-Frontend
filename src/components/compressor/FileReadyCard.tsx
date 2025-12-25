import { motion } from "framer-motion";
import { FileText, Zap } from "lucide-react";
import { formatBytes } from "@/lib/utils";
import QualitySelector from "./QualitySelector";
import type { CompressionQuality } from "@/lib/api.config";

interface FileReadyCardProps {
    fileName: string;
    fileSize: number;
    quality: CompressionQuality;
    onQualityChange: (quality: CompressionQuality) => void;
    onCompress: () => void;
    onCancel: () => void;
}

const FileReadyCard = ({
    fileName,
    fileSize,
    quality,
    onQualityChange,
    onCompress,
    onCancel,
}: FileReadyCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            {/* File Info */}
            <div className="rounded-2xl border border-border/50 bg-background p-6">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{fileName}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            {formatBytes(fileSize)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Quality Selector */}
            <QualitySelector selected={quality} onSelect={onQualityChange} />

            {/* Action Buttons */}
            <div className="flex gap-3">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCompress}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                >
                    <Zap className="h-5 w-5" />
                    Compress PDF
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCancel}
                    className="rounded-xl border-2 border-border px-6 py-4 font-semibold text-foreground hover:bg-muted transition-colors"
                >
                    Cancel
                </motion.button>
            </div>
        </motion.div>
    );
};

export default FileReadyCard;
