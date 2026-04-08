export const PORTFOLIO = {
  name: { first: "Anurag", last: "Munda" },
  tagline: "Design × Code",
  available: true,

  about: {
    headline:
      "Crafting digital experiences that feel alive — where form follows feeling.",
    bio: [
      "I'm a design-minded engineer living at the intersection of code and craft. Based in San Francisco, I build products that feel as good as they look — every pixel purposeful, every interaction a story.",
      "Currently leading design at Luminary Digital, shipping tools that help creatives work faster without thinking less.",
    ],
    // Replace with your actual photo URL or import
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format",
    timezone: "Asia/Kolkata", // Your local timezone (IANA format)
    utcOffset: "UTC+5:30",
  },

  projects: [
    {
      id: "aether",
      name: "Aether OS",
      tag: "UI",
      shortDesc: "Desktop OS concept reimagining human-computer interaction",
      fullDesc:
        "A complete desktop OS concept reimagining human-computer interaction through fluid glass-morphic interfaces and spatial computing principles.",
      fullDesc2:
        "Won Awwwards Site of the Day and FWA nomination. Built with React, Three.js, and WebGL.",
      github: "https://github.com",
      demo: "https://example.com",
      color: "#5eaaf5",
    },
    {
      id: "forma",
      name: "Forma Finance",
      tag: "Web",
      shortDesc:
        "Full-stack financial dashboard reducing onboarding time by 40%",
      fullDesc:
        "Full-stack financial dashboard built for a Series B fintech startup. Complex data made approachable through progressive disclosure.",
      fullDesc2:
        "Stack: Next.js, TypeScript, Supabase, Recharts, Framer Motion.",
      github: "https://github.com",
      demo: "https://example.com",
      color: "#4ecf8a",
    },
    {
      id: "noctua",
      name: "Noctua Studio",
      tag: "Brand",
      shortDesc: "Brand identity & web for a boutique Berlin creative studio",
      fullDesc:
        "Complete brand identity and web presence for a boutique creative studio in Berlin. The brand system centers on the symbolism of the owl.",
      fullDesc2:
        "Deliverables: logo system, color palette, typography scale, and a fully animated portfolio site.",
      github: "https://github.com",
      demo: "https://example.com",
      color: "#a57be8",
    },
  ],

  skills: {
    Frontend: ["React", "Next.js", "CSS", "Tailwind", "Framer"],
    Backend: ["Node.js", "PostgreSQL", "Supabase", "GraphQL"],
    Languages: ["TypeScript", "Python", "Java", "Rust"],
    Blockchain: ["Solidity", "Ethereum", "Web3.js"],
    "Dev Tools": ["Figma", "Three.js", "WebGL", "GSAP", "Git"],
  },

  // Flat list for the block display
  skillsList: [
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "GSAP",
    "Figma",
    "WebGL",
    "Node.js",
    "Motion",
    "CSS",
    "Tailwind",
    "Solidity",
    "Python",
    "Git",
    "Framer",
  ],

  experience: [
    { period: "'23–Now", role: "Lead Designer", company: "Luminary Digital" },
    { period: "'21–'23", role: "UI Engineer", company: "Vertex Systems" },
    { period: "'19–'21", role: "Creative Dev", company: "Studio Mira" },
  ],

  contact: {
    email: "alex@mercer.design",
    phone: "+1 (415) 820-3947",
  },

  social: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    blog: "https://blog.example.com",
    discord: "https://discord.com",
    telegram: "https://t.me",
    resume: "#",
  },

  music: {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    ytUrl: "https://music.youtube.com/watch?v=fHI8X4OXluQ",
  },
} as const;

export type Portfolio = typeof PORTFOLIO;
