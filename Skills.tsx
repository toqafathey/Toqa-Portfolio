import { skills, tools } from '../../data/content';
import Reveal from '../layout/Reveal';
import SectionHeading from '../layout/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="on-light bg-cream py-24 text-charcoal md:py-32">
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          eyebrow="Core Skills"
          title="Skills built through hands-on work"
          intro="Practical experience across content, planning, advertising support and creative coordination."
        />

        <ul className="grid border-l border-charcoal/15 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <li key={s.number} className="border-b border-r border-t border-charcoal/15 -mt-px">
              <Reveal delay={(i % 3) * 80} className="h-full p-7 md:p-9">
                <p aria-hidden="true" className="font-serif text-3xl italic text-champagne">
                  {s.number}
                </p>
                <h3 className="mt-5 text-[1.45rem] leading-tight">{s.title}</h3>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-charcoal/75">{s.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <h3 className="eyebrow mb-6 text-charcoal/70">Tools &amp; Platforms</h3>
          <ul className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <li
                key={t}
                className="border border-charcoal/25 px-5 py-3 font-serif text-lg text-charcoal"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
