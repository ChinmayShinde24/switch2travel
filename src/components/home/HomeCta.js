import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function HomeCta() {
  return (
    <Section
      tone="dark"
      eyebrow="Start planning"
      title="Tell us where you want to"
      accent="switch to"
      description="Share dates, group size and a region. We will suggest a package — Himachal hills, Kashmir lakes, Kerala backwaters and beyond."
      className="relative overflow-hidden bg-deep-sky"
    >
      <div className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-brand-orange-500/20 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-wrap gap-3">
        <Button href="/contact">Get a free trip plan</Button>
        <Button href="/destinations" variant="secondary" onDark showPlane={false}>
          Browse packages
        </Button>
      </div>
    </Section>
  );
}
