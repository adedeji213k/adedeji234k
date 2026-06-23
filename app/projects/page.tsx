"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Section } from "@/app/components/section";
import { PROJECTS } from "@/lib/portfolio-data";

const FILTERS = ["All", "Web", "Business", "Automation", "Data"] as const;

type Filter = (typeof FILTERS)[number];

// Remove this if you're using generateMetadata elsewhere
export const Metadata = {
  title: "Projects",
  description:
    "Featured projects across web, mobile, business systems, automation, and data analytics.",
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const projects = useMemo(() => {
    if (filter === "All") return PROJECTS;

    return PROJECTS.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <Section
      eyebrow="Projects"
      title="Selected Work"
      description="A look at recent products — what they solve, how they're built, and the outcomes they delivered."
    >
      {/* Filters */}

      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              filter === item
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-200 bg-white text-slate-500 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Projects */}

      <div className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
              }}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                  {project.category}
                </span>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-blue-700"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    Live Demo
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <h3 className="mt-3 font-display text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">{project.overview}</p>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    Problem
                  </div>

                  <p className="mt-1 text-slate-700">{project.problem}</p>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    Outcomes
                  </div>

                  <ul className="mt-1 space-y-1">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 text-slate-700">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />

                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
