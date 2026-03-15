"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-divider relative py-24 px-6 sm:py-28 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-[1100px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-16 text-center"
    >
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-0.5 w-12 rounded-full bg-primary/60" />
    </motion.div>
  );
}
