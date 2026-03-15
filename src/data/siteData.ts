export const siteConfig = {
  name: "Rajan Pantha",
  title: "Full Stack Developer",
  description:
    "I build modern, performant web applications with a focus on clean design and exceptional user experience.",
  email: "contact@rajanpantha.dev",
  social: {
    github: "https://github.com/rajanpantha",
    linkedin: "https://linkedin.com/in/rajanpantha",
    twitter: "https://twitter.com/rajanpantha",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js and Stripe integration. Features include product catalog, cart management, and secure checkout.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "https://github.com/rajanpantha",
    live: "#",
    image: "/assets/project-placeholder.svg",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task management application with drag-and-drop interface, team workspaces, and activity tracking.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/rajanpantha",
    live: "#",
    image: "/assets/project-placeholder.svg",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps writers create blog posts, social media content, and marketing copy.",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    github: "https://github.com/rajanpantha",
    live: "#",
    image: "/assets/project-placeholder.svg",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "A financial portfolio tracking dashboard with real-time data visualization, performance analytics, and alerts.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/rajanpantha",
    live: "#",
    image: "/assets/project-placeholder.svg",
  },
];

export const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for structuring large-scale React applications with proper state management and code splitting.",
    date: "2025-12-15",
    readTime: "8 min read",
    slug: "#",
  },
  {
    title: "The Power of Server Components",
    excerpt:
      "Exploring how React Server Components change the way we think about data fetching and rendering.",
    date: "2025-11-20",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt:
      "A deep dive into TypeScript generics with practical examples and common patterns for everyday use.",
    date: "2025-10-05",
    readTime: "10 min read",
    slug: "#",
  },
];
