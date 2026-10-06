"use client";

import { useCurrency } from "@/components/theme/CurrencyProvider";
import { formatINR } from "@/lib/trips";

export default function Price({ amount, className = "" }) {
  const { currency, inrPerUsd } = useCurrency();

  if (currency === "USD") {
    const usd = Math.round(amount / inrPerUsd);
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(usd);

    return (
      <span className={className} title={`Approximate, at ₹${inrPerUsd} per US dollar`}>
        ≈ {formatted}
        <span className="sr-only"> approximate</span>
      </span>
    );
  }

  return <span className={className}>{formatINR(amount)}</span>;
}
