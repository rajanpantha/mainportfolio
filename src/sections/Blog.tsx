"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { blogPosts } from "@/data/siteData";

export default function Blog() {
  return (
    <SectionWrapper id="blog" className="bg-bg-secondary">
      <SectionHeading
        title="Latest Posts"
        subtitle="Thoughts, tutorials, and insights on web development"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="group flex flex-col rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-border-light hover:bg-bg-card-hover hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            {/* Meta info */}
            <div className="mb-4 flex items-center gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-lg font-semibold leading-snug text-text-primary transition-colors group-hover:text-primary">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
              {post.excerpt}
            </p>

            {/* Read more */}
            <a
              href={post.slug}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3"
            >
              Read more
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
