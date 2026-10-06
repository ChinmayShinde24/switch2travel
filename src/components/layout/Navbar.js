"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3" aria-label="Switch 2 Travel home">
          <Image
            src="/logo.jpg"
            alt="Switch 2 Travel"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-line"
            priority
          />
          <div className="leading-tight">
            <p className="font-display text-base text-navy sm:text-lg">Switch 2 Travel</p>
            <p className="tagline hidden text-[10px] text-blue sm:block">Travel made easier</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-deep"
          >
            Plan a trip
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-navy hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-1 rounded-md bg-amber px-3 py-3 text-center text-sm font-medium text-navy-deep"
              onClick={() => setOpen(false)}
            >
              Plan a trip
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
