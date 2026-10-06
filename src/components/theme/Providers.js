"use client";

import { CurrencyProvider } from "@/components/theme/CurrencyProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <ToastProvider>{children}</ToastProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
