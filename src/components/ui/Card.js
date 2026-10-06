import { cn } from "@/lib/cn";
import Skeleton from "@/components/ui/Skeleton";

const tones = {
  default: "border-border bg-surface text-ink-900 shadow-navy",
  alt: "border-border bg-surface-alt text-ink-900 shadow-navy",
  dark: "border-white/15 bg-white/10 text-white shadow-navy-lg",
};

export default function Card({
  children,
  className = "",
  tone = "default",
  hover = false,
  loading = false,
  as: Tag = "div",
  ...props
}) {
  const classes = cn(
    "rounded-card border p-6",
    tones[tone],
    hover && "transition duration-300 ease-out hover:-translate-y-1 hover:shadow-navy-lg",
    className
  );

  if (loading) {
    return (
      <div className={classes} aria-busy="true" {...props}>
        <Skeleton className="mb-4 h-40 rounded-media" />
        <Skeleton className="mb-2 h-5 w-2/3" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
