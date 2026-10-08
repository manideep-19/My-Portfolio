// Authentic Portfolio Data for Manideep Chilukuri
// Grounded in real codebase inspections, repository commits, and verified resume history.

export const personalInfo = {
  name: "Manideep Chilukuri",
  title: "Full Stack Developer | Backend Engineer | AI & IoT Product Builder",
  heroHeadline: "Building Products Where Software Meets AI, Cloud & Hardware.",
  heroSubtext:
    "I'm Manideep Chilukuri, a Full Stack Developer and product-focused engineer building scalable web and mobile applications, intelligent AI systems, backend infrastructure, and connected hardware solutions.",
  aboutText:
    "I'm a Full Stack Developer and product-focused engineer passionate about turning ideas into production-ready applications. I work across frontend, backend, mobile, cloud, AI and IoT to build products that solve real-world problems. Whether designing offline-first mobile apps, architecting sub-second APIs, or wiring microcontrollers to cloud backends, I care deeply about end-to-end execution and measurable reliability.",
  lifecycleSteps: [
    {
      step: "01",
      phase: "DISCOVERY & SPECS",
      title: "Idea & Requirements",
      desc: "Deconstructing real-world pain points into clear user flows, API contracts, and scalable system constraints before writing a single line of code.",
      deliverable: "User Journeys & API Contracts",
      focusTag: "SYSTEM PLANNING"
    },
    {
      step: "02",
      phase: "SYSTEM DESIGN",
      title: "Architecture & System Design",
      desc: "Modeling database schemas, state management, role-based access boundaries, cryptographic pipelines, and resilient offline/sync strategies.",
      deliverable: "Relational Schemas & Security Matrix",
      focusTag: "DATA & SECURITY"
    },
    {
      step: "03",
      phase: "FULL STACK BUILD",
      title: "Development & Engineering",
      desc: "Writing clean, type-safe code across React, Next.js, Flutter, Node.js, and Python with focus on modularity and zero unnecessary bloat.",
      deliverable: "Production Web & Cross-Platform Code",
      focusTag: "MODULAR CODEBASE"
    },
    {
      step: "04",
      phase: "INTEGRATION",
      title: "Hardware & API Integration",
      desc: "Interfacing third-party SDKs, payment gateways (Razorpay), NFC readers, mobile sensors, and embedded microcontrollers (ESP32/Arduino).",
      deliverable: "NFC, IoT Firmware & Payment SDKs",
      focusTag: "CONNECTED DEVICES"
    },
    {
      step: "05",
      phase: "SHIP & INFRA",
      title: "Deployment & Cloud DevOps",
      desc: "Shipping production builds on Vercel, Railway, Firebase, and cloud platforms with automated CI/CD pipelines, SSL, and CDN edge caching.",
      deliverable: "CI/CD Pipelines & Cloud Backends",
      focusTag: "ZERO-DOWNTIME PROD"
    },
    {
      step: "06",
      phase: "SCALE & BENCHMARK",
      title: "Optimization & Monitoring",
      desc: "Benchmarking frame rates (60 FPS mobile), optimizing bundle sizes, minimizing DB query latencies, and conducting rigorous field validation.",
      deliverable: "Sub-200ms Latency & Telemetry Logs",
      focusTag: "PERFORMANCE AUDIT"
    }
  ],
  socials: {
    github: "https://github.com/manideep-19",
    linkedin: "https://www.linkedin.com/in/manideep-chilukuri-dev",
    email: "manideepchilukuri1@gmail.com",
    portfolio: "https://my-portfolio-manideep.vercel.app/"
  }
};

export const techStackData = [
  {
    category: "Frontend",
    description: "Responsive, high-performance web applications with modern design systems",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"]
  },
  {
    category: "Backend",
    description: "RESTful microservices, secure authentication, and relational data layers",
    skills: ["Node.js", "Python", "Flask", "REST APIs", "PostgreSQL"]
  },
  {
    category: "Mobile",
    description: "Cross-platform and native applications with device sensors and offline cache",
    skills: ["Android", "Java", "Flutter"]
  },
  {
    category: "Cloud & Databases",
    description: "Cloud database persistence, authentication, and serverless deployments",
    skills: ["Firebase", "Firestore", "Supabase", "Railway", "Vercel"]
  },
  {
    category: "AI",
    description: "Generative AI pipelines, model integrations, and intelligent feature workflows",
    skills: ["Google Gemini", "Vertex AI", "AI APIs", "AI-powered applications"]
  },
  {
    category: "IoT & Hardware",
    description: "Microcontroller firmware, wireless telemetry, sensor interfacing, and NFC",
    skills: ["ESP32", "ESP8266", "Arduino", "NFC", "PN532"]
  },
  {
    category: "Tools",
    description: "Modern developer workflow, containerization, version control, and API testing",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman"]
  }
];

export const featuredProjects = [
  {
    id: "nfcura",
    title: "NFCura — Smart Contactless Healthcare Ecosystem",
    subtitle: "3 Dedicated Mobile Apps (Doctor, Patient, Pharmacy) with NFC Smart Card ID & Cryptographic Prescriptions",
    role: "Co-Founder & CTO / Mobile & Backend System Architect",
    categoryLabel: "HEALTHCARE & MOBILE ECOSYSTEM",
    badge: "FLAGSHIP STARTUP (3 MOBILE APPS)",
    image: "/images/projects/nfcura.png",
    hasArchitecture: true,
    github: null,
    live: "https://nfcura.com",
    tags: ["Healthcare", "Mobile", "Flutter", "NFC", "Node.js", "Web Crypto", "Cloud"],
    tech: [
      "Flutter & Android",
      "Node.js & Express",
      "NFC (ISO/IEC 14443)",
      "Web Crypto (ECDSA P-256)",
      "Firebase / Cloud DB",
      "Dynamic Optical QR",
      "FHIR R4 & ABDM"
    ],
    summary:
      "A complete healthcare ecosystem consisting of 3 dedicated mobile applications (Doctor App, Patient App, and Pharmacy App) connected via contactless NFC smart cards, optical QR codes, and a secure Node.js cloud backend.",
    highlights: [
      "3 Dedicated Mobile Apps: Doctor App (OPD charting & digital Rx), Patient App (Health records wallet & NFC card link), and Pharmacy App (Camera QR scanner & dispensing ledger)",
      "Contactless NFC tap-to-access patient identification (NTAG213 / PN532) with sub-second medical history retrieval",
      "Client-side cryptographic digital signing using doctor's ECDSA private key (P-256) preventing prescription tampering",
      "Pharmacy optical QR verification with instant public key validation and anti-duplicate dispensing lock",
      "Lightweight ~50KB structured clinical payload design ensuring sub-200ms sync across high-volume hospital networks",
      "Architected to conform with India's Ayushman Bharat Digital Mission (ABDM) and FHIR R4 clinical interoperability",
      "AI-assisted clinical workflow alerts for allergy contraindications and drug-to-drug interactions"
    ],
    caseStudy: {
      problem:
        "Outpatient clinics and retail pharmacies suffer from illegible paper prescriptions, lost diagnostic records, manual transcription errors at dispensing counters, and zero verifiable cryptographic link between doctors, patients, and pharmacies.",
      solution:
        "Architected an end-to-end contactless healthcare ecosystem consisting of 3 distinct mobile applications: Doctor App for OPD consultation and ECDSA digital Rx signing; Patient App for managing health records and NFC card linkage; and Pharmacy App for high-speed camera QR verification and tamper-proof dispense tracking.",
      architecture: [
        "Doctor Mobile App: Fast OPD charting, patient NFC tap-scan, vitals history viewer, and ECDSA private-key digital signing",
        "Patient Mobile App & NFC Card: Digital health passport, physical NTAG213/PN532 NFC card linkage, and dynamic QR code generation",
        "Pharmacy Mobile App: Point-of-sale camera QR scanner, public-key cryptographic signature validation, and anti-duplication status update",
        "Security & Cryptography: ECDSA-signed cryptographic JWT tokens, strict Role-Based Access Control (RBAC), and opaque lookup tokens",
        "API & Backend: Node.js REST microservices handling lightweight ~50KB clinical payloads with sub-200ms latency",
        "Data & Ledger: Relational EHR database with AES-256 encrypted medical scans and immutable access audit logs",
        "Standards Roadmap: Data models architected to map directly to ABDM and FHIR R4 clinical specifications"
      ],
      myRole:
        "Co-Founder & CTO. Designed the end-to-end 3-mobile-app system architecture, relational EHR storage models, cryptographic prescription verification engine, and led clinical field validation with 8+ doctor consultations and retail pharmacies across Bangalore.",
      challenges:
        "Ensuring instant record access in high-volume OPD clinics without requiring expensive proprietary hardware. Solved by developing a dual-protocol approach: instant NFC tap for supported hardware and secure optical dynamic QR fallback with sub-200ms lookup.",
      outcome:
        "Built working production-grade 3-app ecosystem validated with 50+ simultaneous patient records, cutting patient check-in and prescription verification time from minutes to under 2 seconds."
    },
    telemetryType: "heartbeat"
  },
  {
    id: "nazr",
    title: "Nazr — Women Safety Mobile Application",
    subtitle: "Mission-Critical SOS, Guardian Circle, Shield Mode & Accessibility Trigger",
    role: "Mobile Application Engineer",
    categoryLabel: "CRITICAL SAFETY & MOBILE",
    badge: "PUBLISHED ON APP STORE & PLAY STORE",
    image: "/images/projects/nazr.png",
    hasArchitecture: false,
    github: null,
    appStore: "https://apps.apple.com/in/app/nazr-womens-safety-app/id6787188929",
    playStore: "https://play.google.com/store/apps/details?id=com.nazr.app",
    live: "https://play.google.com/store/apps/details?id=com.nazr.app",
    tags: ["Mobile", "Android", "Flutter", "Firebase", "GPS", "Accessibility"],
    tech: [
      "Flutter",
      "Android (Java/Kotlin)",
      "Firebase Realtime DB",
      "Google Maps API",
      "AccessibilityService",
      "Telephony SMS API"
    ],
    summary:
      "A safety-focused mobile application designed to help users quickly alert trusted contacts and share their live location during emergencies.",
    highlights: [
      "One-tap instantaneous SOS triggering immediate multi-channel guardian alerts",
      "Trusted guardian circle directory with real-time push alerts and live tracking radar",
      "Continuous live GPS location sharing even when the phone is locked or app is minimized",
      "Shield Mode with strict, predictable safety countdown timers and automated check-ins",
      "Remote SOS activation and background hardware button listening via AccessibilityService",
      "Autonomous fallback SMS dispatch broadcasting precise GPS links when mobile data is lost",
      "Ambient audio recording streamed securely to cloud storage during active emergency triggers"
    ],
    caseStudy: {
      problem:
        "In distress or personal assault situations, users rarely have the time or ability to unlock their smartphones, open an app, and manually contact guardians, especially in areas with poor cellular data.",
      solution:
        "Built a mission-critical mobile safety application that can be triggered in less than 200ms through an on-screen panic button or stealth background hardware key presses, instantly dispatching live GPS coordinates and ambient audio to trusted guardians.",
      architecture: [
        "Trigger Engine: Foreground panic UI + Background Android AccessibilityService hardware button listener",
        "Location Service: High-accuracy GPS geofencing with battery-optimized sub-3 meter tracking",
        "Dispatch Subsystem: Parallel broadcast via Firebase Cloud Messaging, Realtime DB, and native SMS Telephony API",
        "Guardian Interface: Real-time map radar showing victim trajectory, dynamic ETA, and emergency audio feed"
      ],
      myRole:
        "Mobile Application Engineer. Architected and implemented the core Android client, background GPS tracking services, AccessibilityService integration, Shield Mode countdown logic, and the offline SMS dispatch fallback.",
      challenges:
        "Maintaining high-frequency GPS tracking in the background without getting killed by aggressive Android OEM battery savers, and ensuring emergency alerts fire reliably even in connectivity dead zones.",
      outcome:
        "Produced a battle-tested emergency response mobile app with sub-200ms trigger latency and guaranteed offline SMS fallback for emergency scenarios."
    },
    telemetryType: "mobile"
  },
  {
    id: "intobuddy",
    title: "IntoBuddy — Mobile Application",
    subtitle: "Event Networking, Digital e-Card Exchange & Nearby Match Radar",
    role: "Freelance Mobile Engineer",
    categoryLabel: "FREELANCE PRODUCT",
    badge: "PUBLISHED ON PLAY STORE",
    image: "/images/projects/intobuddy_features.png",
    hasArchitecture: false,
    github: null,
    playStore: "https://play.google.com/store/apps/details?id=com.introbuddy.app",
    live: "https://play.google.com/store/apps/details?id=com.introbuddy.app",
    tags: ["Freelance", "Flutter", "Firebase", "MobileScanner", "Real-Time Chat"],
    tech: [
      "Flutter",
      "Dart",
      "Firebase Auth (OTP)",
      "Cloud Firestore",
      "Firebase Storage",
      "MobileScanner",
      "Local Notifications"
    ],
    summary:
      "A freelance mobile application developed for professional event networking, featuring digital e-Card sharing, QR badge scanning, goal-oriented attendee matching, and live in-app chat.",
    highlights: [
      "Digital e-Card generator and MobileScanner QR code exchange for instant contact sharing",
      "Direct device contact syncing via flutter_contacts and cross-platform profile sharing",
      "Event attendee directory with session schedules, badge generator, and event code check-in",
      "Real-time Nearby Discovery Radar pulse matching attendees based on networking objectives",
      "In-app real-time messaging and chat conversations powered by Cloud Firestore listeners",
      "Secure phone OTP authentication and smooth multi-step onboarding questionnaire",
      "Push notifications via Firebase Cloud Messaging & flutter_local_notifications"
    ],
    caseStudy: {
      problem:
        "Event attendees frequently lose physical business cards, struggle to find peers matching their specific networking goals, and lack an organized way to initiate contextual conversations during conferences.",
      solution:
        "Engineered an end-to-end Flutter mobile app that pairs digital e-Cards and QR badge scanning with an objective-based attendee matching radar and integrated real-time chat.",
      architecture: [
        "Client UI: Reactive Flutter interface styled with custom cards, radar pulse widgets, and e-cards",
        "Auth: Firebase Phone Number OTP authentication with persistent session state",
        "Networking Radar: Query engine filtering attendees based on active networking criteria ('Who do you want to meet')",
        "QR Subsystem: Camera stream barcode scanning using MobileScanner with auto-focus and contact extraction",
        "Chat Engine: Cloud Firestore collection streams with optimistic updates and offline cache"
      ],
      myRole:
        "Freelance Mobile Developer. Built the application end-to-end from user flow specification through complete UI/UX implementation, QR code scanner integration, Firestore real-time messaging, contact exports, and testing.",
      challenges:
        "Optimizing live QR scanner camera frame rates across varied device hardware without overheating, and ensuring instantaneous real-time chat sync across flaky conference Wi-Fi networks.",
      outcome:
        "Delivered a fluid, production-ready cross-platform mobile application with 60 FPS animations, instantaneous e-card scanning, and robust offline caching."
    },
    telemetryType: "server"
  },
  {
    id: "proofbox",
    title: "Proofbox — Mobile Application",
    subtitle: "Consumer Document Vault, Warranty Tracker & Razorpay Integration",
    role: "Freelance Mobile Engineer",
    categoryLabel: "FREELANCE PRODUCT",
    badge: "PUBLISHED ON PLAY STORE",
    image: "/images/projects/proofbox_logo.png",
    hasArchitecture: false,
    github: null,
    playStore: "https://play.google.com/store/apps/details?id=com.proofbox.app",
    live: "https://play.google.com/store/apps/details?id=com.proofbox.app",
    tags: ["Freelance", "Flutter", "Razorpay", "Hubble SDK", "GoWarranty", "Firestore"],
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Firebase Auth",
      "Cloud Firestore",
      "Cloud Storage",
      "Razorpay Flutter SDK",
      "Hubble SDK",
      "Local Auth"
    ],
    summary:
      "A production freelance mobile application engineered to securely store, categorize, and track purchase invoices, warranties, and promotional coupons with automated expiration notifications.",
    highlights: [
      "Secure document vault with high-speed camera receipt capture and PDF viewing",
      "Integrated Razorpay payment gateway for premium subscriptions and warranty extension services",
      "Integrated Hubble SDK session management with proper session invalidation on user sign-out",
      "GoWarranty extended warranty offer integration and lifecycle tracking",
      "Local biometric authentication (fingerprint / Face ID) via local_auth",
      "Automated push and local scheduled notifications alerting users prior to warranty expiration",
      "Offline-first caching architecture syncing seamlessly with Cloud Firestore upon reconnection"
    ],
    caseStudy: {
      problem:
        "Consumers frequently misplace paper receipts and warranty documents, leading to forfeited repairs and missed refund windows. Existing solutions lack integrated warranty purchasing and brand coupon management.",
      solution:
        "Engineered Proofbox as a comprehensive personal digital cabinet where users securely store invoices and warranties, purchase warranty extensions via Razorpay, and access branded coupons through Hubble.",
      architecture: [
        "State Management: Riverpod 3.x architecture with declarative data providers",
        "Navigation: Deep-linked GoRouter route hierarchy with auth guard transitions",
        "Document Storage: Client-side compressed receipt upload to Firebase Storage with Firestore indexing",
        "Fintech & SDKs: Razorpay native Android/iOS payment flows and Hubble partner session lifecycle",
        "Security: Biometric local authentication protecting confidential financial documents"
      ],
      myRole:
        "Freelance Mobile Engineer. Developed core Flutter presentation and data layers, integrated the Razorpay payment gateway, embedded the Hubble coupon SDK with session lifecycle management, configured GoWarranty offers, and built notification reminders.",
      challenges:
        "Handling large camera receipt images on low-bandwidth networks. Implemented multi-stage client compression (`flutter_image_compress`), background uploads, and cached PDF viewing with Syncfusion.",
      outcome:
        "Delivered a commercially viable consumer mobile application with robust fintech SDK integrations, seamless biometric security, and 4.9-star level user polish."
    },
    telemetryType: "mobile"
  }
];

export const otherProjects = [
  {
    id: "nexus",
    title: "NEXUS — Capstone Management Platform",
    subtitle: "Academic Project Lifecycle Automation • Cloud AI",
    category: "web",
    tags: ["web", "ai"],
    categoryLabel: "CLOUD AI & SAAS",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite", "Firebase Firestore"],
    desc: "Multi-tenant academic platform to manage university capstone lifecycles with AI-based Project Readiness Evaluators, role-based portals for students/faculty, and automated milestone approvals.",
    detailedOverview: "NEXUS is an enterprise-grade academic platform deployed to streamline university capstone lifecycle management. It connects students, faculty mentors, and institutional admins with automated invitations, team creation, milestone tracking, and an AI readiness check engine that evaluates project proposals for clarity, technical feasibility, and industry standards.",
    highlights: [
      "Automated AI Project Readiness Evaluator analyzing deliverables and proposal feasibility",
      "Multi-tenant role-based dashboards for students, faculty mentors, and institutional admins",
      "Automated email invitations and real-time milestone progress tracking",
      "Live production deployment on Vercel backed by Firebase Firestore"
    ],
    github: "https://github.com/manideep-19/capstone-management-automation-pu",
    live: "https://capstone-management-automation-pu.vercel.app",
    icon: "Database",
    telemetryType: "server"
  },
  {
    id: "equalvoice",
    title: "EqualVoice — Telephony Audio Platform",
    subtitle: "Real-time Audio Processing • Bidirectional WebRTC",
    category: "ai",
    tags: ["ai", "web"],
    categoryLabel: "AI & TELEPHONY",
    tech: ["React", "Node.js", "WebRTC", "TensorFlow", "Socket.io", "Cloud Telephony"],
    desc: "A real-time AI communication platform enabling deaf, mute, and speech-impaired users to participate in live phone calls without speaking or hearing.",
    detailedOverview: "EqualVoice bridges communication barriers by combining sub-200ms speech-to-text with AI conversational prediction and natural voice synthesis injected directly into live telephony streams.",
    highlights: [
      "Sub-200ms latency real-time bidirectional WebRTC audio pipeline",
      "Context-aware AI conversational engine predicting follow-ups",
      "Direct SIP & cloud telephony gateway speech audio injection",
      "Acoustic noise cancellation and zero-latency transcription streaming"
    ],
    github: null,
    live: null,
    icon: "MessageSquare",
    telemetryType: "audio"
  },
  {
    id: "circlify",
    title: "Circlify — Virtual Fashion Try-On",
    subtitle: "Generative AI & Computer Vision • Mobile Overlay",
    category: "ai",
    tags: ["ai", "mobile"],
    categoryLabel: "GENERATIVE AI & CV",
    tech: ["Python", "PyTorch", "React Native", "AWS", "FastAPI", "Computer Vision"],
    desc: "Universal AI-based virtual try-on platform allowing users to visualize clothing across e-commerce using low-latency generative AI pipelines.",
    detailedOverview: "Built with a two-stage deep generative pipeline performing human pose estimation, cloth segmentation, and realistic garment drape warping within 9–15 seconds.",
    highlights: [
      "End-to-end generative pipeline rendering realistic try-ons in 9–15s",
      "DensePose and human contour estimation for physics-based drape",
      "Floating Android overlay system working across third-party shopping apps",
      "AWS GPU cluster auto-scaling with FastAPI microservice backend"
    ],
    github: null,
    live: null,
    icon: "Sparkles",
    telemetryType: "vision"
  },
  {
    id: "feel-safe",
    title: "Feel Safe — Emergency Response App",
    subtitle: "Live GPS Geofencing • Hardware Volume Panic Trigger",
    category: "mobile",
    tags: ["mobile"],
    categoryLabel: "SECURITY & GPS",
    tech: ["Android Studio", "Java", "Firebase", "GPS Location Services", "Telephony API"],
    desc: "Critical personal security mobile app offering instantaneous one-touch SOS alerts, automated emergency SMS dispatch, and continuous background GPS tracking.",
    detailedOverview: "Feel Safe is a mission-critical Android emergency response application built to provide immediate protection in distress situations. Triggering the SOS button instantly dispatches real-time coordinates to trusted contacts.",
    highlights: [
      "One-touch instantaneous panic button broadcasting live GPS links",
      "Autonomous fallback SMS dispatch when mobile data connectivity is lost",
      "Background geofencing and battery-efficient location tracking service",
      "Discreet trigger mode allowing activation through hardware volume buttons"
    ],
    github: null,
    playStore: "https://play.google.com/store/apps/details?id=com.nazr.app",
    live: "https://play.google.com/store/apps/details?id=com.nazr.app",
    icon: "ShieldAlert",
    telemetryType: "mobile"
  },
  {
    id: "surveillance-bot",
    title: "Autonomous Surveillance Rover",
    subtitle: "Mobile Security Bot • ESP32 & Raspberry Pi",
    category: "iot",
    tags: ["iot", "ai"],
    categoryLabel: "IOT & ROBOTICS",
    tech: ["Python", "ESP-32", "Raspberry Pi", "OpenCV", "Android"],
    desc: "Android-controlled autonomous mobile robot capable of live video streaming, OpenCV motion detection, and remote navigation over local Wi-Fi networks.",
    detailedOverview: "An IoT hardware surveillance rover built around an ESP-32 microcontroller and Raspberry Pi companion computer. The robot streams real-time video to an Android control app and executes OpenCV motion detection algorithms.",
    highlights: [
      "Dual-board architecture: ESP-32 motor PWM control + Raspberry Pi video processing",
      "Low-latency MJPEG video streaming directly to Android smartphone app",
      "OpenCV frame differencing for autonomous perimeter intrusion detection",
      "Hardware obstacle avoidance using ultrasonic distance telemetry"
    ],
    github: null,
    live: null,
    icon: "Video",
    telemetryType: "iot"
  },
  {
    id: "agriculture-bot",
    title: "Smart Agriculture Rover",
    subtitle: "Precision AgTech • Soil Sensing & Automated Sowing",
    category: "iot",
    tags: ["iot"],
    categoryLabel: "AGTECH & EMBEDDED",
    tech: ["C/C++", "Arduino", "IoT Soil Sensors", "Relay Actuators", "Microcontrollers"],
    desc: "Automated farming assistant with soil moisture sensing, automated seed sowing mechanisms, and intelligent precision irrigation control.",
    detailedOverview: "A robotic agricultural rover developed to automate labor-intensive farming tasks. Armed with multi-sensor probes, it navigates soil beds, monitors real-time moisture levels, and activates automated drip irrigation.",
    highlights: [
      "Automated precision seed distribution mechanism driven by micro-servos",
      "Real-time analog soil moisture measurement with threshold-based watering",
      "Water conservation algorithm cutting irrigation waste significantly",
      "Embedded C++ firmware on Arduino with low-power sleep state cycles"
    ],
    github: null,
    live: null,
    icon: "Leaf",
    telemetryType: "iot"
  },
  {
    id: "online-fraud-detection",
    title: "Payment Fraud Detection Engine",
    subtitle: "Machine Learning • Anomaly Risk Scoring",
    category: "ai",
    tags: ["ai"],
    categoryLabel: "FINTECH & MACHINE LEARNING",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "SMOTE"],
    desc: "Machine learning classification pipeline analyzing financial transactions for real-time anomaly detection, risk scoring, and credit fraud prevention.",
    detailedOverview: "An end-to-end data science pipeline developed to combat payment fraud. Preprocesses skewed transaction datasets, engineers behavioral features, handles severe class imbalance using SMOTE, and trains ensemble models.",
    highlights: [
      "Supervised & unsupervised anomaly detection on skewed transaction datasets",
      "Feature engineering evaluating transaction velocity, location delta, and amounts",
      "High ROC-AUC score minimizing costly false-positive payment blocks",
      "Modular Python pipeline ready for streaming inference integration"
    ],
    github: "https://github.com/manideep-19/Online_Fraud_detection",
    live: null,
    icon: "CreditCard",
    telemetryType: "fraud"
  },
  {
    id: "online-bus-booking",
    title: "Modern Transit Reservation",
    subtitle: "Interactive Seat Map • Real-Time Supabase Sync",
    category: "web",
    tags: ["web"],
    categoryLabel: "TRANSIT FULL-STACK",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    desc: "Full-scale online transit booking system featuring intuitive seat map selection, route schedule searches, instant ticket generation, and real-time Supabase sync.",
    detailedOverview: "Allows commuters to search intercity bus schedules, view amenities, select specific seats on an interactive layout with live availability locking, and complete ticket bookings with Supabase database persistence.",
    highlights: [
      "Interactive visual seat layout with real-time seat lock state management",
      "Multi-city route filtering, departure scheduling, and price sorting",
      "Supabase database backend ensuring transactional seat reservation integrity",
      "Clean responsive UI with ticket PDF/voucher generation"
    ],
    github: "https://github.com/manideep-19/online-bus-booking",
    live: null,
    icon: "Bus",
    telemetryType: "server"
  },
  {
    id: "gemini-chatbot",
    title: "Gemini Conversational Assistant",
    subtitle: "Microservice Chatbot • Flask & Google Gemini",
    category: "ai",
    tags: ["ai", "web"],
    categoryLabel: "CONVERSATIONAL AI",
    tech: ["Python", "Flask", "Google Gemini API", "JavaScript", "HTML5/CSS3"],
    desc: "Low-latency conversational AI web assistant engineered with a Python Flask microservice backend and reactive UI, optimized with context memory.",
    detailedOverview: "A conversational AI web application engineered with a clean, low-footprint Python Flask backend. Connects to Google Gemini API for multi-turn dialogues with dynamic context retention and syntax-highlighted code rendering.",
    highlights: [
      "Direct integration with Google Gemini API for rapid natural responses",
      "Lightweight Flask RESTful API with conversational session management",
      "Markdown parsing with code syntax highlighting and copy-to-clipboard",
      "Zero external heavy client frameworks for blazing fast load times"
    ],
    github: null,
    live: null,
    icon: "Bot",
    telemetryType: "gemini"
  },
  {
    id: "heartmonitor",
    title: "HeartMonitor — Optical PPG Sensor",
    subtitle: "Camera-Based Cardio Extraction • Real-Time BPM",
    category: "mobile",
    tags: ["mobile", "iot"],
    categoryLabel: "HEALTH TECH & CV",
    tech: ["Android (Java)", "Computer Vision", "TensorFlow", "CameraX", "Flash Hardware"],
    desc: "Android health app calculating BPM by analyzing microscopic green channel intensity variations from smartphone camera frames with flashlight assist.",
    detailedOverview: "Transforms smartphone hardware into an optical photoplethysmography (PPG) pulse sensor. Analyzes micro-fluctuations in the green color spectrum of blood flow, filtering motion artifacts to calculate real-time BPM.",
    highlights: [
      "Non-invasive cardiovascular pulse extraction without external sensors",
      "Real-time spectral analysis of green-channel optical absorption",
      "Digital bandpass filtering algorithm rejecting ambient lighting noise",
      "Automated logging of historical readings with cloud synchronization"
    ],
    github: "https://github.com/manideep-19/heartmonitor",
    live: null,
    icon: "HeartPulse",
    telemetryType: "heartbeat"
  },
  {
    id: "aananthal-group",
    title: "Aananthal Group Corporate Platform",
    subtitle: "Enterprise Platform • High-Performance Web",
    category: "web",
    tags: ["web"],
    categoryLabel: "FULL-STACK WEB",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
    desc: "High-performance enterprise web application built for the Aananthal Group, featuring fluid responsive architecture and modern portfolio showcase.",
    detailedOverview: "Corporate digital hub for the Aananthal Group built with Next.js and TypeScript, delivering sub-second load times, property showcases, interactive inquiries, and smooth micro-interactions.",
    highlights: [
      "Server-side rendered Next.js architecture with optimal SEO scoring",
      "Custom responsive design system with fluid layout transitions",
      "Inquiry and lead generation system with automated notification triggers",
      "Production Vercel deployment with edge CDN caching"
    ],
    github: "https://github.com/manideep-19/-Aananthal-Group",
    live: "https://aananthal-group.vercel.app",
    icon: "Building2",
    telemetryType: "server"
  }
];

export const freelanceWork = {
  title: "Freelance Software Developer",
  role: "Independent Product Engineer",
  period: "2024 – Present",
  description:
    "Working independently on real-world web and mobile application projects, taking products from requirements and UI implementation through API integration, backend development, database design, testing and deployment.",
  capabilities: [
    {
      title: "End-to-End Product Ownership",
      desc: "Taking products from raw specifications and wireframes through full UI implementation, database schema modeling, and production deployment."
    },
    {
      title: "Fintech & Third-Party SDK Integrations",
      desc: "Deep integration experience with payment systems (Razorpay), session management (Hubble SDK), warranty engines (GoWarranty), and hardware camera scanners."
    },
    {
      title: "Cross-Platform 60 FPS Mobile",
      desc: "Building high-performance Flutter and Android native applications with local biometrics, offline-first caching, and background push notifications."
    },
    {
      title: "Scalable Cloud Architecture",
      desc: "Configuring Firebase Auth, Firestore security rules, Cloud Functions, and REST endpoints built for concurrent production traffic."
    }
  ],
  featuredDeliverables: [
    {
      id: "proofbox",
      name: "Proofbox Mobile App",
      badge: "Fintech & Document Vault",
      summary: "Consumer warranty & invoice filing cabinet with Razorpay checkout, Hubble SDK sessions, and biometric vault."
    },
    {
      id: "intobuddy",
      name: "IntoBuddy Mobile App",
      badge: "Event Networking & QR",
      summary: "Networking platform featuring digital e-Cards, QR code badge scanning, nearby match radar, and live Firestore chat."
    }
  ]
};

export const experienceData = [
  {
    role: "Co-Founder & CTO",
    company: "NFCura",
    location: "Bangalore, India",
    period: "2024 – Present",
    tech: ["Flutter", "Android", "Node.js", "NFC (ISO/IEC 14443)", "Web Crypto (ECDSA)", "Cloud DB"],
    contributions: [
      "Architected the contactless healthcare mobile ecosystem uniting 3 dedicated mobile apps: Doctor App, Patient App, and Pharmacy App.",
      "Engineered cryptographic prescription pipeline using ECDSA-signed digital prescriptions and tamper-evident optical QR lookups.",
      "Conducted 8+ in-depth doctor consultations and OPD workflow mappings across Bangalore clinics to refine clinical usability.",
      "Engineered lightweight ~50KB structured clinical payloads, ensuring sub-second record access across low-bandwidth clinical networks."
    ]
  },
  {
    role: "Flutter Developer Intern",
    company: "Nexotech Solutions",
    location: "Remote",
    period: "2026 (Mar – Apr)",
    tech: ["Flutter", "Dart", "REST APIs", "State Management", "Git"],
    contributions: [
      "Contributed as a Flutter Developer Intern, building and shipping cross-platform mobile features in a professional remote environment.",
      "Implemented responsive UI components, integrated backend REST APIs, and participated in sprint code reviews."
    ]
  },
  {
    role: "Flutter Developer (Freelance)",
    company: "IntoBuddy App",
    location: "Remote",
    period: "2026",
    tech: ["Flutter", "Dart", "MobileScanner", "Firebase Phone OTP", "Cloud Firestore", "Local Notifications"],
    contributions: [
      "Engineered the complete IntoBuddy cross-platform event networking mobile application with 60 FPS performance.",
      "Built digital e-Card generator with high-speed MobileScanner QR exchange and native contacts export via flutter_contacts.",
      "Developed goal-oriented nearby attendee radar matching algorithm and real-time in-app Firestore chat messaging."
    ]
  },
  {
    role: "Flutter Developer (Freelance)",
    company: "Proofbox App",
    location: "Remote",
    period: "2025",
    tech: ["Flutter", "Dart", "Firebase", "Razorpay SDK", "Hubble SDK", "GoWarranty", "Biometrics"],
    contributions: [
      "Developed a personal mobile document and warranty vault application to store and track invoices, warranties, and coupons using Flutter and Firebase.",
      "Integrated Razorpay payment gateway for extended warranty purchases and subscriptions.",
      "Implemented Hubble coupon SDK with session invalidation on logout, GoWarranty claim integration, and local biometric security."
    ]
  },
  {
    role: "Software Dev Intern",
    company: "Cricentech Infosystem",
    location: "Bengaluru, India",
    period: "2023",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Firebase"],
    contributions: [
      "Led development of an enterprise e-commerce platform and an AI conversational chatbot.",
      "Architected full-stack web solutions and shipped production-ready features utilizing modern web frameworks and cloud infrastructure.",
      "Built a chatbot-integrated company website featuring demo booking workflows and interactive UI states."
    ]
  },
  {
    role: "AI & Embedded Systems Builder",
    company: "Hackathons & Innovation Competitions",
    location: "Bangalore, India",
    period: "2024 – 2025",
    tech: ["Python", "React", "Face-API.js", "ESP-32", "Arduino", "OpenCV"],
    contributions: [
      "Built Recurzive v2 AI tool that analyzes GitHub repositories to generate documentation and visualize dependencies (2025).",
      "Built an emotion-adaptive web application at Metadome AI hackathon using Face-API.js for dynamic real-time learning explanations (2024).",
      "Developed autonomous surveillance and agriculture bots utilizing microcontrollers and computer vision."
    ]
  }
];

export const certificationsData = [
  {
    title: "Top 70 — World's Largest Innovation Project",
    organization: "Presidency University",
    date: "2024",
    category: "Innovation & Product",
    desc: "Recognized among the top 70 innovators for developing high-impact technical product prototypes."
  },
  {
    title: "3rd Place — Innovatex 2.0 (Maze Runner)",
    organization: "Presidency University",
    date: "2024",
    category: "Robotics & Hardware",
    desc: "Designed and programmed an autonomous sensor-driven robot solving dynamic maze environments."
  },
  {
    title: "Robo Race Finalist",
    organization: "GITAM University Innovation Fest",
    date: "2024",
    category: "Robotics & Embedded",
    desc: "Engineered and piloted a high-performance differential drive rover through hardware obstacle courses."
  },
  {
    title: "Introduction to AI",
    organization: "Google Cloud Skill Boost",
    date: "2024",
    category: "Artificial Intelligence",
    desc: "Foundational training in modern AI concepts, neural model lifecycles, and Google Cloud AI services."
  },
  {
    title: "Python, Automation Design & Robotics",
    organization: "Infosys Springboard",
    date: "2023 - 2024",
    category: "Software & Automation",
    desc: "Comprehensive coursework covering modular Python programming, automation workflows, and robotics control."
  },
  {
    title: "DSA & Java Problem Solving",
    organization: "CodeChef",
    date: "2023",
    category: "Algorithms & Core CS",
    desc: "Rigorous problem solving covering data structures, algorithmic complexity, and Java software development."
  },
  {
    title: "Real-World Machine Learning Projects",
    organization: "Udemy",
    date: "2023",
    category: "Machine Learning",
    desc: "Hands-on implementation of supervised classification, SMOTE imbalance handling, and predictive pipelines."
  }
];

export const achievementsData = [
  {
    stat: "4+",
    label: "Production Products Shipped",
    desc: "Live applications across healthcare, emergency safety, and fintech"
  },
  {
    stat: "Co-Founder",
    label: "CTO at NFCura",
    desc: "Architected smart paperless healthcare platform with 8+ clinical clinic validations"
  },
  {
    stat: "<200ms",
    label: "Emergency Alert Latency",
    desc: "Real-time SOS trigger and sub-200ms audio/location dispatch in Nazr"
  },
  {
    stat: "3+",
    label: "Hackathon & Innovation Awards",
    desc: "Top 70 Global Innovation, 3rd Place Innovatex 2.0, GITAM Robo Race"
  }
];
