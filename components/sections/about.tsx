"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <Badge variant="gradient" className="font-mono">
              <Sparkles className="size-3.5" />
              <span className="ml-1.5">About Me</span>
            </Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
              Where engineering rigor meets <span className="text-gradient">modern product thinking</span>.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground font-mono">
              <MapPin className="inline size-3.5 mr-1" />
              {siteConfig.location}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m a final-year{" "}
              <span className="text-foreground">Computer Systems Engineering</span>{" "}
              candidate at the Tshwane University of Technology, drawn to the
              intersection of low-level systems and the modern web. My work spans
              from autonomous ROS2 robots and PLC-driven industrial lines to
              full-stack web platforms backed by typed APIs and relational
              databases.
            </p>
            <p>
              I care about{" "}
              <span className="text-foreground">
                robustness, observability, and clean abstractions
              </span>{" "}
              — the qualities that make a system feel engineered rather than
              glued together. I&apos;m currently exploring reinforcement learning
              agents, ML-driven control, and developer tooling that ships
              end-to-end.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-4">
              <Stat label="Discipline" value="Systems Eng." />
              <Stat
                label="Currently"
                value={
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap className="size-3.5" />
                    Final Year
                  </span>
                }
              />
              <Stat label="Focus" value="AI + Robotics" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-sm p-4">
      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground/70">
        {label}
      </div>
      <div className="mt-1.5 text-foreground font-semibold">{value}</div>
    </div>
  );
}
