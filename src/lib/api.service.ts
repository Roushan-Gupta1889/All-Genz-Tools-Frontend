import { API_ENDPOINTS, API_CONFIG, CompressionQuality } from './api.config';

export interface CompressionResponse {
    success: boolean;
    message?: string;
    error?: string;
    data?: {
        originalFilename: string;
        compressedFilename: string;
        originalSize: number;
        compressedSize: number;
        compressionRatio: number;
        quality: string;
    };
}

export class APIError extends Error {
    constructor(
        message: string,
        public statusCode?: number,
        public retryAfter?: number
    ) {
        super(message);
        this.name = 'APIError';
    }
}

export async function compressPDF(
    file: File,
    quality: CompressionQuality = 'recommended',
    onProgress?: (progress: number) => void
): Promise<Blob> {
    // Validate file type
    if (file.type !== API_CONFIG.ALLOWED_FILE_TYPE) {
        throw new APIError('Only PDF files are allowed', 400);
    }

    // Validate file size
    const maxSizeBytes = API_CONFIG.MAX_FILE_SIZE_MB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
        throw new APIError(
            `File size exceeds the limit of ${API_CONFIG.MAX_FILE_SIZE_MB} MB`,
            413
        );
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality', quality);

    try {
        // Phase 1: Upload started (5-10%)
        if (onProgress) {
            onProgress(5);
        }

        const response = await fetch(API_ENDPOINTS.COMPRESS, {
            method: 'POST',
            body: formData,
        });

        // Phase 2: Upload complete, backend processing (15%)
        if (onProgress) {
            onProgress(15);
        }

        // Simulate incremental progress during backend processing
        // Ghostscript doesn't provide progress, so we fake smooth increments
        let currentProgress = 15;
        const progressInterval = setInterval(() => {
            if (currentProgress < 85 && onProgress) {
                currentProgress += Math.floor(Math.random() * 8) + 2; // 2-10% increments
                onProgress(Math.min(currentProgress, 85));
            }
        }, 1200); // Update every 1.2 seconds

        // Handle errors
        if (!response.ok) {
            clearInterval(progressInterval);
            const contentType = response.headers.get('content-type');

            if (contentType?.includes('application/json')) {
                const error: CompressionResponse = await response.json();

                // Handle rate limiting
                if (response.status === 429) {
                    const retryAfter = parseInt(response.headers.get('Retry-After') || '600');
                    throw new APIError(
                        error.error || 'Rate limit exceeded. Please try again later.',
                        429,
                        retryAfter
                    );
                }

                throw new APIError(
                    error.error || 'Compression failed',
                    response.status
                );
            }

            throw new APIError(
                `Server error: ${response.statusText}`,
                response.status
            );
        }

        // Phase 3: Response received, finalizing (90%)
        clearInterval(progressInterval);
        if (onProgress) {
            onProgress(90);
        }

        // Get compressed PDF blob
        const blob = await response.blob();

        // Phase 4: Complete (100%)
        if (onProgress) {
            onProgress(100);
        }

        return blob;
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        }

        // Network or other errors
        if (error instanceof TypeError) {
            throw new APIError(
                'Unable to connect to the server. The server may be waking up (takes 30-60 seconds on free hosting). Please wait and try again.',
                0
            );
        }

        throw new APIError(
            error instanceof Error ? error.message : 'An unexpected error occurred',
            500
        );
    }
}

export async function checkAPIHealth(): Promise<boolean> {
    try {
        const response = await fetch(API_ENDPOINTS.HEALTH);
        const data = await response.json();
        return data.success === true;
    } catch {
        return false;
    }
}
