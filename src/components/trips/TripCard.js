import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Price from "@/components/ui/Price";
import { BLUR_DATA_URL } from "@/lib/images";
import { getRegionBySlug, getTripHref } from "@/lib/trips";

const difficultyTone = {
  Easy: "sky",
  Moderate: "amber",
  Challenging: "sunrise",
};

export default function TripCard({ trip }) {
  const region = getRegionBySlug(trip.regionSlug);

  return (
    <article className="group h-full overflow-hidden rounded-card bg-surface shadow-navy ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-navy-lg">
      <Link href={getTripHref(trip)} className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky-400">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={trip.image}
            alt={`${trip.name} in ${region?.shortName ?? "India"}`}
            fill
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/75 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 text-sm font-medium text-white">{region?.shortName}</span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex flex-wrap gap-2">
            <Badge tone="navy">{trip.duration}</Badge>
            <Badge tone={difficultyTone[trip.difficulty] || "sky"}>{trip.difficulty}</Badge>
          </div>
          <h3 className="font-heading text-xl text-brand-navy-700 transition group-hover:text-brand-blue-600 dark:text-white dark:group-hover:text-brand-sky-400">
            {trip.name}
          </h3>
          <p className="line-clamp-2 text-sm text-ink-600">{trip.summary}</p>
          <div className="mt-auto flex items-end justify-between gap-3 pt-1">
            <div>
              <p className="text-xs font-medium tracking-wide text-ink-600 uppercase">From</p>
              <Price amount={trip.priceFrom} className="font-heading text-lg font-semibold text-brand-navy-700 dark:text-white" />
            </div>
            <span className="text-sm font-semibold text-brand-blue-600 dark:text-brand-sky-400">View trip</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
