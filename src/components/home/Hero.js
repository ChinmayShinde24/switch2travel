import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-navy-deep text-white">
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
        alt="Himalayan mountains at sunrise"
        fill
        priority
        sizes="100vw"
        className="hero-media object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />

      <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="max-w-2xl">
          <Image
            src="/logo.jpg"
            alt="Switch 2 Travel"
            width={88}
            height={88}
            className="reveal mb-6 h-16 w-16 rounded-full object-cover ring-2 ring-white/30 sm:h-20 sm:w-20"
            priority
          />
          <p className="tagline reveal reveal-delay-1 mb-4 text-xs text-amber-bright">
            Travel made easier
          </p>
          <h1 className="reveal reveal-delay-1 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Switch 2 Travel
          </h1>
          <p className="reveal reveal-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Curated India holidays — Himachal, Kashmir, Ladakh, Kerala and more —
            planned cleanly so you can switch into the trip, not the stress.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Button href="/destinations" variant="primary">
              Explore destinations
            </Button>
            <Button href="/contact" variant="secondary">
              Talk to an expert
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
