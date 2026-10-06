import Image from "next/image";
import Link from "next/link";
import { formatINR, getRegionBySlug, getTripHref } from "@/lib/trips";

export default function TripCard({ trip }) {
  const region = getRegionBySlug(trip.regionSlug);

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-24px_rgba(11,39,68,0.45)] ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-24px_rgba(11,39,68,0.55)]">
      <Link href={getTripHref(trip)} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={trip.image}
            alt={`${trip.name} package`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-navy">
            {trip.duration}
          </span>
          <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
            {region?.shortName}
          </span>
        </div>
        <div className="space-y-3 p-5">
          <h3 className="font-display text-xl text-navy transition group-hover:text-blue">
            {trip.name}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">{trip.summary}</p>
          <div className="flex items-end justify-between gap-3 pt-1">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">From</p>
              <p className="text-lg font-semibold text-navy">{formatINR(trip.priceFrom)}</p>
            </div>
            <span className="text-sm font-medium text-amber">View trip →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
