import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { CallLink } from "@/components/CallLink";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CallBand } from "@/components/CallBand";

export const metadata: Metadata = {
  title: "Prices",
  description:
    "Price on request — call Dry Cleaners of Hampstead on 020 7284 4905 or ask in store.",
};

const rows = [
  ...siteConfig.services.map((s) => s.label),
  "Delicate / designer garments",
  "Neighbourhood drop-off enquire",
];

export default function PricesPage() {
  return (
    <>
      <section className="border-b border-hairline bg-mist/60 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
            Receipt
          </p>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
            Prices on request
          </h1>
          <p className="mt-4 max-w-2xl text-ink-mute">
            Prices depend on the garment — every row below is enquire /
            call.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-hairline bg-crisp p-6 shadow-stub sm:p-8">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <p className="font-display text-xl text-ink">
                {siteConfig.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-ink-mute">
                Enquiry receipt
              </p>
            </div>
            <ul className="mt-2 divide-y divide-transparent">
              {rows.map((label) => (
                <li
                  key={label}
                  className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="shrink-0 text-sm font-medium text-ink sm:w-48">
                    {label}
                  </span>
                  <span className="receipt-dash hidden flex-1 sm:block" />
                  <span className="shrink-0 text-sm text-ink-mute">
                    Price on request — call or ask in store
                  </span>
                </li>
              ))}
            </ul>
            <div className="receipt-dash my-4" />
            <p className="text-sm text-ink-mute">{siteConfig.paymentNote}</p>
            <div className="mt-6">
              <CallLink>Call {siteConfig.phoneDisplay}</CallLink>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <CallBand />
    </>
  );
}
