import { contact } from "@/lib/contact";

const siteUrl = "https://switch2travel.com";

export function getSiteUrl() {
  return siteUrl;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${siteUrl}/#agency`,
        name: "Switch 2 Travel",
        url: siteUrl,
        slogan: "Travel Made Easier",
        description:
          "Switch 2 Travel plans India holidays — Himachal, Kashmir, Ladakh, Kerala, Goa, Rajasthan and more. Flip a switch and you're on your way.",
        telephone: contact.phoneTel,
        email: contact.email,
        areaServed: "IN",
        image: `${siteUrl}/final.png`,
        logo: `${siteUrl}/final.png`,
        sameAs: [contact.social.instagram, contact.social.facebook],
        employee: {
          "@type": "Person",
          name: contact.expertName,
          jobTitle: contact.expertRole,
          email: contact.email,
          telephone: contact.phoneTel,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Switch 2 Travel",
        url: siteUrl,
        slogan: "Travel Made Easier",
        logo: `${siteUrl}/final.png`,
        email: contact.email,
        telephone: contact.phoneTel,
        sameAs: [contact.social.instagram, contact.social.facebook],
      },
    ],
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function touristTripJsonLd(trip, region) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.name,
    description: trip.summary,
    url: `${siteUrl}/destinations/${region.slug}/${trip.slug}`,
    image: trip.image,
    touristType: "Leisure travellers",
    itinerary: {
      "@type": "ItemList",
      itemListElement: trip.highlights.map((highlight, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: highlight,
      })),
    },
    offers: {
      "@type": "Offer",
      price: trip.priceFrom,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/destinations/${region.slug}/${trip.slug}`,
    },
    provider: {
      "@id": `${siteUrl}/#agency`,
    },
  };
}
