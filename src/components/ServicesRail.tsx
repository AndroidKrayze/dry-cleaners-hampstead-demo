"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { TicketStub } from "./TicketStub";
import { motion, useReducedMotion } from "framer-motion";

export function ServicesRail() {
  const reduce = useReducedMotion();
  return (
    <section className="py-10 sm:py-12" aria-labelledby="services-rail-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
              On the rail
            </p>
            <h2
              id="services-rail-heading"
              className="mt-2 font-display text-3xl text-ink sm:text-4xl"
            >
              Services, ticket-stub style
            </h2>
          </div>
          <Link
            href="/services/"
            className="hidden text-sm font-medium text-cobalt hover:underline sm:inline"
          >
            All services →
          </Link>
        </div>
      </div>
      <div className="mt-8 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <motion.div
          className="mx-auto flex w-max gap-4 px-4 sm:px-6"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="hidden w-2 shrink-0 self-stretch rounded-full bg-ink/10 sm:block"
            aria-hidden
            title="Hanging rail"
          />
          {siteConfig.services.map((s) => (
            <TicketStub
              key={s.id}
              label={s.label}
              blurb={s.blurb}
              micro={s.micro}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
