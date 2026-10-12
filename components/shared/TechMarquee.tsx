import Image from 'next/image';
import { motion } from "motion/react";

interface TechMarqueeType {
    name: string;
    icon: unknown;
}

const TechMarquee = ({ name, icon }: TechMarqueeType) => {
    return (
        <motion.div
            whileHover={{
                y: -5,
                scale: 1.08,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
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
                src={icon as string}
                alt={name}
                width={36}
                height={36}
                className="object-contain"
            />

            <span className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                {name}
            </span>
        </motion.div>
    );
};

export default TechMarquee;