import { ArrowDownRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import HeroGraphic from './HeroGraphic';

export default function Hero() {
  const { cvPath } = siteConfig.contact;

  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden bg-ink">
      {/* soft vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_40%,rgba(185,162,118,0.12),transparent_55%)]"
      />

      <div className="container-page grid min-h-[100svh] items-center gap-10 pb-16 pt-28 lg:grid-cols-12 lg:pb-20">
        <div className="lg:col-span-8">
          <p className="eyebrow animate-rise mb-8 text-champagne">
            <span aria-hidden="true" className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-champagne align-middle" />
            {siteConfig.title}
          </p>

          <h1 className="animate-rise text-[clamp(3.4rem,12vw,10.5rem)] leading-[0.88] tracking-[-0.01em] [animation-delay:120ms]">
            TOQA
            <br />
            <span className="italic text-ivory/90">FATHEY</span>
            <span className="sr-only"> — {siteConfig.title}</span>
          </h1>

          <p className="animate-rise mt-10 max-w-2xl font-serif text-2xl italic leading-snug text-champagne sm:text-3xl [animation-delay:260ms]">
            {siteConfig.headline}
          </p>

          <p className="animate-rise mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-ivory/70 [animation-delay:380ms]">
            {siteConfig.intro}
          </p>

          <div className="animate-rise mt-12 flex flex-wrap items-center gap-4 [animation-delay:500ms]">
            <a href="#work" className="btn-primary">
              Explore My Work
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>

            {cvPath ? (
              <a href={cvPath} download className="btn-ghost">
                Download CV
              </a>
            ) : (
              siteConfig.showCvPlaceholder && (
                <span className="btn-disabled" aria-disabled="true" role="note">
                  CV — not yet available
                </span>
              )
            )}

            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-[420px] lg:col-span-4 lg:block">
          <HeroGraphic />
        </div>
      </div>

      <div className="container-page pb-10">
        <div className="hairline text-ivory" />
        <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-[0.68rem] uppercase tracking-wide2 text-stone">
          <li>Content Creation</li>
          <li>Content Planning</li>
          <li>Meta Ads Support</li>
          <li>SEO Writing</li>
          <li>Creative Coordination</li>
        </ul>
      </div>
    </section>
  );
}
