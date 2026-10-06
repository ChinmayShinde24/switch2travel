import { cn } from "@/lib/cn";

const variants = {
  block: "h-4 w-full rounded-pill",
  title: "h-8 w-2/3 rounded-pill",
  card: "aspect-[4/3] w-full rounded-card",
  avatar: "size-12 rounded-full",
};

export default function Skeleton({ className = "", variant = "block" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative block overflow-hidden bg-brand-sky-50 dark:bg-white/10",
        variants[variant] || variants.block,
        className
      )}
    >
      <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/10" />
    </span>
  );
}
