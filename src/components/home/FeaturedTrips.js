import TripGrid from "@/components/trips/TripGrid";
import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";
import { getFeaturedTrips } from "@/lib/trips";

export default function FeaturedTrips() {
  const trips = getFeaturedTrips(6);

  return (
    <>
      <Section
        tone="sky"
        eyebrow="Ready to book"
        title="Featured"
        accent="packages"
        description="Routes travellers ask for first — duration, highlights and a starting price you can compare."
      >
        <TripGrid trips={trips} />
      </Section>
      <WaveDivider upperClass="bg-brand-sky-50" lowerClass="text-surface" />
    </>
  );
}
