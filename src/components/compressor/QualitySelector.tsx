import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { CompressionQuality } from "@/lib/api.config";

interface QualitySelectorProps {
    selected: CompressionQuality;
    onSelect: (quality: CompressionQuality) => void;
}

const qualityOptions: Array<{
    value: CompressionQuality;
    label: string;
    description: string;
    recommended?: boolean;
}> = [
        {
            value: "recommended",
            label: "Recommended",
            description: "Best balance of quality and size",
            recommended: true,
        },
        {
            value: "strong",
            label: "Strong",
            description: "Maximum compression (lower quality)",
        },
        {
            value: "printer",
            label: "Printer",
            description: "High quality for printing",
        },
        {
            value: "prepress",
            label: "Professional",
            description: "Maximum quality for print shops",
        },
    ];

const QualitySelector = ({ selected, onSelect }: QualitySelectorProps) => {
    return (
        <div className="w-full max-w-2xl space-y-3">
            <label className="text-sm font-medium text-foreground">
                Compression Quality
            </label>
            <div className="grid grid-cols-2 gap-3">
                {qualityOptions.map((option) => {
                    const isSelected = selected === option.value;
                    return (
                        <motion.button
                            key={option.value}
                            onClick={() => onSelect(option.value)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative rounded-xl border-2 p-4 text-left transition-all ${isSelected
                                ? "border-primary bg-primary/5"
                                : "border-border bg-background hover:border-primary/50"
                                }`}
                        >
                            {/* Checkmark */}
                            {isSelected && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary"
                                >
                                    <Check className="h-3 w-3 text-primary-foreground" />
                                </motion.div>
                            )}

                            {/* Recommended badge */}
                            {option.recommended && (
                                <span className="mb-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                    Recommended
                                </span>
                            )}

                            {/* Label */}
                            <div className="font-semibold text-foreground">{option.label}</div>

                            {/* Description */}
                            <div className="mt-1 text-sm text-muted-foreground">
                                {option.description}
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default QualitySelector;
