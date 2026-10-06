import Image from "next/image";
import { notFound } from "next/navigation";
import TripGrid from "@/components/trips/TripGrid";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import {
  getAllRegions,
  getRegionHref,
  getRegionWithTrips,
} from "@/lib/trips";

export function generateStaticParams() {
  return getAllRegions().map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }) {
  const { region } = await params;
  const data = getRegionWithTrips(region);
  if (!data) return { title: "Destination not found" };

  return {
    title: `${data.name} Holiday Packages`,
    description: data.description,
    alternates: {
      canonical: getRegionHref(data),
    },
    openGraph: {
      title: `${data.name} packages | Switch 2 Travel`,
      description: data.description,
      images: [{ url: data.image }],
    },
  };
}

export default async function RegionPage({ params }) {
  const { region } = await params;
  const data = getRegionWithTrips(region);
  if (!data) notFound();

  return (
    <>
      <section className="relative isolate min-h-[48vh] overflow-hidden bg-navy-deep text-white">
        <Image
          src={data.image}
          alt={`${data.name} travel`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy/30" />
        <Container className="relative flex min-h-[48vh] flex-col justify-end pb-12 pt-24">
          <p className="tagline mb-3 text-xs text-amber-bright">Destination</p>
          <h1 className="font-display text-4xl text-white sm:text-5xl">{data.name}</h1>
          <p className="mt-3 max-w-2xl text-base text-white/85 sm:text-lg">{data.description}</p>
        </Container>
      </section>

      <Section
        eyebrow={`${data.trips.length} packages`}
        title={`${data.shortName} trips`}
        description="Choose a package or ask us to customise dates, hotels and activities."
      >
        <TripGrid trips={data.trips} />
        <div className="mt-10">
          <Button href="/contact" variant="navy">
            Customise this region
          </Button>
        </div>
      </Section>
    </>
  );
}
