
import ContactMeForm from './ContactMeForm';
import GithubActivityCalendar from './GithubActivityCalendar';
import TechMarquee from './TechMarquee';

const LandingPage = () => {
    return (
        <div className='w-full' >
            <GithubActivityCalendar />
            <TechMarquee />
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContactMeForm />
            </div>
        </div>
    );
};

export default LandingPage;