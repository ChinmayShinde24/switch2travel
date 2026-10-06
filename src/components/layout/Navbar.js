"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Logo from "@/components/layout/Logo";
import { useTheme } from "@/components/theme/ThemeProvider";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Toggle from "@/components/ui/Toggle";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/styles";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border bg-surface/85 shadow-navy"
          : "border-transparent bg-surface/70"
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between gap-4 transition-[height] duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Link href="/" className={cn("rounded-pill", focusRing)} aria-label="Switch 2 Travel home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-pill px-4 text-sm font-medium transition duration-200",
                  focusRing,
                  active
                    ? "text-brand-blue-600 dark:text-brand-sky-400"
                    : "text-ink-600 hover:text-brand-navy-700 dark:hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="ml-2 flex items-center gap-2">
            <Sun className="size-4 text-brand-amber-400" strokeWidth={1.5} aria-hidden="true" />
            <Toggle
              checked={theme === "dark"}
              onChange={toggleTheme}
              label="Dark mode"
            />
            <Moon className="size-4 text-brand-sky-400" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <Button href="/contact" className="ml-2">
            Plan a trip
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-pill border border-border text-brand-navy-700 lg:hidden dark:text-white",
            focusRing
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
        </button>
      </Container>

      {open ? (
        <nav id="mobile-nav" className="border-t border-border bg-surface lg:hidden" aria-label="Mobile">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-pill px-4 text-sm font-medium text-brand-navy-700 hover:bg-brand-sky-50 dark:text-white dark:hover:bg-white/10",
                  focusRing
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex min-h-11 items-center justify-between px-4">
              <span className="text-sm font-medium text-ink-600">Dark mode</span>
              <Toggle checked={theme === "dark"} onChange={toggleTheme} label="Dark mode" />
            </div>
            <Button href="/contact" className="mt-1 w-full" onClick={() => setOpen(false)}>
              Plan a trip
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
