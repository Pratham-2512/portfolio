import { featuredProjects, otherProjects, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ExternalLink, Lock, CheckCircle2, GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Work"
        title="Featured Case Studies"
        subtitle="Problem → Solution → Architecture → Impact. How an engineer thinks, not just what got built."
      />

      <div className="space-y-6">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <div
              className={`glass glass-hover rounded-3xl p-7 sm:p-9 ${
                project.highlight
                  ? "border-indigo-400/25 shadow-[0_0_40px_rgba(99,102,241,0.08)]"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-indigo-300/70 mb-1.5">
                    {project.role}
                  </p>
                  <h3 className="text-2xl font-semibold text-zinc-50">
                    {project.name}
                  </h3>
                </div>
                {project.note && (
                  <span className="flex items-center gap-1 text-xs text-amber-300/80 whitespace-nowrap mt-1">
                    <Lock size={12} /> {project.note}
                  </span>
                )}
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-rose-300/80">
                    Problem
                  </p>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300/80">
                    Solution
                  </p>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300/80">
                  Architecture
                </p>
                <p className="mt-2 inline-flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 px-4 py-2.5 font-mono text-[13px] text-zinc-300">
                  <GitBranch size={14} className="text-indigo-300 shrink-0" />
                  {project.architecture}
                </p>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300/80">
                    Key Challenges
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {project.challenges.map((challenge) => (
                      <span
                        key={challenge}
                        className="text-[11px] rounded-full border border-amber-300/15 bg-amber-300/8 px-2.5 py-1 text-amber-200/90"
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300/80">
                    Impact
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {project.impact.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[13px] text-zinc-300"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-cyan-300/80 mt-0.5 shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-1 text-indigo-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.github || project.githubSecondary) && (
                  <div className="flex gap-4 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                      >
                        <FaGithub size={16} /> Code
                      </a>
                    )}
                    {project.githubSecondary && (
                      <a
                        href={project.githubSecondary}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} /> Related Repo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal className="mb-8 text-center">
          <h3 className="text-2xl font-semibold text-zinc-50">
            Data & Foundations
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            The analytical base my AI work is built on.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <a
                href={`${profile.github}/${project.repo}`}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover block rounded-2xl p-5 h-full"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-zinc-100">{project.name}</h4>
                  <FaGithub size={16} className="text-zinc-500" />
                </div>
                <p className="mt-2 text-xs text-zinc-400">{project.description}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
