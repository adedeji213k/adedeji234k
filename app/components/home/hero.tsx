"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import heroImage from "@/app/assets/hero.png";
import { TECH_BADGES } from "@/lib/portfolio-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-60" />

      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-blue-50/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs text-slate-600 shadow-soft">
              <Sparkles className="h-3 w-3 text-blue-500" />
              Available for new projects
            </div>

            <h1 className="text-5xl font-semibold leading-tight lg:text-7xl">
              Abdurrahman{" "}
              <span className="text-gradient-brand">Abdul-Ganiyu</span>
            </h1>

            <h5 className="text-lg mt-3 font-semibold lg:text-xl">
              I Build Software That{" "}
              <span className="text-gradient-brand">Helps Businesses</span>{" "}
              Operate Better
            </h5>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              From custom web applications and mobile apps to workflow
              automation and business systems, I create digital solutions that
              save time, reduce manual work, and support growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 transition hover:border-blue-600 hover:text-blue-600"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {TECH_BADGES.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-elevated">
              <Image
                src={heroImage}
                alt="Software engineer workspace"
                priority
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
