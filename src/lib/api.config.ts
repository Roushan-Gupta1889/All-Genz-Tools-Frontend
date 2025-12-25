// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
    COMPRESS: `${API_BASE_URL}/api/compress`,
    HEALTH: `${API_BASE_URL}/health`,
} as const;

export const API_CONFIG = {
    MAX_FILE_SIZE_MB: 50,
    ALLOWED_FILE_TYPE: 'application/pdf',
    TIMEOUT_MS: 60000, // 60 seconds
} as const;

export type CompressionQuality = 'recommended' | 'strong' | 'printer' | 'prepress';

export const QUALITY_PRESETS: Record<CompressionQuality, { label: string; description: string }> = {
    recommended: {
        label: 'Recommended',
        description: 'Balanced quality and compression (default)',
    },
    strong: {
        label: 'Strong Compression',
        description: 'Maximum compression for web viewing',
    },
    printer: {
        label: 'Printer Quality',
        description: 'High quality for printing',
    },
    prepress: {
        label: 'Prepress Quality',
        description: 'Professional printing quality',
    },
};
