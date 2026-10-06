"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/styles";

const ToastContext = createContext(null);

const tones = {
  info: "border-brand-blue-600",
  success: "border-brand-blue-600",
  warning: "border-brand-amber-400",
  error: "border-brand-red-500",
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const push = useCallback(
    (toast) => {
      const id = crypto.randomUUID();
      setToasts((current) => [...current, { id, tone: "info", ...toast }]);
      window.setTimeout(() => dismiss(id), toast.duration ?? 4200);
    },
    [dismiss]
  );

  const value = useMemo(() => ({ push, dismiss }), [push, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="pointer-events-none fixed bottom-6 left-4 z-[90] flex w-[min(100%-2rem,22rem)] flex-col gap-2"
        aria-live="polite"
        aria-relevant="additions"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className={cn(
              "pointer-events-auto flex items-start gap-3 rounded-card border-l-4 bg-surface p-4 text-ink-900 shadow-navy-lg",
              tones[toast.tone] || tones.info
            )}
          >
            <div className="min-w-0 flex-1">
              <p className="font-heading text-sm font-semibold">{toast.title}</p>
              {toast.description ? <p className="mt-1 text-sm text-ink-600">{toast.description}</p> : null}
            </div>
            <button
              type="button"
              className={cn(
                "inline-flex size-11 shrink-0 items-center justify-center rounded-pill text-ink-600 hover:bg-brand-sky-50 hover:text-brand-navy-700",
                focusRing
              )}
              aria-label="Dismiss notification"
              onClick={() => dismiss(toast.id)}
            >
              <X className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
