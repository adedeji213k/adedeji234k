import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold">
            Abdurrahman Abdul-Ganiyu
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Full-Stack Developer • Mobile Apps • Automation • Data Solutions
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href="mailto:digitech3a@gmail.com"
            className="text-slate-500 transition hover:text-slate-950"
          >
            Email
          </a>

          <a
            href="https://github.com/adedeji213k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-slate-950"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-slate-950"
          >
            LinkedIn
          </a>

          <a
            href="https://www.upwork.com/freelancers/~015b4941312e77a452"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-slate-950"
          >
            Upwork
          </a>
        </div>

        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Abdurrahman Abdul-Ganiyu
        </div>
      </div>
    </footer>
  );
}
