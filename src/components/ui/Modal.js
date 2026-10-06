"use client";

import { useEffect, useId, useRef } from "react";
import { Loader2, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/styles";

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Modal({
  open = false,
  onClose,
  title,
  description,
  children,
  loading = false,
  className = "",
}) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const node = dialogRef.current;
    const previous = document.activeElement;
    const getFocusable = () => Array.from(node.querySelectorAll(FOCUSABLE)).filter((el) => !el.disabled);
    const first = getFocusable()[0];
    first?.focus();
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose?.();
        return;
      }
      if (event.key !== "Tab") return;
      const items = getFocusable();
      if (!items.length) return;
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-brand-navy-900/70"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        aria-busy={loading || undefined}
        className={cn(
          "relative z-10 w-full max-w-lg rounded-card border border-border bg-surface p-6 text-ink-900 shadow-navy-lg sm:p-8",
          className
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p id={titleId} className="font-heading text-2xl font-semibold tracking-tight text-brand-navy-700 dark:text-white">
              {title}
            </p>
            {description ? (
              <p id={descriptionId} className="mt-2 text-sm text-ink-600">
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-pill text-brand-navy-700 hover:bg-brand-sky-50 dark:text-white dark:hover:bg-white/10",
              focusRing
            )}
            aria-label="Close"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="flex min-h-24 items-center justify-center">
              <Loader2 className="size-6 animate-spin text-brand-blue-600" strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">Loading</span>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
