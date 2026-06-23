"use client";

import { useState } from "react";
import { z } from "zod";
import { Check, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),

  email: z.string().trim().email("Enter a valid email").max(255),

  message: z.string().trim().min(10, "Tell me a little more").max(1500),
});

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    };

    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const errs: Record<string, string> = {};

      parsed.error.issues.forEach((issue) => {
        errs[issue.path[0] as string] = issue.message;
      });

      setErrors(errs);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setSent(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);

      setErrors({
        form: "Unable to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-elevated"
    >
      <div
        className="absolute -inset-1 -z-10 rounded-2xl opacity-10 blur-2xl"
        style={{
          background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
        }}
      />

      {sent ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white">
            <Check className="h-5 w-5" />
          </div>

          <h3 className="mt-4 font-display text-xl font-semibold">
            Message Sent
          </h3>

          <p className="mt-1 max-w-sm text-sm text-slate-500">
            Thanks for reaching out. I'll get back to you within a day or two.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <Field
            label="Name"
            name="name"
            error={errors.name}
            placeholder="Your name"
          />

          <Field
            label="Email"
            name="email"
            type="email"
            error={errors.email}
            placeholder="you@company.com"
          />

          <Field
            label="Message"
            name="message"
            textarea
            error={errors.message}
            placeholder="Tell me about your project, timeline, and goals."
          />
          {errors.form && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {errors.form}
            </div>
          )}

          <button
            disabled={loading}
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </button>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  error?: string;
}) {
  const classes =
    "w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100";

  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
        {label}
      </span>

      {textarea ? (
        <textarea
          name={name}
          rows={5}
          maxLength={1500}
          placeholder={placeholder}
          className={classes}
        />
      ) : (
        <input
          name={name}
          type={type}
          maxLength={255}
          placeholder={placeholder}
          className={classes}
        />
      )}

      {error && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
}
