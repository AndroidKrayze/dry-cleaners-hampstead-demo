import { siteConfig } from "@/lib/site.config";
import { CallLink } from "./CallLink";

export function CallBand() {
  return (
    <section className="bg-ink py-10 sm:py-12 text-crisp">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt">
            Ticket ready?
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            Drop in — or call first.
          </h2>
          <p className="mt-2 max-w-lg text-mist/80">
            Call the shop on Haverstock Hill — we'll take it from there.
          </p>
        </div>
        <CallLink className="!bg-cobalt !text-crisp hover:!bg-cobalt/90 hover:!ring-crisp/30">
          Call now · {siteConfig.phoneDisplay}
        </CallLink>
      </div>
    </section>
  );
}
