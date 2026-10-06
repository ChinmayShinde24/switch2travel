import { Headset, Map, Route } from "lucide-react";
import Card from "@/components/ui/Card";
import FadeUp from "@/components/ui/FadeUp";
import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";

const points = [
  {
    icon: Map,
    title: "Region-first planning",
    text: "Every package sits with its region, so Shimla–Manali, Spiti, Kashmir and Kerala stay easy to compare.",
  },
  {
    icon: Route,
    title: "Honest itineraries",
    text: "Duration, highlights and starting prices are on the page before anyone asks you to commit.",
  },
  {
    icon: Headset,
    title: "On-ground support",
    text: "Pickup notes, hotel handoffs and a phone that answers while you are actually travelling.",
  },
];

export default function WhyUs() {
  return (
    <>
      <Section
        eyebrow="Why Switch 2 Travel"
        title="Travel that feels"
        accent="switched on"
        description="A modern desk for Indian holidays — warm guidance, fewer surprises, and routes that match how you actually travel."
        className="relative overflow-hidden"
      >
        <div className="flight-dots pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative grid gap-6 md:grid-cols-3">
          {points.map((point, index) => (
            <FadeUp key={point.title} delay={index * 0.08}>
              <Card as="article" hover className="h-full">
                <p className="eyebrow text-[10px] text-brand-blue-600 dark:text-brand-sky-400">0{index + 1}</p>
                <point.icon className="mt-4 size-6 text-brand-orange-500" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 text-xl text-brand-navy-700 dark:text-white">{point.title}</h3>
                <p className="mt-3 text-sm text-ink-600">{point.text}</p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Section>
      <WaveDivider upperClass="bg-surface" lowerClass="text-brand-navy-900" variant="diagonal" />
    </>
  );
}
