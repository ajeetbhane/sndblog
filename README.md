# Professor Website

A modern, responsive website for Professor Dr. Ajeet Bhane showcasing academic profile, research work, and file sharing capabilities.

## Features

- **Professional Academic Profile**: Showcase education, experience, and achievements
- **File Upload System**: Advanced drag-and-drop file upload with progress tracking
- **Responsive Design**: Mobile-first approach with beautiful animations
- **File Management**: Categorization, sharing, and zip archive creation
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

## Technology Stack

- React 18.3.1 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Radix UI components
- React Router for navigation
- Lucide React for icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── HeroSection.tsx
│   ├── NavigationHeader.tsx
│   ├── TabsSection.tsx
│   ├── FileUpload.tsx
│   └── FooterSection.tsx
├── pages/
│   ├── Index.tsx     # Main page
│   └── NotFound.tsx  # 404 page
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── assets/           # Images and static files
```

## License

© 2024 Professor Website. All rights reserved.