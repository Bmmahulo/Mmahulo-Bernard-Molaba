"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Monogram */}
        <Link
          href="#top"
          className="group flex items-center gap-2.5 font-mono"
          aria-label={`${siteConfig.name} — Home`}
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-primary/20 to-accent/20 text-foreground text-sm font-semibold transition-all group-hover:border-primary/50">
            <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              {siteConfig.initials}
            </span>
            <span className="absolute -inset-px rounded-lg bg-gradient-to-br from-primary/40 to-accent/40 opacity-0 blur-md transition-opacity group-hover:opacity-40" />
          </span>
          <span className="hidden sm:block text-sm font-semibold tracking-tight">
            {siteConfig.name.split(" ")[0]}{" "}
            <span className="text-muted-foreground">/ Engineer</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="secondary" size="sm">
            <a href="/resume.pdf" download aria-label="Download CV">
              <Download className="size-4" />
              Download CV
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">
              <Sparkles className="size-4" />
              Hire Me
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-white/10 bg-surface/60 backdrop-blur text-foreground hover:border-primary/50 transition-colors"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-5 space-y-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      onClick={() => setOpen(false)}
                      href={link.href}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-foreground/90 hover:bg-white/5 hover:text-foreground border border-transparent hover:border-white/5 transition-all"
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="flex-1 px-3">{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button asChild variant="secondary" size="sm">
                  <a href="/resume.pdf" download>
                    <FileText className="size-4" />
                    CV
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a onClick={() => setOpen(false)} href="#contact">
                    Hire Me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
