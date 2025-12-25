# 🎨 Swift Compress - PDF Compression Frontend

Modern, privacy-first PDF compression tool built with React and TypeScript. Beautiful UI with real-time progress tracking.

## Features

- 🎯 **4 Quality Presets**: Choose from Recommended, Strong, Printer, or Professional
- 📊 **Real-time Progress**: Dynamic progress bar with time-based updates
- 🔒 **Privacy-First**: Files automatically deleted after processing
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development
- 🎨 **Beautiful UI**: Modern design with smooth animations
- 🔄 **Smart Retry**: Suggests "Strong" quality for already-compressed PDFs

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/swift-compress.git
cd swift-compress
```

### 2. Install dependencies
```bash
npm install
```

###3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your backend API URL
```

### 4. Start development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Environment Variables

Create a `.env.local` file:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000

# For production:
# VITE_API_URL=https://api.yourdomain.com
```

## Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist/` directory.

## Project Structure

```
swift-compress/
├── src/
│   ├── components/
│   │   ├── compressor/
│   │   │   ├── CompressionProgress.tsx
│   │   │   ├── CompressionResult.tsx
│   │   │   ├── FileReadyCard.tsx
│   │   │   ├── QualitySelector.tsx
│   │   │   └── UploadCard.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── BrandHero.tsx
│   │   │   ├── Features.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/              # shadcn/ui components
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── PDFCompressor.tsx
│   ├── lib/
│   │   ├── api.config.ts   # API configuration
│   │   ├── api.service.ts  # API service
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Features in Detail

### Quality Selection
Users can choose from 4 compression presets:
- **Recommended**: Best balance (55% reduction)
- **Strong**: Maximum compression (65% reduction)
- **Printer**: High quality for printing (40% reduction)
- **Professional**: Maximum quality for print shops (25% reduction)

### Smart Progress Tracking
- Time-based progress bar (0-100% over 2 minutes)
- Dynamic status messages
- Elapsed time display
- File size-adaptive messaging

### Error Handling
- Rate limiting warnings
- File size limit errors
- Network connection errors
- Incompatible PDF detection
- Helpful retry suggestions

### Privacy Features
- Files automatically deleted after processing
- No file storage on servers
- Toast notification confirming deletion
- Privacy message on UI

## Backend Integration

This frontend requires the [PDF Compress Backend API](https://github.com/yourusername/pdf-compress-backend).

Make sure the backend is running and update `VITE_API_URL` in your `.env.local`.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variable
vercel env add VITE_API_URL production
# Enter your production API URL

# Deploy to production
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist

# Add environment variable in Netlify dashboard:
# VITE_API_URL=https://api.yourdomain.com
```

### Custom Server

```bash
# Build the application
npm run build

# Serve the dist/ directory with any static file server
# Example with serve:
npx serve dist
```

## Configuration

### File Size Limit
Update in `src/lib/api.config.ts`:
```typescript
export const API_CONFIG = {
    MAX_FILE_SIZE_MB: 50,  // Adjust as needed
    // ...
};
```

### Quality Presets
Edit quality options in `src/components/compressor/QualitySelector.tsx`

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **First Load**: < 1s
- **Bundle Size**: ~300KB gzipped
- **Lighthouse Score**: 95+

## Development

### Code Style
- TypeScript strict mode
- ESLint for linting
- Prettier for formatting (recommended)

### Component Guidelines
- Functional components with hooks
- TypeScript interfaces for props
- Framer Motion for animations
- Tailwind CSS for styling

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code
```

## Troubleshooting

### "Unable to connect to server"
Check that:
1. Backend API is running
2. `VITE_API_URL` is correctly set in `.env.local`
3. CORS is properly configured on backend

### Build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

MIT

## Author

All Genz Tools

## Related Projects

- [PDF Compress Backend](https://github.com/yourusername/pdf-compress-backend)

## Support

For issues and questions, please open an issue on GitHub.
