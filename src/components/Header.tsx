"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site.config";
import { CallLink } from "./CallLink";

const links = [
  { href: "/services/", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/prices/", label: "Prices" },
  { href: "/about/", label: "Care" },
  { href: "/visit/", label: "Visit" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const base = "/dry-cleaners-hampstead-demo";

  const isActive = (href: string) => {
    const path = pathname?.replace(base, "") || "/";
    if (href === "/") return path === "/" || path === "";
    return path.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-40 border-b border-hairline/80 bg-crisp/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex flex-col leading-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
        >
          <span className="font-display text-lg text-ink sm:text-xl">
            {siteConfig.name}
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-ink-mute/70">
            Haverstock Hill · Belsize Park
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition ${
                isActive(l.href)
                  ? "text-cobalt stitch-underline"
                  : "text-ink-mute hover:text-cobalt"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <CallLink className="!py-2 !text-sm" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <CallLink className="!px-3 !py-2 !text-xs">Call</CallLink>
          <button
            type="button"
            className="rounded-md border border-hairline px-3 py-2 text-sm text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-hairline bg-crisp px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-md px-2 py-2 text-ink hover:bg-mist"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
