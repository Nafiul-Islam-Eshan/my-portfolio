"use client";

import dynamic from "next/dynamic";
import { siteConfig } from "@/utils/site";

/**
 * The calendar fetches contribution data in the browser. It is loaded on the
 * client only so server and client markup cannot disagree during hydration.
 */
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-28 animate-pulse rounded-md bg-surface-raised"
        aria-hidden="true"
      />
    ),
  },
);

const calendarTheme = {
  dark: ["#111a26", "#0b3b4d", "#0e7490", "#06b6d4", "#67e8f9"],
};

export default function GitHubActivity() {
  return (
    <div className="surface-card overflow-hidden p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-medium text-white">Contribution activity</h3>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono text-xs text-slate-500 hover:text-accent"
        >
          @{siteConfig.githubUsername}
        </a>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="min-w-max">
          <GitHubCalendar
            username={siteConfig.githubUsername}
            theme={calendarTheme}
            blockSize={11}
            blockMargin={4}
            blockRadius={2}
            fontSize={12}
            showWeekdayLabels
            showMonthLabels
            showTotalCount
            showColorLegend
            errorMessage="Contribution data is unavailable right now."
          />
        </div>
      </div>
    </div>
  );
}
