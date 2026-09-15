import { CallLink } from "./CallLink";

type Props = {
  label: string;
  blurb: string;
  micro?: string;
  className?: string;
};

export function TicketStub({ label, blurb, micro, className = "" }: Props) {
  return (
    <article
      className={`relative flex min-w-[260px] max-w-sm flex-col rounded-lg border border-hairline bg-crisp p-5 shadow-stub ${className}`}
    >
      <div
        className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mist"
        aria-hidden
      />
      <div
        className="absolute right-0 top-1/2 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full bg-mist"
        aria-hidden
      />
      {micro && (
        <p className="text-[10px] uppercase tracking-[0.2em] text-cobalt">
          {micro}
        </p>
      )}
      <h3 className="mt-2 font-display text-xl text-ink">{label}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">
        {blurb}
      </p>
      <div className="receipt-dash my-4 w-full" />
      <CallLink variant="text" className="!text-sm !font-semibold">
        Call 020 7284 4905
      </CallLink>
    </article>
  );
}
