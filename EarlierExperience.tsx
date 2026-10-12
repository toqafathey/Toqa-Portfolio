import { getUndatedEntries } from '../../data/experienceData';
import { transferableSkills } from '../../data/content';
import { EntryBody } from './CareerDetailPanel';

/**
 * Earlier customer-facing experience that has no dates. It reads from the same
 * experience data as the timeline; dated earlier roles (Telesales, Social Media
 * Moderator) are not repeated here because they already appear on the timeline.
 */
export default function EarlierExperience() {
  const entries = getUndatedEntries();
  if (entries.length === 0) return null;

  return (
    <div className="mt-20 border-t border-ivory/15 pt-12">
      <h3 className="text-3xl">Earlier Professional Experience</h3>
      <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-ivory/70">
        Customer-facing work that shaped how I communicate. Telesales (2021–2022) and Social Media Moderator
        (2022–2024) are on the timeline above.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <ul className="space-y-8 lg:col-span-7">
          {entries.map((entry) => (
            <li key={entry.id} className="border border-ivory/15 p-6 md:p-8">
              <p className="mb-3 inline-block border border-dashed border-ivory/30 px-3 py-1 text-[0.62rem] uppercase tracking-wide2 text-ivory/70">
                Dates and employer not provided
              </p>
              <h4 className="mb-3 font-serif text-2xl">{entry.title}</h4>
              <EntryBody entry={entry} />
            </li>
          ))}
        </ul>

        <div className="lg:col-span-5">
          <h4 className="eyebrow mb-4 text-champagne">Transferable skills</h4>
          <ul className="space-y-3">
            {transferableSkills.map((s) => (
              <li key={s} className="border-b border-ivory/15 pb-3 font-serif text-xl">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
