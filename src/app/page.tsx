import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";
import { CallLink } from "@/components/CallLink";
import { ServicesRail } from "@/components/ServicesRail";
import { ReviewStack } from "@/components/ReviewStack";
import { CallBand } from "@/components/CallBand";

export default function HomePage() {
  return (
    <>
      {/* Full-bleed storefront + opacity wash */}
      <section className="relative isolate min-h-[72vh] overflow-hidden bg-ink text-crisp sm:min-h-[80vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/assets/hero.jpg")}
          alt="Dry Cleaners of Hampstead storefront at 80 Haverstock Hill"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/25 sm:from-ink/90 sm:via-ink/55 sm:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-4 py-16 sm:min-h-[80vh] sm:px-6 lg:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-cobalt">
            Silk specialists · Haverstock Hill
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
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
              href="#visit"
              className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm text-mist/80 underline-offset-4 hover:text-cobalt hover:underline"
            >
              Visit
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="rounded-full bg-crisp/95 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink">
              ★ {siteConfig.rating.value} · {siteConfig.rating.count} reviews
            </span>
            <span className="rounded-full border border-crisp/40 bg-ink/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-crisp backdrop-blur">
              80 Haverstock Hill
            </span>
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

      {/* Text-only specialty — no second storefront photo */}
      <section className="py-10 sm:py-12" aria-labelledby="silk-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
            Specialty
          </p>
          <h2
            id="silk-heading"
            className="mt-2 max-w-2xl font-display text-3xl text-ink sm:text-4xl"
          >
            Silk specialists
          </h2>
          <p className="mt-4 max-w-2xl text-ink-mute leading-relaxed">
            Public listings note a specialty in silk. Delicate and designer
            pieces get the same careful neighbourhood care as everyday dry
            cleaning — call ahead or drop in on Haverstock Hill.
          </p>
          <Link
            href="/about/"
            className="mt-6 inline-block text-sm font-semibold text-cobalt hover:underline"
          >
            Read the care story →
          </Link>
        </div>
      </section>

      <ReviewStack />

      {/* Visit — no duplicate shopfront image */}
      <section
        id="visit"
        className="py-10 sm:py-12"
        aria-labelledby="visit-teaser"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-lg border border-hairline bg-mist/50 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-cobalt">Visit</p>
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
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-ink/20 bg-crisp px-5 py-3 text-sm font-medium text-ink hover:border-cobalt hover:text-cobalt"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}
