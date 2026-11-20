"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { site, initials } from "@/content/site";
import { ArrowLeft, ArrowRight, Quote } from "./Icons";

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const first = useRef(true);
  const items = site.testimonials;

  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        ".t-swap",
        { opacity: 0, y: 12, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "expo.out", stagger: 0.06 },
      );
    },
    { scope: root, dependencies: [i] },
  );

  if (items.length === 0) return null;
  const t = items[i];
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);
  const many = items.length > 1;

  return (
    <section id="testimonials" ref={root} className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-4 pt-24 sm:px-8 lg:pt-32">
        <div className="flex items-end justify-between gap-6">
          <h2 className="display text-[clamp(2.25rem,4.5vw,3.5rem)] text-text">What clients say</h2>
          {many && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex size-11 items-center justify-center rounded-full border border-line bg-card text-text transition-colors hover:border-text"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex size-11 items-center justify-center rounded-full border border-line bg-card text-text transition-colors hover:border-text"
              >
                <ArrowRight />
              </button>
            </div>
          )}
        </div>

        <figure
          aria-live="polite"
          className="mt-12 rounded-2xl border border-line bg-card p-8 shadow-[0_1px_2px_rgb(17_22_28/0.04),0_12px_32px_-12px_rgb(17_22_28/0.12)] sm:p-12 lg:p-14"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-mint-soft text-primary" aria-hidden>
            <Quote />
          </span>
          <blockquote className="t-swap mt-8 max-w-[34ch] text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.25] font-medium tracking-tight text-text">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <figcaption className="t-swap flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-mint-soft text-sm font-semibold text-primary" aria-hidden>
                {initials(t.name)}
              </span>
              <span>
                <span className="block font-medium text-text">{t.name}</span>
                <span className="block text-sm text-text-mute">{t.role}</span>
              </span>
            </figcaption>

            {many && (
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  {items.map((_, n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setI(n)}
                      aria-label={`Show testimonial ${n + 1}`}
                      aria-current={n === i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${n === i ? "w-6 bg-primary" : "w-1.5 bg-line hover:bg-text-mute"}`}
                    />
                  ))}
                </div>
                <span className="font-mono text-[13px] text-text-mute">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>
        </figure>
      </div>
    </section>
  );
}
