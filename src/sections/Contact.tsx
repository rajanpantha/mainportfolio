"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/data/siteData";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project in mind or want to collaborate? Let's talk!"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-xl"
      >
        <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-10">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mail size={28} className="text-primary" />
            </div>
            <p className="text-text-secondary">
              Feel free to reach out. I&apos;m always open to new opportunities and
              interesting projects.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary"
              />
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              icon={<Send size={16} />}
            >
              Send Message
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-text-muted">
              Or email me directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary transition-colors hover:text-primary-light"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
