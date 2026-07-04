import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-5xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Toolkit"
        subtitle="A blend of AI engineering, full-stack development, and data analysis."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="glass glass-hover rounded-2xl p-6 h-full">
              <h3 className="text-zinc-50 font-semibold mb-4">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
