import { getAllRegions, getTripsByRegion } from "@/lib/trips";

const siteUrl = "https://switch2travel.com";

export default function sitemap() {
  const staticRoutes = ["", "/destinations", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const regionRoutes = getAllRegions().map((region) => ({
    url: `${siteUrl}/destinations/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const tripRoutes = getAllRegions().flatMap((region) =>
    getTripsByRegion(region.slug).map((trip) => ({
      url: `${siteUrl}/destinations/${region.slug}/${trip.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...regionRoutes, ...tripRoutes];
}
