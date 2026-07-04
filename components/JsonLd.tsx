import { profile, education } from "@/lib/data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "AI Application Engineer",
    email: `mailto:${profile.email}`,
    url: profile.github,
    sameAs: [profile.github, profile.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "V2 Retail Ltd.",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.institute,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Prompt Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
