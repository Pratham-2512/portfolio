import { profile } from "@/lib/data";
import { getGithubData } from "@/lib/github";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FolderGit2, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const barColors = [
  "bg-indigo-400",
  "bg-fuchsia-400",
  "bg-cyan-400",
  "bg-amber-300",
  "bg-emerald-300",
  "bg-rose-300",
];

export default async function GithubStats() {
  const data = await getGithubData();

  return (
    <section id="github" className="relative max-w-5xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Activity"
        title="GitHub"
        subtitle="Consistent, real engineering work — not just a resume line."
      />

      <Reveal className="mb-8">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-zinc-50 font-semibold">Top Languages</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-0.5 text-[10px] font-medium text-indigo-200">
                <FolderGit2 size={11} />
                {data.publicRepos} Public Repositories
              </span>
              {data.live && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live from GitHub
                </span>
              )}
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <FaGithub size={16} /> View Profile
            </a>
          </div>

          <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/5 mb-6">
            {data.languages.map((lang, i) => (
              <div
                key={lang.name}
                className={barColors[i % barColors.length]}
                style={{ width: `${lang.percent}%` }}
                title={`${lang.name} — ${lang.percent}%`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.languages.map((lang, i) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${barColors[i % barColors.length]}`}
                />
                {lang.name}
                <span className="text-zinc-500">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {data.latestRepos.length > 0 && (
        <Reveal>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="text-zinc-50 font-semibold mb-5">Latest Projects</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.latestRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass glass-hover rounded-2xl p-4 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-zinc-100 truncate">
                      {repo.name}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                      {repo.language && (
                        <span className="text-indigo-300/80">{repo.language}</span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Clock size={11} /> {repo.pushedAt}
                      </span>
                    </p>
                  </div>
                  <FaGithub size={16} className="text-zinc-500 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
