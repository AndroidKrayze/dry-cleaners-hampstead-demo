import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";
import { CallLink } from "@/components/CallLink";
import { CallBand } from "@/components/CallBand";

export const metadata: Metadata = {
  title: "Care",
  description:
    "Silk specialty and careful neighbourhood craft at Dry Cleaners of Hampstead, 80 Haverstock Hill, Belsize Park.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink py-14 text-crisp">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
            Care story
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">
            Careful hands on Haverstock Hill
          </h1>
          <p className="mt-4 max-w-2xl text-mist/85">
            A neighbourhood dry cleaner — silk specialty listed publicly —
            without inventing biography, awards, or certifications.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-ink">Silk specialty</h2>
            <p className="mt-3 leading-relaxed text-ink-mute">
              Camden.org and AllInLondon list{" "}
              <strong className="font-medium text-ink">
                {siteConfig.name}
              </strong>{" "}
              as specialising in silk. That reputation sits alongside general dry
              cleaning, clothing alterations &amp; repairs, and shoe repair —
              fuller service than “just dry cleaning.”
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-hairline">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/assets/shop-1.jpg")}
              alt="Dry Cleaners of Hampstead fascia and entrance on Haverstock Hill"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">
              What guests say (themes)
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-mute">
              <li>Careful with delicate and expensive items</li>
              <li>Friendly, gentlemanly service</li>
              <li>
                Less chemical smell / greener feel in-shop — soft review theme
                only; no fake eco badges
              </li>
              <li>Reliable quality versus other local cleaners</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">On the street</h2>
            <p className="mt-3 leading-relaxed text-ink-mute">
              You&apos;ll find us at {siteConfig.address.full}, near Belsize
              Park tube. Jimmy&apos;s Barber is further along at 92 — a different
              business entirely. Phone or walk in; we don&apos;t invent online
              booking.
            </p>
            <div className="mt-6">
              <CallLink />
            </div>
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}
