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
    }
  ],
  skills: [
    {
      category: "Programming",
      skills: [
        { name: "C++", level: 90 },
        { name: "C", level: 85 },
        { name: "Rust", level: 88 },
        { name: "Python", level: 90 },
        { name: "Go (Golang)", level: 80 },
        { name: "TypeScript", level: 95 }
      ]
    },
    {
      category: "Full-Stack Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Next.js", level: 92 },
        { name: "Express", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "GSAP", level: 85 }
      ]
    },
    {
      category: "Database & Cache",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 92 },
        { name: "Redis", level: 85 },
        { name: "Prisma ORM", level: 90 },
        { name: "MySQL", level: 88 }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "GCP", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Git & GitHub", level: 95 },
        { name: "WSL", level: 90 }
      ]
    },
    {
      category: "AI Skills",
      skills: [
        { name: "Machine Learning (ML)", level: 80 },
        { name: "LLMs & RAG", level: 88 },
        { name: "Claude Code", level: 92 },
        { name: "Cursor Skill", level: 95 }
      ]
    },
    {
      category: "Blockchain",
      skills: [
        { name: "Solana", level: 90 },
        { name: "Rust (Anchor)", level: 88 },
        { name: "Wallet Adapter", level: 85 },
        { name: "Solidity", level: 80 },
        { name: "Ethereum", level: 82 },
        { name: "dApps Development", level: 88 }
      ]
    }
  ],
  projects: [
    {
      title: "AthenaMock",
      description: "A developer emulator for AWS Athena query execution, supporting SQL parsing, Athena metadata, and custom WorkGroup deletion rules with validation checks.",
      image: "athenamock",
      tags: ["Java", "Spring Boot", "AWS Athena", "Maven", "React"],
      liveLink: "https://github.com/mansiverma/athenamock",
      githubLink: "https://github.com/mansiverma/athenamock"
    },
    {
      title: "VSCode Portfolio Theme",
      description: "An elegant, interactive portfolio mimicking the VS Code editor UI, with real file structures, syntax-highlighted code views, and a interactive contact console.",
      image: "vscode_portfolio",
      tags: ["React", "TypeScript", "Vite", "Vanilla CSS", "Vercel"],
      liveLink: "https://mansiverma-portfolio.vercel.app",
      githubLink: "https://github.com/mansiverma/vscode-portfolio"
    },
    {
      title: "ChatAI Playground",
      description: "A beautiful OpenAI and Claude client interface with session storage, custom prompt recipes, markdown tables formatting, and code-block copy functionalities.",
      image: "chatai_playground",
      tags: ["Next.js", "TypeScript", "CSS Modules", "LLM APIs"],
      liveLink: "https://chatai-playground.vercel.app",
      githubLink: "https://github.com/mansiverma/chatai-playground"
    }
  ],
  certificates: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "May 2026",
      description: "Validates cloud architecture design, serverless compute, microservice orchestration, secure data storage, and global infrastructure scaling.",
      image: "/aws_cert.png",
      verificationLink: "https://github.com/mansiverma897993"
    },
    {
      title: "Solana Anchor Developer Certification",
      issuer: "Solana Foundation / Anchor",
      issueDate: "March 2026",
      description: "Validates Rust smart contract structures, Solana program architecture, account state serialization, security constraints, and custom DAO governance modules.",
      image: "/solana_cert.png",
      verificationLink: "https://github.com/mansiverma897993"
    },
    {
      title: "Advanced React & Next.js Professional",
      issuer: "Meta Frontend Certifications",
      issueDate: "January 2026",
      description: "Validates advanced component trees, concurrent features, server-side rendering, hydration metrics, custom state machines, and high-performance Webpack/Vite bundlers.",
      image: "/react_cert.png",
      verificationLink: "https://github.com/mansiverma897993"
    }
  ]
};
