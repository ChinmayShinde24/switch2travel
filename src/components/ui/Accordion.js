"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/styles";
import Skeleton from "@/components/ui/Skeleton";

export default function Accordion({ items = [], className = "", loading = false }) {
  const [open, setOpen] = useState(items[0]?.id ?? null);
  const baseId = useId();

  if (loading) {
    return (
      <div className={className} aria-busy="true">
        <Skeleton className="mb-3 h-14 w-full" />
        <Skeleton className="mb-3 h-14 w-full" />
        <Skeleton className="h-14 w-full" />
      </div>
    );
  }

  return (
    <div className={cn("divide-y divide-border rounded-card border border-border bg-surface", className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id}>
            <h3 className="text-base">
              <button
                id={buttonId}
                type="button"
                className={cn(
                  "flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-brand-navy-700 transition duration-200 hover:text-brand-blue-600 dark:text-white dark:hover:text-brand-sky-400",
                  focusRing
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
              >
                {item.question}
                <ChevronDown
                  className={cn("size-5 shrink-0 transition duration-300", isOpen && "rotate-180")}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid transition-[grid-template-rows] duration-300 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className="measure px-5 pb-5 text-sm text-ink-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
