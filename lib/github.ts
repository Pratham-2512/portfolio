import { profile, githubLanguages } from "./data";

export type LatestRepo = {
  name: string;
  url: string;
  language: string | null;
  pushedAt: string;
};

export type GithubData = {
  publicRepos: number;
  languages: { name: string; percent: number }[];
  latestRepos: LatestRepo[];
  live: boolean;
};

const fallback: GithubData = {
  publicRepos: 13,
  languages: githubLanguages,
  latestRepos: [],
  live: false,
};

type RepoInfo = {
  name: string;
  html_url: string;
  language: string | null;
  fork: boolean;
  pushed_at: string;
};

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatMonth(iso: string): string {
  const d = new Date(iso);
  return `${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export async function getGithubData(): Promise<GithubData> {
  try {
    const headers = { Accept: "application/vnd.github+json" };
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${profile.githubUsername}`, {
        headers,
        next: { revalidate: 86400 },
      }),
      fetch(
        `https://api.github.com/users/${profile.githubUsername}/repos?per_page=100`,
        { headers, next: { revalidate: 86400 } }
      ),
    ]);
    if (!userRes.ok || !reposRes.ok) return fallback;

    const user = await userRes.json();
    const repos: RepoInfo[] = await reposRes.json();

    const counts = new Map<string, number>();
    for (const repo of repos) {
      if (repo.fork || !repo.language) continue;
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
    const total = [...counts.values()].reduce((a, b) => a + b, 0);
    const languages =
      total > 0
        ? [...counts.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([name, count]) => ({
              name,
              percent: Math.round((count / total) * 100),
            }))
        : fallback.languages;

    const latestRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
      .slice(0, 4)
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        language: repo.language,
        pushedAt: formatMonth(repo.pushed_at),
      }));

    return {
      publicRepos: user.public_repos ?? fallback.publicRepos,
      languages,
      latestRepos,
      live: true,
    };
  } catch {
    return fallback;
  }
}
