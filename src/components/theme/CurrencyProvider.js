"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CurrencyContext = createContext(null);
const INR_PER_USD = 84;

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    const stored = window.localStorage.getItem("s2t-currency");
    if (stored === "USD" || stored === "INR") setCurrency(stored);
  }, []);

  const updateCurrency = (next) => {
    setCurrency(next);
    window.localStorage.setItem("s2t-currency", next);
  };

  const value = useMemo(
    () => ({ currency, setCurrency: updateCurrency, inrPerUsd: INR_PER_USD }),
    [currency]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}
