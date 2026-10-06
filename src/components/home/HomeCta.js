import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function HomeCta() {
  return (
    <Section
      tone="navy"
      eyebrow="Start planning"
      title="Tell us where you want to switch to"
      description="Share your dates, group size and preferred region. We’ll suggest packages that fit — Himachal hills, Kashmir lakes, Kerala backwaters and beyond."
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-amber/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-blue/30 blur-3xl" />
      <div className="relative flex flex-wrap gap-3">
        <Button href="/contact" variant="primary">
          Get a free trip plan
        </Button>
        <Button href="/destinations" variant="secondary">
          Browse packages
        </Button>
      </div>
    </Section>
  );
}
