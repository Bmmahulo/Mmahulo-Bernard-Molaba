"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Github,
  Linkedin,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/data";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [status, setStatus] =
    React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("submitting");
    // Simulate submission. Replace with real API call (Resend, Formspree, etc.).
    await new Promise((r) => setTimeout(r, 900));
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );
    const subject = encodeURIComponent(data.subject);
    try {
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Badge variant="gradient" className="font-mono">
            <MessageSquare className="size-3.5" />
            <span className="ml-1.5">Get in Touch</span>
          </Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s build something{" "}
            <span className="text-gradient">engineered to last</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Open to full-time roles, internships, and freelance projects in
            full-stack, robotics, automation, or AI/ML.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Direct contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-5 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm p-6 sm:p-8 space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold">Direct contact</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Reach out via email, or find me online.
              </p>
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-primary/40 transition-colors"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Mail className="size-4" />
              </span>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">
                  Email
                </div>
                <div className="mt-0.5 text-foreground font-medium group-hover:text-primary transition-colors">
                  {siteConfig.email}
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                <MapPin className="size-4" />
              </span>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">
                  Location
                </div>
                <div className="mt-0.5 text-foreground font-medium">
                  {siteConfig.location}
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80 mb-3">
                Elsewhere
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="secondary" size="sm">
                  <a href={siteConfig.github} target="_blank" rel="noreferrer">
                    <Github className="size-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="size-4" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm p-6 sm:p-8 space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                id="name"
                placeholder="Your name"
                error={errors.name?.message}
                registration={register("name")}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="you@example.com"
                error={errors.email?.message}
                registration={register("email")}
              />
            </div>

            <Field
              label="Subject"
              id="subject"
              placeholder="What's this about?"
              error={errors.subject?.message}
              registration={register("subject")}
            />

            <div>
              <label
                htmlFor="message"
                className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me a bit about your project, role, or idea..."
                className="mt-2"
                aria-invalid={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                  <AlertCircle className="size-3" />
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="group"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="size-4" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </Button>

              {status === "success" && (
                <span className="text-sm text-accent inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  Mail client opened. Talk soon!
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-400 inline-flex items-center gap-1.5">
                  <AlertCircle className="size-3.5" />
                  Something went wrong. Please email me directly.
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  error,
  registration,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80"
      >
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2"
        aria-invalid={!!error}
        {...registration}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
          <AlertCircle className="size-3" />
          {error}
        </p>
      )}
    </div>
  );
}
