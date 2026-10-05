
interface WhatICanDoType {
    title: string;
    description: string;
    technologies: string[];
}

export const whatICanDo: WhatICanDoType[] = [
    {
        title: "Frontend Development",
        description:
            "Build responsive, accessible, and interactive web interfaces with a focus on clean UI and user experience.",
        technologies: [
            "HTML", "CSS", "JavaScript","React", "Next.js", "Tailwind","Bootstrap", "TypeScript"
        ],
    },
    {
        title: "Backend Development",
        description:
            "Build server-side functionality, APIs, and application logic to connect frontend experiences with data.",
        technologies: ["Node.js", "Express.js"],
    },
    {
        title: "Database & Data",
        description:
            "Work with application data and connect web applications to reliable database systems.",
        technologies: ["MongoDB"],
    },
    {
        title: "Programming",
        description:
            "Build a strong foundation in programming and problem-solving through structured code, algorithms, and core programming concepts.",
        technologies: ["C", "C++", "Python"],
    },
    {
        title: "Development Workflow",
        description:
            "Manage projects, track changes, and build applications using modern development tools.",
        technologies: ["Git", "GitHub", "VS Code", "Vercel","Netlify"],
    },
];