import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { CallLink } from "./CallLink";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink text-crisp">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-mist/80">
            {siteConfig.address.full}
          </p>
          <p className="mt-4">
            <CallLink variant="text" className="!text-cobalt">
              {siteConfig.phoneDisplay}
            </CallLink>
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-mist/60">
            Pages
          </p>
          <ul className="mt-3 space-y-2 text-sm text-mist/90">
            <li>
              <Link href="/services/" className="hover:text-cobalt">
                Services
              </Link>
            </li>
            <li>
              <Link href="/prices/" className="hover:text-cobalt">
                Prices
              </Link>
            </li>
            <li>
              <Link href="/about/" className="hover:text-cobalt">
                Care
              </Link>
            </li>
            <li>
              <Link href="/visit/" className="hover:text-cobalt">
                Visit
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-mist/60">
            Drop off
          </p>
          <p className="mt-3 text-sm text-mist/80">
            Phone or walk-in. Ask in store for prices and payment options.
          </p>
          <p className="mt-4 text-xs text-mist/50">{siteConfig.demoNote}</p>
        </div>
      </div>
    </footer>
  );
}
