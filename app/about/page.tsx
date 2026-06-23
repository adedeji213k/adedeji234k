"use client";
import { motion } from "framer-motion";

import { Section } from "@/app/components/section";
import { SKILLS, TIMELINE } from "@/lib/portfolio-data";

export const Metadata = {
  title: "About",
  description:
    "Multidisciplinary software engineer focused on web, mobile, automation, and data — for businesses that want to scale.",
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="A multidisciplinary engineer building useful software."
        description="I work across full-stack development, mobile apps, business systems, automation, and data — wherever code can remove friction and create measurable value."
      >
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              I'm Abdurrahman Abdul-Ganiyu, a software engineer who builds
              end-to-end digital products. My work spans web and mobile
              applications, internal business systems, workflow automation, and
              data analytics.
            </p>

            <p>
              I'm equally comfortable shipping a polished user interface,
              designing a database schema, building APIs, wiring up automations,
              or analyzing datasets to uncover insights that drive better
              decisions.
            </p>

            <p>
              What I enjoy most is taking ambiguous business problems and
              turning them into dependable systems that are simple to use, easy
              to maintain, and capable of growing with the business.
            </p>

            <p>
              I keep learning because technology evolves quickly. Every project
              introduces new challenges, tools, and opportunities to improve how
              software is built and delivered.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 self-start">
            {[
              "Full-stack development",
              "Mobile applications",
              "Business software",
              "Automation systems",
              "Data analysis",
              "Problem solving",
              "Continuous learning",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Technical Skills"
        title="A toolbox for shipping complete products."
        className="border-t border-slate-200 bg-slate-50/50"
      >
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.group}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                {skill.group}
              </div>

              <ul className="mt-3 space-y-2 text-sm">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Experience"
        title="A path through software, systems, and data."
      >
        <ol className="relative ml-3 border-l border-slate-200">
          {TIMELINE.map((item, i) => (
            <motion.li
              key={item.year}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
              }}
              className="relative mb-10 pl-8"
            >
              <span className="absolute -left-[7px] top-1.5 inline-flex h-3.5 w-3.5 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 ring-4 ring-white" />

              <div className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                {item.year}
              </div>

              <h3 className="mt-1 font-display text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-1 max-w-2xl text-sm text-slate-500">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </Section>
    </>
  );
}
