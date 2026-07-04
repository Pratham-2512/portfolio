import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-8 sm:mb-12 text-center">
      <p className="text-sm font-medium tracking-widest text-indigo-300/80 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-zinc-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-zinc-400">{subtitle}</p>
      )}
    </Reveal>
  );
}
