import TripGrid from "@/components/trips/TripGrid";
import Section from "@/components/ui/Section";
import { getFeaturedTrips } from "@/lib/trips";

export default function FeaturedTrips() {
  const trips = getFeaturedTrips(6);

  return (
    <Section
      tone="mist"
      eyebrow="Ready to book"
      title="Featured trip packages"
      description="Popular routes travellers ask for most — clear duration, transparent starting prices, and flexible dates."
    >
      <TripGrid trips={trips} />
    </Section>
  );
}
