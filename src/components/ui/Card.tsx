"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      className={`rounded-xl border border-border bg-bg-card p-6 ${
        hover
          ? "transition-all duration-300 hover:border-border-light hover:bg-bg-card-hover hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : ""
      } ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
