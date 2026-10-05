import Card from "./shared/Card";
import SectionHeading from "./shared/SectionHeading";
import { whatICanDo } from '@/utils/WhatICanDo'

const WhatICanDo = () => {
    // console.log(whatICanDo);
    return (
        <div className="mb-30">
            <SectionHeading text="What I Can Do?"/>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    whatICanDo.map((item, idx) => {
                        const {title, description, technologies} = item
                        return <Card key={idx} title={title} description={description} technologies={technologies}/>
                    })
                }
            </div>          
        </div>
    );
};

export default WhatICanDo;