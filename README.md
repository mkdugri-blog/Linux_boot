# Linux Boot Process Explained

A modern, interactive technical blog that explains the Linux boot process from power button to desktop environment. Built with React, TypeScript, and Tailwind CSS for deployment on GitHub Pages.

## 🚀 Features

- **Interactive Flowchart**: Click through each boot stage to learn detailed explanations
- **Modern Dark Theme**: Optimized for technical content readability
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Educational Content**: Comprehensive guide covering BIOS/UEFI, POST, GRUB, kernel initialization, and systemd
- **Static Site**: No backend required, perfect for GitHub Pages hosting

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI components for accessibility
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Icons**: Lucide React and Font Awesome

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/linux-boot-process-blog.git
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

4. Build for production:
```bash
npm run build
```

## 🚀 Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The built files will be in `dist/public/` directory

3. Deploy to GitHub Pages:
   - Push your code to a GitHub repository
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose the branch containing your built files
   - Set the folder to `/dist/public` or copy the contents to your gh-pages branch

## 📚 Content Structure

The blog covers the complete Linux boot process:

1. **Power On** - CPU starts executing from firmware
2. **BIOS/UEFI** - Firmware initialization and hardware setup
3. **POST** - Power-On Self-Test hardware verification
4. **GRUB Boot Loader** - Operating system selection and kernel loading
5. **Linux Kernel** - Kernel decompression and system initialization
6. **systemd** - Init system and service management
7. **Desktop Environment** - User interface and login manager

## 🎨 Customization

The theme uses CSS custom properties for easy customization. Main color variables are defined in `client/src/index.css`:

- `--accent-blue`: Primary accent color
- `--accent-green`: Success/Linux theme color
- `--accent-purple`: Secondary accent color
- `--dark-primary`: Main background color
- `--text-primary`: Primary text color

## 📄 License

MIT License - feel free to use this project for educational purposes.

## 🐧 About

This project aims to make the complex Linux boot process accessible to developers and system administrators through interactive visualization and clear explanations.