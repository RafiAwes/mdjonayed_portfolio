"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { site } from "@/content/site";
import { ArrowLeft, ArrowRight, Check, Share } from "./Icons";

/**
 * Full-width stage-slide quote: his own lines, big, over a faded stage photo.
 * Manual carousel + a share button (native share sheet, or copy to clipboard).
 */
export default function QuoteBand() {
  const root = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const [copied, setCopied] = useState(false);
  const first = useRef(true);
  const quotes = site.quotes;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const split = SplitText.create(".quote-text", { type: "lines,words", mask: "lines" });
      if (first.current) {
        // First reveal happens when the band scrolls into view.
        first.current = false;
        gsap.from(split.words, {
          yPercent: 100,
          stagger: 0.03,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 65%" },
        });
      } else {
        gsap.from(split.words, { yPercent: 100, stagger: 0.025, duration: 0.9, ease: "expo.out" });
        gsap.from(".quote-source", { opacity: 0, duration: 0.6, delay: 0.3 });
      }
      return () => split.revert();
    },
    { scope: root, dependencies: [i] },
  );

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  if (quotes.length === 0) return null;
  const q = quotes[i];
  const many = quotes.length > 1;
  const go = (d: number) => setI((v) => (v + d + quotes.length) % quotes.length);

  const share = async () => {
    const text = `“${q.text}” — ${site.name}`;
    const url = typeof window !== "undefined" ? window.location.origin : "";
    try {
      if (navigator.share) {
        await navigator.share({ text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setCopied(true);
    } catch (err) {
      if ((err as Error)?.name === "AbortError") return; // user closed the share sheet
      // Clipboard API blocked (permissions / insecure context): fall back to a hidden textarea.
      const ta = document.createElement("textarea");
      ta.value = `${text}\n${url}`;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;pointer-events:none";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      if (ok) setCopied(true);
    }
  };

  return (
    <section ref={root} aria-label="Quotes" className="on-ink relative isolate overflow-hidden bg-ink text-on-ink">
      <Image
        src={site.portrait}
        alt=""
        fill
        sizes="100vw"
        unoptimized={site.portrait.endsWith(".svg")}
        className="-z-20 object-cover object-[75%_30%] opacity-35 grayscale"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-ink)_30%,rgb(13_17_23/0.85)_60%,rgb(13_17_23/0.6))]"
        aria-hidden
      />

      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 lg:py-36">
        <figure>
          <span className="block font-mono text-[13px] text-mint">
            {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
          </span>
          <blockquote aria-live="polite" className="mt-8">
            <p key={i} className="quote-text display max-w-[22ch] text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.04]">
              &ldquo;{q.text}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px]">
            <span className="font-semibold text-on-ink">{site.name}</span>
            <span className="quote-source text-on-ink-soft">{q.source}</span>
          </figcaption>
        </figure>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {many && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous quote"
                className="flex size-11 items-center justify-center rounded-full border border-ink-3 text-on-ink transition-colors hover:border-on-ink-soft"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next quote"
                className="flex size-11 items-center justify-center rounded-full border border-ink-3 text-on-ink transition-colors hover:border-on-ink-soft"
              >
                <ArrowRight />
              </button>
            </>
          )}
          <button type="button" onClick={share} className="btn ml-1 border border-ink-3 text-on-ink hover:border-mint hover:text-mint">
            {copied ? <Check /> : <Share />}
            {copied ? "Copied" : "Share this quote"}
          </button>
          <span className="sr-only" role="status">
            {copied ? "Quote copied to clipboard" : ""}
          </span>
        </div>
      </div>
    </section>
  );
}
