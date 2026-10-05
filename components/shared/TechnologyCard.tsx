import Image from "next/image";
import {technologies} from '@/utils/Technologies'

interface TechnologyCardType{
    technology: string;
}
const TechnologyCard = ({technology} : TechnologyCardType) => {
    const tech = technologies.find((tech) => tech.name === technology);
    
    console.log({technology, tech}, "technology card");
    // const { name, icon } = technologies
    return (
        <div>
            <Image
                src={tech?.icon as string}
                alt={tech?.name as string}
                width={36}
                height={36}
                className="object-contain"
            />

            <span className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                {tech?.name}
            </span> 
        </div>
    );
};

export default TechnologyCard;