export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const GITHUB_API = "https://api.github.com";

// One hour revalidation keeps the GitHub section fresh without hammering
// the unauthenticated API rate limit on every request.
const REVALIDATE_SECONDS = 3600;

async function githubFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGitHubUser(username: string): Promise<GitHubUser | null> {
  return githubFetch<GitHubUser>(`/users/${username}`);
}

/**
 * Returns the user's most-starred non-fork repositories — used as a stand-in
 * for "pinned" repos, since pinned repos require an authenticated GraphQL call.
 */
export async function getTopRepos(username: string, limit = 6): Promise<GitHubRepo[]> {
  const repos = await githubFetch<GitHubRepo[]>(
    `/users/${username}/repos?per_page=100&sort=updated`
  );

  if (!repos) return [];

  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || (a.name < b.name ? -1 : 1))
    .slice(0, limit);
}

export async function getRecentlyUpdatedRepos(
  username: string,
  limit = 5
): Promise<GitHubRepo[]> {
  const repos = await githubFetch<GitHubRepo[]>(
    `/users/${username}/repos?per_page=100&sort=updated`
  );

  if (!repos) return [];

  return repos.filter((repo) => !repo.fork).slice(0, limit);
}
