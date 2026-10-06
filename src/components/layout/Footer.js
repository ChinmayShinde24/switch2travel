import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getAllRegions } from "@/lib/trips";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/destinations", label: "All destinations" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const regions = getAllRegions().slice(0, 6);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-navy-deep text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Switch 2 Travel"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-lg">Switch 2 Travel</p>
              <p className="tagline text-[10px] text-amber-bright">Travel made easier</p>
            </div>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            India-focused holiday packages, curated routes, and on-ground support
            for families, couples, and adventure travellers.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base text-white">Company</h3>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-white">Popular regions</h3>
          <ul className="mt-4 space-y-2">
            {regions.map((region) => (
              <li key={region.slug}>
                <Link
                  href={`/destinations/${region.slug}`}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {region.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-white">Talk to us</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="tel:+919999999999" className="hover:text-white">
                +91 99999 99999
              </a>
            </li>
            <li>
              <a href="mailto:hello@switch2travel.com" className="hover:text-white">
                hello@switch2travel.com
              </a>
            </li>
            <li>India · Pan-India departures</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Switch 2 Travel. All rights reserved.</p>
          <p>Crafted for travellers exploring India.</p>
        </Container>
      </div>
    </footer>
  );
}
