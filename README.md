# Linux Boot Process Blog 🐧

An interactive technical blog explaining the Linux boot process through engaging visualizations and step-by-step explanations.

## Overview

This educational web application takes users through the complete Linux boot journey, from pressing the power button to reaching the desktop environment. It features an interactive flowchart that makes complex technical concepts accessible to readers of all levels.

## Features

- **Interactive Flowchart**: Click through each boot stage to learn more
- **Mobile Responsive**: Optimized for both desktop and mobile viewing
- **Dark Theme**: Technical content optimized dark theme for better readability
- **Educational Focus**: Complex concepts explained in simple language

## Boot Process Stages Covered

1. **Power On** - CPU starts executing
2. **BIOS/UEFI** - Firmware initialization
3. **POST** - Hardware verification
4. **GRUB** - Boot loader menu
5. **Kernel** - Linux kernel loads
6. **systemd** - Init system starts
7. **Desktop** - User interface ready

## Technology Stack

- **Frontend**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React and Font Awesome
- **Backend**: Express.js (for development)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/linux-boot-process-blog.git
cd linux-boot-process-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   └── index.css      # Global styles and theme
├── server/                # Backend Express server
├── shared/                # Shared types and schemas
└── public/                # Static assets
```

## Contributing

This is an educational project. Feel free to:

- Report issues or suggest improvements
- Submit pull requests for enhancements
- Share feedback on the educational content

## Educational Purpose

This blog serves as a comprehensive guide for:
- System administrators learning about Linux internals
- Students studying operating systems
- Developers interested in low-level system processes
- Anyone curious about what happens when they press the power button

## License

MIT License - see LICENSE file for details

## Acknowledgments

- Thanks to the Linux kernel developers for creating such an elegant boot process
- Inspired by the need to make technical concepts more accessible
- Built with modern web technologies for optimal learning experience