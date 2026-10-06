import Image from "next/image";
import { notFound } from "next/navigation";
import TripGrid from "@/components/trips/TripGrid";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import JsonLd from "@/components/seo/JsonLd";
import { BLUR_DATA_URL } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getAllRegions, getRegionHref, getRegionWithTrips } from "@/lib/trips";

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
      images: [{ url: data.image, alt: `${data.name} travel` }],
    },
  };
}

export default async function RegionPage({ params }) {
  const { region } = await params;
  const data = getRegionWithTrips(region);
  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: data.name, path: getRegionHref(data) },
        ])}
      />
      <section className="relative isolate min-h-[48vh] overflow-hidden bg-brand-navy-900 text-white">
        <Image
          src={data.image}
          alt={`${data.name} travel scenery`}
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900 via-brand-navy-900/55 to-brand-navy-700/25" />
        <Container className="relative flex min-h-[48vh] flex-col justify-end pt-28 pb-12">
          <p className="eyebrow mb-3 text-xs text-brand-sky-400">Destination</p>
          <h1 className="text-white">{data.name}</h1>
          <p className="measure mt-3 text-base text-white/85 sm:text-lg">{data.description}</p>
        </Container>
      </section>

      <Section
        eyebrow={`${data.trips.length} packages`}
        title={`${data.shortName}`}
        accent="trips"
        description="Choose a package or ask us to move dates, hotels and activities."
      >
        <TripGrid trips={data.trips} />
        <div className="mt-10">
          <Button href="/contact" variant="blue" showPlane={false}>
            Customise this region
          </Button>
        </div>
      </Section>
    </>
  );
}
