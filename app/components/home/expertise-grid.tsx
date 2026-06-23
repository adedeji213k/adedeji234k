"use client";
import { Section } from "@/app/components/section";
import { EXPERTISE } from "@/lib/portfolio-data";

import { motion } from "framer-motion";

export default function ExpertiseGrid() {
  return (
    <Section
      eyebrow="Expertise"
      title="One engineer. Full product capability."
      description="From frontend to data pipelines and workflow automation — I build complete, production-ready systems."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {EXPERTISE.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-elevated"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-600 opacity-0 blur-3xl transition-opacity group-hover:opacity-10" />

            <h3 className="font-display text-xl font-semibold">{e.title}</h3>

            <p className="mt-2 text-sm text-slate-500">{e.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {e.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
