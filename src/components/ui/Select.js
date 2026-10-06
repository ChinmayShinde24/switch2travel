"use client";

import { useId } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { disabledState, focusRing } from "@/lib/styles";

export default function Select({
  label,
  hint,
  error,
  id,
  className = "",
  loading = false,
  disabled = false,
  tone = "default",
  children,
  ...props
}) {
  const autoId = useId();
  const fieldId = id || autoId;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <label className={cn("block text-sm", className)} htmlFor={fieldId}>
      {label ? (
        <span
          className={cn(
            "mb-2 block font-medium",
            tone === "glass" ? "text-brand-navy-900" : "text-brand-navy-700 dark:text-white"
          )}
        >
          {label}
        </span>
      ) : null}
      <span className="relative block">
        <select
          id={fieldId}
          disabled={disabled || loading}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          aria-busy={loading || undefined}
          className={cn(
            "min-h-11 w-full appearance-none border py-3 pr-10 pl-4 text-sm text-ink-900 outline-none transition duration-200",
            "rounded-pill",
            tone === "glass"
              ? "border-white/60 bg-white text-brand-navy-900"
              : "border-border bg-surface",
            error ? "border-brand-red-500" : "focus-visible:border-brand-blue-600",
            tone === "glass"
              ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              : focusRing,
            disabledState
          )}
          {...props}
        >
          {children}
        </select>
        {loading ? (
          <Loader2
            className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin text-brand-blue-600"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ) : (
          <ChevronDown
            className={cn(
              "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2",
              tone === "glass" ? "text-brand-navy-700" : "text-ink-600"
            )}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        )}
      </span>
      {hint && !error ? (
        <span id={hintId} className={cn("mt-1.5 block text-xs", tone === "glass" ? "text-[#475569]" : "text-ink-600")}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span id={errorId} className="mt-1.5 block text-xs font-medium text-brand-red-500" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
