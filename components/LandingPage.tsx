import { GitHubCalendar } from 'react-github-calendar';

import ContactMeForm from './ContactMeForm';

const LandingPage = () => {
    return (
        <div className='w-full' >
            <div className="my-5 w-full overflow-x-auto ">
                <div className="min-w-max px-2 flex justify-center">
                    <GitHubCalendar
                        username="nafiul-islam-eshan"
                        theme={{
                            dark: [
                                "#111822",
                                "#0B2942",
                                "#075985",
                                "#0284C7",
                                "#38BDF8",
                            ],
                        }}
                        blockSize={12}
                        blockMargin={5}
                        blockRadius={3}
                        fontSize={14}
                        showWeekdayLabels
                        showMonthLabels
                        showTotalCount
                        showColorLegend
                    />
                </div>
            </div>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContactMeForm />
            </div>
        </div>
    );
};

export default LandingPage;