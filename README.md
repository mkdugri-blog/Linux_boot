# GitBlogFlow - Linux Boot Process Guide

A comprehensive, interactive guide to the Linux boot process, built as a static site for GitHub Pages deployment.

## 🚀 Features

- **Interactive Flowchart**: Click through each step of the Linux boot process
- **Detailed Explanations**: In-depth coverage of BIOS/UEFI, GRUB, kernel initialization, and systemd
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Serverless**: Deployed on GitHub Pages with no backend required

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Radix UI components
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: React Query for data fetching
- **Deployment**: GitHub Pages (static hosting)

## 📖 Content Coverage

The guide covers the complete Linux boot process:

1. **Power On** - CPU initialization
2. **BIOS/UEFI** - Firmware initialization
3. **POST** - Hardware verification
4. **GRUB** - Boot loader menu
5. **Linux Kernel** - Kernel loading and initialization
6. **systemd** - Init system and service management
7. **Desktop Environment** - User interface startup

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### GitHub Pages Deployment

1. **Fork or clone this repository**
2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/ (root)`
   - Save

3. **Push to main branch** - The GitHub Action will automatically:
   - Build the static site
   - Deploy to GitHub Pages
   - Make it available at `https://your-username.github.io/GitBlogFlow`

## 📁 Project Structure

```
GitBlogFlow/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   ├── hooks/         # Custom React hooks
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # App entry point
│   ├── index.html         # HTML template
│   └── 404.html           # SPA routing support
├── .github/workflows/     # GitHub Actions
├── vite.config.ts         # Development Vite config
├── vite.config.pages.ts   # Production Vite config
└── package.json           # Dependencies and scripts
```

## 🔧 Configuration

### Base Path
The site is configured for the `/GitBlogFlow/` base path. If you change the repository name, update:
- `vite.config.pages.ts` - `base` property
- `client/index.html` - Open Graph URLs
- `client/404.html` - SPA routing path

### Customization
- **Content**: Edit `client/src/pages/home.tsx` to modify the boot process content
- **Styling**: Modify `client/src/index.css` and Tailwind classes
- **Components**: Add new components in `client/src/components/`

## 🌐 SPA Routing

The site uses client-side routing with SPA support for GitHub Pages:
- Direct links to routes work correctly
- Browser back/forward buttons function properly
- 404.html handles route fallbacks

## 📱 Responsive Design

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactive elements
- Optimized typography for all screen sizes
- Collapsible navigation for mobile devices

## 🎨 Design Features

- **Dark Theme**: Optimized for reading technical content
- **Interactive Elements**: Hover effects and smooth transitions
- **Progress Bar**: Shows scroll progress through the content
- **Gradient Borders**: Modern visual elements
- **Font Awesome Icons**: Consistent iconography throughout

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own educational content!

## 🔗 Live Demo

Visit the live site: [https://your-username.github.io/GitBlogFlow](https://your-username.github.io/GitBlogFlow)

---

Built with ❤️ for the Linux community