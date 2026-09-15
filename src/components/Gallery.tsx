"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
] as const;

const aspects = [
  "aspect-[16/11]",
  "aspect-[4/3] md:h-full md:aspect-auto",
  "aspect-[4/3]",
  "aspect-[16/10]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
] as const;

export function Gallery() {
  const reduce = useReducedMotion();
  const shots = siteConfig.photos.filter((p) => p.file !== "hero.jpg");

  return (
    <section
      id="gallery"
      className="bg-mist/40 py-14 sm:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="mt-2 font-display text-3xl text-ink sm:text-4xl"
          >
            80 Haverstock Hill
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-mute">
            Real storefront photos of this shop — Google listing and Street View
            of the fascia at number 80.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:gap-5">
          {shots.map((shot, i) => {
            const fill = i === 1;
            return (
              <motion.figure
                key={shot.file}
                className={`group relative overflow-hidden rounded-lg border border-hairline bg-mist/50 shadow-stub ${
                  spans[i] ?? "md:col-span-6"
                } ${fill ? "min-h-[220px]" : ""}`}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(0.04 + i * 0.03, 0.28),
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase(`/assets/${shot.file}`)}
                  alt={shot.alt}
                  className={`${aspects[i] ?? "aspect-[4/3]"} w-full object-cover transition duration-700 group-hover:scale-[1.02] ${
                    fill
                      ? "md:absolute md:inset-0 md:h-full md:w-full md:aspect-auto"
                      : ""
                  }`}
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-3 pt-12">
                  <p className="text-sm font-medium text-crisp">{shot.caption}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
