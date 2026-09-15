import { siteConfig } from "@/lib/site.config";

export function ReviewStack() {
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
        <ul className="mt-8 space-y-4">
          {siteConfig.reviewQuotes.map((q, i) => (
            <li
              key={i}
              className="border-l-[3px] border-cobalt bg-crisp px-5 py-4 shadow-stub"
            >
              <p className="font-display text-lg italic text-ink">
                “{q.text}”
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-mute/70">
                {q.source}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-mute">
          Themes paraphrased from public directories and reviews — confirm live
          Google rating before hard-coding stars in print.
        </p>
      </div>
    </section>
  );
}
