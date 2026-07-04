import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 text-center">
      <p className="text-sm text-zinc-400">
        Designed &amp; Developed by{" "}
        <span className="text-zinc-200 font-medium">{profile.name}</span>
      </p>
      <p className="text-xs text-zinc-600 mt-1">
        Building AI that solves real-world problems.
      </p>
    </footer>
  );
}
