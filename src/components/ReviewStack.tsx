"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site.config";

export function ReviewStack() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-mist/60 py-14" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
          Neighbourhood word-of-mouth
        </p>
        <h2
          id="reviews-heading"
          className="mt-2 font-display text-3xl text-ink sm:text-4xl"
        >
          What guests notice
        </h2>
        <p className="mt-2 text-sm text-ink-mute">
          ★ {siteConfig.rating.value} Google · {siteConfig.rating.count} reviews
        </p>
        <ul className="mt-8 space-y-4">
          {siteConfig.reviewQuotes.map((q, i) => (
            <motion.li
              key={i}
              className="border-l-[3px] border-cobalt bg-crisp px-5 py-4 shadow-stub"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <p className="font-display text-lg italic text-ink">
                “{q.text}”
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-mute/70">
                {q.source}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
