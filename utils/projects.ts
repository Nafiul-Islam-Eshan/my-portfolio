/**
 * Curated project list.
 *
 * Only repositories that exist on GitHub and represent real, finished work
 * are listed here. Descriptions describe what was built, not results or
 * metrics. Order is deliberate: strongest, most complete work first.
 */

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "payoo",
    title: "PAYOO",
    summary:
      "A mobile money transfer interface with login, PIN verification and transaction history.",
    description:
      "PAYOO is a front-end build of a mobile wallet experience, inspired by popular mobile financial services. It covers the flows a user actually walks through: logging in with a mobile number and PIN, viewing a balance, and moving money between send, cash-out and bill payment screens. State is held in the browser so the whole journey can be clicked through end to end.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Nafiul-Islam-Eshan/PAYOO",
    live: "https://nafiul-islam-eshan.github.io/PAYOO/",
    featured: true,
  },
  {
    slug: "keenkeeper",
    title: "KeenKeeper",
    summary:
      "A React app for keeping track of the people you want to stay in touch with.",
    description:
      "KeenKeeper helps you remember when you last spoke to someone. You add contacts, open a contact to see how long it has been since your last conversation, and log calls, texts or video chats. Data lives in local storage, so your list is still there when you come back. Built with React Router for separate routes and Recharts for the interaction summary.",
    tech: ["React", "React Router", "Tailwind CSS", "Recharts"],
    repo: "https://github.com/Nafiul-Islam-Eshan/KeenKeeper",
    live: "https://keen-keeper-nafiul1.vercel.app",
    featured: true,
  },
  {
    slug: "movie-explorer",
    title: "Movie Explorer",
    summary:
      "Search and filter movies by title, genre, rating and release year.",
    description:
      "A React application that loads movie data, lets you narrow it down with a search field and sort controls, and gives each film a detail view. Built as part of the Next Level Foundation program to practise component composition, derived state and list rendering.",
    tech: ["React", "JavaScript", "CSS"],
    repo: "https://github.com/Nafiul-Islam-Eshan/movie-explorer",
    featured: true,
  },
  {
    slug: "dragon-news",
    title: "Dragon News",
    summary:
      "A TypeScript news portal with category-based routing and authentication.",
    description:
      "Dragon News presents articles grouped by category, with a breaking news strip, an article page per story and a login flow that gates reading. Written in TypeScript with typed props and API responses, and styled with Tailwind CSS for a consistent grid across breakpoints.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/Nafiul-Islam-Eshan/Dragon-News",
    featured: false,
  },
  {
    slug: "digi-tools-platform",
    title: "DigiTools Platform",
    summary:
      "A React storefront for digital tools with a cart and per-product pages.",
    description:
      "DigiTools lists digital products as cards, supports adding and removing items from a cart, and tracks the total as you go. Each product opens its own page with pricing and details. Built to practise state lifted across routes and reusable card components.",
    tech: ["React", "Tailwind CSS", "DaisyUI"],
    repo: "https://github.com/Nafiul-Islam-Eshan/DigiTools-Platform",
    featured: false,
  },
  {
    slug: "climate-pulse",
    title: "Climate Pulse",
    summary:
      "A weather dashboard that searches cities and shows current conditions.",
    description:
      "Climate Pulse calls a public weather API for a searched city and renders current temperature, humidity, wind and conditions, with a five-day forecast below. Error states handle unknown cities and failed requests instead of failing silently.",
    tech: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Nafiul-Islam-Eshan/climate-pulse",
    featured: false,
  },
  {
    slug: "github-issue-tracker",
    title: "GitHub Issue Tracker",
    summary:
      "An issue tracker interface modelled on GitHub's own issue list.",
    description:
      "A front-end exercise in building a dense, information-rich interface: issue rows with labels, open and closed counts, priority tags and a detail view. The layout stays readable at narrow widths by collapsing metadata into a stacked card.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Nafiul-Islam-Eshan/GItHub-Issue-Tracker",
    featured: false,
  },
  {
    slug: "ai-hub",
    title: "AI HUB",
    summary:
      "A catalogue of AI tools with cards, filtering and pricing details.",
    description:
      "AI HUB collects AI tools into a browsable catalogue. Tools are rendered from an array of data into cards, and each card exposes the tool's pricing tier and description. Built to practise data-driven rendering and component reuse.",
    tech: ["React", "Tailwind CSS"],
    repo: "https://github.com/Nafiul-Islam-Eshan/AI-HUB",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
