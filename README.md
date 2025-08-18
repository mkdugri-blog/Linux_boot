# Linux Boot Process - Technical Blog

An interactive technical blog explaining the Linux boot process from power button to desktop environment. Built with React, TypeScript, and Tailwind CSS.

![Linux Boot Process](https://img.shields.io/badge/Linux-Boot%20Process-green)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-cyan)

## 🚀 Live Demo

Visit the live site: [https://YOUR-USERNAME.github.io/linux-boot-process](https://YOUR-USERNAME.github.io/linux-boot-process)

## 📋 Features

- **Interactive Flowchart**: Click through each stage of the Linux boot process
- **Educational Content**: Detailed explanations of BIOS/UEFI, POST, GRUB, kernel initialization, systemd, and desktop environments
- **Modern UI**: Dark theme optimized for technical content with smooth animations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Fast Loading**: Optimized for performance with Vite build system

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Shadcn/ui for consistent, accessible components
- **Icons**: Font Awesome and Lucide React
- **Fonts**: Inter and JetBrains Mono from Google Fonts

## 📦 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/linux-boot-process.git
   cd linux-boot-process
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `linux-boot-process` (or your preferred name)
   - Make it public (required for GitHub Pages on free accounts)

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Linux boot process blog"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The deployment will start automatically after pushing to main

4. **Update the site URL**
   - Once deployed, update the `og:url` meta tag in `client/index.html`
   - Replace `https://your-github-username.github.io/linux-boot-process` with your actual URL

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Triggers on every push to the main branch
- Installs dependencies
- Builds the static site using Vite
- Deploys to GitHub Pages automatically

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles and theme
│   └── index.html         # HTML template
├── .github/workflows/     # GitHub Actions for deployment
├── vite.config.github-pages.ts  # Vite config for GitHub Pages
└── README.md             # Project documentation
```

## 🎨 Customization

### Theme Colors
Edit the CSS variables in `client/src/index.css` to customize the color scheme:
```css
:root {
  --accent-blue: hsl(210, 100%, 66%);
  --accent-purple: hsl(250, 84%, 54%);
  --accent-green: hsl(156, 72%, 67%);
  /* ... more variables */
}
```

### Content
Update the educational content in `client/src/pages/home.tsx`:
- Modify the `stepContent` object for flowchart descriptions
- Edit the detailed article sections for in-depth explanations

## 📱 Mobile Responsive

The site is fully responsive with:
- Collapsible mobile navigation
- Vertical flowchart layout on small screens
- Touch-friendly interactive elements
- Optimized typography for mobile reading

## 🔧 Build Commands

- `npm run dev` - Start development server
- `npx vite build --config vite.config.github-pages.ts` - Build for GitHub Pages
- `npm run check` - Type checking

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

If you have any questions or issues, please open a GitHub issue.

---

**Built with ❤️ for the Linux community**