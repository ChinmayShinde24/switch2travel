import { regions, trips } from "@/data/trips";

export function getAllRegions() {
  return regions;
}

export function getRegionBySlug(slug) {
  return regions.find((region) => region.slug === slug) ?? null;
}

export function getTripsByRegion(regionSlug) {
  return trips.filter((trip) => trip.regionSlug === regionSlug);
}

export function getTripBySlugs(regionSlug, tripSlug) {
  return (
    trips.find(
      (trip) => trip.regionSlug === regionSlug && trip.slug === tripSlug
    ) ?? null
  );
}

export function getFeaturedTrips(limit = 6) {
  return trips.filter((trip) => trip.featured).slice(0, limit);
}

export function getTripHref(trip) {
  return `/destinations/${trip.regionSlug}/${trip.slug}`;
}

export function getRegionHref(regionOrSlug) {
  const slug =
    typeof regionOrSlug === "string" ? regionOrSlug : regionOrSlug.slug;
  return `/destinations/${slug}`;
}

export function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getRegionWithTrips(slug) {
  const region = getRegionBySlug(slug);
  if (!region) return null;
  return {
    ...region,
    trips: getTripsByRegion(slug),
  };
}
