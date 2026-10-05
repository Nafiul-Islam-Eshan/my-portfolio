interface TechnologyCardType{
    technology: string;
}
const TechnologyCard = ({technology} : TechnologyCardType) => {
    // console.log(technology, "technology card");
    return (
        <div>
            {technology}
        </div>
    );
};

export default TechnologyCard;