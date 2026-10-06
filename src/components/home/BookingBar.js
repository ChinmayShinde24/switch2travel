"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { getAllRegions } from "@/lib/trips";

export default function BookingBar() {
  const regions = getAllRegions();
  const router = useRouter();
  const [region, setRegion] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  function goToDestination(slug) {
    if (!slug) {
      setError("Choose a destination to continue.");
      return;
    }
    setError("");
    setPending(true);
    router.push(`/destinations/${slug}`);
  }

  function onSubmit(event) {
    event.preventDefault();
    goToDestination(region);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/40 bg-white/75 p-3 text-brand-navy-900 shadow-glass backdrop-blur-md md:rounded-pill md:p-2"
      aria-label="Search holiday packages"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-2">
        <Select
          label="Where to"
          tone="glass"
          className="min-w-0 flex-1 md:[&>span:first-child]:sr-only"
          name="destination"
          value={region}
          error={error}
          onChange={(event) => {
            const next = event.target.value;
            setRegion(next);
            setError("");
          }}
        >
          <option value="">Where to?</option>
          {regions.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </Select>
        <Button type="submit" className="w-full shrink-0 md:w-auto" loading={pending} disabled={pending}>
          Search trips
        </Button>
      </div>
    </form>
  );
}
