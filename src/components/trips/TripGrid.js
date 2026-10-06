import TripCard from "@/components/trips/TripCard";
import { Stagger } from "@/components/ui/FadeUp";

export default function TripGrid({ trips }) {
  if (!trips?.length) {
    return (
      <p className="rounded-card border border-dashed border-border bg-surface p-8 text-center text-ink-600">
        Packages for this region are being timed for the next season. Tell us your dates and we will sketch a route.
      </p>
    );
  }

  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {trips.map((trip) => (
        <TripCard key={`${trip.regionSlug}-${trip.slug}`} trip={trip} />
      ))}
    </Stagger>
  );
}
