export const siteConfig = {
  name: "Dry Cleaners of Hampstead",
  shortName: "DCoH",
  tagline: "Silk care on Haverstock Hill",
  address: {
    line1: "80 Haverstock Hill",
    area: "Belsize Park",
    city: "London",
    postcode: "NW3 2BE",
    full: "80 Haverstock Hill, Belsize Park, London NW3 2BE",
  },
  phoneDisplay: "020 7284 4905",
  phoneTel: "+442072844905",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=80+Haverstock+Hill+London+NW3+2BE",
  mapEmbed:
    "https://maps.google.com/maps?q=80+Haverstock+Hill,+London+NW3+2BE&z=16&output=embed",
  hours: {
    mon: "08:00–18:30",
    tue: "08:00–18:30",
    wed: "08:00–18:30",
    thu: "08:00–13:30",
    fri: "08:00–18:30",
    sat: "09:00–18:00",
    sun: "Closed",
  },
  hoursLabels: [
    { day: "Monday", hours: "08:00–18:30" },
    { day: "Tuesday", hours: "08:00–18:30" },
    { day: "Wednesday", hours: "08:00–18:30" },
    { day: "Thursday", hours: "08:00–13:30" },
    { day: "Friday", hours: "08:00–18:30" },
    { day: "Saturday", hours: "09:00–18:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  hoursConfirmNote:
    "Please call 020 7284 4905 to confirm opening times before you visit.",
  hoursConflict: true,
  rating: {
    value: 5.0,
    count: 28 as number | null,
    label: "Google",
    confirm: false,
    note: "Google Maps listing: 5.0 from 28 reviews (verified 2026-09-15).",
  },
  photos: [
    {
      file: "hero.jpg",
      alt: "Dry Cleaners of Hampstead storefront on Haverstock Hill",
      caption: "80 Haverstock Hill",
    },
    {
      file: "shop-1.jpg",
      alt: "Street view of Dry Cleaners of Hampstead frontage",
      caption: "Shopfront on Haverstock Hill",
    },
  ],
  services: [
    {
      id: "dry-cleaning",
      label: "General dry cleaning",
      blurb:
        "Everyday suits, coats and garments — careful cleaning for Haverstock Hill drop-offs.",
      micro: "Ticket ready",
    },
    {
      id: "silk",
      label: "Silk specialist care",
      blurb:
        "Silk specialty — delicate fabrics handled with neighbourhood care.",
      micro: "Silk specialists",
    },
    {
      id: "alterations",
      label: "Alterations & repairs",
      blurb:
        "Clothing alterations and repairs so your wardrobe fits the way it should.",
      micro: "Call to drop off",
    },
    {
      id: "shoes",
      label: "Shoe repair",
      blurb:
        "Shoe repair alongside dry cleaning — one stop on Haverstock Hill.",
      micro: "Haverstock Hill",
    },
  ],
  softExtras: [
    {
      id: "delicate",
      label: "Delicate & designer garments",
      blurb:
        "Public reviews praise careful work on expensive coats and delicate pieces.",
    },
    {
      id: "neighbourhood",
      label: "Neighbourhood drop-off",
      blurb:
        "Walk in, leave your ticket, collect later — or phone ahead if that is easier.",
    },
  ],
  reviewQuotes: [
    {
      text: "Nick is superb and never disappoints. The job is always done to a brilliant standard.",
      source: "Google reviews",
    },
    {
      text: "Quick service, friendly owner, and reasonable prices.",
      source: "Google reviews",
    },
    {
      text: "Quality, craftsmanship, and service are unmatched compared to other dry cleaners in the area.",
      source: "Google reviews",
    },
    {
      text: "Friendly, efficient service that is reliable.",
      source: "Google reviews",
    },
    {
      text: "The quality of cleaning was excellent with great service.",
      source: "Google reviews",
    },
    {
      text: "They use a process that cleans clothes without leaving an awful smell.",
      source: "Google reviews",
    },
    {
      text: "Overall excellent service with no reason to go anywhere else for perfect dry cleaning.",
      source: "Google reviews",
    },
  ],
  paymentNote:
    "Card and contactless mentioned on one public listing — please ask in store to confirm.",
  ctaLabel: "Call 020 7284 4905",
  trustStrip: [
    "5.0 Google · 28 reviews",
    "Silk specialists",
    "Belsize Park",
    "Call to drop off",
  ],
  suggestedDomains: [
    "drycleanersofhampstead.co.uk",
    "hampsteaddrycleaners.co.uk",
    "haverstockdrycleaners.co.uk",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
