import type { ProjectStatus } from '../../data/types';

const styles: Record<ProjectStatus, string> = {
  'Published Work': 'border-charcoal bg-charcoal text-ivory',
  'Actual Work Sample': 'border-charcoal text-charcoal',
  'Concept Project': 'border-champagne bg-champagne/20 text-charcoal',
  'Awaiting Assets': 'border-dashed border-charcoal/50 text-charcoal/70',
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-block border px-3 py-1 text-[0.62rem] font-medium uppercase tracking-wide2 ${styles[status]}`}
    >
      {status}
    </span>
  );
}
