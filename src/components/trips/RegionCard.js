import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "@/lib/images";
import { getRegionHref, getTripsByRegion } from "@/lib/trips";

export default function RegionCard({ region }) {
  const tripCount = getTripsByRegion(region.slug).length;

  return (
    <Link
      href={getRegionHref(region)}
      className="group relative block min-h-72 overflow-hidden rounded-media ring-1 ring-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky-400"
    >
      <Image
        src={region.image}
        alt={`${region.name} holiday packages`}
        fill
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900 via-brand-navy-900/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="eyebrow mb-2 text-[10px] text-brand-sky-400">
          {tripCount} {tripCount === 1 ? "package" : "packages"}
        </p>
        <h3 className="font-heading text-2xl text-white">{region.shortName}</h3>
        <p className="mt-1 text-sm text-white/80">{region.tagline}</p>
      </div>
    </Link>
  );
}
