"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/app/components/section";

import { PROJECTS } from "@/lib/portfolio-data";

export default function FeaturedProjects() {
  return (
    <Section
      eyebrow="Selected Work"
      title="Featured projects"
      description="A snapshot of recent products — full case studies live in the projects page."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.slice(0, 4).map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              href="/projects"
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-elevated"
            >
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-blue-700">
                  {p.category}
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">{p.overview}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-700" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-500"
        >
          See all projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
