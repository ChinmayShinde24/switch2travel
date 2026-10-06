import DestinationsPreview from "@/components/home/DestinationsPreview";
import FeaturedTrips from "@/components/home/FeaturedTrips";
import Hero from "@/components/home/Hero";
import HomeCta from "@/components/home/HomeCta";
import TrustStrip from "@/components/home/TrustStrip";
import WhyUs from "@/components/home/WhyUs";

export const metadata = {
  title: {
    absolute: "Switch 2 Travel | India Holiday Packages",
  },
  description:
    "Plan Himachal, Kashmir, Ladakh, Kerala and more with Switch 2 Travel. Clear packages, honest prices, travel made easier.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <DestinationsPreview />
      <FeaturedTrips />
      <WhyUs />
      <HomeCta />
    </>
  );
}
