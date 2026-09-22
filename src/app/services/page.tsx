import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { TicketStub } from "@/components/TicketStub";
import { CallBand } from "@/components/CallBand";
import { CallLink } from "@/components/CallLink";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dry cleaning, silk specialist care, alterations and shoe repair at Dry Cleaners of Hampstead, Belsize Park. Call 020 7284 4905.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline bg-ink py-14 text-crisp">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
            Hanging rail
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">
            Services on Haverstock Hill
          </h1>
          <p className="mt-4 max-w-2xl text-mist/85">
            Each ticket ends with a call to the shop. Call or drop in to arrange drop-off.
          </p>
        </div>
      </section>

      <section className="py-12" aria-label="Services hanging rail">
        <div className="overflow-x-auto pb-2">
          <div className="mx-auto flex w-max gap-4 px-4 sm:px-6">
            <div
              className="w-1.5 shrink-0 self-stretch rounded-full bg-ink/15"
              aria-hidden
            />
            {siteConfig.services.map((s) => (
              <TicketStub
                key={s.id}
                label={s.label}
                blurb={s.blurb}
                micro={s.micro}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist/50 py-14" aria-labelledby="full-grid">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="full-grid"
            className="font-display text-3xl text-ink sm:text-4xl"
          >
            Full ticket-stub grid
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {siteConfig.services.map((s) => (
              <TicketStub
                key={`grid-${s.id}`}
                label={s.label}
                blurb={s.blurb}
                micro={s.micro}
                className="!min-w-0 !max-w-none"
              />
            ))}
          </div>

          <h3 className="mt-14 font-display text-2xl text-ink">
            Soft extras
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {siteConfig.softExtras.map((x) => (
              <li
                key={x.id}
                className="rounded-lg border border-hairline bg-crisp p-5"
              >
                <p className="font-display text-xl">{x.label}</p>
                <p className="mt-2 text-sm text-ink-mute">{x.blurb}</p>
                <div className="mt-4">
                  <CallLink variant="text" className="!text-sm">
                    Call {siteConfig.phoneDisplay}
                  </CallLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallBand />
    </>
  );
}
