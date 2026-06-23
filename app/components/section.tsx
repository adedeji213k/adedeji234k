import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-6 py-20 md:py-28 ${className}`}
    >
      {(eyebrow || title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
