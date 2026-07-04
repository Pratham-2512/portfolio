import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-3xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's Build Something"
        subtitle="Open to full-time roles, freelance work, and collaborations on AI-powered products."
      />
      <Reveal className="glass rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex max-w-full items-center gap-2 rounded-full bg-zinc-50 text-zinc-900 px-4 sm:px-6 py-3 text-[13px] sm:text-sm font-medium hover:bg-white transition-colors"
          >
            <Mail size={16} className="shrink-0" />
            <span className="break-all">{profile.email}</span>
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover rounded-full p-3 text-zinc-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover rounded-full p-3 text-zinc-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="/resume.pdf"
            download="Pratham_Bhatia_Resume.pdf"
            title="Download resume"
            className="glass glass-hover rounded-full p-3 text-zinc-200"
            aria-label="Download resume"
          >
            <Download size={20} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
