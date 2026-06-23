"use client";

import { Section } from "@/app/components/section";
import ContactForm from "@/app/components/contact/contact-form";
import { Mail, Briefcase, ContactRound, GitBranch } from "lucide-react";

export const Metadata = {
  title: "Contact",
  description:
    "Get in touch about new projects, collaborations, or engineering work.",
};

const CONTACTS = [
  {
    label: "Email",
    value: "digitech3a@gmail.com",
    href: "mailto:digitech3a@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/adedeji234k",
    href: "https://github.com/adedeji213k",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdurrahmanaa",
    href: "https://linkedin.com/in/abdurrahmanaa",
    icon: ContactRound,
  },
  {
    label: "Upwork",
    value: "upwork.com/freelancers/abdurrahman",
    href: "https://www.upwork.com/freelancers/~015b4941312e77a452",
    icon: Briefcase,
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[460px]"
        aria-hidden
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)]" />
      </div>

      <Section
        eyebrow="Contact"
        title="Let's build something useful."
        description="Have a project in mind, or want to talk through an idea? I read every message."
      >
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="space-y-3">
            {CONTACTS.map((item) => (
              <ContactCard key={item.label} {...item} />
            ))}
          </div>

          <ContactForm />
        </div>
      </Section>
    </section>
  );
}

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
  icon: React.ElementType;
};

function ContactCard({ label, value, href, icon: Icon }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-elevated"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-all group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-4 w-4" />
      </span>

      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          {label}
        </div>

        <div className="text-sm font-medium text-slate-900">{value}</div>
      </div>
    </a>
  );
}
