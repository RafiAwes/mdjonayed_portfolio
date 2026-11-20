import { site } from "@/content/site";

/** Dark band: a plain, scannable record — kind, name, what it is, year. */
export default function Ventures() {
  return (
    <section id="ventures" className="on-ink bg-ink text-on-ink">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <h2 className="display text-[clamp(2.25rem,4.5vw,3.5rem)]">Ventures and engagements</h2>
          <p className="max-w-[52ch] text-lg leading-relaxed text-on-ink-soft lg:pt-2">
            Companies I&apos;ve founded and backed, programmes I run, and stages I&apos;ve spoken on.
          </p>
        </div>

        <ul className="mt-16 border-b border-ink-3">
          {site.ventures.map((v) => (
            <li
              key={v.name}
              className="grid gap-x-8 gap-y-1 border-t border-ink-3 py-7 md:grid-cols-[130px_minmax(0,1.1fr)_minmax(0,1.3fr)_64px] md:items-baseline"
            >
              <span className="text-[13px] font-medium text-mint">{v.kind}</span>
              <h3 className="text-2xl font-semibold tracking-tight">{v.name}</h3>
              <p className="text-on-ink-soft">{v.summary}</p>
              <span className="font-mono text-[13px] text-on-ink-soft md:text-right">{v.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
