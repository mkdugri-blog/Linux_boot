# Overview

This is a React-based technical blog application that explains the Linux boot process through an interactive, educational interface. The application presents complex technical information in an engaging format with step-by-step visualization of how Linux systems start up, from pressing the power button to reaching the desktop environment.

The project focuses on educational content delivery, featuring interactive elements and modern UI components to make technical concepts accessible to readers. It serves as a comprehensive guide covering BIOS/UEFI firmware, POST, GRUB bootloader, kernel initialization, systemd, and desktop environment startup.

## Recent Updates

- **GitHub Pages Deployment Ready** (August 2025): Project is now configured for automatic deployment to GitHub Pages using GitHub Actions. The build process has been optimized for static hosting with relative paths and a dedicated Vite configuration file.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom dark theme configuration focused on technical content readability
- **UI Components**: Comprehensive shadcn/ui component library providing consistent, accessible interface elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and caching

## Backend Architecture
- **Server**: Express.js with TypeScript running in Node.js environment
- **API Design**: RESTful endpoints with `/api` prefix for clear separation
- **Development**: Hot module replacement and development middleware integrated with Vite
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Request Logging**: Custom middleware for API request monitoring and debugging

## Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL configured as primary database with Neon serverless hosting
- **Schema Management**: Centralized schema definitions in shared directory for consistency between client and server
- **Development Storage**: In-memory storage implementation for rapid prototyping and testing
- **Migrations**: Drizzle Kit for database schema versioning and migration management

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple for persistence
- **User Schema**: Basic user model with username/password authentication
- **Validation**: Zod schema validation for request/response data integrity

## External Dependencies
- **Database Hosting**: Neon Database for managed PostgreSQL hosting with serverless capabilities
- **UI Framework**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for processing and optimization
- **Development Tools**: ESBuild for production builds, TSX for development server execution
- **Fonts**: Google Fonts integration (Inter and JetBrains Mono) for technical content readability
- **Icons**: Lucide React for consistent iconography throughout the application

The architecture emphasizes educational content delivery with modern web technologies, ensuring fast loading, responsive design, and maintainable codebase for technical documentation and interactive learning experiences.

## Deployment Configuration

### GitHub Pages Setup
- **Build Configuration**: Custom Vite config (`vite.config.github-pages.ts`) optimized for static hosting
- **Deployment Pipeline**: GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment
- **Build Process**: Static site generation using `vite build` with relative paths for GitHub Pages compatibility
- **Documentation**: Comprehensive deployment guide and README for easy setup