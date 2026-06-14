import Image from "next/image";
import { GitFork, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { getGitHubUser, getRecentlyUpdatedRepos, getTopRepos } from "@/lib/github";
import { formatRelativeTime } from "@/lib/utils";

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  Dockerfile: "#384d54",
};

export async function GitHubSection() {
  const username = siteConfig.githubUsername;

  const [user, topRepos, recentRepos] = await Promise.all([
    getGitHubUser(username),
    getTopRepos(username, 4),
    getRecentlyUpdatedRepos(username, 5),
  ]);

  return (
    <section id="github" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub"
          description="Most of what I build lives in the open — here's a live look at recent activity and repositories."
        />

        {user && (
          <FadeIn className="mb-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent"
            >
              <FaGithub className="h-4 w-4" />@{user.login}
            </a>
            <Stat label="Public Repositories" value={user.public_repos} />
            <Stat label="Followers" value={user.followers} />
            <Stat label="Following" value={user.following} />
          </FadeIn>
        )}

        {topRepos.length > 0 && (
          <FadeIn>
            <h3 className="font-mono text-sm tracking-[0.2em] text-text-faint uppercase">
              Repositories
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {topRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col justify-between rounded-lg border border-border bg-bg-card p-5 transition-colors duration-300 hover:border-accent/40"
                >
                  <div>
                    <p className="font-mono text-sm text-text">{repo.name}</p>
                    {repo.description && (
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {repo.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-xs text-text-faint">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#6b7280",
                          }}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.05} className="mt-12">
          <h3 className="font-mono text-sm tracking-[0.2em] text-text-faint uppercase">
            Contribution Activity
          </h3>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-bg-card p-4">
            <Image
              src={`https://ghchart.rshah.org/5b8cff/${username}`}
              alt={`GitHub contribution graph for ${username}`}
              width={825}
              height={112}
              className="min-w-[700px] w-full"
              unoptimized
            />
          </div>
        </FadeIn>

        {recentRepos.length > 0 && (
          <FadeIn delay={0.1} className="mt-12">
            <h3 className="font-mono text-sm tracking-[0.2em] text-text-faint uppercase">
              Recently Updated
            </h3>
            <ul className="mt-4 divide-y divide-border rounded-lg border border-border bg-bg-card">
              {recentRepos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between gap-4 px-5 py-3 text-sm transition-colors duration-200 hover:bg-bg-elevated"
                  >
                    <span className="font-mono text-text">{repo.name}</span>
                    <span className="shrink-0 text-xs text-text-faint">
                      Updated {formatRelativeTime(repo.updated_at)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        )}

        {!user && topRepos.length === 0 && (
          <FadeIn>
            <p className="text-sm text-text-muted">
              Live GitHub data is temporarily unavailable. Visit{" "}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent hover:underline"
              >
                {siteConfig.links.github}
              </a>{" "}
              directly.
            </p>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <span className="text-xl font-semibold text-text">{value}</span>
      <span className="ml-2 text-sm text-text-muted">{label}</span>
    </div>
  );
}
