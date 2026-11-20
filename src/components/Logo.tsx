import { site } from "@/content/site";

/**
 * MJ monogram: one continuous stroke draws the M, and its right leg carries down
 * into the hook of a J. The mint square is a growth node, the quiet technical accent.
 */
export const MARK_PATH = "M9 29V11l8 9 8-9v16.5a4.5 4.5 0 0 1-4.5 4.5H18";

type MarkProps = {
  className?: string;
  /** "tile" = graphite rounded square (app icon / favicon). "glyph" = stroke only, inherits color. */
  variant?: "tile" | "glyph";
  title?: string;
};

export function LogoMark({ className = "size-8", variant = "glyph", title }: MarkProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      {variant === "tile" && <rect width="40" height="40" rx="10" className="fill-ink" />}
      <path
        d={MARK_PATH}
        fill="none"
        strokeWidth="3.4"
        strokeLinejoin="miter"
        className={variant === "tile" ? "stroke-on-ink" : "stroke-current"}
      />
      <rect x="28.5" y="6.5" width="5" height="5" rx="1" className={variant === "tile" ? "fill-mint" : "fill-[var(--logo-node,var(--color-mint))]"} />
    </svg>
  );
}

/** Mark + wordmark lockup. */
export default function Logo({ className = "", markClassName = "size-7" }: { className?: string; markClassName?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span className="font-semibold tracking-[-0.02em]">{site.name}</span>
    </span>
  );
}
