import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "gradient";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default:
      "border-transparent bg-primary/10 text-primary border border-primary/20",
    secondary:
      "border-transparent bg-white/5 text-foreground/80 border border-white/10",
    outline: "border-white/10 text-foreground/80 bg-transparent",
    gradient:
      "border-transparent bg-gradient-to-r from-primary/15 to-accent/15 text-foreground border border-primary/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
