import { cn } from "@/lib/cn";
import Skeleton from "@/components/ui/Skeleton";

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  as: TitleTag = "h2",
  onDark = false,
  align = "left",
  loading = false,
  className = "",
}) {
  if (loading) {
    return (
      <div className={cn("max-w-measure", align === "center" && "mx-auto text-center", className)} aria-busy="true">
        <Skeleton className="mb-4 h-3 w-32" />
        <Skeleton className="mb-3 h-10 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  return (
    <div className={cn("max-w-measure", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-3 text-xs",
            onDark ? "text-brand-sky-400" : "text-brand-blue-600 dark:text-brand-sky-400"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <TitleTag className={onDark ? "text-white" : "text-brand-navy-700 dark:text-white"}>
          {title}
          {accent ? (
            <>
              {" "}
              <span
                className={cn(
                  "font-display",
                  onDark ? "text-brand-amber-400" : "text-brand-blue-600 dark:text-brand-sky-400"
                )}
              >
                {accent}
              </span>
            </>
          ) : null}
        </TitleTag>
      ) : null}
      {description ? (
        <p className={cn("measure mt-4 text-base sm:text-lg", onDark ? "text-white/80" : "text-ink-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
