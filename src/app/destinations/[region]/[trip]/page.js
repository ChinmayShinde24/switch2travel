import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnquireButton from "@/components/trips/EnquireButton";
import TripCard from "@/components/trips/TripCard";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Price from "@/components/ui/Price";
import Section from "@/components/ui/Section";
import JsonLd from "@/components/seo/JsonLd";
import { BLUR_DATA_URL } from "@/lib/images";
import { breadcrumbJsonLd, touristTripJsonLd } from "@/lib/seo";
import { getAllRegions, getRegionBySlug, getTripBySlugs, getTripHref, getTripsByRegion } from "@/lib/trips";

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
    title: `${trip.name} ${trip.duration}`,
    description: trip.summary,
    alternates: {
      canonical: getTripHref(trip),
    },
    openGraph: {
      title: `${trip.name} | Switch 2 Travel`,
      description: trip.summary,
      images: [{ url: trip.image, alt: trip.name }],
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
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: regionData.shortName, path: `/destinations/${regionData.slug}` },
          { name: trip.name, path: getTripHref(trip) },
        ])}
      />
      <JsonLd data={touristTripJsonLd(trip, regionData)} />
      <section className="relative isolate min-h-[56vh] overflow-hidden bg-brand-navy-900 text-white">
        <Image
          src={trip.image}
          alt={trip.name}
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900 via-brand-navy-900/60 to-brand-navy-700/20" />
        <Container className="relative flex min-h-[56vh] flex-col justify-end pt-28 pb-12">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/75">
            <Link href="/destinations" className="hover:text-white">
              Destinations
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link href={`/destinations/${regionData.slug}`} className="hover:text-white">
              {regionData.shortName}
            </Link>
          </nav>
          <p className="eyebrow mb-3 text-xs text-brand-sky-400">{trip.duration}</p>
          <h1 className="text-white">{trip.name}</h1>
          <p className="measure mt-3 text-base text-white/85 sm:text-lg">{trip.summary}</p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="text-brand-navy-700 dark:text-white">Trip highlights</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {trip.highlights.map((item) => (
                <li key={item} className="rounded-card border border-border bg-surface px-4 py-3 text-sm text-ink-900">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-brand-navy-700 dark:text-white">Good to know</h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                ["Duration", trip.duration],
                ["Difficulty", trip.difficulty],
                ["Region", regionData.name],
              ].map(([label, value]) => (
                <div key={label} className="rounded-card bg-brand-sky-50 p-4">
                  <dt className="eyebrow text-[10px] text-brand-blue-600 dark:text-brand-sky-400">{label}</dt>
                  <dd className="mt-1 font-medium text-brand-navy-700 dark:text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="h-fit rounded-card border border-border bg-surface p-6 shadow-navy-lg">
            <p className="eyebrow text-[10px] text-brand-blue-600 dark:text-brand-sky-400">Starting from</p>
            <Price amount={trip.priceFrom} className="mt-2 block font-heading text-3xl font-semibold text-brand-navy-700 dark:text-white" />
            <p className="mt-2 text-sm text-ink-600">Per person · hotels and the listed highlights</p>
            <div className="mt-6 flex flex-col gap-3">
              <EnquireButton tripName={trip.name} className="w-full" />
              <Button href={`/destinations/${regionData.slug}`} variant="ghost" showPlane={false} className="w-full">
                More in {regionData.shortName}
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="sky" eyebrow="Keep exploring" title={`More ${regionData.shortName}`} accent="packages">
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
