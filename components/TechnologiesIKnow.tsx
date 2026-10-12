"use client";


import { motion } from "motion/react";

import SectionHeading from "./shared/SectionHeading";
import {technologies} from '@/utils/Technologies'
import TechMarquee from "./shared/TechMarquee";



const TechnologiesIKnow = () => {
    return (
        <div className="flex flex-col items-center my-30">
            <div className="relative text-center">
                <SectionHeading text="What Technologies I Know?" />
            </div>
            <div className="relativen mt-10 w-full overflow-hidden py-4 lg:w-[70%]">

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
                        <TechMarquee key={index} icon={tech.icon} name={tech.name} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechnologiesIKnow;