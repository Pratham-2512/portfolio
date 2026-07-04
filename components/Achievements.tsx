import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CheckCircle2 } from "lucide-react";

export default function Achievements() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-12 sm:py-24">
      <SectionHeading eyebrow="Highlights" title="Achievements" />
      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((item, i) => (
          <Reveal key={item} delay={i * 0.05}>
            <div className="glass glass-hover flex items-center gap-3 rounded-2xl px-5 py-4">
              <CheckCircle2 size={18} className="text-emerald-300 shrink-0" />
              <span className="text-sm text-zinc-200">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
