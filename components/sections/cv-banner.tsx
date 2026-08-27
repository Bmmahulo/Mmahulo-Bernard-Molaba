"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, Eye, FileText, Sparkles, X } from "lucide-react";
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

export function CVBanner() {
  const [open, setOpen] = React.useState(false);

  return (
    <section id="cv" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface/80 to-surface/40 backdrop-blur-xl p-8 sm:p-12"
        >
          {/* Decorative gradients */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute inset-0 grid-bg opacity-30 mask-fade-y" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <Badge variant="gradient" className="font-mono">
                <Sparkles className="size-3.5" />
                <span className="ml-1.5">Curriculum Vitae</span>
              </Badge>
              <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
                Grab the full <span className="text-gradient">engineering CV</span>.
              </h2>
              <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-xl">
                A one-page snapshot of my education, projects, and stack. Download
                a PDF copy or take a quick look right here.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="group">
                  <a
                    href="/resume.pdf"
                    download="Mmahulo-Molaba-CV.pdf"
                    aria-label="Download CV PDF"
                  >
                    <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                    Download CV (.pdf)
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setOpen(true)}
                >
                  <Eye className="size-4" />
                  Quick View
                </Button>
              </div>
            </div>

            {/* CV preview card */}
            <div className="lg:col-span-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-md p-5 shadow-2xl shadow-primary/10">
                  <div className="flex items-center gap-2 pb-3 border-b border-white/5">
                    <FileText className="size-4 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">
                      Mmahulo_Molaba_CV.pdf
                    </span>
                    <span className="ml-auto text-[10px] font-mono text-muted-foreground/70">
                      1.2 MB
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 grid place-items-center font-bold text-foreground">
                        M
                      </div>
                      <div>
                        <div className="text-sm font-semibold">
                          Mmahulo Bernard Molaba
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">
                          Computer Systems Engineering
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-1.5 rounded-full bg-white/5"
                          style={{ width: `${[88, 70, 95, 60, 80, 55, 75, 65][i]}%` }}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 pt-2">
                      {["Next.js", "ROS2", "PLC", "AI/ML", "Linux", "SQL"].map(
                        (t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-mono text-center text-foreground/70"
                          >
                            {t}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Stack of pages behind */}
                <div className="absolute -z-10 inset-x-6 -bottom-2 h-4 rounded-b-2xl bg-gradient-to-b from-surface/40 to-transparent border-x border-b border-white/5" />
                <div className="absolute -z-20 inset-x-12 -bottom-4 h-4 rounded-b-2xl bg-gradient-to-b from-surface/20 to-transparent border-x border-b border-white/5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick View Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <FileText className="size-5" />
              </span>
              <div>
                <DialogTitle>Curriculum Vitae — Quick Summary</DialogTitle>
                <DialogDescription>
                  At-a-glance view of my experience, education, and key stack.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-5 text-sm">
            <Section title="Profile">
              Final-year Computer Systems Engineering candidate at TUT.
              Specialising in full-stack web, robotics (ROS2), industrial
              automation (Siemens PLCs), and AI/ML agents.
            </Section>

            <Section title="Education">
              Diploma in Computer Systems Engineering — Tshwane University of
              Technology (2023 — Present)
            </Section>

            <Section title="Selected Projects">
              <ul className="space-y-1.5 text-muted-foreground">
                <li>• ROS2 Wall Avoidance Robot — autonomous navigation</li>
                <li>• PLC Conveyor Sorting System — Siemens S7 / TIA Portal</li>
                <li>• Unity ML-Agent RL — reinforcement learning</li>
                <li>• Full-Stack Web + SQL — Next.js / PostgreSQL</li>
              </ul>
            </Section>

            <Section title="Core Stack">
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Python",
                  "C++",
                  "C#",
                  "Java",
                  "SQL",
                  "ROS2",
                  "Siemens PLC",
                  "Unity ML-Agents",
                  "Linux",
                  "Arduino",
                  "Git",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Section>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button asChild variant="secondary" size="sm">
              <a href="/resume.pdf" download>
                <Download className="size-4" />
                Download full PDF
              </a>
            </Button>
            <Button size="sm" onClick={() => setOpen(false)}>
              <X className="size-4" />
              Close
            </Button>
          </div>
        </DialogContent>
        <DialogClose className="hidden" />
      </Dialog>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80 mb-1.5">
        {title}
      </h4>
      <div className="text-foreground/85 leading-relaxed">{children}</div>
    </div>
  );
}
