/**
 * Skills grouped by the kind of work they belong to.
 *
 * Deliberately no percentages or star ratings: they imply a precision that
 * does not exist. Familiarity is communicated through grouping and wording.
 */

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Building interfaces from semantic HTML and CSS up through component-driven frameworks.",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    description:
      "Server-side JavaScript: routes, request handling and application logic.",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    description:
      "Storing and querying application data in a document database.",
    skills: ["MongoDB"],
  },
  {
    title: "Programming",
    description:
      "Core computer science coursework and competitive programming practice.",
    skills: ["C", "C++", "Python"],
  },
  {
    title: "Tools & Deployment",
    description:
      "Version control, editor workflow and shipping builds to the web.",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
];

/**
 * Technologies I reach for on a daily basis, used for the marquee on the
 * home page and the tech stack page.
 */
export const primaryStack = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Vercel",
];

export const currentlyLearning = [
  "TypeScript type design",
  "Authentication with Better Auth",
  "Data modelling in MongoDB",
];
