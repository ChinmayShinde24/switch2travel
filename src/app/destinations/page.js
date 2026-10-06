import RegionCard from "@/components/trips/RegionCard";
import Section from "@/components/ui/Section";
import { getAllRegions } from "@/lib/trips";

export const metadata = {
  title: "Destinations in India",
  description:
    "Browse Switch 2 Travel destinations — Himachal, Kashmir, Ladakh, Uttarakhand, Rajasthan, Kerala, Goa and Andaman holiday packages.",
  alternates: {
    canonical: "/destinations",
  },
};

export default function DestinationsPage() {
  const regions = getAllRegions();

  return (
    <Section
      eyebrow="All regions"
      title="Destinations"
      description="Explore India by region. Each destination page lists packages with duration, highlights and starting prices."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {regions.map((region) => (
          <RegionCard key={region.slug} region={region} />
        ))}
      </div>
    </Section>
  );
}
