import { valueProps } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Sparkles, Building2, Layers } from "lucide-react";

const icons = [Sparkles, Building2, Layers];

export default function ValueProps() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-12 sm:py-24">
      <SectionHeading
        eyebrow="Why Me"
        title="What I Bring to Your Team"
        subtitle="The combination companies are hiring for right now: AI capability, production discipline, and end-to-end ownership."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {valueProps.map((prop, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={prop.title} delay={i * 0.1}>
              <div className="glass glass-hover rounded-3xl p-7 h-full">
                <div className="inline-flex rounded-2xl bg-indigo-400/10 p-3 text-indigo-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-50">
                  {prop.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
