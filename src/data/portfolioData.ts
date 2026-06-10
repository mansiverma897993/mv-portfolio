export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  image: string;
  verificationLink: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string; level?: number }[];
}

export interface PortfolioData {
  name: string;
  title: string;
  secondaryTitle?: string;
  subtitle: string;
  email: string;
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    linktree?: string;
    youtube?: string;
  };
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: Project[];
  certificates?: CertificateItem[];
  resumeUrl?: string;
}

export const portfolioData: PortfolioData = {
  name: "MAN$I VERMA",
  title: "Full Stack Software Developer",
  secondaryTitle: "Blockchain Developer, AI Evangelist",
  subtitle: "Building full-stack cloud applications, developer tools, and interactive experiences.",
  resumeUrl: "https://drive.google.com/file/d/11SlM_7AdR_TNV3rbJCZh_x4hSWNyOVWh/view?usp=drive_link",
  email: "missmv897@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/mansi-verma-4794a4328/",
    github: "https://github.com/mansiverma897993",
    twitter: "https://x.com/MansiVe61115132?t=cZMkDa3EYq1LpVr-BXoZ3g&s=09",
    linktree: "https://linktr.ee/MANSIVERMA?utm_source=linktree_profile_share&ltsid=3f471ea5-2106-4ba3-b890-c162ed3528d4",
    youtube: "https://www.youtube.com/@expressbymansi"
  },
  experience: [
    {
      role: "Full Stack Software Developer",
      company: "Neeyat AI",
      period: "Mar 2026 - Present",
      location: "Remote, India",
      description: "Engineered scalable RESTful APIs and optimized database queries to enhance core platform performance. Worked on backend and full-stack systems using Node.js, Express.js, and MongoDB. Designed and improved RESTful APIs, JWT authentication, and database-driven backend services.",
      tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Code Optimization"],
      current: true
    },
    {
      role: "Blockchain Lead & Coordinator",
      company: "CoE AI Skills Lab, KIET",
      period: "Feb 2026 - Present",
      location: "Ghaziabad, India",
      description: "Led the planning and execution of blockchain practicals, workshops, and bootcamps under the AI Skills Lab Centre of Excellence (CoE). Coordinated with faculty, industry experts, and student teams to deliver hands-on, industry-relevant training programs. Guided participants through blockchain concepts and applications while ensuring smooth operations and high engagement across domains.",
      tags: ["Blockchain", "AI", "Solana", "Rust", "Anchor", "Smart Contracts", "Technical Leadership"],
      current: true
    },
    {
      role: "Open Source Contributor",
      company: "Summer of Bitcoin + LFX Mentorship",
      period: "May 2026 - Present",
      location: "Remote",
      description: "Contributed to open-source systems and got shortlisted in the Summer of Bitcoin program. Worked on LFX mentorship projects including contributions to Meshery ecosystem and community-driven development. Collaborated with maintainers on real-world engineering tasks, issue resolution, and backend improvements.",
      tags: ["Open Source", "Bitcoin", "LFX Mentorship", "Meshery", "Go", "Kubernetes", "Backend Development"],
      current: true
    }
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "C", level: 85 },
        { name: "Rust", level: 88 },
        { name: "Python", level: 90 },
        { name: "Go (Golang)", level: 80 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 95 }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "Tailwind CSS", level: 95 },
        { name: "GSAP", level: 85 },
        { name: "Responsive Web Design", level: 90 },
        { name: "3D Animated UI", level: 85 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 88 },
        { name: "TypeScript", level: 95 },
        { name: "RESTful APIs", level: 95 },
        { name: "JWT Authentication", level: 90 },
        { name: "Middleware", level: 88 },
        { name: "CRUD Operations", level: 95 },
        { name: "Scalable Architecture", level: 90 },
        { name: "Infrastructure", level: 85 }
      ]
    },
    {
      category: "Databases & Cache",
      skills: [
        { name: "MongoDB", level: 92 },
        { name: "Mongoose", level: 90 },
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "SQL", level: 90 },
        { name: "Prisma ORM", level: 90 },
        { name: "Redis", level: 85 },
        { name: "Database Design", level: 88 },
        { name: "Schema Modeling", level: 90 }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 82 },
        { name: "GCP", level: 78 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "WSL", level: 90 },
        { name: "Git", level: 95 },
        { name: "GitHub", level: 95 },
        { name: "Postman", level: 92 },
        { name: "Vercel", level: 90 },
        { name: "Deployment", level: 88 },
        { name: "API Testing", level: 90 }
      ]
    },
    {
      category: "AI Skills",
      skills: [
        { name: "Machine Learning (ML)", level: 80 },
        { name: "LLMs", level: 88 },
        { name: "RAG", level: 85 },
        { name: "Claude Code", level: 92 },
        { name: "Cursor Skill", level: 95 },
        { name: "Prompt Engineering", level: 90 }
      ]
    },
    {
      category: "Blockchain & Web3",
      skills: [
        { name: "Solana", level: 90 },
        { name: "Rust (Anchor)", level: 88 },
        { name: "Wallet Adapter", level: 85 },
        { name: "DeFi Protocols", level: 80 },
        { name: "AMM", level: 78 },
        { name: "PDA", level: 85 },
        { name: "Solidity", level: 80 },
        { name: "Ethereum", level: 82 },
        { name: "Smart Contracts", level: 88 },
        { name: "dApps", level: 88 }
      ]
    },
    {
      category: "Core Concepts",
      skills: [
        { name: "Data Structures and Algorithms", level: 90 },
        { name: "Problem Solving", level: 92 },
        { name: "OOPs", level: 90 },
        { name: "DBMS", level: 88 },
        { name: "Operating Systems", level: 85 },
        { name: "System Design", level: 85 },
        { name: "Code Optimization", level: 88 }
      ]
    }
  ],
  projects: [
    {
      title: "Roow : AI Pipeline Builder",
      description: "A visual pipeline builder for AI workflows that allows users to construct workflows by connecting nodes in a graphical interface. Validates pipeline structures on the backend to ensure they form a Directed Acyclic Graph (DAG) before execution.",
      image: "/roow_demo.png",
      tags: ["ReactFlow", "React", "FastAPI", "Python", "DAG Validation", "Cycle Detection", "Full Stack"],
      liveLink: "https://roow-build.onrender.com/",
      githubLink: "https://github.com/mansiverma897993/roow"
    },
    {
      title: "DNA DAO : Decentralized AI Governance Ecosystem",
      description: "A premium, high-fidelity decentralized autonomous organization platform powered by Solana smart contracts, AI-driven proposal engines, member personality genetic profiling, and a gorgeous glassmorphic fluid UI.",
      image: "/dnadao_demo.png",
      tags: ["Solana", "Rust", "Anchor", "Next.js", "Tailwind CSS", "FastAPI", "Helius", "Arweave", "Web3 + AI"],
      liveLink: "https://dao-dna.vercel.app/",
      githubLink: "https://github.com/mansiverma897993/dnadao"
    },
    {
      title: "GTX.SYS - AI Security for Solana Traders",
      description: "Production-ready, AI-powered Solana trading security intelligence terminal protecting retail traders from rug pulls, scam tokens, sniper traps, and whale manipulation before executing transactions.",
      image: "/gtx_demo.png",
      tags: ["Next.js", "Tailwind CSS", "Rust", "Anchor Framework", "Python", "FastAPI", "Jito", "AI + Security"],
      liveLink: "https://gtx-two.vercel.app/",
      githubLink: "https://github.com/mansiverma897993/GTX"
    },
    {
      title: "SolChit Fund 3.0",
      description: "Decentralized rotating savings protocol (ROSCA / Chit Fund) built on the Solana blockchain using Rust and the Anchor framework. Replaces traditional trust-based organizers with deterministic on-chain logic.",
      image: "/solchit_demo.png",
      tags: ["Rust", "Solana", "Anchor Program", "SPL Token", "Next.js", "Web3 Vaults"],
      liveLink: "https://github.com/mansiverma897993/solchit-fund-3.0",
      githubLink: "https://github.com/mansiverma897993/solchit-fund-3.0"
    },
    {
      title: "GTG (Good To Go) – Open Source Discovery Platform",
      description: "Full-stack application helping developers discover and contribute to open source projects, aggregating listings from popular programs like GSoC, Hacktoberfest, Summer of Bitcoin, and more.",
      image: "/gtg_demo.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "GitHub API"],
      liveLink: "https://good-to-go-qn4w.vercel.app/",
      githubLink: "https://github.com/mansiverma897993/Good-to-Go"
    },
    {
      title: "VSCode Portfolio Theme",
      description: "An elegant, interactive portfolio mimicking the VS Code editor UI, with real file structures, syntax-highlighted code views, and an interactive contact console.",
      image: "/vscode_portfolio_demo.png",
      tags: ["React", "TypeScript", "Vite", "Vanilla CSS", "Vercel"],
      liveLink: "https://mansiverma-portfolio.vercel.app",
      githubLink: "https://github.com/mansiverma897993/mv-portfolio"
    }
  ],
  certificates: [
    {
      title: "Aspire Leaders Program",
      issuer: "Aspire Institute (founded by Harvard Faculty)",
      issueDate: "August 2025",
      description: "A fully-funded leadership development program designed for first-generation college students, validating leadership module completion and global community impact.",
      image: "/aspire_cert.png",
      verificationLink: "https://drive.google.com/file/d/1vTYLfPC3M1wXMKg-aH445oNsOGgVKEjB/view"
    },
    {
      title: "Blockchain & AI Mentor & Coordinator",
      issuer: "AI Skills Lab (KIET / HP / Intel Collaboration)",
      issueDate: "February 2026",
      description: "Served as Blockchain Lead and Coordinator, mentoring and teaching blockchain and AI concepts in the 'LOCK IN' Bootcamp on AI & Blockchain Technologies.",
      image: "/kiet_mentor_cert.png",
      verificationLink: "https://drive.google.com/file/d/1EZbFiSpLbSb-5ACZoQc1tMcZcbrA-wUC/view?usp=drive_link"
    },
    {
      title: "Solana Smart Contract Developer",
      issuer: "Cyfrin Updraft",
      issueDate: "April 2026",
      description: "Validates comprehensive knowledge of the Solana programming model, Anchor framework, account structures, program-derived addresses, and secure Rust smart contracts.",
      image: "/cyfrin_solana_badge.png",
      verificationLink: "https://profiles.cyfrin.io/u/missmv897/achievements/solana"
    },
    {
      title: "HackAura Hackathon 2025 - First Runner-Up",
      issuer: "Geeks Hive / Unstop",
      issueDate: "February 2025",
      description: "Secured 1st Runner-Up with Team Web3dawgs by building Votex, demonstrating exceptional innovation, technical design, and problem-solving skills.",
      image: "/hackaura_cert.png",
      verificationLink: "https://drive.google.com/file/d/1y0EtY3cdKyKNEiaoPF1ZRszBhrwiqgRF/view"
    },
    {
      title: "0 to 1 Hackathon finalist - E-Summit 2025",
      issuer: "IIIT Delhi",
      issueDate: "March 2025",
      description: "Selected as finalist and participated in the 0 to 1 Hackathon at IIIT Delhi's E-Summit 2025, validating entrepreneurial leadership and collaborative product design.",
      image: "/esummit_cert.png",
      verificationLink: "https://drive.google.com/file/d/1aipMyn7mmcyv88hPWAPJyA7PX6SBJ5xR/view"
    },
    {
      title: "GDG on Campus Solution Challenge Participant",
      issuer: "Google Developer Groups (GDG) On Campus",
      issueDate: "January 2025",
      description: "Participated in the Google Solution Challenge, designing and building sustainable solutions to address real-world problems using Google Cloud and AI technology.",
      image: "/google_solution_cert.png",
      verificationLink: "https://drive.google.com/file/d/1uCzFib6QDje-n_UKNqnECBTgfYHY9oJk/view"
    }
  ]
};
