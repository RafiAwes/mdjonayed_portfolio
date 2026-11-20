"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { site, mailto } from "@/content/site";
import { ArrowRight } from "./Icons";

/**
 * Full-bleed portrait hero: the photo fills the right side and fades into graphite
 * behind the copy; four role columns sit along the bottom edge.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".hero-name", { type: "chars", mask: "chars" });
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(".hero-media", { opacity: 0, duration: 1.6, ease: "power2.out" }, 0)
          .from(".hero-media img", { scale: 1.1, duration: 2.4 }, 0)
          .from(".hero-fade", { y: 14, opacity: 0, filter: "blur(6px)", stagger: 0.08, duration: 1 }, 0.3)
          .from(split.chars, { yPercent: 100, stagger: 0.03, duration: 1.2 }, 0.35)
          .from(".hero-pillar", { y: 20, opacity: 0, stagger: 0.08, duration: 1 }, 0.8)
          .from(".hero-rule", { scaleX: 0, transformOrigin: "left", duration: 1.4 }, 0.7);

        // Photo drifts a little slower than the page as the hero scrolls away.
        gsap.to(".hero-media img", {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="on-ink relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-on-ink"
    >
      {/* Portrait */}
      <div className="hero-media absolute inset-x-0 top-0 -z-10 h-[64svh] lg:inset-0 lg:h-auto">
        <Image
          src={site.portrait}
          alt={`${site.name} speaking on stage`}
          fill
          priority
          unoptimized={site.portrait.endsWith(".svg")}
          sizes="100vw"
          className="object-cover object-[69%_20%] lg:object-[70%_30%]"
        />
      </div>

      {/* Fades that keep the copy readable: vertical on mobile, from the left on desktop */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[64svh] bg-gradient-to-t from-ink via-ink/85 via-30% to-transparent to-65% lg:hidden" aria-hidden />
      <div
        className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,var(--color-ink)_22%,rgb(13_17_23/0.7)_40%,transparent_62%)] lg:block"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-ink to-transparent" aria-hidden />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden />

      <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-end px-4 pt-[50svh] sm:px-8 lg:pt-40">
        <div className="max-w-[560px]">
          <p className="hero-fade text-[12px] font-medium tracking-[0.18em] text-on-ink-soft uppercase">
            {site.hero.label}
          </p>
          <h1 className="hero-name display mt-5 text-[clamp(3.25rem,7.5vw,5.75rem)] text-on-ink">{site.name}</h1>
          <p className="hero-fade mt-6 max-w-[44ch] text-lg leading-relaxed text-on-ink/85">{site.hero.line}</p>
          <a
            href={mailto("Let's work together")}
            className="hero-fade btn group mt-9 bg-primary text-white hover:bg-primary-press"
          >
            {site.hero.cta}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="relative mt-20 lg:mt-28">
          <span className="hero-rule absolute inset-x-0 top-0 h-px bg-on-ink/15" aria-hidden />
          <ul className="grid grid-cols-2 gap-x-6 lg:grid-cols-4 lg:gap-x-10">
            {site.pillars.map((p) => (
              <li key={p.title} className="hero-pillar pt-6 pb-8 lg:pb-12">
                <h2 className="text-[15px] font-semibold tracking-tight text-on-ink">{p.title}</h2>
                <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-on-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
