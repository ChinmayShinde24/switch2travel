import { cn } from "@/lib/cn";

/**
 * Amber, orange and sunrise badges use navy text.
 * Those fills fail WCAG AA with white or amber lettering.
 */
const tones = {
  sunrise: "bg-sunrise text-brand-navy-900",
  amber: "bg-brand-amber-400 text-brand-navy-900",
  sky: "bg-brand-sky-50 text-brand-blue-600 dark:text-brand-sky-400",
  navy: "bg-brand-navy-700 text-white",
  outline: "border border-border bg-surface text-brand-navy-700 dark:text-white",
};

export default function Badge({
  children,
  tone = "sky",
  className = "",
  loading = false,
}) {
  if (loading) {
    return (
      <span
        aria-hidden="true"
        className={cn("inline-block h-6 w-16 animate-pulse rounded-pill bg-brand-sky-50", className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center rounded-pill px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
