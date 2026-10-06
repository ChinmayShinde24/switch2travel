import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { BLUR_DATA_URL } from "@/lib/images";

const faqs = [
  {
    id: "customise",
    question: "Can you change hotels or travel dates?",
    answer:
      "Yes. Published packages are a starting route. Tell us your dates, pace and hotel style and we adjust nights, transfers and activities before you confirm.",
  },
  {
    id: "price",
    question: "What does the starting price include?",
    answer:
      "Each trip lists its highlights and a per-person starting price. Stays, private or shared transfers, and the activities named on the page are included unless we mark them optional.",
  },
  {
    id: "payment",
    question: "How do payments work?",
    answer:
      "You can pay by UPI, card or netbanking. We share a GST invoice on request and confirm the booking only after the advance is received.",
  },
  {
    id: "support",
    question: "Who do I call once I am travelling?",
    answer:
      "Your confirmation includes a travel-desk number that stays on through the trip, including pickup changes and hotel handoffs.",
  },
];

export const metadata = {
  title: "About",
  description:
    "Switch 2 Travel plans India holidays for families, couples and adventurers. Region-first packages, honest prices, and support after you depart.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <section className="border-b border-border bg-brand-sky-50">
        <Container className="grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-3 text-xs text-brand-blue-600 dark:text-brand-sky-400">Our story</p>
            <h1 className="text-brand-navy-700 dark:text-white">
              Switch into the trip. <span className="font-display text-brand-blue-600 dark:text-brand-sky-400">We handle the rest.</span>
            </h1>
            <p className="measure mt-4 text-base text-ink-600 sm:text-lg">
              Switch 2 Travel is a desk for people who want India without the scramble — packages grouped by region, starting prices you can compare, and a planner who still answers after you land.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-media shadow-navy-lg">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=80"
              alt="India Gate and the lawns in front of it at dusk"
              fill
              priority
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <Section
        eyebrow="How we work"
        title="A cleaner way to"
        accent="book India"
        description="We organise holidays the way people actually decide — region first, then the pace of the trip."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Listen",
              text: "Dates, group size, budget and the kind of days you want. We start there, not with a catalogue dump.",
            },
            {
              title: "Match",
              text: "We suggest a region package or reshape hotels, transfers and activities around your dates.",
            },
            {
              title: "Support",
              text: "From the departure morning to the ride home, the same desk stays reachable.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-card border border-border bg-surface p-6 shadow-navy">
              <h3 className="text-xl text-brand-navy-700 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-ink-600">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/contact">Plan with us</Button>
        </div>
      </Section>

      <Section tone="sky" eyebrow="Good to know" title="Questions" accent="travellers ask">
        <Accordion items={faqs} />
      </Section>
    </>
  );
}
