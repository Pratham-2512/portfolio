import {
  enterpriseSolutions,
  enterpriseStack,
  confidentialityNote,
} from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Building2, Lock, ShieldCheck } from "lucide-react";

export default function EnterpriseSolutions() {
  return (
    <section id="enterprise" className="relative max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Enterprise"
        title="Enterprise Solutions"
        subtitle="Enterprise software supporting business development, supply chain, marketing, supplier management, and operational workflows in production environments."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {enterpriseSolutions.map((solution, i) => (
          <Reveal key={solution.name} delay={i * 0.08}>
            <div
              className={`glass glass-hover rounded-3xl p-7 h-full flex flex-col ${
                solution.current
                  ? "border-emerald-400/25 shadow-[0_0_40px_rgba(52,211,153,0.08)]"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-400/10 p-2.5 text-indigo-300">
                    <Building2 size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-50">
                    {solution.name}
                  </h3>
                </div>
                {solution.current ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300 whitespace-nowrap mt-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Currently Working
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] text-amber-300/80 whitespace-nowrap mt-1.5">
                    <Lock size={11} /> Confidential
                  </span>
                )}
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300/80">
                  Business Problem
                </p>
                <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">
                  {solution.problem}
                </p>
              </div>

              <div className="mt-4 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300/80">
                  Solution
                </p>
                <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {solution.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-[11px] rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-1 text-indigo-200"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="glass rounded-2xl px-6 py-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300/80 mr-1">
              Shared Tech Stack
            </span>
            {enterpriseStack.map((tech) => (
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

      <Reveal className="mt-4">
        <div className="glass rounded-2xl px-6 py-5 flex gap-3.5 items-start">
          <ShieldCheck size={20} className="text-indigo-300 shrink-0 mt-0.5" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            <span className="text-zinc-300 font-medium">Note:</span>{" "}
            {confidentialityNote}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
