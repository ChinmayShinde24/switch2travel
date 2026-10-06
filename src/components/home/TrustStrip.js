import { Headset, Lock, MapPinned, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Rating from "@/components/ui/Rating";

const points = [
  {
    icon: MapPinned,
    title: "Region first",
    text: "Compare Himachal, Kashmir, Kerala and more without the noise.",
  },
  {
    icon: Headset,
    title: "On-trip desk",
    text: "A reachable planner from departure morning to the ride home.",
  },
  {
    icon: ShieldCheck,
    title: "Clear inclusions",
    text: "Hotels, transfers and activities listed before you pay.",
  },
  {
    icon: Lock,
    title: "Secure checkout",
    text: "UPI, cards and netbanking, with a GST invoice on request.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface" aria-label="Why travellers stay">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <div key={point.title} className="flex gap-3">
            <point.icon className="mt-1 size-5 shrink-0 text-brand-blue-600" strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="font-heading text-sm font-semibold text-brand-navy-700 dark:text-white">{point.title}</p>
              <p className="mt-1 text-sm text-ink-600">{point.text}</p>
            </div>
          </div>
        ))}
        <div className="sm:col-span-2 lg:col-span-4">
          <Rating value={5} label="Five-star planning standard we hold every itinerary to" />
        </div>
      </Container>
    </section>
  );
}
