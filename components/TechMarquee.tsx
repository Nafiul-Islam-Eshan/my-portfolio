"use client";

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
} from "@/assets";

import { motion } from "motion/react";
import Image from "next/image";

type Technology = {
  name: string;
  icon: unknown;
};

const technologies: Technology[] = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: ts },
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "Python", icon: python },
  { name: "Node.js", icon: nodejs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "GitHub", icon: github },
  { name: "VS Code", icon: vscode },
  { name: "React", icon: reactjs },
  { name: "MongoDB", icon: mongodb },
];

const TechMarquee = () => {
  return (
    <div className="relative w-full py-4 lg:w-[70%] mx-auto overflow-hidden my-25">

      {/* Left fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-[#0A1220] to-transparent pointer-events-none" />

      {/* Right fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-[#0A1220] to-transparent pointer-events-none" />

      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              backdrop-blur-md
              transition-colors
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-400/10
            "
          >
            <Image
              src={tech.icon as string}
              alt={tech.name}
              width={36}
              height={36}
              className="object-contain"
            />

            <span className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;