import dynamic from "next/dynamic";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import { BLUR_DATA_URL } from "@/lib/images";
import ParallaxFrame from "@/components/home/ParallaxFrame";

const BookingBar = dynamic(() => import("@/components/home/BookingBar"), {
  loading: () => <div className="min-h-28 rounded-3xl bg-white/60 shadow-glass md:min-h-16 md:rounded-pill" aria-hidden="true" />,
});

export default function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-brand-navy-900 text-white">
      <ParallaxFrame className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt="Himalayan peaks in warm sunrise light"
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="100vw"
          className="object-cover"
        />
      </ParallaxFrame>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-900/92 via-brand-navy-900/72 to-brand-navy-700/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/80 via-transparent to-brand-navy-900/30" />
      <div className="flight-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <Container className="relative flex min-h-[92vh] flex-col justify-end gap-8 pt-32 pb-16 sm:pb-20">
        <FadeUp className="max-w-3xl">
          <p className="eyebrow mb-4 text-xs text-brand-sky-400">Travel made easier</p>
          <h1 className="text-white">
            Flip the switch.{" "}
            <span className="font-display text-brand-amber-400">On your way.</span>
          </h1>
          <p className="measure mt-5 text-base text-white/85 sm:text-lg">
            Himachal, Kashmir, Ladakh, Kerala and the rest of India — planned cleanly, priced clearly, and handed over ready to depart.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/destinations">Explore destinations</Button>
            <Button href="/contact" variant="secondary" onDark>
              Talk to an expert
            </Button>
          </div>
        </FadeUp>
        <BookingBar />
      </Container>
    </section>
  );
}
