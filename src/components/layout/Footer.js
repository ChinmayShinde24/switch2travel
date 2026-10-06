import Link from "next/link";
import { Lock, ShieldCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import Logo from "@/components/layout/Logo";
import Container from "@/components/ui/Container";
import { contact, mailtoHref, telHref } from "@/lib/contact";
import { getAllRegions } from "@/lib/trips";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/destinations", label: "All destinations" },
  { href: "/contact", label: "Plan a trip" },
];

const partners = ["Himalaya House", "Backwater Lines", "Desert Camps", "Island Ferries", "Hill Rail Co."];

export default function Footer() {
  const regions = getAllRegions().slice(0, 6);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-navy-900 text-white">
      <div className="h-1 bg-sunrise" aria-hidden="true" />
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" aria-label="Switch 2 Travel home">
            <Logo tone="light" />
          </Link>
          <p className="measure mt-4 text-sm text-white/75">
            Flip a switch and you are on your way. India holidays with clear prices, region-first routes, and a desk that stays reachable.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs text-white/70">
            <ShieldCheck className="size-4 text-brand-sky-400" strokeWidth={1.5} aria-hidden="true" />
            <Lock className="size-4 text-brand-sky-400" strokeWidth={1.5} aria-hidden="true" />
            Secure payments · UPI, cards, netbanking
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a
              href={contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Switch 2 Travel on Instagram"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-sky-400 hover:text-brand-sky-400"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={contact.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Switch 2 Travel on Facebook"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-sky-400 hover:text-brand-sky-400"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-heading text-base font-semibold text-white">Company</p>
          <ul className="mt-4 space-y-1">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center text-sm text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-base font-semibold text-white">Popular regions</p>
          <ul className="mt-4 space-y-1">
            {regions.map((region) => (
              <li key={region.slug}>
                <Link
                  href={`/destinations/${region.slug}`}
                  className="inline-flex min-h-11 items-center text-sm text-white/75 transition hover:text-white"
                >
                  {region.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-base font-semibold text-white">Talk to us</p>
          <ul className="mt-4 space-y-1 text-sm text-white/75">
            <li className="pt-1">
              <p className="font-medium text-white">{contact.expertName}</p>
              <p className="text-xs text-brand-sky-400">{contact.expertRole}</p>
            </li>
            <li>
              <a href={telHref()} className="inline-flex min-h-11 items-center hover:text-white">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailtoHref()} className="inline-flex min-h-11 items-center hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="pt-2">{contact.hours}</li>
            <li>Pan-India departures</li>
          </ul>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-6">
        <p className="eyebrow text-[10px] text-brand-sky-400">Travel partners</p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {partners.map((name) => (
            <li key={name} className="font-heading text-xs font-semibold tracking-[0.16em] text-white/40 uppercase grayscale">
              {name}
            </li>
          ))}
        </ul>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 pr-20 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Switch 2 Travel. All rights reserved.</p>
          <p>Travel made easier.</p>
        </Container>
      </div>
    </footer>
  );
}
