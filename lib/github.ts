export const GITHUB_API = "https://api.github.com";

export type GitHubProfile = {
  publicRepos: number;
  followers: number;
  createdAt: string;
};

export type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "User-Agent": "nafiul-islam-portfolio",
};

/**
 * Public profile summary. Revalidated hourly so the numbers stay fresh without
 * hitting GitHub on every request. Returns null when the API is unavailable.
 */
export async function getGitHubProfile(
  username: string,
): Promise<GitHubProfile | null> {
  try {
    const response = await fetch(`${GITHUB_API}/users/${username}`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const data = await response.json();
    return {
      publicRepos: data.public_repos ?? 0,
      followers: data.followers ?? 0,
      createdAt: data.created_at ?? "",
    };
  } catch {
    return null;
  }
}

/**
 * Public, non-fork repositories owned by the user, most recently pushed first.
 * Returns an empty list when the API is unavailable.
 */
export async function getPublicRepositories(
  username: string,
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${username}/repos?per_page=100&sort=pushed`,
      { headers, next: { revalidate: 3600 } },
    );

    if (!response.ok) return [];

    const repos: GitHubRepo[] = await response.json();
    return repos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      );
  } catch {
    return [];
  }
}
