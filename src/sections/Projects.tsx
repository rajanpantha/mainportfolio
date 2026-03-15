"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { projects } from "@/data/siteData";
import Image from "next/image";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of projects that showcase my skills and experience"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-xl border border-border bg-bg-card transition-all duration-300 hover:border-border-light hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          >
            {/* Project image */}
            <div className="relative h-48 overflow-hidden bg-bg-tertiary">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />

              {/* Hover overlay with links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary/80 text-text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary/80 text-text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </div>

            {/* Project info */}
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
