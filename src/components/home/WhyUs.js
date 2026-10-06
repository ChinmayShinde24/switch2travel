import Section from "@/components/ui/Section";

const points = [
  {
    title: "Region-first planning",
    text: "Every package is grouped by region so you can compare Shimla–Manali, Spiti, Kashmir and more without noise.",
  },
  {
    title: "Clean, honest itineraries",
    text: "Duration, highlights and starting prices upfront — so families and first-time travellers can decide fast.",
  },
  {
    title: "On-ground support",
    text: "From pickup coordination to hotel handoffs, we stay reachable while you travel across India.",
  },
];

export default function WhyUs() {
  return (
    <Section
      eyebrow="Why Switch 2 Travel"
      title="Travel that feels switched on"
      description="A modern travel desk for Indian holidays — clear choices, warm guidance, and packages that match real trip styles."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {points.map((point, index) => (
          <div key={point.title} className="border-t border-line pt-6">
            <p className="tagline mb-3 text-[10px] text-amber">0{index + 1}</p>
            <h3 className="font-display text-xl text-navy">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{point.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
