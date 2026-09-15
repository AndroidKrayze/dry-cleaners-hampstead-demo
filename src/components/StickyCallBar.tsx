"use client";

import { siteConfig } from "@/lib/site.config";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/20 bg-ink p-3 md:hidden">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-cobalt px-4 py-3 text-sm font-semibold text-crisp focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crisp"
        aria-label={`Call ${siteConfig.phoneDisplay}`}
      >
        <PhoneIcon />
        Call {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}
