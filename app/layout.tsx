import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratham Bhatia — AI Application Engineer",
  description:
    "Portfolio of Pratham Bhatia, an AI Application Engineer building production-ready AI applications, enterprise software, and SaaS products that automate real business workflows — with React, Next.js, TypeScript, Supabase, and LLMs.",
  keywords: [
    "Pratham Bhatia",
    "AI Developer",
    "Full-Stack Developer",
    "LLM Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Pratham Bhatia" }],
  openGraph: {
    title: "Pratham Bhatia — AI Application Engineer",
    description:
      "Production-ready AI applications, enterprise software, and SaaS products that automate real business workflows.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Bhatia — AI Application Engineer",
    description:
      "Production-ready AI applications, enterprise software, and SaaS products that automate real business workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
