import {
  ArrowUpRight,
  AtSign,
  BookOpen,
  Code2,
  Github,
  Linkedin,
  Mail,
  TerminalSquare,
} from "lucide-react";

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Gabriel",
  initials: "G",
  role: "Full-stack Developer",
  location: "Xi'an, Shaanxi Province",
  email: "gguoxingg@gmail.com",
  github: "https://github.com/Chowhound-G",
  x: "https://x.com/AmazingDeG",
  resumeUrl: publicAsset("Gabriel-Resume.pdf"),
  headline:
    "I build reliable full-stack products across Java, Python, Vue, React, SQL databases, automation testing, and DevOps pipelines.",
  summary:
    "I am a full-stack developer who enjoys connecting product requirements with dependable implementation. My work spans frontend interfaces, backend services, database design, automated testing, and CI/CD delivery.",
  availability:
    "Open to full-stack engineering roles, project-driven collaboration, and teams that care about maintainable delivery.",
  focusAreas: [
    "Full-stack web application delivery",
    "Java and Python backend services",
    "Vue and React frontend engineering",
    "SQL Server and PostgreSQL data work",
    "Automation testing and release quality",
    "DevOps, CI/CD, and deployment workflows",
  ],
};

export const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Contact" },
];

export const stats = [
  { value: "Full-stack", label: "Frontend, backend, database, delivery" },
  { value: "Java/Python", label: "Backend and automation experience" },
  { value: "MD", label: "Markdown article workflow" },
];

export const projects = [
  {
    title: "zentao-api-automation",
    status: "Public repository",
    description:
      "API automation testing project for Zentao, focused on repeatable interface validation and practical QA workflows.",
    impact:
      "Shows automation testing experience and the ability to turn business workflows into maintainable test coverage.",
    stack: ["API Testing", "Automation", "Zentao", "QA"],
    href: "https://github.com/Chowhound-G/zentao-api-automation",
  },
  {
    title: "web-wenxuan",
    status: "Public repository",
    description:
      "Full-stack ecommerce demo with frontend, backend, AI service, testing, and CI/CD delivery workflow.",
    impact:
      "Demonstrates end-to-end product implementation across Vue, Spring Boot, FastAPI, database work, and deployment automation.",
    stack: ["Vue", "Spring Boot", "FastAPI", "PostgreSQL", "CI/CD"],
    href: "https://github.com/Chowhound-G/web-wenxuan",
  },
];

export const experience = [
  {
    title: "Full-stack Engineering",
    description:
      "Build application features across Vue, React, Java, Python, SQL Server, and PostgreSQL.",
    icon: Code2,
  },
  {
    title: "Delivery Systems",
    description:
      "Use automation testing, DevOps practices, and CI/CD workflows to ship changes with fewer surprises.",
    icon: TerminalSquare,
  },
  {
    title: "Engineering Communication",
    description:
      "Document tradeoffs, patterns, and lessons learned so future changes are easier to review and maintain.",
    icon: BookOpen,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["Vue", "React", "TypeScript", "UI implementation"],
  },
  {
    title: "Backend",
    items: ["Java", "Python", "API design", "Service integration"],
  },
  {
    title: "Database",
    items: ["SQL Server", "PostgreSQL", "SQL modeling", "Query debugging"],
  },
  {
    title: "Quality and Delivery",
    items: ["Automation testing tools", "DevOps", "CI/CD", "Release workflows"],
  },
];

export const resumeHighlights = [
  "Full-stack product development across frontend, backend, and database layers.",
  "Comfortable moving between implementation, testing, debugging, and deployment work.",
  "Career-focused on dependable systems, readable code, and practical delivery habits.",
];

export const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Chowhound-G",
    href: profile.github,
    icon: Github,
  },
  {
    label: "X",
    value: "x.com/AmazingDeG",
    href: profile.x,
    icon: AtSign,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-handle",
    href: "https://www.linkedin.com/in/your-handle",
    icon: Linkedin,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: profile.resumeUrl,
    icon: ArrowUpRight,
  },
];
