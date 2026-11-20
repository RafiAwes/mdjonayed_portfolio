import { site, mailto } from "@/content/site";
import { Mail } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-white sm:px-14 sm:py-20">
          <div className="bg-grid-light pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <h2 className="display max-w-[16ch] text-[clamp(2.5rem,5.5vw,4.25rem)]">Ready to grow with clarity?</h2>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-white/85">
              Coaching, training, a strategy engagement, a speaking invitation or an investment conversation: send a
              short note about what you&apos;re working on and I&apos;ll reply personally.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a href={mailto("Hello from your website")} className="btn self-start bg-white text-ink hover:bg-mint">
                <Mail />
                Email me
              </a>
              <a href={mailto()} className="font-medium text-white underline decoration-white/40 hover:decoration-white">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
