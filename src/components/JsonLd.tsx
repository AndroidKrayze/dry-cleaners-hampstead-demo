import { siteConfig } from "@/lib/site.config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["DryCleaningOrLaundry", "LocalBusiness"],
    name: siteConfig.name,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.area,
      addressRegion: "Greater London",
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    url: "https://androidkrayze.github.io/dry-cleaners-hampstead-demo/",
    description:
      "Neighbourhood dry cleaners on Haverstock Hill, Belsize Park — silk specialist care, alterations, shoe repair. Call to enquire.",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "08:00",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    disambiguatingDescription: siteConfig.hoursConfirmNote,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
