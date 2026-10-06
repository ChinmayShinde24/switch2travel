import { cn } from "@/lib/cn";

export default function WaveDivider({
  upperClass = "bg-surface",
  lowerClass = "text-brand-sky-50",
  variant = "wave",
  flip = false,
  className = "",
}) {
  if (variant === "diagonal") {
    return (
      <div className={cn("h-12 overflow-hidden leading-none md:h-16", upperClass, className)} aria-hidden="true">
        <div className={cn("h-full origin-bottom -skew-y-2", lowerClass, "bg-current")} />
      </div>
    );
  }

  return (
    <div className={cn("leading-none", upperClass, lowerClass, className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className={cn("block h-10 w-full md:h-16", flip && "-scale-y-100")}
      >
        <path
          fill="currentColor"
          d="M0,40 C240,72 420,8 720,28 C1020,48 1200,72 1440,24 L1440,72 L0,72 Z"
        />
      </svg>
    </div>
  );
}
