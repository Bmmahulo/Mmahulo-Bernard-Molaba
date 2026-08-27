"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { skillCategories, type SkillCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap: Record<SkillCategory["accent"], { text: string; bar: string; glow: string; chip: string }> = {
  cyan: {
    text: "text-cyan-300",
    bar: "from-cyan-400 to-cyan-300",
    glow: "shadow-cyan-500/20",
    chip: "bg-cyan-400/10 text-cyan-200 border-cyan-400/20",
  },
  emerald: {
    text: "text-emerald-300",
    bar: "from-emerald-400 to-emerald-300",
    glow: "shadow-emerald-500/20",
    chip: "bg-emerald-400/10 text-emerald-200 border-emerald-400/20",
  },
  indigo: {
    text: "text-indigo-300",
    bar: "from-indigo-400 to-violet-300",
    glow: "shadow-indigo-500/20",
    chip: "bg-indigo-400/10 text-indigo-200 border-indigo-400/20",
  },
  amber: {
    text: "text-amber-300",
    bar: "from-amber-400 to-orange-300",
    glow: "shadow-amber-500/20",
    chip: "bg-amber-400/10 text-amber-200 border-amber-400/20",
  },
};

export function Skills() {
  const [active, setActive] = React.useState(skillCategories[0].id);
  const activeCategory =
    skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Badge variant="gradient" className="font-mono">
            <Cpu className="size-3.5" />
            <span className="ml-1.5">Skills Architecture</span>
          </Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            A multi-domain{" "}
            <span className="text-gradient">engineering toolkit</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Switch between the layers of my stack — from full-stack web and
            systems programming to robotics, AI, and industrial automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <Tabs value={active} onValueChange={setActive} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              {skillCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <TabsTrigger key={cat.id} value={cat.id} className="shrink-0">
                    <Icon className="size-4" />
                    {cat.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {skillCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-8">
                <SkillPanel category={cat} />
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Marquee of all skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm py-6"
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee pause-on-hover whitespace-nowrap">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span
                key={i}
                className="mx-3 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground"
              >
                <Code2 className="size-3.5 text-primary/70" />
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillPanel({ category }: { category: SkillCategory }) {
  const Icon = category.icon;
  const accent = accentMap[category.accent];

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-4 rounded-2xl border border-white/10 bg-gradient-to-br from-surface/60 to-surface/20 backdrop-blur-sm p-6"
      >
        <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl border", accent.chip)}>
          <Icon className={cn("size-5", accent.text)} />
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          {category.label}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {category.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {category.skills.slice(0, 4).map((s) => (
            <span
              key={s.name}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
            >
              {s.name}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-sm p-4 hover:border-white/20 transition-colors group"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-semibold text-foreground">{skill.name}</h4>
              <span className={cn("text-xs font-mono", accent.text)}>
                {skill.level}%
              </span>
            </div>
            {skill.meta && (
              <p className="mt-0.5 text-xs text-muted-foreground/80 font-mono">
                {skill.meta}
              </p>
            )}
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.05 * i, ease: "easeOut" }}
                className={cn("h-full rounded-full bg-gradient-to-r", accent.bar)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));
