import type { Project } from '../../data/types';
import { categories } from '../../data/projects';
import StatusBadge from './StatusBadge';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectVisualPreview({ project, index }: { project: Project; index: number }) {
  const first = project.visuals.find((v) => v.type === 'image');
  if (first) {
    return (
      <img
        src={first.src}
        alt={first.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    );
  }
  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-charcoal p-6 text-ivory">
      <div aria-hidden="true" className="absolute inset-3 border border-champagne/30" />
      <p aria-hidden="true" className="relative font-serif text-6xl italic text-champagne/80">
        {String(index + 1).padStart(2, '0')}
      </p>
      <p className="relative text-[0.62rem] uppercase leading-relaxed tracking-wide2 text-ivory/60">
        {project.status === 'Concept Project'
          ? 'Conceptual case study — visuals to be added'
          : 'Visual assets to be added'}
      </p>
    </div>
  );
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const labels = project.categories
    .map((id) => categories.find((c) => c.id === id)?.label)
    .filter(Boolean)
    .slice(0, 2)
    .join(' · ');

  return (
    <li>
      <article className="h-full">
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
          aria-label={`Open case study: ${project.title} (${project.status})`}
          className="group flex h-full w-full flex-col text-left"
        >
          <div className="aspect-[4/3] w-full overflow-hidden bg-charcoal">
            <ProjectVisualPreview project={project} index={index} />
          </div>
          <div className="flex flex-1 flex-col border-b border-charcoal/20 pb-6 pt-5">
            <div className="flex items-start justify-between gap-3">
              <StatusBadge status={project.status} />
            </div>
            <h3 className="mt-4 text-[1.55rem] leading-tight transition-colors group-hover:text-charcoal/70">
              {project.title}
            </h3>
            <p className="mt-1 text-[0.72rem] uppercase tracking-wide2 text-charcoal/60">{project.industry}</p>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-charcoal/80">{project.summary}</p>
            <p className="mt-auto pt-5 text-[0.68rem] uppercase tracking-wide2 text-charcoal/60">
              {labels}
              <span className="ml-3 inline-block border-b border-champagne pb-0.5 text-charcoal transition-all group-hover:pl-1">
                View case study
              </span>
            </p>
          </div>
        </button>
      </article>
    </li>
  );
}
