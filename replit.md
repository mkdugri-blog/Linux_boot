# Overview

This is a static React-based technical blog that explains the Linux boot process through an interactive, educational interface. The application presents complex technical information in an engaging format with step-by-step visualization of how Linux systems start up, from pressing the power button to reaching the desktop environment.

The project is designed as a static site for GitHub Pages deployment, featuring interactive elements and modern UI components to make technical concepts accessible to readers. It serves as a comprehensive guide covering BIOS/UEFI firmware, POST, GRUB bootloader, kernel initialization, systemd, and desktop environment startup.

**Recent Changes (August 2025):**
- Converted from full-stack to static site architecture for GitHub Pages deployment
- Removed server-side components, database, and authentication systems
- Streamlined to pure frontend React application with static content
- Added comprehensive README for deployment instructions

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized static builds
- **Styling**: Tailwind CSS with custom dark theme configuration focused on technical content readability
- **UI Components**: Comprehensive shadcn/ui component library providing consistent, accessible interface elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: Local React state (removed React Query for static site)

## Static Site Configuration
- **Development**: Vite dev server for local development
- **Build Output**: Static files generated to `dist/public/` directory
- **Deployment Target**: GitHub Pages compatible static site
- **Content**: Hardcoded educational content about Linux boot process
- **Interactivity**: Client-side JavaScript for flowchart interactions and navigation

## External Dependencies
- **UI Framework**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for processing and optimization
- **Fonts**: Google Fonts integration (Inter and JetBrains Mono) for technical content readability
- **Icons**: Lucide React and Font Awesome for consistent iconography throughout the application

## Removed Components
- **Server**: Express.js backend removed for static deployment
- **Database**: PostgreSQL and Drizzle ORM removed
- **Authentication**: User authentication system removed
- **API Routes**: All server-side API endpoints removed
- **Session Management**: Removed for static site architecture

The architecture now emphasizes pure frontend educational content delivery, ensuring fast loading, responsive design, and simple deployment to GitHub Pages for technical documentation and interactive learning experiences.