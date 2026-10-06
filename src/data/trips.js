export const regions = [
  {
    slug: "himachal",
    name: "Himachal Pradesh",
    shortName: "Himachal",
    tagline: "Hills, valleys & Himalayan trails",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
    description:
      "From Shimla’s colonial charm to Spiti’s high-altitude desert, Himachal is made for mountain getaways.",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    shortName: "Kashmir",
    tagline: "Lakes, meadows & winter magic",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80",
    description:
      "Srinagar houseboats, Gulmarg snow, and Pahalgam meadows — Kashmir for every season.",
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    shortName: "Ladakh",
    tagline: "High passes & monastery trails",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
    description:
      "Leh, Nubra, Pangong and epic road trips across the cold desert of Ladakh.",
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    shortName: "Uttarakhand",
    tagline: "Pilgrimage peaks & quiet hills",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00bce9b60c?auto=format&fit=crop&w=1600&q=80",
    description:
      "Rishikesh, Mussoorie, Nainital and Char Dham routes for spiritual and scenic escapes.",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    shortName: "Rajasthan",
    tagline: "Forts, dunes & royal stays",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80",
    description:
      "Jaipur, Udaipur, Jaisalmer and desert camps — heritage travel across the desert state.",
  },
  {
    slug: "kerala",
    name: "Kerala",
    shortName: "Kerala",
    tagline: "Backwaters, tea hills & beaches",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    description:
      "Alleppey houseboats, Munnar plantations and quiet coastal nights in God’s Own Country.",
  },
  {
    slug: "goa",
    name: "Goa",
    shortName: "Goa",
    tagline: "Beaches, cafés & easy nights",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960325a67eb?auto=format&fit=crop&w=1600&q=80",
    description:
      "North party beaches or South quiet coves — Goa tailored to your pace.",
  },
  {
    slug: "andaman",
    name: "Andaman",
    shortName: "Andaman",
    tagline: "Islands, reefs & clear waters",
    image:
      "https://images.unsplash.com/photo-1582967788606-a171f1080dd5?auto=format&fit=crop&w=1600&q=80",
    description:
      "Port Blair, Havelock and Neil Island for diving, beaches and island hopping.",
  },
];

export const trips = [
  // Himachal
  {
    slug: "shimla-manali-6-days-5-nights",
    regionSlug: "himachal",
    name: "Shimla Manali",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    priceFrom: 12999,
    difficulty: "Easy",
    highlights: ["Mall Road", "Solang Valley", "Kufri", "Hadimba Temple"],
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Classic Himachal circuit covering Shimla’s hill charm and Manali’s adventure vibes.",
    featured: true,
  },
  {
    slug: "spiti-bike-trip-8-days",
    regionSlug: "himachal",
    name: "Spiti Bike Trip",
    duration: "8 Days",
    days: 8,
    nights: 7,
    priceFrom: 24999,
    difficulty: "Challenging",
    highlights: ["Kaza", "Key Monastery", "Chandratal", "Kunzum Pass"],
    image:
      "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Ride through Spiti’s high-altitude desert with monastery stops and starlit camps.",
    featured: true,
  },
  {
    slug: "kasol-kheerganga-trek-4-days",
    regionSlug: "himachal",
    name: "Kasol Kheerganga Trek",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    priceFrom: 7999,
    difficulty: "Moderate",
    highlights: ["Kasol", "Hot Springs", "Parvati Valley", "Camping"],
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Short Parvati Valley escape with café culture in Kasol and a rewarding trek to Kheerganga.",
    featured: false,
  },
  {
    slug: "dalhousie-khajjiar-5-days",
    regionSlug: "himachal",
    name: "Dalhousie Khajjiar",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    priceFrom: 10999,
    difficulty: "Easy",
    highlights: ["Khajjiar Meadows", "Dainkund", "Panchpula", "St. John’s Church"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Quiet colonial hills and the mini Switzerland of India at Khajjiar.",
    featured: false,
  },

  // Kashmir
  {
    slug: "srinagar-gulmarg-pahalgam-6-days",
    regionSlug: "kashmir",
    name: "Srinagar Gulmarg Pahalgam",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    priceFrom: 15999,
    difficulty: "Easy",
    highlights: ["Dal Lake", "Gondola", "Betaab Valley", "Shikara Ride"],
    image:
      "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Kashmir essentials — houseboats, meadows, and snow-ready Gulmarg.",
    featured: true,
  },
  {
    slug: "kashmir-honeymoon-5-days",
    regionSlug: "kashmir",
    name: "Kashmir Honeymoon",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    priceFrom: 18999,
    difficulty: "Easy",
    highlights: ["Houseboat Stay", "Mughal Gardens", "Gulmarg", "Private Transfers"],
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Romantic Kashmir with curated stays, shikara evenings and soft adventure.",
    featured: false,
  },
  {
    slug: "sonamarg-thajiwas-glacier-4-days",
    regionSlug: "kashmir",
    name: "Sonamarg Thajiwas Glacier",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    priceFrom: 11999,
    difficulty: "Moderate",
    highlights: ["Sonamarg", "Thajiwas", "Pony Ride", "Mountain Views"],
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Compact Kashmir trip focused on Sonamarg’s meadows and glacier approaches.",
    featured: false,
  },

  // Ladakh
  {
    slug: "leh-ladakh-road-trip-8-days",
    regionSlug: "ladakh",
    name: "Leh Ladakh Road Trip",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    priceFrom: 27999,
    difficulty: "Challenging",
    highlights: ["Khardung La", "Nubra Valley", "Pangong Lake", "Magnetic Hill"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Flagship Ladakh circuit with high passes, dunes and the iconic Pangong shoreline.",
    featured: true,
  },
  {
    slug: "ladakh-bike-expedition-10-days",
    regionSlug: "ladakh",
    name: "Ladakh Bike Expedition",
    duration: "10 Days",
    days: 10,
    nights: 9,
    priceFrom: 34999,
    difficulty: "Challenging",
    highlights: ["Manali–Leh Highway", "Sarchu", "Chang La", "Bike Support"],
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Guided bike expedition across Manali–Leh with mechanic support and paced acclimatization.",
    featured: false,
  },

  // Uttarakhand
  {
    slug: "rishikesh-adventure-3-days",
    regionSlug: "uttarakhand",
    name: "Rishikesh Adventure",
    duration: "3 Days / 2 Nights",
    days: 3,
    nights: 2,
    priceFrom: 6999,
    difficulty: "Moderate",
    highlights: ["Rafting", "Camping", "Ganga Aarti", "Bungee Optional"],
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00bce9b60c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Weekend adventure on the Ganges with rafting, campfires and riverside evenings.",
    featured: true,
  },
  {
    slug: "nainital-mussoorie-5-days",
    regionSlug: "uttarakhand",
    name: "Nainital Mussoorie",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    priceFrom: 11499,
    difficulty: "Easy",
    highlights: ["Naini Lake", "Mall Road", "Gun Hill", "Lake District"],
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Two classic hill stations — lakeside Nainital and colonial Mussoorie.",
    featured: false,
  },

  // Rajasthan
  {
    slug: "jaipur-udaipur-jaisalmer-7-days",
    regionSlug: "rajasthan",
    name: "Jaipur Udaipur Jaisalmer",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    priceFrom: 19999,
    difficulty: "Easy",
    highlights: ["Amber Fort", "Lake Pichola", "Sam Sand Dunes", "Desert Camp"],
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Royal Rajasthan circuit covering pink city heritage, lakes and desert nights.",
    featured: true,
  },
  {
    slug: "udaipur-romantic-escape-4-days",
    regionSlug: "rajasthan",
    name: "Udaipur Romantic Escape",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    priceFrom: 13999,
    difficulty: "Easy",
    highlights: ["City Palace", "Boat Ride", "Sunset Point", "Heritage Stay"],
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Intimate Udaipur stay with lake views, palace walks and soft evenings.",
    featured: false,
  },

  // Kerala
  {
    slug: "kerala-backwaters-munnar-6-days",
    regionSlug: "kerala",
    name: "Kerala Backwaters & Munnar",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    priceFrom: 16999,
    difficulty: "Easy",
    highlights: ["Houseboat", "Tea Gardens", "Alleppey", "Spice Plantations"],
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Slow Kerala days — houseboat canals and cool tea hills of Munnar.",
    featured: true,
  },
  {
    slug: "kochi-varkala-beach-5-days",
    regionSlug: "kerala",
    name: "Kochi Varkala Beach",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    priceFrom: 14999,
    difficulty: "Easy",
    highlights: ["Fort Kochi", "Cliff Beach", "Seafood", "Ayurveda Optional"],
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Culture in Kochi paired with cliff-top beach time in Varkala.",
    featured: false,
  },

  // Goa
  {
    slug: "north-goa-getaway-4-days",
    regionSlug: "goa",
    name: "North Goa Getaway",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    priceFrom: 9999,
    difficulty: "Easy",
    highlights: ["Baga", "Calangute", "Fort Aguada", "Nightlife"],
    image:
      "https://images.unsplash.com/photo-1512343879784-a960325a67eb?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Easy North Goa mix of beaches, forts and café hopping.",
    featured: false,
  },
  {
    slug: "south-goa-relax-5-days",
    regionSlug: "goa",
    name: "South Goa Relax",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    priceFrom: 12999,
    difficulty: "Easy",
    highlights: ["Palolem", "Agonda", "Quiet Beaches", "Sunset Cruises"],
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Slower South Goa for couples and families who prefer quieter shores.",
    featured: false,
  },

  // Andaman
  {
    slug: "andaman-island-hopping-6-days",
    regionSlug: "andaman",
    name: "Andaman Island Hopping",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    priceFrom: 22999,
    difficulty: "Easy",
    highlights: ["Havelock", "Radhanagar Beach", "Scuba Optional", "Neil Island"],
    image:
      "https://images.unsplash.com/photo-1582967788606-a171f1080dd5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Island hopping across Port Blair, Havelock and Neil with beach time built in.",
    featured: true,
  },
  {
    slug: "havelock-scuba-package-4-days",
    regionSlug: "andaman",
    name: "Havelock Scuba Package",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    priceFrom: 18999,
    difficulty: "Moderate",
    highlights: ["Discover Scuba", "Elephant Beach", "Snorkelling", "Beach Stay"],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Short Andaman trip focused on underwater adventure at Havelock.",
    featured: false,
  },
];
