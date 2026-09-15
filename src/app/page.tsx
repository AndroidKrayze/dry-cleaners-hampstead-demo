import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";
import { CallLink } from "@/components/CallLink";
import { ServicesRail } from "@/components/ServicesRail";
import { ReviewStack } from "@/components/ReviewStack";
import { CallBand } from "@/components/CallBand";
import { Gallery } from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-crisp">
        <div className="relative mx-auto grid max-w-6xl gap-0 lg:grid-cols-2 lg:items-stretch">
          <div className="relative z-10 flex flex-col justify-center px-4 py-14 sm:px-6 lg:py-24">
            <p className="text-xs uppercase tracking-[0.22em] text-cobalt">
              Silk specialists · Haverstock Hill
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Pressed. Protected.{" "}
              <span className="italic text-mist">Ready.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
              Your neighbourhood dry cleaners on Haverstock Hill — dry cleaning,
              silk care, alterations and shoe repair in Belsize Park.
            </p>
            <p className="mt-3 text-sm font-medium text-cobalt">
              ★ {siteConfig.rating.value} Google · {siteConfig.rating.count}{" "}
              reviews
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallLink className="!bg-cobalt hover:!bg-cobalt/90">
                Call {siteConfig.phoneDisplay}
              </CallLink>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-crisp/30 px-5 py-3 text-sm font-medium text-crisp hover:border-cobalt hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
              >
                Directions
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm text-mist/80 underline-offset-4 hover:text-cobalt hover:underline"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="relative h-[42vh] min-h-[240px] sm:h-[48vh] lg:h-auto lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/assets/hero.jpg")}
              alt="Dry Cleaners of Hampstead storefront at 80 Haverstock Hill"
              className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink/40 lg:via-transparent lg:to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-6 sm:left-6">
              <span className="rounded-full bg-crisp/95 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink">
                ★ {siteConfig.rating.value} · {siteConfig.rating.count} reviews
              </span>
              <span className="rounded-full border border-crisp/40 bg-ink/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-crisp backdrop-blur">
                80 Haverstock Hill
              </span>
            </div>
          </div>
        </div>
      </section>


      <section
        className="border-b border-hairline bg-crisp"
        aria-label="Trust strip"
      >
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 text-xs uppercase tracking-[0.16em] text-ink-mute sm:px-6">
          {siteConfig.trustStrip.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </section>

      <ServicesRail />

      <section className="py-10 sm:py-12" aria-labelledby="silk-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg border border-hairline bg-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/assets/shop-1.jpg")}
              alt="Street view of Dry Cleaners of Hampstead on Haverstock Hill"
              className="aspect-[4/3] h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
              Specialty
            </p>
            <h2
              id="silk-heading"
              className="mt-2 font-display text-3xl text-ink sm:text-4xl"
            >
              Directory-listed silk specialists
            </h2>
            <p className="mt-4 text-ink-mute leading-relaxed">
              Public listings note a specialty in silk. We keep the story honest:
              careful neighbourhood craft, not invented process jargon or fake
              eco badges. Delicate and designer pieces get the same call-first
              approach as everyday dry cleaning.
            </p>
            <Link
              href="/about/"
              className="mt-6 inline-block text-sm font-semibold text-cobalt hover:underline"
            >
              Read the care story →
            </Link>
          </div>
        </div>
      </section>

      <Gallery />

      <ReviewStack />

      <section className="py-10 sm:py-12" aria-labelledby="visit-teaser">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-lg border border-hairline bg-mist/50">
            <div className="grid lg:grid-cols-2">
              <div className="bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/assets/hero.jpg")}
                  alt="Looking along Haverstock Hill at Dry Cleaners of Hampstead"
                  className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[280px]"
                  loading="lazy"
                />
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
                  Visit
                </p>
                <h2
                  id="visit-teaser"
                  className="mt-2 font-display text-3xl text-ink"
                >
                  {siteConfig.address.full}
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-ink-mute">
                  {siteConfig.hoursConfirmNote}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CallLink />
                  <Link
                    href="/visit/"
                    className="inline-flex items-center rounded-full border border-ink/20 bg-crisp px-5 py-3 text-sm font-medium text-ink hover:border-cobalt hover:text-cobalt"
                  >
                    Hours & map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}
