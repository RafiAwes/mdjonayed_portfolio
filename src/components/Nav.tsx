"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { site, mailto } from "@/content/site";
import { Mail } from "./Icons";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#ventures", label: "Ventures" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const bar = useRef<HTMLElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const menuTl = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    // Always visible (sticky). Transparent over the hero photo, solid once the page moves.
    const onScroll = () => {
      bar.current!.dataset.solid = String(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    menuTl.current = gsap
      .timeline({ paused: true, defaults: { ease: "expo.out" } })
      .set(sheet.current, { display: "flex" })
      .fromTo(sheet.current, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.7 })
      .from(".sheet-link", { yPercent: 100, opacity: 0, stagger: 0.05, duration: 0.8 }, "-=0.4");

    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    const tl = menuTl.current;
    if (!tl) return;
    if (open) {
      tl.timeScale(1).play();
      getLenis()?.stop();
    } else {
      tl.timeScale(1.6).reverse();
      getLenis()?.start();
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header ref={bar} data-solid="false"
        className="on-ink fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-500 data-[solid=true]:border-ink-3/70 data-[solid=true]:bg-ink/80 data-[solid=true]:backdrop-blur-md">
        <nav className="mx-auto flex h-18 max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-8">
          <a href="#top" onClick={() => setOpen(false)} aria-label={`${site.name}, back to top`} className="text-on-ink">
            <Logo />
          </a>

          <ul className="hidden items-center gap-0.5 rounded-full border border-on-ink/10 bg-ink/40 p-1 backdrop-blur-md text-[13px] font-medium lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block rounded-full px-3.5 py-1.5 text-on-ink-soft transition-colors hover:bg-ink-3 hover:text-on-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn hidden h-9 bg-on-ink px-5 text-[13px] text-ink hover:bg-mint sm:inline-flex">
              Contact me
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-ink-3 text-on-ink lg:hidden"
            >
              <span className={`block h-px w-4 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        ref={sheet}
        inert={!open}
        aria-hidden={!open}
        className="on-ink fixed inset-0 z-40 hidden flex-col justify-between bg-ink px-4 pt-24 pb-10 sm:px-8 lg:hidden"
      >
        <ul className="space-y-1">
          {links.map((l) => (
            <li key={l.href} className="overflow-hidden">
              <a href={l.href} onClick={() => setOpen(false)} className="sheet-link display block py-1 text-5xl text-on-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={mailto("Hello from your website")} className="sheet-link btn w-full bg-mint text-ink">
          <Mail />
          Email me
        </a>
      </div>
    </>
  );
}
