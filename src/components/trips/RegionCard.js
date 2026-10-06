import Image from "next/image";
import Link from "next/link";
import { getRegionHref, getTripsByRegion } from "@/lib/trips";

export default function RegionCard({ region }) {
  const tripCount = getTripsByRegion(region.slug).length;

  return (
    <Link
      href={getRegionHref(region)}
      className="group relative block min-h-64 overflow-hidden rounded-2xl ring-1 ring-line"
    >
      <Image
        src={region.image}
        alt={`${region.name} travel packages`}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="tagline mb-2 text-[10px] text-amber-bright">{tripCount} packages</p>
        <h3 className="font-display text-2xl text-white">{region.shortName}</h3>
        <p className="mt-1 text-sm text-white/80">{region.tagline}</p>
      </div>
    </Link>
  );
}
