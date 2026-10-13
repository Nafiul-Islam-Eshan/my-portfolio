
import ContactMeForm from './ContactMeForm';
import GithubActivityCalendar from './GithubActivityCalendar';
import HeroSection from './HeroSection';
import TechnologiesIKnow from './TechnologiesIKnow';
import WhatICanDo from './WhatICanDo';
import * as motion from "motion/react-client"

const LandingPage = () => {
    return (
        <div className='w-full lg:w-[78%]' >
            <HeroSection />
            <GithubActivityCalendar />
            <TechnologiesIKnow />
            <WhatICanDo />
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.3,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContactMeForm />
            </motion.div>
        </div >
    );
};

export default LandingPage;