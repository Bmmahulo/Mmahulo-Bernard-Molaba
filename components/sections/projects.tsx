"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderGit2, Layers, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const categoryAccent: Record<Project["category"], string> = {
  robotics: "from-emerald-400/15 to-cyan-400/10 text-emerald-300 border-emerald-400/20",
  automation: "from-amber-400/15 to-rose-400/10 text-amber-300 border-amber-400/20",
  ai: "from-indigo-400/15 to-violet-400/10 text-indigo-300 border-indigo-400/20",
  web: "from-cyan-400/15 to-sky-400/10 text-cyan-300 border-cyan-400/20",
};

export function Projects() {
  const [active, setActive] = React.useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Badge variant="gradient" className="font-mono">
            <FolderGit2 className="size-3.5" />
            <span className="ml-1.5">Featured Projects</span>
          </Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Engineering work that{" "}
            <span className="text-gradient">runs in the real world</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            A selection of robotics, automation, AI, and full-stack projects.
            Click any card for the full breakdown.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <AnimatePresence>
          {active && (
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "grid place-items-center h-10 w-10 rounded-lg border bg-gradient-to-br",
                      categoryAccent[active.category]
                    )}
                  >
                    <active.icon className="size-5" />
                  </span>
                  <div>
                    <DialogTitle className="text-2xl">
                      {active.title}
                    </DialogTitle>
                    <DialogDescription className="mt-1">
                      {active.short}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {active.description}
                </p>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80 mb-2">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {active.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-foreground/85"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80 mb-2">
                    Tech stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {active.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {active.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      <Layers className="size-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button asChild variant="ghost" size="sm">
                  <a href="#projects">
                    <X className="size-4" />
                    Close
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href="#contact">
                    Discuss this project
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </DialogContent>
          )}
        </AnimatePresence>
        <DialogClose className="hidden" />
      </Dialog>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const Icon = project.icon;
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative text-left rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      {/* gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />

      <div className="relative flex items-start justify-between">
        <span
          className={cn(
            "grid place-items-center h-12 w-12 rounded-xl border bg-gradient-to-br",
            categoryAccent[project.category]
          )}
        >
          <Icon className="size-5" />
        </span>
        <ArrowUpRight className="size-5 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:rotate-12 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <h3 className="relative mt-5 text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {project.short}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex items-center justify-between text-xs text-muted-foreground/80">
        <span className="font-mono">
          0{index + 1} / 0{projects.length}
        </span>
        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          View details →
        </span>
      </div>
    </motion.button>
  );
}
