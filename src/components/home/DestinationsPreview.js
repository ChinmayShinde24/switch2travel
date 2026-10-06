import RegionCard from "@/components/trips/RegionCard";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { getAllRegions } from "@/lib/trips";

export default function DestinationsPreview() {
  const regions = getAllRegions().slice(0, 4);

  return (
    <Section
      id="destinations"
      eyebrow="Where to go"
      title="Destinations across India"
      description="Pick a region and browse ready packages — from easy family circuits to high-pass bike expeditions."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {regions.map((region) => (
          <RegionCard key={region.slug} region={region} />
        ))}
      </div>
      <div className="mt-10">
        <Button href="/destinations" variant="ghost">
          View all destinations
        </Button>
      </div>
    </Section>
  );
}
