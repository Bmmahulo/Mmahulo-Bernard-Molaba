"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40 mask-fade-y" />
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge variant="gradient" className="px-4 py-1.5 text-sm font-mono">
              <Zap className="size-3.5 text-primary" />
              <span className="ml-1.5">{siteConfig.tagline}</span>
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          >
            Engineering{" "}
            <span className="text-gradient">Intelligent Systems</span>{" "}
            <br className="hidden sm:block" />
            & Modern Web Applications
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground text-balance"
          >
            Final-year Computer Systems Engineering candidate specializing in{" "}
            <span className="text-foreground">full-stack web development</span>,{" "}
            <span className="text-foreground">robotics (ROS2)</span>,{" "}
            <span className="text-foreground">industrial PLC automation</span>, and{" "}
            <span className="text-foreground">AI/ML agents</span>.
          </motion.p>

          {/* Meta row */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {siteConfig.location}
            </span>
            <span className="font-mono text-xs text-muted-foreground/70">
              mmahulo.molaba@gmail.com
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="group">
              <a href="#projects" aria-label="View projects">
                <Sparkles className="size-4 transition-transform group-hover:rotate-12" />
                View Projects
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href="/resume.pdf"
                download="Mmahulo-Molaba-CV.pdf"
                aria-label="Download resume PDF"
              >
                <Download className="size-4" />
                Download Resume (PDF)
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-3"
          >
            <span className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wider">
              Find me on
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-border" />
            <div className="flex items-center gap-1.5">
              <SocialLink href={siteConfig.github} label="GitHub">
                <Github className="size-4" />
              </SocialLink>
              <SocialLink href={siteConfig.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialLink>
              <SocialLink href={`mailto:${siteConfig.email}`} label="Email">
                <Mail className="size-4" />
              </SocialLink>
            </div>
          </motion.div>
        </div>

        {/* Floating code card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="hidden xl:block absolute right-4 top-32 w-[420px] origin-top"
        >
          <div className="rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-5 shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-1.5 pb-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                ~/portfolio/init.ts
              </span>
            </div>
            <pre className="font-mono text-[12.5px] leading-relaxed text-foreground/85 overflow-hidden">
              <code>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-cyan-300">engineer</span> = {"{"}
                {"\n"}  <span className="text-emerald-300">name</span>:{" "}
                <span className="text-amber-200">&quot;Mmahulo Molaba&quot;</span>,
                {"\n"}  <span className="text-emerald-300">role</span>:{" "}
                <span className="text-amber-200">
                  &quot;Systems Engineer&quot;
                </span>
                ,{"\n"}  <span className="text-emerald-300">stack</span>: [
                <span className="text-amber-200">&quot;Next.js&quot;</span>,{" "}
                <span className="text-amber-200">&quot;ROS2&quot;</span>,{" "}
                <span className="text-amber-200">&quot;PLC&quot;</span>],{"\n"}{" "}
                <span className="text-emerald-300">focus</span>: [
                <span className="text-amber-200">&quot;AI/ML&quot;</span>,{" "}
                <span className="text-amber-200">&quot;Robotics&quot;</span>],{"\n"}{" "}
                <span className="text-emerald-300">available</span>:{" "}
                <span className="text-pink-400">true</span>,{"\n"}{" "}
                <span className="text-emerald-300">hire</span>:{" "}
                <span className="text-pink-400">async</span> () =&gt;{" "}
                <span className="text-emerald-300">ship</span>(){"\n"}.
                {"\n"}
              </code>
            </pre>
            <div className="mt-3 flex items-center gap-2 font-mono text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-muted-foreground">Ready to deploy</span>
              <span className="ml-auto text-primary">→</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({
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
      className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-surface/40 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
