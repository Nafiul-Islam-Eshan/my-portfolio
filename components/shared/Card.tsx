import TechnologyCard from "./TechnologyCard";
import "@/styles/card.css";


interface CardType {
    title: string;
    description: string;
    technologies: string[];
}

const Card = ({ title, description, technologies }: CardType) => {
    return (
        <article className="skill-card mt-4">
            <div className="skill-card-content">
                <h3 className="skill-card-title">{title}</h3>

                <p className="skill-card__description">
                    {description}
                </p>

                <div className="skill-card-technologies">
                    {technologies.map((technology, i) => (
                        <TechnologyCard
                            key={i}
                            technology={technology}
                        />
                    ))}
                </div>
            </div>

            <div className="skill-card__corner">
            </div>
        </article>
    );
};

export default Card;