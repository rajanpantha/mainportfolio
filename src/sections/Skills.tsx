"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { skills } from "@/data/siteData";

const categories = ["Frontend", "Backend", "DevOps", "Tools"] as const;

const skillIcons: Record<string, string> = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "🔷",
  TailwindCSS: "🎨",
  "Node.js": "🟩",
  Python: "🐍",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Docker: "🐳",
  AWS: "☁️",
  Git: "📦",
  Figma: "🎯",
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-bg-secondary">
      <SectionHeading
        title="Skills & Tools"
        subtitle="Technologies I work with to bring ideas to life"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: catIndex * 0.1,
              ease: "easeOut",
            }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              {category}
            </h3>
            <div className="space-y-2">
              {skills
                .filter((s) => s.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.1 + index * 0.08,
                      duration: 0.4,
                    }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(108, 99, 255, 0.08)",
                    }}
                    className="group flex items-center gap-3 rounded-lg border border-border bg-bg-card px-4 py-3 transition-all duration-200 hover:border-primary/30"
                  >
                    <span className="text-lg">
                      {skillIcons[skill.name] || "💻"}
                    </span>
                    <span className="text-sm font-medium text-text-primary transition-colors group-hover:text-primary">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
