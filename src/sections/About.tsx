"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/data/siteData";
import { Code, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: <Code size={24} />,
    title: "Clean Code",
    description:
      "Writing maintainable, well-documented code that scales with your team and product.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Problem Solver",
    description:
      "Turning complex challenges into elegant, user-friendly solutions.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Performance",
    description:
      "Building fast, optimized applications that deliver exceptional user experiences.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="A passionate developer dedicated to crafting exceptional digital experiences"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            I&apos;m {siteConfig.name}, a full stack developer with a passion for
            building modern web applications. With experience across the entire
            development stack, I specialize in creating performant, accessible,
            and visually polished user interfaces.
          </p>
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            I believe great software comes from understanding both the technical
            challenges and the human needs behind every project. Whether it&apos;s a
            startup MVP or an enterprise application, I bring the same level of
            care and attention to detail.
          </p>
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies,
            contributing to open source, or sharing knowledge through blog posts
            and community engagement.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { value: "3+", label: "Years Exp." },
              { value: "20+", label: "Projects" },
              { value: "10+", label: "Technologies" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-bg-card p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary">{value}</div>
                <div className="text-xs text-text-muted">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="space-y-4"
        >
          {highlights.map(({ icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ x: 8 }}
              className="group flex gap-4 rounded-xl border border-border bg-bg-card p-5 transition-all duration-300 hover:border-border-light hover:bg-bg-card-hover"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                {icon}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
