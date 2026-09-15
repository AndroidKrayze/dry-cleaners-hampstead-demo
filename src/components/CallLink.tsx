import { siteConfig } from "@/lib/site.config";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "text";
};

export function CallLink({
  className = "",
  children,
  variant = "primary",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt";
  const variants = {
    primary:
      "rounded-full bg-ink px-5 py-3 text-crisp hover:bg-ink-mute hover:ring-2 hover:ring-cobalt/40",
    ghost:
      "rounded-full border border-ink/20 bg-crisp px-5 py-3 text-ink hover:border-cobalt hover:text-cobalt",
    text: "text-cobalt underline-offset-4 hover:underline",
  };
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={`Call ${siteConfig.phoneDisplay}`}
    >
      {children ?? siteConfig.ctaLabel}
    </a>
  );
}
