import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: "magenta" | "emerald" | "golden" | "deep" | "lavender";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

const COLOR_STYLES: Record<string, string> = {
  magenta:
    "bg-[rgba(209,0,113,0.1)] text-[var(--color-magenta-bold)] border-[rgba(209,0,113,0.2)]",
  emerald:
    "bg-[rgba(31,129,36,0.1)] text-[var(--color-emerald)] border-[rgba(31,129,36,0.2)]",
  golden:
    "bg-[rgba(255,145,0,0.1)] text-[var(--color-tangerine)] border-[rgba(255,145,0,0.2)]",
  deep: "bg-[rgba(75,42,103,0.1)] text-[var(--color-deep)] border-[rgba(75,42,103,0.2)]",
  lavender:
    "bg-[rgba(208,153,255,0.15)] text-[var(--color-deep)] border-[rgba(208,153,255,0.3)]",
};

const DOT_COLORS: Record<string, string> = {
  magenta: "bg-[var(--color-magenta-bold)]",
  emerald: "bg-[var(--color-emerald)]",
  golden: "bg-[var(--color-golden)]",
  deep: "bg-[var(--color-deep)]",
  lavender: "bg-[var(--color-soft-lavender)]",
};

export function Badge({
  children,
  color = "magenta",
  size = "md",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 border font-[var(--font-heading)] font-semibold uppercase tracking-[0.08em] rounded-full",
        size === "sm"
          ? "text-[0.65rem] px-2.5 py-0.5"
          : "text-[0.7rem] px-3 py-1",
        COLOR_STYLES[color],
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${DOT_COLORS[color]}`}
        />
      )}
      {children}
    </span>
  );
}
