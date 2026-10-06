"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/styles";

export default function Toggle({
  checked = false,
  onChange,
  label,
  offLabel,
  onLabel,
  disabled = false,
  loading = false,
  tone = "default",
  className = "",
  id,
}) {
  const isDisabled = disabled || loading;
  const activeLabel = tone === "onLight" ? "text-[#0F172A]" : "text-ink-900";
  const idleLabel = tone === "onLight" ? "text-[#475569]" : "text-ink-600";

  return (
    <div className={cn("inline-flex min-h-11 items-center gap-3", className)}>
      {offLabel ? (
        <span className={cn("text-sm font-medium", checked ? idleLabel : activeLabel)} aria-hidden="true">
          {offLabel}
        </span>
      ) : null}
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        aria-busy={loading || undefined}
        disabled={isDisabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-pill transition duration-300 ease-out",
          checked ? "bg-brand-navy-700" : tone === "onLight" ? "bg-[#E2E8F0]" : "bg-border",
          "disabled:cursor-not-allowed disabled:opacity-50",
          focusRing
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-0.5 left-0.5 grid size-6 place-items-center rounded-full bg-white shadow-navy transition duration-300 ease-out",
            checked && "translate-x-5"
          )}
        >
          {loading ? <Loader2 className="size-3.5 animate-spin text-brand-navy-700" strokeWidth={1.5} /> : null}
        </span>
      </button>
      {onLabel ? (
        <span className={cn("text-sm font-medium", checked ? activeLabel : idleLabel)} aria-hidden="true">
          {onLabel}
        </span>
      ) : null}
    </div>
  );
}
