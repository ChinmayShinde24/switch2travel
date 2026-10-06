import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import {
  formatINR,
  getAllRegions,
  getRegionBySlug,
  getTripBySlugs,
  getTripHref,
  getTripsByRegion,
} from "@/lib/trips";
import TripCard from "@/components/trips/TripCard";

export function generateStaticParams() {
  return getAllRegions().flatMap((region) =>
    getTripsByRegion(region.slug).map((trip) => ({
      region: region.slug,
      trip: trip.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { region, trip: tripSlug } = await params;
  const trip = getTripBySlugs(region, tripSlug);
  const regionData = getRegionBySlug(region);
  if (!trip || !regionData) return { title: "Trip not found" };

  return {
    title: `${trip.name} ${trip.duration} | ${regionData.shortName}`,
    description: trip.summary,
    alternates: {
      canonical: getTripHref(trip),
    },
    openGraph: {
      title: `${trip.name} | Switch 2 Travel`,
      description: trip.summary,
      images: [{ url: trip.image }],
    },
  };
}

export default async function TripDetailPage({ params }) {
  const { region, trip: tripSlug } = await params;
  const trip = getTripBySlugs(region, tripSlug);
  const regionData = getRegionBySlug(region);
  if (!trip || !regionData) notFound();

  const related = getTripsByRegion(region)
    .filter((item) => item.slug !== trip.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative isolate min-h-[56vh] overflow-hidden bg-navy-deep text-white">
        <Image
          src={trip.image}
          alt={trip.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy/25" />
        <Container className="relative flex min-h-[56vh] flex-col justify-end pb-12 pt-24">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
            <Link href="/destinations" className="hover:text-white">
              Destinations
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/destinations/${regionData.slug}`} className="hover:text-white">
              {regionData.shortName}
            </Link>
          </nav>
          <p className="tagline mb-3 text-xs text-amber-bright">{trip.duration}</p>
          <h1 className="font-display text-4xl text-white sm:text-5xl">{trip.name}</h1>
          <p className="mt-3 max-w-2xl text-base text-white/85 sm:text-lg">{trip.summary}</p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="font-display text-2xl text-navy">Trip highlights</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {trip.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl text-navy">Good to know</h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-mist/70 p-4">
                <dt className="text-xs uppercase tracking-wide text-muted">Duration</dt>
                <dd className="mt-1 font-medium text-navy">{trip.duration}</dd>
              </div>
              <div className="rounded-xl bg-mist/70 p-4">
                <dt className="text-xs uppercase tracking-wide text-muted">Difficulty</dt>
                <dd className="mt-1 font-medium text-navy">{trip.difficulty}</dd>
              </div>
              <div className="rounded-xl bg-mist/70 p-4">
                <dt className="text-xs uppercase tracking-wide text-muted">Region</dt>
                <dd className="mt-1 font-medium text-navy">{regionData.name}</dd>
              </div>
            </dl>
          </div>

          <aside className="h-fit rounded-2xl border border-line bg-white p-6 shadow-[0_16px_40px_-28px_rgba(11,39,68,0.5)]">
            <p className="text-xs uppercase tracking-wide text-muted">Starting from</p>
            <p className="mt-1 font-display text-3xl text-navy">{formatINR(trip.priceFrom)}</p>
            <p className="mt-2 text-sm text-muted">Per person · demo pricing</p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/contact" variant="primary" className="w-full">
                Enquire about this trip
              </Button>
              <Button href={`/destinations/${regionData.slug}`} variant="ghost" className="w-full">
                More in {regionData.shortName}
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section
          tone="mist"
          eyebrow="Keep exploring"
          title={`More ${regionData.shortName} packages`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <TripCard key={item.slug} trip={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
