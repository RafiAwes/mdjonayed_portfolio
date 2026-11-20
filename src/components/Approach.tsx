"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { site } from "@/content/site";

/** A four-step timeline that draws itself as you scroll; each node lights as the line reaches it. */
export default function Approach() {
  const root = useRef<HTMLElement>(null);
  const steps = site.approach;

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".step");
      const light = (p: number) =>
        items.forEach((el, i) => (el.dataset.on = String(p >= i / steps.length + 0.02 || p >= 0.98)));

      const mm = gsap.matchMedia();
      mm.add(
        {
          wide: "(min-width: 1024px)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { wide, motion } = ctx.conditions as { wide: boolean; motion: boolean };
          const axis = wide ? "scaleX" : "scaleY";
          if (!motion) {
            gsap.set(".approach-fill", { [axis]: 1 });
            light(1);
            return;
          }
          gsap.set(".approach-fill", { scaleX: wide ? 0 : 1, scaleY: wide ? 1 : 0 });
          light(0);
          ScrollTrigger.create({
            trigger: ".approach-track",
            start: wide ? "top 75%" : "top 70%",
            end: wide ? "top 30%" : "bottom 55%",
            scrub: 0.6,
            onUpdate: (self) => {
              gsap.set(".approach-fill", { [axis]: self.progress });
              light(self.progress);
            },
          });
        },
      );
    },
    { scope: root },
  );

  return (
    <section id="approach" ref={root} className="border-t border-line bg-card">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <h2 className="display text-[clamp(2.25rem,4.5vw,3.5rem)] text-text">How we work together</h2>
          <p className="max-w-[56ch] text-lg leading-relaxed lg:pt-2">
            Whether it&apos;s coaching, a strategy engagement or a training programme, the work follows the same
            shape: understand first, then plan, then do the work, then make it last.
          </p>
        </div>

        <ol className="approach-track relative mt-16 grid gap-10 pl-10 lg:mt-20 lg:grid-cols-4 lg:gap-8 lg:pl-0">
          {/* Track + fill: vertical on mobile, horizontal on desktop */}
          <span className="absolute top-2 bottom-2 left-[10px] w-px bg-line lg:top-[10px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" aria-hidden>
            <span className="approach-fill absolute inset-0 origin-top bg-primary lg:origin-left" />
          </span>

          {steps.map((s, i) => (
            <li key={s.title} data-on="false" className="step group relative lg:pt-12">
              <span
                className="absolute top-0 -left-10 flex size-[22px] items-center justify-center rounded-full border-2 border-line bg-card transition-colors duration-500 group-data-[on=true]:border-primary lg:left-0"
                aria-hidden
              >
                <span className="size-2 scale-0 rounded-full bg-primary transition-transform duration-500 group-data-[on=true]:scale-100" />
              </span>
              <span className="font-mono text-[13px] text-text-mute">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text">{s.title}</h3>
              <p className="mt-3 max-w-[38ch]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
