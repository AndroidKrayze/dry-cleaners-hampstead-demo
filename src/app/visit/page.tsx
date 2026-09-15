import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { CallLink } from "@/components/CallLink";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CallBand } from "@/components/CallBand";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Visit Dry Cleaners of Hampstead at 80 Haverstock Hill, Belsize Park NW3 2BE. Call 020 7284 4905 — confirm hours by phone.",
};

export default function VisitPage() {
  return (
    <>
      <section className="bg-ink py-16 text-crisp">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
            Call the shop
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">Visit us</h1>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="mt-8 inline-block font-display text-4xl text-cobalt transition hover:text-crisp sm:text-6xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          >
            {siteConfig.phoneDisplay}
          </a>
          <p className="mt-4 text-mist/80">{siteConfig.address.full}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallLink className="!bg-cobalt hover:!bg-cobalt/90">
              Call now
            </CallLink>
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-crisp/30 px-5 py-3 text-sm font-medium hover:border-cobalt hover:text-cobalt"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Hours</h2>
            <p className="mt-3 rounded-md border border-cobalt/30 bg-mist/60 px-4 py-3 text-sm text-ink-mute">
              {siteConfig.hoursConfirmNote}
            </p>
            <ul className="mt-6 divide-y divide-hairline rounded-lg border border-hairline bg-crisp">
              {siteConfig.hoursLabels.map((row) => (
                <li
                  key={row.day}
                  className="flex items-center justify-between px-4 py-3 text-sm"
                >
                  <span className="font-medium text-ink">{row.day}</span>
                  <span className="text-ink-mute">{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-mute">
              
              Listings can disagree — always confirm by phone.
            </p>
            <p className="mt-2 text-xs text-ink-mute">
              {siteConfig.paymentNote}
            </p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-hairline bg-mist">
              <iframe
                title="Map — 80 Haverstock Hill NW3 2BE"
                src={siteConfig.mapEmbed}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}
