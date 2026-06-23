// app/page.tsx

import type { Metadata } from "next";

import Hero from "@/app/components/home/hero";
import ExpertiseGrid from "@//app/components/home/expertise-grid";
import FeaturedProjects from "@/app/components/home/featured-projects";
import PhilosophyStrip from "@/app/components/home/philosophy-strip";

export const metadata: Metadata = {
  title: "Abdurrahman Abdul-Ganiyu | Software Engineer",
  description:
    "Software engineer building modern web applications, mobile apps, automation systems, and data-driven solutions.",
  openGraph: {
    title: "Abdurrahman Abdul-Ganiyu | Software Engineer",
    description:
      "Web, mobile, automation, and data engineering for modern businesses.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseGrid />
      <FeaturedProjects />
      <PhilosophyStrip />
    </>
  );
}
