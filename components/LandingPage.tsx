
import ContactMeForm from './ContactMeForm';
import GithubActivityCalendar from './GithubActivityCalendar';
import HeroSection from './HeroSection';
import TechnologiesIKnow from './TechnologiesIKnow';
import WhatICanDo from './WhatICanDo';

const  LandingPage = () => {
    return (
        <div className='w-full lg:w-[78%]' >
            <HeroSection />
            <GithubActivityCalendar />
            <TechnologiesIKnow />
            <WhatICanDo />
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContactMeForm />
            </div>
        </div>
    );
};

export default LandingPage;