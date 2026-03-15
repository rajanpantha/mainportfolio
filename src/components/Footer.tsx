"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/50 px-6 py-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-text-primary"
            >
              <span className="text-primary">&lt;</span>
              {siteConfig.name.split(" ")[0]}
              <span className="text-primary"> /&gt;</span>
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <Github size={18} />,
                href: siteConfig.social.github,
                label: "GitHub",
              },
              {
                icon: <Linkedin size={18} />,
                href: siteConfig.social.linkedin,
                label: "LinkedIn",
              },
              {
                icon: <Twitter size={18} />,
                href: siteConfig.social.twitter,
                label: "Twitter",
              },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-text-muted transition-colors duration-200 hover:text-primary"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-text-muted">
            <span>Built with</span>
            <Heart size={14} className="text-red-500" />
            <span>
              by {siteConfig.name} &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
