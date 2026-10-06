"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import { getAllRegions } from "@/lib/trips";

export default function ContactForm() {
  const regions = getAllRegions();
  const { push } = useToast();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      region: String(data.get("region") || ""),
      notes: String(data.get("notes") || "").trim(),
    };
    const nextErrors = {};
    if (!values.name) nextErrors.name = "Tell us who to ask for.";
    if (!/^[0-9+\-\s]{8,}$/.test(values.phone)) nextErrors.phone = "Enter a phone number we can reach.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "That email does not look complete.";
    }
    if (!values.region) nextErrors.region = "Pick a region, even if you are still deciding.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      push({ tone: "error", title: "Check the form", description: "A few fields need a second look." });
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
    event.currentTarget.reset();
    push({
      tone: "success",
      title: "Request received",
      description: "A planner will reply with routes and a starting price. This preview does not email the desk yet.",
    });
  }

  return (
    <form className="space-y-5 rounded-card border border-border bg-surface p-6 shadow-navy sm:p-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input name="name" label="Full name" autoComplete="name" required error={errors.name} placeholder="Your name" disabled={loading} />
        <Input name="phone" label="Phone" type="tel" autoComplete="tel" required error={errors.phone} placeholder="+91" disabled={loading} />
      </div>
      <Input
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        error={errors.email}
        hint="Optional. We will use it if we cannot reach you by phone."
        placeholder="you@email.com"
        disabled={loading}
      />
      <Select name="region" label="Preferred region" defaultValue="" error={errors.region} disabled={loading}>
        <option value="" disabled>
          Select a region
        </option>
        {regions.map((region) => (
          <option key={region.slug} value={region.slug}>
            {region.name}
          </option>
        ))}
      </Select>
      <Input
        name="notes"
        label="Trip notes"
        multiline
        rows={4}
        placeholder="Dates, group size, budget, or a place you do not want to miss."
        disabled={loading}
      />
      <Button type="submit" loading={loading}>
        Send enquiry
      </Button>
    </form>
  );
}
