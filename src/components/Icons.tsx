type IconProps = { className?: string };

const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** 16px stroke icons, 1.5px stroke, currentColor. */
export function ArrowRight({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowLeft({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13 8H3M7 4 3 8l4 4" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}

export function Mail({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="M2.5 4.5 8 9l5.5-4.5" />
    </svg>
  );
}

export function Quote({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={className}>
      <path d="M3 11.5C3 7.4 5.3 4.6 8.6 3.5l.7 1.5C7.2 6 6.1 7.7 6 9.6h2.6c.8 0 1.4.6 1.4 1.4v4.6c0 .8-.6 1.4-1.4 1.4H4.4c-.8 0-1.4-.6-1.4-1.4v-4.1Zm8 0c0-4.1 2.3-6.9 5.6-8l.7 1.5c-2.1 1-3.2 2.7-3.3 4.6h2.6c.8 0 1.4.6 1.4 1.4v4.6c0 .8-.6 1.4-1.4 1.4h-4.2c-.8 0-1.4-.6-1.4-1.4v-4.1Z" />
    </svg>
  );
}
