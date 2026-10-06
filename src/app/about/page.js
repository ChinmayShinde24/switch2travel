import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "About Switch 2 Travel",
  description:
    "Learn about Switch 2 Travel — an India-focused travel agency helping families, couples and adventurers plan cleaner, easier holidays.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-br from-mist via-white to-sand">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="tagline mb-3 text-xs text-blue">Our story</p>
            <h1 className="font-display text-4xl text-navy sm:text-5xl">
              Switch into the trip. We handle the rest.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Switch 2 Travel is built for travellers who want India done simply —
              clear packages by region, honest starting prices, and guidance that
              feels human.
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full ring-1 ring-line">
            <Image
              src="/logo.jpg"
              alt="Switch 2 Travel logo"
              fill
              className="object-cover"
              sizes="400px"
              priority
            />
          </div>
        </Container>
      </section>

      <Section
        eyebrow="How we work"
        title="A cleaner way to book India"
        description="We organise holidays the way travellers actually decide — by region first, then by trip style."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Listen",
              text: "Dates, group size, budget and vibe — we start with what matters to you.",
            },
            {
              title: "Match",
              text: "We suggest region packages or customise hotels, transfers and activities.",
            },
            {
              title: "Support",
              text: "From departure to return, you have a reachable travel desk on your side.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
              <h2 className="font-display text-xl text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Plan with us
          </Button>
        </div>
      </Section>
    </>
  );
}
