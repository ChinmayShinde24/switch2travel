import RegionCard from "@/components/trips/RegionCard";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";
import { Stagger } from "@/components/ui/FadeUp";
import { getAllRegions } from "@/lib/trips";

export default function DestinationsPreview() {
  const regions = getAllRegions().slice(0, 4);

  return (
    <>
      <Section
        id="destinations"
        eyebrow="Where to go"
        title="Destinations across"
        accent="India"
        description="Pick a region and browse ready packages — easy family circuits, high-pass rides, and slow coastal weeks."
      >
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <RegionCard key={region.slug} region={region} />
          ))}
        </Stagger>
        <div className="mt-10">
          <Button href="/destinations" variant="ghost" showPlane={false}>
            View all destinations
          </Button>
        </div>
      </Section>
      <WaveDivider upperClass="bg-surface" lowerClass="text-brand-sky-50" />
    </>
  );
}
