// Portfolio data for Manideep Chilukuri — kept intentionally short.

export const personalInfo = {
  name: "Manideep Chilukuri",
  firstName: "Manideep",
  role: "Full Stack & Mobile Application Developer",
  location: "Bangalore, India",
  intro:
    "I build web, mobile, AI and IoT products end to end — from the first sketch to apps live on the store.",
  about:
    "Full stack developer and Co-Founder & CTO at NFCura. I work across Flutter, React, Node.js, Python, cloud and microcontrollers, and I care most about shipping things people actually use.",
  stats: [
    { value: "4+", label: "Products shipped" },
    { value: "3", label: "Apps live on stores" },
    { value: "3+", label: "Hackathon awards" }
  ],
  socials: {
    github: "https://github.com/manideep-19",
    linkedin: "https://www.linkedin.com/in/manideep-chilukuri-dev",
    email: "manideepchilukuri1@gmail.com"
  }
};

export const featuredProjects = [
  {
    id: "nfcura",
    facts: [{ k: "Apps", v: "3 connected" }, { k: "Rx check", v: "Under 2 sec" }],
    title: "NFCura",
    tagline: "Contactless healthcare — 3 connected apps for doctors, patients and pharmacies.",
    detail: "NFC tap-to-access records and ECDSA-signed digital prescriptions. Check-in and Rx verification cut to under 2 seconds.",
    role: "Co-Founder & CTO",
    image: "/images/projects/nfcura.png",
    fit: "cover",
    tone: "#ffe6d9",
    tags: ["Flutter", "Node.js", "NFC", "Web Crypto"],
    links: [{ label: "nfcura.com", href: "https://nfcura.com" }]
  },
  {
    id: "nazr",
    facts: [{ k: "SOS", v: "One tap" }, { k: "No data?", v: "SMS fallback" }],
    title: "Nazr",
    tagline: "Women's safety app with one-tap SOS, live location and offline SMS fallback.",
    role: "Mobile Engineer",
    image: "/images/projects/nazr.png",
    fit: "cover",
    tone: "#e9e4ff",
    tags: ["Flutter", "Android", "Firebase", "GPS"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/nazr-womens-safety-app/id6787188929" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.nazr.app" }
    ]
  },
  {
    id: "introbuddy",
    facts: [{ k: "Exchange", v: "QR e-cards" }, { k: "Chat", v: "Real-time" }],
    title: "IntroBuddy",
    tagline: "Event networking — digital e-cards, QR badge scanning and live chat.",
    role: "Freelance · Flutter",
    image: "/images/projects/introbuddy_features.png",
    fit: "cover",
    tone: "#dff3ea",
    tags: ["Flutter", "Firestore", "QR"],
    links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.introbuddy.app" }]
  },
  {
    id: "proofbox",
    facts: [{ k: "Payments", v: "Razorpay" }, { k: "Vault", v: "Biometric lock" }],
    title: "Proofbox",
    tagline: "Warranty & invoice vault with Razorpay payments and biometric lock.",
    role: "Freelance · Flutter",
    image: "/images/projects/proofbox_logo.png",
    fit: "contain",
    tone: "#e3eefc",
    tags: ["Flutter", "Riverpod", "Razorpay"],
    links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.proofbox.app" }]
  }
];

export const moreProjects = [
  { title: "Circlify", desc: "AI virtual try-on for clothing, with credit-based processing", tag: "Flutter · AI" },
  { title: "Ridespots", desc: "Motorcycle ride planner with live GPS telemetry and multi-day trips", tag: "Flutter · Maps" },
  { title: "LessonPlan", desc: "Teachers create lesson plans in seconds with Gemini AI", tag: "Flutter · Gemini", client: "EdTech Studio" },
  { title: "Noirvelin", desc: "Shopify storefront for an oversized, hand-drawn print streetwear brand", tag: "Shopify", client: "Noirvelin" },
  { title: "Guardian SOS", desc: "Emergency SOS with accessibility triggers, GPS and offline SMS relay", tag: "Android" },
  { title: "Mental Health Companion", desc: "Mood tracker and wellness journal with trend charts and reminders", tag: "Android", client: "MindBalance Studio" },
  { title: "NEXUS", desc: "Capstone management platform with an AI readiness check", tag: "Web · AI", href: "https://capstone-management-automation-pu.vercel.app" },
  { title: "Aananthal Group", desc: "Corporate site in Next.js", tag: "Web", href: "https://aananthal-group.vercel.app" },
  { title: "EqualVoice", desc: "Live phone calls for speech & hearing-impaired users", tag: "AI" },
  { title: "Fraud Detection", desc: "ML pipeline for payment anomaly scoring", tag: "ML", href: "https://github.com/manideep-19/Online_Fraud_detection" },
  { title: "HeartMonitor", desc: "Heart rate from the phone camera", tag: "Android", href: "https://github.com/manideep-19/heartmonitor" },
  { title: "Surveillance Rover", desc: "ESP32 + Raspberry Pi bot with OpenCV", tag: "IoT" }
];

export const experienceData = [
  { period: "2026 — Now", role: "Co-Founder", company: "BRO'S Studio", href: "https://www.brosstudio.in/", current: true, note: "Co-founded a bespoke software development studio building custom products for clients." },
  { period: "2024 — Now", role: "Co-Founder & CTO", company: "NFCura", href: "https://nfcura.com", current: true, note: "Architected the 3-app healthcare system and led field validation with Bangalore clinics.", tech: ["Flutter", "Node.js", "NFC", "ECDSA"] },
  { period: "2026", role: "Flutter Developer Intern", company: "Nexotech Solutions", note: "Shipped cross-platform features and REST integrations in a remote team.", tech: ["Flutter", "Dart", "REST APIs"] },
  { period: "2026", role: "Freelance Flutter Developer", company: "IntroBuddy", href: "https://play.google.com/store/apps/details?id=com.introbuddy.app", note: "Built the event networking app end to end: QR e-card exchange, attendee matching and real-time chat.", tech: ["Flutter", "Firestore", "QR"] },
  { period: "2025", role: "Freelance Flutter Developer", company: "Proofbox", href: "https://play.google.com/store/apps/details?id=com.proofbox.app", note: "Built the warranty and invoice vault with Razorpay payments and biometric lock.", tech: ["Flutter", "Riverpod", "Razorpay"] },
  { period: "2023", role: "Software Dev Intern", company: "Cricentech Infosystem", note: "Built an e-commerce platform and an AI chatbot-integrated website.", tech: ["React", "JavaScript", "Firebase"] }
];

export const skills = [
  "Flutter", "React", "Next.js", "TypeScript", "Node.js", "Python", "Firebase",
  "PostgreSQL", "Supabase", "Android", "Gemini AI", "ESP32", "Arduino", "NFC", "Docker", "Vercel"
];

export const awards = [
  "Top 70 — World's Largest Innovation Project",
  "3rd Place — Innovatex 2.0",
  "Robo Race Finalist — GITAM"
];
