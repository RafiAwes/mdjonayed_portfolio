import { site, mailto } from "@/content/site";
import { ArrowUpRight } from "./Icons";
import Logo from "./Logo";

const nav = [
  { href: "#about", label: "About" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#approach", label: "Approach" },
  { href: "#ventures", label: "Ventures" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="on-ink bg-ink text-sm text-on-ink-soft">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <Logo className="text-xl text-on-ink" markClassName="size-9" />
            <p className="mt-3 max-w-[32ch]">
              {site.role}, based in {site.location}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 font-medium text-on-ink">On this page</h2>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-on-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-medium text-on-ink">Elsewhere</h2>
            <ul className="space-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-on-ink">
                    {s.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-medium text-on-ink">Contact</h2>
            <a href={mailto()} className="hover:text-on-ink">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ink-3 pt-6 text-[13px] sm:flex-row sm:justify-between">
          <p>
            © {site.year} {site.name}
          </p>
          <p className="font-mono">Built with Next.js, Tailwind CSS &amp; GSAP</p>
        </div>
      </div>
    </footer>
  );
}
