import TripCard from "@/components/trips/TripCard";

export default function TripGrid({ trips }) {
  if (!trips?.length) {
    return (
      <p className="rounded-xl border border-dashed border-line bg-white p-8 text-center text-muted">
        Packages for this region are coming soon.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {trips.map((trip) => (
        <TripCard key={`${trip.regionSlug}-${trip.slug}`} trip={trip} />
      ))}
    </div>
  );
}
