/**
 * Verified personal and contact information.
 * Everything rendered on the site is sourced from this file so there is a
 * single place to keep facts accurate.
 */

export const siteConfig = {
  name: "Md. Nafiul Islam",
  shortName: "Nafiul Islam",
  role: "Computer Science & Engineering Student",
  headline: "Aspiring Full-Stack Web Developer",
  university:
    "Bangladesh Army International University of Science and Technology (BAIUST)",
  universityShort: "BAIUST",
  expectedGraduation: 2029,
  location: "Cumilla, Bangladesh",
  email: "nafiulislameshan307@gmail.com",
  phone: "+8801905515736",
  phoneDisplay: "+880 1905 515736",
  availability: "Open to internship opportunities",
  githubUsername: "Nafiul-Islam-Eshan",
  links: {
    github: "https://github.com/Nafiul-Islam-Eshan",
    linkedin: "https://www.linkedin.com/in/md-nafiul-islam-402802377",
    email: "mailto:nafiulislameshan307@gmail.com",
    cv: "/CV.pdf",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nafiul-islam.vercel.app",
} as const;

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;
