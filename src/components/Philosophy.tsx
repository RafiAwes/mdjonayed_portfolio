"use client";

import { useRef, useState } from "react";
import { gsap, SplitText, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { site } from "@/content/site";

/**
 * Dark band. Left: sticky heading with a live "01 / 04" counter.
 * Right: each principle in large type, inking in word by word as it crosses the viewport.
 */
export default function Philosophy() {
  const root = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const { heading, intro, principles } = site.philosophy;

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".principle");

      // Counter follows whichever principle is in the middle of the screen.
      items.forEach((el, i) =>
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => self.isActive && setCurrent(i),
        }),
      );

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const splits = items.map((el) => {
          const split = SplitText.create(el.querySelector(".principle-title"), { type: "words" });
          gsap.fromTo(
            split.words,
            { opacity: 0.16 },
            {
              opacity: 1,
              stagger: 0.08,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 80%", end: "top 40%", scrub: true },
            },
          );
          gsap.from(el.querySelector(".principle-body"), {
            opacity: 0,
            y: 12,
            filter: "blur(6px)",
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 50%" },
          });
          return split;
        });
        return () => splits.forEach((s) => s.revert());
      });
    },
    { scope: root },
  );

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="philosophy" ref={root} className="on-ink relative bg-ink text-on-ink">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-24 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-20 lg:py-32">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="display text-[clamp(2.25rem,4.5vw,3.5rem)]">{heading}</h2>
          <p className="mt-5 max-w-[38ch] text-lg leading-relaxed text-on-ink-soft">{intro}</p>

          <div className="mt-10 hidden items-center gap-4 lg:flex" aria-hidden>
            <span className="font-mono text-[13px] text-mint tabular-nums">
              {pad(current + 1)} / {pad(principles.length)}
            </span>
            <span className="relative h-px w-40 bg-ink-3">
              <span
                className="absolute inset-y-0 left-0 bg-mint transition-[width] duration-500 ease-out"
                style={{ width: `${((current + 1) / principles.length) * 100}%` }}
              />
            </span>
          </div>
        </div>

        <ol className="border-b border-ink-3">
          {principles.map((p, i) => (
            <li key={p.title} className="principle grid gap-4 border-t border-ink-3 py-12 sm:grid-cols-[56px_1fr] lg:py-16">
              <span className="font-mono text-[13px] text-mint sm:pt-3">{pad(i + 1)}</span>
              <div>
                <h3 className="principle-title display text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05]">{p.title}</h3>
                <p className="principle-body mt-5 max-w-[52ch] text-lg leading-relaxed text-on-ink-soft">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
