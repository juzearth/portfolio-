// ============================================================
// EDIT THIS FILE to update the whole portfolio.
// Anything marked TODO is a placeholder — replace it with your real details.
// ============================================================

import autobillImg from "@/assets/project-autobill.jpg";
import campusvoiceImg from "@/assets/project-campusvoice.jpg";
import mysaverImg from "@/assets/project-mysaver.jpg";
import carrentalImg from "@/assets/project-carrental.jpg";
import tirikiImg from "@/assets/project-tiriki.jpg";

export const profile = {
  name: "Peter",
  fullName: "Peter Ochieng",
  role: "Software Engineer",
  location: "Kenya",
  tagline:
    "I build billing systems, web apps and Android apps for solving Kenyan problems; M-Pesa payments, student services and everyday tools.",
  email: "ochieng7ptr@gmail.com", // TODO: your real email
  phone: "+254742253390", // TODO: optional, e.g. "+254 7XX XXX XXX" (leave empty to hide)
  github: "https://github.com/juzearth", // TODO
  linkedin: "https://www.linkedin.com/in/peter-ochieng-a86b57396?utm_source=share_via&utm_content=profile&utm_medium=member_android", // TODO
  availability: "Open to freelance & remote work",
};

export const about = {
  heading: "Developer from Kenya, building things that get used",
  paragraphs: [
    "I'm a Computer Science and Management Information Systems student at Kibabii University. I learn by shipping: most of what I know came from building real systems end to end, from the database to the screen.",
    "My main stack is JavaScript (Node.js/Express and React), PHP with MySQL, and Kotlin with Jetpack Compose for Android. I've integrated M-Pesa Daraja payments and I care about software that fits how people in Kenya actually pay, study and work.",
    "I'm working towards full-stack engineering roles and remote or freelance work, and I'm currently deepening my skills in cloud, Docker, CI/CD and AI-powered features.",
  ],
  facts: [
    { value: "4", label: "Systems built" },
    { value: "3", label: "Languages in daily use" },
  ],
};

// "level" (0-100) fills the thin progress bar on each skill card. Adjust to how you rate yourself.
export const skills = [
  { category: "Frontend", level: 93, icon: "code", technologies: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { category: "Backend", level: 80, icon: "server", technologies: ["Node.js", "Express", "PHP", "REST APIs", "Session auth"] },
  { category: "Mobile", level: 70, icon: "phone", technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Firebase"] },
  { category: "Data", level: 75, icon: "database", technologies: ["MySQL", "MySQLi", "Firebase Realtime DB"] },
  { category: "Payments & APIs", level: 65, icon: "wallet", technologies: ["M-Pesa Daraja (STK Push)", "Africa's Talking SMS"] },
  { category: "Tooling & DevOps", level: 55, icon: "git", technologies: ["Git & GitHub", "GitHub Actions", "PM2", "VPS deployment"] },
] as const;

export const projects = [
  {
    title: "AutoBill Kenya",
    image: autobillImg,
    kind: "Web system",
    description:
      "Billing and WiFi hotspot management system with a customer-facing hotspot portal and an admin side. Customers pay through M-Pesa STK Push.",
    technologies: ["React", "Node.js", "Express", "MySQL", "M-Pesa Daraja"],
    githubUrl: "https://github.com/juzearth",
    liveUrl: "https://github.com/juzearth",
    featured: true,
  },
  {
    title: "CampusVoice",
    image: campusvoiceImg,
    kind: "Web app",
    description:
      "Student complaint platform with registration, session-based login, password recovery and a student dashboard, styled in a deep-blue split-panel UI.",
    technologies: ["PHP", "MySQLi", "Sessions", "JavaScript", "CSS"],
    githubUrl: "https://github.com/juzearth",
    liveUrl: "https://github.com/juzearth",
    featured: true,
  },
  {
    title: "MySaver",
    image: mysaverImg,
    kind: "Android app",
    description:
      "WhatsApp Status saver built with Jetpack Compose and Material 3. Uses the Storage Access Framework and MediaStore, and supports Android 7 to 15.",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "SAF", "MediaStore"],
    githubUrl: "https://github.com/juzearth",
    liveUrl: "https://github.com/juzearth",
    featured: false,
  },
  {
    title: "Car Rental App",
    image: carrentalImg,
    kind: "Android app",
    description:
      "Android car rental app with user accounts and live booking data using Firebase Authentication and Realtime Database.",
    technologies: ["Kotlin", "Firebase Auth", "Realtime Database"],
    githubUrl: "https://github.com/juzearth",
    liveUrl: "https://github.com/juzearth",
    featured: false,
  },
  {
    title: "Tiriki Online Grocery",
    image: tirikiImg,
    kind: "Proposal",
    description:
      "Full 15-page proposal for a Kenya-based grocery delivery platform: M-Pesa and SMS integration, Data Protection Act 2019 compliance, 12-month agile plan and costed budget.",
    technologies: ["System design", "M-Pesa Daraja", "Africa's Talking", "Agile"],
    githubUrl: "https://github.com/juzearth",
    liveUrl: "https://github.com/juzearth",
    featured: false,
  },
];

export const education = [
  {
    degree: "Computer Science & Management Information Systems",
    school: "Kibabii University",
    location: "Kenya",
    detail:
      "Coursework includes MIS (CSC 411), databases, information systems architecture, cloud computing, big data analytics and machine learning.",
  },
];

export const focus = [
  "Building a stronger full-stack foundation: React, Node/Express, Docker, CI/CD and cloud deployment",
  "Adding AI-powered features to the apps I build",
  "Taking on freelance and remote development work",
];
