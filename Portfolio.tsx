import { useCallback, useMemo, useState } from 'react';
import { categories, projects } from '../../data/projects';
import type { CategoryId, Project } from '../../data/types';
import SectionHeading from '../layout/SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

type Filter = 'all' | CategoryId;

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all');
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  const handleClose = useCallback(() => setOpenProject(null), []);
  const activeLabel = categories.find((c) => c.id === filter)?.label ?? 'All Work';

  return (
    <section id="work" aria-labelledby="work-title" className="on-light bg-ivory py-24 text-charcoal md:py-32">
      <div className="container-page">
        <SectionHeading
          id="work-title"
          eyebrow="Portfolio"
          title="Selected Work & Creative Concepts"
          intro="A selection of content, creative ideas, advertising-related work, and marketing materials across different industries."
        />

        <p className="mb-8 max-w-2xl border-l-2 border-champagne pl-4 text-[0.85rem] leading-relaxed text-charcoal/75">
          Each project is labelled by status. Concept projects were created to demonstrate an approach and are not
          published client campaigns. Projects marked &ldquo;Awaiting Assets&rdquo; will be updated with real samples.
        </p>

        <div role="group" aria-label="Filter projects by category" className="mb-6 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c.id === filter;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(c.id)}
                className={`min-h-[44px] border px-4 text-[0.68rem] font-medium uppercase tracking-wide2 transition-colors ${
                  active
                    ? 'border-charcoal bg-charcoal text-ivory'
                    : 'border-charcoal/30 text-charcoal hover:border-charcoal'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <p className="mb-10 text-[0.78rem] text-charcoal/65" role="status" aria-live="polite">
          Showing {visible.length} of {projects.length} {projects.length === 1 ? 'project' : 'projects'} — {activeLabel}
        </p>

        {visible.length > 0 ? (
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={projects.indexOf(p)}
                onOpen={setOpenProject}
              />
            ))}
          </ul>
        ) : (
          <div className="border border-dashed border-charcoal/35 p-12 text-center">
            <p className="font-serif text-2xl">Nothing in this category yet</p>
            <p className="mt-3 text-[0.9rem] text-charcoal/70">
              Projects for &ldquo;{activeLabel}&rdquo; will be added soon.
            </p>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className="mt-6 border-b border-champagne pb-0.5 text-[0.72rem] uppercase tracking-wide2"
            >
              Show all work
            </button>
          </div>
        )}
      </div>

      {openProject && <ProjectModal project={openProject} onClose={handleClose} />}
    </section>
  );
}
