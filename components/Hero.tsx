"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-50"
      >
        {profile.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 text-2xl sm:text-3xl font-semibold gradient-text"
      >
        {profile.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-6 max-w-2xl text-zinc-400 text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-50 text-zinc-900 px-6 py-3 text-sm font-medium hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-all"
        >
          View Projects <ArrowRight size={16} />
        </a>
        <a
          href="/resume.pdf"
          download="Pratham_Bhatia_Resume.pdf"
          className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-zinc-200"
        >
          <Download size={16} /> Download Resume
        </a>
        <a
          href="#contact"
          className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-zinc-200"
        >
          <Mail size={16} /> Contact Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl"
      >
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-2xl px-4 py-5 text-center"
          >
            <p className="text-2xl sm:text-3xl font-bold gradient-text">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] sm:text-xs text-zinc-400">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
