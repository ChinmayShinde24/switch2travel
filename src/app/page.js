import DestinationsPreview from "@/components/home/DestinationsPreview";
import FeaturedTrips from "@/components/home/FeaturedTrips";
import Hero from "@/components/home/Hero";
import HomeCta from "@/components/home/HomeCta";
import WhyUs from "@/components/home/WhyUs";

export const metadata = {
  title: "Switch 2 Travel | India Holiday Packages",
  description:
    "Plan Himachal, Kashmir, Ladakh, Kerala and more with Switch 2 Travel. Clean packages, clear prices, travel made easier.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DestinationsPreview />
      <FeaturedTrips />
      <WhyUs />
      <HomeCta />
    </>
  );
}
