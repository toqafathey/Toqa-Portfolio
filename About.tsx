import { siteConfig } from '../../data/siteConfig';
import Reveal from '../layout/Reveal';
import SectionHeading from '../layout/SectionHeading';

export default function About() {
  const { about, portraitSrc, portraitAlt } = siteConfig;

  return (
    <section id="about" aria-labelledby="about-title" className="on-light bg-ivory py-24 text-charcoal md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="about-title" eyebrow="About" title={about.heading} />

          <Reveal>
            {portraitSrc ? (
              <img
                src={portraitSrc}
                alt={portraitAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full max-w-sm object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label="Portrait placeholder. A real photo of Toqa Fathey will be added here."
                className="relative flex aspect-[4/5] w-full max-w-sm items-end border border-charcoal/20 bg-cream p-6"
              >
                <div aria-hidden="true" className="absolute inset-3 border border-champagne/60" />
                <p className="relative text-[0.68rem] uppercase leading-relaxed tracking-wide2 text-charcoal/60">
                  Portrait placeholder
                  <br />
                  Add a photo at public/images/profile/
                </p>
              </div>
            )}
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <div className="space-y-6 text-[1.05rem] leading-[1.8] text-charcoal/85">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <h3 className="mb-6 text-2xl">What I can contribute</h3>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <li key={h} className="flex gap-4 border-t border-charcoal/15 py-4 text-[0.92rem] leading-snug">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-champagne" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
