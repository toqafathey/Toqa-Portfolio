import { teamValue } from '../../data/content';
import Reveal from '../layout/Reveal';
import SectionHeading from '../layout/SectionHeading';

export default function TeamValue() {
  return (
    <section id="team" aria-labelledby="team-title" className="bg-charcoal py-24 text-ivory md:py-32">
      <div className="container-page">
        <SectionHeading id="team-title" eyebrow="Value" title="What I Bring to a Team" tone="dark" />

        <ul className="grid gap-x-16 md:grid-cols-2">
          {teamValue.map((item, i) => (
            <li key={item.title} className="border-t border-ivory/15 py-8">
              <Reveal delay={(i % 2) * 90}>
                <h3 className="text-2xl text-ivory">{item.title}</h3>
                <p className="mt-3 max-w-md text-[0.92rem] leading-relaxed text-ivory/70">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
