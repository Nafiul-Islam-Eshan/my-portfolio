


import {
    bootstrap,
    c,
    cpp,
    css,
    github,
    html,
    js,
    nextjs,
    nodejs,
    python,
    vscode,
    tailwind,
    ts,
    reactjs,
    mongodb,
    vercel,
    netlify,
    git,
    expressjs

} from "@/assets";



type Technology = {
    name: string;
    icon: unknown;
};

export const technologies: Technology[] = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Tailwind", icon: tailwind },
    { name: "Bootstrap", icon: bootstrap },
    { name: "JavaScript", icon: js },
    { name: "TypeScript", icon: ts },
    { name: "Node.js", icon: nodejs },
    { name: "React", icon: reactjs },
    { name: "Next.js", icon: nextjs },
    { name: "Express.js", icon: expressjs},
    { name: "MongoDB", icon: mongodb },
    { name: "C", icon: c },
    { name: "C++", icon: cpp },
    { name: "Python", icon: python },
    { name: "Git", icon: git},
    { name: "GitHub", icon: github },
    { name: "VS Code", icon: vscode },
    { name: "Vercel", icon: vercel},
    { name: "Netlify", icon: netlify},
];