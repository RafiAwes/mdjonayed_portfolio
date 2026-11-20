import { site } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-24 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20 lg:py-32">
        <h2 className="display text-[clamp(2.25rem,4.5vw,3.5rem)] text-text">{site.about.heading}</h2>

        <div>
          <div className="space-y-5 text-lg leading-relaxed">
            {site.about.body.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[62ch]">
                {p}
              </p>
            ))}
          </div>

          <dl className="mt-12 border-t border-line">
            {site.about.facts.map((f) => (
              <div key={f.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="text-[13px] text-text-mute">{f.label}</dt>
                <dd className="font-medium text-text">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
