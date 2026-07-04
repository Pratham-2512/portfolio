import { timeline } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section className="relative max-w-3xl mx-auto px-6 py-12 sm:py-24">
      <SectionHeading eyebrow="Journey" title="Growth Timeline" />
      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400/60 via-fuchsia-400/40 to-cyan-400/60" />
        <div className="space-y-10">
          {timeline.map((item, i) => (
            <Reveal key={`${item.year}-${item.label}`} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.8)]" />
                <p className="text-sm font-medium text-indigo-300/80">
                  {item.year}
                </p>
                <p className="text-zinc-100 mt-1">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
