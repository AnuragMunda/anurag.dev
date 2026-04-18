export const PORTFOLIO = {
  name: { first: "Anurag", last: "Munda" },
  tagline: "Design × Code",
  available: true,

  about: {
    headline:
      "Crafting <em>digital experiences</em> that feel alive - where form follows feeling.",
    bio: [
      "A full-stack developer with 4+ years of experience and a blockchain soul, obsessed with building systems that are as secure as they are scalable.",
      "I\'m an architect of the modern web, crafting end-to-end applications that span from the user's screen to the blockchain ledger.",
      // "Currently leading design at Luminary Digital, shipping tools that help creatives work faster without thinking less.",
    ],
    // Replace with your actual photo URL or import
    avatar:
      "https://images.unsplash.com/photo-1728218948405-d749e7d1851e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timezone: "Asia/Kolkata", // Your local timezone (IANA format)
    utcOffset: "UTC+5:30",
  },

  projects: [
    {
      id: "x402",
      name: "402 Forbidden",
      tag: "Web + Blockchain",
      shortDesc: 'A cryptographically secured "Password Heist" arena game on Solana.',
      fullDesc: `402 Forbidden is a Secret logic arena game on Solana. Players compete against a cryptographically-secured AI Guardian
      that protects a growing USDC vault, with the prize logic and fee distribution handled
      by the modular x402 V2 protocol.`,
      fullDesc2: "Stack: Next.js, TypeScript, MongoDB, Tailwind, Express, Node.js, Solana, Gemini API, x402 protocol, Anchor, Rust",
      github: "https://github.com/AnuragMunda/402Forbidden",
      demo: "",
      color: "#5eaaf5",
    },
    {
      id: "eitm",
      name: "Explain it to me",
      tag: "Web",
      shortDesc:
        "Full-stack web app that explains complex topics in a simplified manner.",
      fullDesc: `A full-stack AI application that leverages the Gemini LLM to breakdown complex topics in a simple way.\nIntegrated Google Gemini API to process natural language queries
        and generate context-aware, simplified content dynamically.`,
      fullDesc2: "Stack: Next.js, TypeScript, MongoDB, Tailwind, Framer Motion",
      github: "https://github.com/AnuragMunda/explain-it-to-me",
      demo: "https://explainit-psi.vercel.app/",
      color: "#5eaaf5",
    },
    {
      id: "soltip",
      name: "SolTip",
      tag: "Web + Blockchain",
      shortDesc: "A decentralized tipping platform on Solana Blockchain.",
      fullDesc: `A decentralized app on the Solana blockchain that enables anyone with a Solana wallet to receive support through crypto-based tips, similar to “Buy Me a Coffee” but leveraging blockchain technology.`,
      fullDesc2:
        "Stack: Next.js, TypeScript, Solana, Rust, Anchor, Tailwind, Solana/web3.js",
      github: "https://github.com/AnuragMunda/soltip-dapp",
      demo: "https://soltip-dapp.vercel.app/",
      color: "#4ecf8a",
    },
    {
      id: "blockmeter",
      name: "Block Meter",
      tag: "Web",
      shortDesc: "A gas fee analyzer tool for various blockchains.",
      fullDesc:
        "A full-stack application for viewing live gas prices, visualizing historical trends, and tracking gas fee estimates. It fetches real-time and historical gas data from Owlracle API and serves it to the UI. It also pushes live updates over WebSocket and handles backend scheduling via cron jobs.",
      fullDesc2:
        "Stack: Next.js, TypeScript, Socket.io, Recharts, Tailwind, Zustand, Nest.js",
      github: "https://github.com/AnuragMunda/blockmeter-frontend",
      demo: "https://blockmeter.vercel.app/",
      color: "#a57be8",
    },
  ],

  skills: {
    Frontend: ["React", "Next.js", "CSS", "Tailwind", "Framer"],
    Backend: ["Node.js", "Express", "Nest.js", "GraphQL"],
    Database: ["PostgreSQL", "MongoDB"],
    Languages: ["TypeScript", "JavaScript", "Solidity", "Rust"],
    Blockchain: ["Solana", "Ethereum"],
    "Dev Tools": [
      "Docker",
      "Zustand",
      "Foundry",
      "Hardhat",
      "Viem",
      "Wagmi",
      "Solana Kit",
      "Anchor",
      "Git",
    ],
  },

  // Flat list for the block display
  skillsList: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind",
    "Solidity",
    "Rust",
    "Git",
    "Express",
    "Nest.js",
    "GraphQL",
    "Docker",
    "Ethereum",
    "Solana",
  ],

  experience: [
    {
      period: "Oct'24–Nov'25",
      role: "Freelance Web3 Developer",
      company: "Self employed",
    },
    {
      period: "Dec'21–Apr'24",
      role: "Full-stack Blockchain Developer",
      company: "Vegavid Technology",
    },
    {
      period: "Feb'21–Jun'21",
      role: "Programmer Analyst Trainee",
      company: "Cognizant",
    },
  ],

  contact: {
    email: "anurag.munda005@gmail.com",
    phone: "+91 8458054171",
  },

  social: {
    x: "https://x.com/anu_mun",
    github: "https://github.com/AnuragMunda",
    linkedin: "https://www.linkedin.com/in/anuragmunda",
    blog: "https://anuragmunda.medium.com/",
    discord: "https://discord.com/users/anurag_munda",
    telegram: "https://t.me/SheniGun",
    resume:
      "https://drive.google.com/file/d/1KjmILT2Q5a0PuaiQZEjoeSB8_yRyxarE/view?usp=sharing",
  },

  music: {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    ytUrl: "https://music.youtube.com/watch?v=fHI8X4OXluQ",
  },
} as const;

export type Portfolio = typeof PORTFOLIO;
