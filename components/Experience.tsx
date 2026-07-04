import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative max-w-4xl mx-auto px-6 py-12 sm:py-24">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="space-y-8">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <div className="glass rounded-3xl p-8">
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-400/10 p-2.5 text-indigo-300">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-50">
                      {job.role}
                    </h3>
                    {job.roleKeywords && (
                      <p className="text-xs text-indigo-300/80 mt-0.5">
                        {job.roleKeywords}
                      </p>
                    )}
                    <p className="text-sm text-zinc-400 mt-0.5">
                      {job.company}
                      {job.companyNote && (
                        <span className="text-zinc-500"> · {job.companyNote}</span>
                      )}
                    </p>
                  </div>
                </div>
                <span className="text-xs rounded-full border border-white/10 px-3 py-1 text-zinc-400">
                  {job.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2
                      size={16}
                      className="text-indigo-300 mt-0.5 shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
