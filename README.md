# 🚀 Yash Palav — Portfolio

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A fast, modern, single-page portfolio built with cutting-edge web technologies. This responsive portfolio showcases professional experience, skills, and projects with elegant animations, a custom cursor effect, and an integrated resume viewer.

## ✨ Key Features

- 🎯 **Live Resume Route**: Direct `/resume` access with inline PDF viewer
- 🧭 **SPA Routing**: Seamless navigation with React Router and Vercel rewrites
- ✨ **Custom Cursor Effects**: Minimalist aura with rotating ring and subtle ghost trail
- 🎬 **Smooth Animations**: Lottie animations with reduced-motion accessibility support
- 📱 **Responsive Design**: Optimized for all device sizes
- 🎨 **Modern UI**: Built with shadcn/ui components and Tailwind CSS

---

## 🛠️ Tech Stack

**Frontend Framework & Build Tools:**
- ⚡ [Vite 5](https://vitejs.dev/) - Lightning-fast build tool and dev server
- ⚛️ [React 18](https://reactjs.org/) - Modern React with concurrent features
- 🔷 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

**Styling & UI:**
- 💎 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🧩 [shadcn/ui](https://ui.shadcn.com/) - Modern component library (Radix primitives)
- 🎨 [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library

**Routing & Data:**
- 🧭 [React Router](https://reactrouter.com/) - Declarative routing for React
- 🎬 [Lottie](https://lottiefiles.com/) - High-quality animations

## 📋 Prerequisites

- **Node.js** 18+ (required by Vite 5)
- **npm** (or pnpm/yarn if you prefer)
- **Git** for cloning the repository

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/YashPalav-26/My-Portfolio.git
cd portfolio-yash
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm run preview
```

## 📱 Demo

🌐 **Live Demo**: [View Portfolio](https://yashpalav.vercel.app) 

The portfolio includes:
- **Interactive Navigation** - Smooth scrolling between sections
- **Project Showcase** - GitHub and live demo links
- **Resume Viewer** - Inline PDF viewing at `/resume`
- **Custom Cursor** - Elegant cursor effects (desktop only)
- **Responsive Design** - Optimized for all screen sizes

## Available Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run build:dev` — development‑mode build
- `npm run preview` — preview built app locally
- `npm run lint` — run ESLint

## Key Features
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Projects with clean GitHub/live icons and hover feedback
- Resume page: `/resume` embeds a PDF viewer for consistent inline viewing
- Custom cursor effect: small dot + soft aura + rotating ring + subtle ghost trail (disabled on touch devices)
- Smooth reveal animations that respect reduced‑motion user preferences
- Optimized SVG favicon for crisp tabs

## 📁 Project Structure

```
portfolio-yash/
├── 📂 public/
│   ├── favicon.svg              # Custom SVG favicon
│   ├── resume.pdf              # Resume PDF file
│   └── placeholder.svg         # Placeholder image
├── 📂 src/
│   ├── 📂 assets/              # Static assets (images, animations)
│   ├── 📂 components/
│   │   ├── 📂 effects/         # Visual effects
│   │   │   └── CursorAura.tsx  # Custom cursor with aura effect
│   │   ├── 📂 motion/          # Animation components
│   │   │   └── Reveal.tsx      # Scroll-triggered animations
│   │   ├── 📂 portfolio/       # Main portfolio sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── 📂 ui/              # Reusable UI components (shadcn/ui)
│   ├── 📂 hooks/               # Custom React hooks
│   ├── 📂 lib/                 # Utility functions
│   ├── 📂 pages/               # Route components
│   │   ├── Index.tsx           # Home page
│   │   ├── Resume.tsx          # Resume viewer page
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # React application entry point
│   └── index.css               # Global styles and design tokens
├── 📄 *.config.*               # Configuration files
└── 📄 package.json             # Dependencies and scripts
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

### How to Contribute
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📞 Support & Contact

- **Author**: Yash Palav
- **Email**: [yashpalav48@gmail.com](mailto:yashpalav48@gmail.com)
- **LinkedIn**: [linkedin.com/in/yashpalav](https://linkedin.com/in/yashpalav)
- **GitHub**: [github.com/YashPalav-26](https://github.com/YashPalav-26)

For support, email [yashpalav48@gmail.com] or create an issue in the repository.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [Yash Palav](https://github.com/YashPalav-26)**

⭐ Star this repository if you found it helpful!

</div>

Copyright (c) 2025 Yash Palav
