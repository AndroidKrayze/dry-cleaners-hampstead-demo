"use client";

import { siteConfig } from "@/lib/site.config";
import { useState } from "react";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-4 rounded-lg border border-hairline bg-crisp p-6 shadow-stub"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <p className="font-display text-xl text-ink">Price enquiry</p>
      <p className="text-sm text-ink-mute">
        Tell us the garment and we&apos;ll point
        you to a call or in-store ask. 
      </p>
      <label className="block text-sm">
        <span className="text-ink-mute">Name</span>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-md border border-hairline bg-crisp px-3 py-2 text-ink focus:border-cobalt focus:outline-none focus:ring-1 focus:ring-cobalt"
        />
      </label>
      <label className="block text-sm">
        <span className="text-ink-mute">Phone</span>
        <input
          name="phone"
          type="tel"
          required
          className="mt-1 w-full rounded-md border border-hairline bg-crisp px-3 py-2 text-ink focus:border-cobalt focus:outline-none focus:ring-1 focus:ring-cobalt"
        />
      </label>
      <label className="block text-sm">
        <span className="text-ink-mute">Garment type</span>
        <input
          name="garment"
          placeholder="e.g. silk blouse, coat, alterations"
          className="mt-1 w-full rounded-md border border-hairline bg-crisp px-3 py-2 text-ink focus:border-cobalt focus:outline-none focus:ring-1 focus:ring-cobalt"
        />
      </label>
      {sent ? (
        <p className="rounded-md bg-mist px-3 py-3 text-sm text-ink">
          Thanks — for a real quote, please call{" "}
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="font-semibold text-cobalt"
          >
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      ) : (
        <button
          type="submit"
          className="w-full rounded-full bg-ink px-5 py-3 text-sm font-medium text-crisp hover:bg-ink-mute focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
        >
          Submit enquiry (then call the shop)
        </button>
      )}
    </form>
  );
}
