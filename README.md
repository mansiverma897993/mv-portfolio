<p align="center">
  <img src="https://raw.githubusercontent.com/mansiverma897993/mv-portfolio/main/screenshots/portfolio.png" alt="MV Portfolio - VS Code themed developer portfolio" width="100%" />
</p>

<h1 align="center">⌨️ MV Portfolio — VS Code Themed Developer Portfolio</h1>

<p align="center">
  An interactive software developer portfolio of <strong>MAN$I VERMA</strong>, built to look and behave like the VS Code editor — complete with a simulated file explorer, syntax-highlighted code views, an integrated terminal console, and a live status bar.
</p>

<p align="center">
  <a href="https://mverma.vercel.app"><strong>🌐 Live Demo</strong></a> ·
  <a href="#features">Features</a> ·
  <a href="#getting-started">Getting Started</a> ·
  <a href="#project-structure">Project Structure</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#license">License</a>
</p>

---

## ✨ Features

- **VS Code UI Recreation** — A pixel-faithful VS Code window: title bar with window controls, activity bar, explorer sidebar, editor tabs, breadcrumbs, and a status bar with a live clock.
- **Real File Structure** — Navigate the portfolio like source files (`Welcome.tsx`, `Experience.tsx`, `Skills.json`, `Projects.tsx`, `contact.tsx`, etc.) in an Explorer sidebar.
- **Preview / Code Toggle** — Switch any section between a **visual preview** and a **syntax-highlighted code view**.
- **Interactive Explorer & Search** — Expandable folders, collapsible sidebar, and file-name search (Ctrl+P style).
- **Integrated Terminal Console** — A working terminal with fun commands: `help`, `about`, `skills`, `deploy`, `neofetch`, and `clear`.
- **Interactive Contact Console** — Simulated VS Code style contact form.
- **Live Clock & Status Bar** — Real-time time, git branch, port, and language indicators.
- **Multiple Sections** — Welcome, Experience, Skills, Projects, Achievements, Resume, Open Source, Community, Content Creation, Learning, Startup.
- **Fully Responsive & Themeable** — Dark developer theme that adapts across devices.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mansiverma897993/mv-portfolio.git
cd mv-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build      # Type-check + production build
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

## 🗂️ Project Structure

```
mv-portfolio/
├── public/                    # Static assets & demo images
├── src/
│   ├── assets/                # Icons & hero images
│   ├── components/            # VS Code-like UI sections
│   │   ├── Welcome.tsx        # Landing / welcome file
│   │   ├── Experience.tsx     # Work experience
│   │   ├── Skills.tsx         # Skills (rendered as Skills.json)
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Achievements.tsx   # Certificates & achievements
│   │   ├── ResumeViewer.tsx   # Resume viewer
│   │   ├── contact.tsx        # Contact console
│   │   ├── OpenSource.tsx     # Open source contributions
│   │   ├── Community.tsx      # Community involvement
│   │   ├── ContentCreation.tsx# Content creation
│   │   ├── Learning.tsx       # Learning journey
│   │   ├── Startup.tsx        # Startup ventures
│   │   ├── CodeViewer.tsx     # Syntax-highlighted code views
│   │   └── ...
│   ├── data/
│   │   ├── portfolioData.ts   # All portfolio content (single source of truth)
│   │   └── simulatedCode.ts   # Simulated source code for code view
│   ├── App.tsx                # VS Code shell layout
│   ├── App.css                # VS Code theme styles
│   ├── index.css
│   └── main.tsx
├── index.html
├── vercel.json                # SPA rewrites for Vercel
└── package.json
```

> 💡 All content lives in `src/data/portfolioData.ts` — edit that file to update your name, experience, skills, projects, and certificates without touching the UI.

## 🧰 Tech Stack

| Layer       | Technology                                            |
| ----------- | ----------------------------------------------------- |
| Framework   | [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool  | [Vite](https://vitejs.dev/)                           |
| Styling     | Vanilla CSS (custom VS Code theme)                    |
| Icons       | [Lucide React](https://lucide.dev/)                   |
| Linting     | ESLint + typescript-eslint                            |
| Deployment  | [Vercel](https://vercel.com/)                          |

## 🔗 Links

- **Live Demo:** https://mverma.vercel.app
- **GitHub:** https://github.com/mansiverma897993

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
