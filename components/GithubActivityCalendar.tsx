import { GitHubCalendar } from 'react-github-calendar';

const GithubActivityCalendar = () => {
    return (
        <div className="my-30 w-full overflow-x-auto ">
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
    );
};

export default GithubActivityCalendar;