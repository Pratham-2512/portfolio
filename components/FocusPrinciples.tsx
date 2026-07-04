import { currentFocus, engineeringPrinciples } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Target, Compass } from "lucide-react";

export default function FocusPrinciples() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Direction"
        title="Focus & Principles"
        subtitle="Where I'm headed, and the standards I build by."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="glass glass-hover rounded-3xl p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl bg-indigo-400/10 p-2.5 text-indigo-300">
                <Target size={20} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-50">
                Current Focus
              </h3>
            </div>
            <ul className="space-y-3">
              {currentFocus.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass glass-hover rounded-3xl p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                <Compass size={20} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-50">
                Engineering Principles
              </h3>
            </div>
            <ol className="space-y-3">
              {engineeringPrinciples.map((principle, i) => (
                <li key={principle} className="flex gap-3 text-sm text-zinc-300">
                  <span className="font-mono text-xs text-cyan-300/80 mt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  {principle}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
