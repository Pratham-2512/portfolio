import { profile, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative max-w-4xl mx-auto px-6 py-12 sm:py-24">
      <SectionHeading eyebrow="About" title="Who I Am" />
      <Reveal className="glass rounded-3xl p-8 sm:p-10 text-center sm:text-left">
        <p className="text-zinc-300 text-lg leading-relaxed">{profile.bio}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-start text-sm text-zinc-400">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <GraduationCap size={18} className="text-indigo-300" />
            <span>
              {education.degree} — {education.institute} ({education.duration})
            </span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <MapPin size={18} className="text-indigo-300" />
            <span>{profile.location}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
