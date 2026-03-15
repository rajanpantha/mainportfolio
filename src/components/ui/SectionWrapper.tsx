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
      className={`relative py-24 px-6 ${className}`}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
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
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
    </motion.div>
  );
}
