export const portfolioData = {
  personal: {
    name: "Yahyo Rustamjonov",
    nick: "Yahyo",
    githubUsername: "Otabek1789",
    role: "Creative Frontend & React Developer",
    secondaryRole: "UI/UX & Web Animation Enthusiast",
    bio: "Zamonaviy, yuqori unumdorlikka ega va vizual jihatdan hayratda qoldiruvchi web interfeyslar yaratuvchi dasturchi. Animatsiyalar, mikrodizayn va toza arxitektura ustasi.",
    quote: "Throughout Heaven and Earth, I Alone Am The Honored One",
    location: "Toshkent, O'zbekiston",
    status: "🟢 Loyihalar uchun ochiq (Available for hire)",
    avatarUrl: "https://avatars.githubusercontent.com/u/75315020?v=4",
    email: "yahyorustamjonov@gmail.com",
    telegram: "https://t.me/yahyorustamjonov",
    github: "https://github.com/Otabek1789",
    githubRepos: "https://github.com/Otabek1789?tab=repositories"
  },
  stats: [
    { label: "GitHub Repositories", value: "15+", suffix: "faol" },
    { label: "Jonli Loyihalar (Live)", value: "8+", suffix: "Vercel" },
    { label: "Tajriba & Amaliyot", value: "2+", suffix: "yil" },
    { label: "Kod Sifati & Responsivlik", value: "100%", suffix: "mobil" }
  ],
  categories: [
    { id: "all", name: "Barchasi" },
    { id: "webapp", name: "Web Ilovalar" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "gaming", name: "O'yin & Media" }
  ],
  projects: [
    {
      id: "nexus-gaming",
      title: "Nexus Gaming",
      tagline: "Ultra-zamonaviy Cyberpunk Gaming Hub & Portal",
      description: "Zamonaviy o'yinlar olamiga bag'ishlangan portal. Yuqori darajadagi neon vizual effektlar, o'yinlar ro'yxati, dinamik kartalar va qulay interfeysga ega platforma.",
      category: "gaming",
      categoryName: "O'yin & Media",
      tech: ["JavaScript", "HTML5", "CSS3 Neon", "Responsive UI", "Vercel"],
      liveUrl: "https://nexusgaming-eta.vercel.app",
      githubUrl: "https://github.com/Otabek1789/Nexus-Gaming",
      featured: true,
      accentColor: "#00f2fe",
      badge: "Mashhur Loyiha",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.15), rgba(79,172,254,0.05))"
    },
    {
      id: "moderno-store",
      title: "Moderno Online Store",
      tagline: "E-Commerce Onlayn Do'kon Platformasi",
      description: "Zamonaviy mahsulotlar katalogi, interaktiv savatcha boshqaruvi, mahsulotlarni saralash va tezkor buyurtma berish imkoniyatini taqdim etuvchi do'kon sayti.",
      category: "ecommerce",
      categoryName: "E-Commerce",
      tech: ["JavaScript", "CSS Grid", "E-Commerce UI", "Cart State", "Vercel"],
      liveUrl: "https://moderno-three.vercel.app",
      githubUrl: "https://github.com/Otabek1789/Moderno-Store",
      featured: true,
      accentColor: "#ff007f",
      badge: "E-Commerce",
      gradient: "linear-gradient(135deg, rgba(255,0,127,0.15), rgba(114,9,183,0.05))"
    },
    {
      id: "bogcha-top",
      title: "Bog'cha Top",
      tagline: "Bolalar Bog'chalari Qidiruv & Taqdimot Tizimi",
      description: "Ota-onalar uchun bolalar bog'chalarini qulay izlash, ta'lim sharoitlarini ko'rish va ma'lumot olish imkoniyatini beruvchi ijtimoiy web ilova.",
      category: "webapp",
      categoryName: "Web Ilovalar",
      tech: ["JavaScript", "Interactive Map UI", "Filter System", "Mobile First", "Vercel"],
      liveUrl: "https://bogchatop-five.vercel.app",
      githubUrl: "https://github.com/Otabek1789/BogchaTop",
      featured: true,
      accentColor: "#10b981",
      badge: "Ijtimoiy Loyiha",
      gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.05))"
    },
    {
      id: "counter-strike-2",
      title: "Counter-Strike 2 Portal",
      tagline: "CS2 Interactive Fan Experience & Showcase",
      description: "Valve Counter-Strike 2 o'yini muxlislari uchun eksklyuziv multimedia sahifasi. Video animatsiyalar, dinamik qurol & xaritalar galereyasi va e-sport ruhiyati.",
      category: "gaming",
      categoryName: "O'yin & Media",
      tech: ["HTML5", "CSS3 Keyframes", "Gaming UI", "Audio/Visual", "Vercel"],
      liveUrl: "https://counter-strike-2-nine.vercel.app",
      githubUrl: "https://github.com/Otabek1789/CounterStrike_2",
      featured: false,
      accentColor: "#f59e0b",
      badge: "Gaming UI",
      gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.05))"
    },
    {
      id: "elrizo-nasiya",
      title: "ELRIZO Nasiya Savdo",
      tagline: "Fintech & Halol Nasiya Savdo Xizmati",
      description: "To'lovlarni qulay bo'lib to'lash (muddatli to'lov) va mahsulotlar ro'yxatini ko'rish uchun mo'ljallangan qulay moliya-savdo web platformasi.",
      category: "ecommerce",
      categoryName: "E-Commerce",
      tech: ["JavaScript", "Calculator UI", "Fintech Logic", "Responsive", "Vercel"],
      liveUrl: "https://elrizonasiyasavdo.vercel.app",
      githubUrl: "https://github.com/Otabek1789/ELRIZO-NASIYA-SAVDO",
      featured: false,
      accentColor: "#8b5cf6",
      badge: "Fintech",
      gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.05))"
    },
    {
      id: "elite-sport",
      title: "ELITESPORT",
      tagline: "Professional Sport Kiyimlari & Anjomlari",
      description: "Professional sportchilar va sog'lom turmush tarzi ishqibozlari uchun sport ekipirovkalari taqdimoti va buyurtma qilish vitrinasi.",
      category: "ecommerce",
      categoryName: "E-Commerce",
      tech: ["HTML5", "CSS3 Flexbox", "Sport Showcase", "Smooth Scroll", "Vercel"],
      liveUrl: "https://elitesport-gamma.vercel.app",
      githubUrl: "https://github.com/Otabek1789/ELITESPORT",
      featured: false,
      accentColor: "#ef4444",
      badge: "Sport Brend",
      gradient: "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(249,115,22,0.05))"
    },
    {
      id: "fast-food",
      title: "Fast Food Express",
      tagline: "Tezkor Taomlar & Yetkazib Berish Menyusi",
      description: "Burgerlar, ichimliklar va mazali taomlar menyusi bilan qiziqarli taom yetkazib berish sahifasi. Ishtaha ochar dizayn va vizual taomlar tanlovi.",
      category: "webapp",
      categoryName: "Web Ilovalar",
      tech: ["HTML5", "CSS3 Transitions", "Menu UI", "Mobile Friendly", "Vercel"],
      liveUrl: "https://fast-food-three-navy.vercel.app",
      githubUrl: "https://github.com/Otabek1789/Fast_Food",
      featured: false,
      accentColor: "#eab308",
      badge: "Restoran",
      gradient: "linear-gradient(135deg, rgba(234,179,8,0.15), rgba(245,158,11,0.05))"
    },
    {
      id: "salom-project",
      title: "Salom Creative Web",
      tagline: "Interaktiv Veb Tajriba & Eksperimentlar",
      description: "Zamonaviy veb texnologiyalari va animatsion strukturalar sinovi uchun yaratilgan yorqin ijodiy loyiha.",
      category: "webapp",
      categoryName: "Web Ilovalar",
      tech: ["JavaScript", "HTML5", "CSS Animations", "Creative UI", "Vercel"],
      liveUrl: "https://salom-chi-ten.vercel.app",
      githubUrl: "https://github.com/Otabek1789/salom",
      featured: false,
      accentColor: "#06b6d4",
      badge: "Creative Lab",
      gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.05))"
    }
  ],
  skillCategories: [
    {
      name: "Frontend Arxitekturasi",
      icon: "Code2",
      description: "Zamonaviy va komponentli veb-ilovalarni yaratish poydevori",
      skills: [
        { name: "React.js", level: 92, note: "Hooks, SPA, Component Architecture" },
        { name: "JavaScript (ES6+)", level: 95, note: "Async/Await, DOM API, Closures" },
        { name: "HTML5 Semantic", level: 98, note: "SEO, Accessibility, Semantic Tags" },
        { name: "CSS3 & Modern CSS", level: 94, note: "Flexbox, Grid, Custom Properties" }
      ]
    },
    {
      name: "Animatsiyalar & Vizual UI",
      icon: "Sparkles",
      description: "Foydalanuvchini rom etuvchi interaktiv effektlar",
      skills: [
        { name: "Micro-interactions & Hover", level: 96, note: "3D Tilt, Glare, Magnetic UI" },
        { name: "CSS Keyframe Animations", level: 93, note: "Smooth Transforms & Curves" },
        { name: "Glassmorphism & Neon Design", level: 95, note: "Backdrop filters, Glows" },
        { name: "Canvas & Particle Systems", level: 88, note: "Interactive Constellations" }
      ]
    },
    {
      name: "Ish Qurollari & Vositalar",
      icon: "Wrench",
      description: "Tezkor va sifatli dasturlash muhiti",
      skills: [
        { name: "Vite & Modern Bundlers", level: 92, note: "Lightning fast HMR, Config" },
        { name: "Git & GitHub", level: 94, note: "Version control, Repos, CI/CD" },
        { name: "Vercel Cloud Deployment", level: 95, note: "Automated Build & Live Previews" },
        { name: "DevTools & Optimization", level: 90, note: "Performance, Lighthouse Audit" }
      ]
    },
    {
      name: "UI/UX & Moslashuvchanlik",
      icon: "Smartphone",
      description: "Har qanday qurilmada mukammal ko'rinish",
      skills: [
        { name: "Responsive / Mobile First", level: 97, note: "Pixel-perfect mobile to 4K" },
        { name: "Web Audio API", level: 85, note: "Dynamic SFX Synthesis" },
        { name: "Clean Code & Refactoring", level: 92, note: "Readable, maintainable code" },
        { name: "Interactive Prototyping", level: 90, note: "User-centric interfaces" }
      ]
    }
  ],
  experience: [
    {
      year: "2024 — Hozirgacha",
      title: "Frontend Developer (Mustaqil / Freelance & Loyihalar)",
      place: "Toshkent, Masofaviy",
      description: "8 dan ortiq jonli veb-saytlarni noldan arxitekturasini tuzib, Vercel platformasida muvaffaqiyatli ishga tushirdim. E-commerce, Gaming hub va ijtimoiy yo'nalishdagi veb-ilovalarni yaratish.",
      tags: ["React", "JavaScript", "Responsive Design", "Vercel", "Git"]
    },
    {
      year: "2023 — 2024",
      title: "Interaktiv Veb Dasturlash & Algoritmlar",
      place: "Web Development Academy / Self-Taught",
      description: "Chuqurlashtirilgan JavaScript, zamonaviy DOM manipulyatsiyalari, murakkab CSS animatsiyalari va frontend arxitektura standartlarini o'zlashtirish.",
      tags: ["Modern JS", "CSS Grid/Flexbox", "UI/UX", "Canvas"]
    },
    {
      year: "2020 — 2023",
      title: "Dasturlash Asoslari & GitHub Faoliyati",
      place: "GitHub Open-Source Community",
      description: "Dasturlash asoslari, veb-standartlar va versiyalarni boshqarish (Git) bilan ilk loyihalar hamda o'rganish tajribasi boshlanishi.",
      tags: ["HTML", "CSS", "Git", "Algorithms"]
    }
  ],
  terminalCommands: {
    whoami: "Yahyo Rustamjonov — Toshkentlik ishtiyoqli Frontend Dasturchi. Gojo Satoru falsafasi bilan: eng yuqori sifat va vizual go'zallik!",
    skills: "React, JavaScript (ES6+), HTML5, CSS3/SCSS, Vite, Vercel, Git, 3D Hover & Canvas Animations.",
    projects: "Nexus Gaming, Moderno Store, Bog'cha Top, CounterStrike 2, ELRIZO Nasiya Savdo va boshqalar.",
    contact: "Email: yahyorustamjonov@gmail.com | Telegram: @yahyorustamjonov | GitHub: @Otabek1789",
    quote: "\"Throughout Heaven and Earth, I Alone Am The Honored One\" — Gojo Satoru",
    status: "🟢 Mavjud: Freelance, Full-time va loyihaviy takliflarga tayyorman."
  }
};
