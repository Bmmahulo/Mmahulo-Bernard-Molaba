"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-white/5 bg-surface/30 backdrop-blur-sm">
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 inset-x-0 h-px origin-left bg-gradient-to-r from-primary via-cyan-300 to-accent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link
              href="#top"
              className="font-mono text-sm font-semibold tracking-tight"
            >
              {siteConfig.name}{" "}
              <span className="text-muted-foreground">/ Portfolio</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Engineered with care using Next.js, TypeScript, Tailwind, and
              Framer Motion.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FooterLink href={siteConfig.github} label="GitHub">
              <Github className="size-4" />
            </FooterLink>
            <FooterLink href={siteConfig.linkedin} label="LinkedIn">
              <Linkedin className="size-4" />
            </FooterLink>
            <FooterLink href={`mailto:${siteConfig.email}`} label="Email">
              <Mail className="size-4" />
            </FooterLink>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/80">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart className="size-3 text-red-400 fill-red-400" /> in
            Gauteng, South Africa
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid place-items-center h-11 w-11 rounded-full border border-white/10 bg-surface/80 backdrop-blur-xl text-foreground shadow-xl transition-all duration-300 hover:border-primary/50 hover:text-primary hover:-translate-y-0.5 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ArrowUp className="size-4" />
      </button>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-surface/40 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
