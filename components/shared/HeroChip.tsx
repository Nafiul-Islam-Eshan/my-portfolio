'use client'
import { Chip } from '@heroui/react';
import {motion} from 'motion/react';

const HeroChip = () => {
    return (
        <div>
            <Chip variant='secondary' className='flex gap-3 items-center text-[16px] bg-[#192334] p-2 px-6 shadow-sm'>
                <motion.span
                initial={{opacity:1, scale:1}}
                animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.8, 1, 0.8],
                    boxShadow: [
                        '0 0 0px rgba(52, 211, 153, 0)',
                        '0 0 12px 4px rgba(52, 211, 153, 0.7)',
                        '0 0 0px rgba(52, 211, 153, 0)',
                    ],
                }}
                transition={{
                    duration:1,
                    ease:'easeInOut',
                    repeat:Infinity,
                }}
                 className=" p-1 rounded-full bg-emerald-400">

                </motion.span>
                <span className="text-slate-200">AVAILABLE FOR INTERNSHIP</span>
            </Chip>
        </div>
    );
};

export default HeroChip;