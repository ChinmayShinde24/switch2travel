import { Star } from "lucide-react";
import { cn } from "@/lib/cn";
import Skeleton from "@/components/ui/Skeleton";

export default function Rating({
  value = 5,
  max = 5,
  label = "Rating",
  loading = false,
  className = "",
}) {
  const score = Math.max(0, Math.min(max, value));

  if (loading) {
    return <Skeleton className={cn("h-5 w-28", className)} />;
  }

  return (
    <span className={cn("inline-flex items-center gap-1", className)} role="img" aria-label={`${score} out of ${max}. ${label}`}>
      {Array.from({ length: max }).map((_, index) => {
        const filled = index < Math.round(score);
        return (
          <Star
            key={index}
            className={cn("size-4", filled ? "fill-brand-amber-400 text-brand-amber-400" : "text-border")}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        );
      })}
      <span className="sr-only">{label}</span>
    </span>
  );
}
