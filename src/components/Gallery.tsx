"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";

export function Gallery() {
  const reduce = useReducedMotion();
  // Include hero so the gallery stays dense after duplicate trim
  const shots = siteConfig.photos;

  return (
    <section
      id="gallery"
      className="bg-mist/40 py-10 sm:py-14"
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

        <div
          className={`mt-8 grid gap-3 sm:gap-4 ${
            shots.length === 1
              ? "grid-cols-1"
              : shots.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-12"
          }`}
        >
          {shots.map((shot, i) => (
            <motion.figure
              key={shot.file}
              className="group relative overflow-hidden rounded-lg border border-hairline bg-ink shadow-stub"
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
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-3 pt-12">
                <p className="text-sm font-medium text-crisp">{shot.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
