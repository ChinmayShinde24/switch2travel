import Image from "next/image";
import { cn } from "@/lib/cn";

export default function Logo({ className = "", tone = "auto", markOnly = false }) {
  const wordClass =
    tone === "light"
      ? "text-white"
      : tone === "dark"
        ? "text-brand-navy-700"
        : "text-brand-navy-700 dark:text-white";
  const tagClass =
    tone === "light"
      ? "text-brand-sky-400"
      : tone === "dark"
        ? "text-brand-blue-600"
        : "text-brand-blue-600 dark:text-brand-sky-400";

  return (
    <span className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}>
      <Image
        src="/toggle.png"
        alt=""
        width={331}
        height={147}
        priority
        className="h-8 w-auto object-contain object-left sm:h-9"
      />
      {markOnly ? null : (
        <span className="leading-tight">
          <span className={cn("block font-heading text-base font-semibold tracking-tight sm:text-lg", wordClass)}>
            Switch 2 Travel
          </span>
          <span className={cn("eyebrow mt-0.5 hidden text-[10px] sm:block", tagClass)}>Travel made easier</span>
        </span>
      )}
    </span>
  );
}
