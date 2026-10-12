import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../../data/types';
import StatusBadge from './StatusBadge';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-charcoal/15 py-7">
      <h3 className="eyebrow mb-4 text-charcoal/60">{title}</h3>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-[0.95rem] leading-relaxed">
      {items.map((i) => (
        <li key={i} className="flex gap-4">
          <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-champagne" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `case-${project.id}-title`;
  const verified = project.status === 'Published Work' || project.status === 'Actual Work Sample';

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="on-light fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[94svh] w-full max-w-3xl animate-rise flex-col bg-ivory text-charcoal sm:max-h-[90svh]"
      >
        <div className="flex items-start justify-between gap-6 border-b border-charcoal/15 p-6 sm:p-8">
          <div>
            <StatusBadge status={project.status} />
            <h2 id={titleId} className="mt-4 text-3xl leading-tight sm:text-4xl">
              {project.title}
            </h2>
            <p className="mt-2 text-[0.72rem] uppercase tracking-wide2 text-charcoal/60">{project.industry}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-charcoal/25 hover:bg-charcoal hover:text-ivory"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 pb-8 sm:px-8">
          <div className="mt-6 border border-champagne/70 bg-cream/60 p-5 text-[0.88rem] leading-relaxed">
            <p className="eyebrow mb-2 text-charcoal/70">
              {project.status === 'Concept Project' ? 'Conceptual work' : 'Status'}
            </p>
            {project.disclosure}
          </div>

          <Block title="1. Project overview">
            <p className="text-[0.95rem] leading-relaxed">{project.overview}</p>
          </Block>
          <Block title="2. Brand or industry context">
            <p className="text-[0.95rem] leading-relaxed">{project.context}</p>
          </Block>
          <Block title="3. Objective">
            <p className="text-[0.95rem] leading-relaxed">{project.objective}</p>
          </Block>
          <Block title={verified ? '4. My responsibilities' : '4. My responsibilities in this area'}>
            <List items={project.role} />
          </Block>
          <Block title="5. Creative approach">
            <List items={project.approach} />
          </Block>
          <Block title={verified ? '6. Deliverables' : '6. Deliverables covered (samples pending)'}>
            <List items={project.deliverables} />
          </Block>

          <Block title="7. Selected visuals">
            {project.visuals.length > 0 ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.visuals.map((v) => (
                  <li key={v.src}>
                    {v.type === 'image' ? (
                      <img src={v.src} alt={v.alt} loading="lazy" decoding="async" className="w-full" />
                    ) : (
                      <video src={v.src} controls preload="none" className="w-full" aria-label={v.alt} />
                    )}
                    {(v.caption || v.conceptual) && (
                      <p className="mt-2 text-[0.78rem] text-charcoal/70">
                        {v.conceptual && <strong>Concept Project — Created for Portfolio Demonstration. </strong>}
                        {v.caption}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="border border-dashed border-charcoal/35 p-6 text-[0.88rem] text-charcoal/75">
                Placeholder: no visuals have been added yet. Real screenshots, images, video or article excerpts will
                appear here. Files go in <code>public/images/portfolio/</code> and are listed in{' '}
                <code>src/data/projects.ts</code>.
              </div>
            )}
          </Block>

          <Block title="8. Results">
            {project.results && project.results.length > 0 ? (
              <List items={project.results} />
            ) : (
              <p className="text-[0.92rem] text-charcoal/75">
                No verified results are shown. Results will be added only when supported by evidence.
              </p>
            )}
          </Block>
        </div>
      </div>
    </div>
  );
}
