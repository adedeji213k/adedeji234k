"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { PRINCIPLES } from "@/lib/portfolio-data";

export default function PhilosophyStrip() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Engineering Philosophy
            </div>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Building software that{" "}
              <span className="text-gradient-brand">solves real problems.</span>
            </h2>

            <p className="mt-4 max-w-md text-slate-500">
              Principles I bring to every product I build — small enough to
              remember, strict enough to matter.
            </p>
          </div>

          <ul className="grid gap-3">
            {PRINCIPLES.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft"
              >
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-blue-700 to-blue-500 text-xs font-semibold text-white">
                  {i + 1}
                </span>

                <span className="text-sm font-medium md:text-base">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
