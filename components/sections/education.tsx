"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Badge variant="gradient" className="font-mono">
            <GraduationCap className="size-3.5" />
            <span className="ml-1.5">Academic Background</span>
          </Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Education &{" "}
            <span className="text-gradient">Work-Integrated Learning</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            A diploma grounded in systems thinking — applied to operating
            systems, automation, ML, and architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                {education.degree}
              </h3>
              <p className="mt-2 text-foreground/80 font-medium">
                {education.institution}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {education.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  {education.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  {education.status}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {education.focus.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
