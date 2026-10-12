export type ProjectStatus =
  | 'Published Work'
  | 'Actual Work Sample'
  | 'Concept Project'
  | 'Awaiting Assets';

export type CategoryId =
  | 'social'
  | 'planning'
  | 'ads'
  | 'healthcare-vet'
  | 'restaurant'
  | 'seo'
  | 'ai-video'
  | 'creative-direction';

export interface ProjectVisual {
  /** Path under /public, e.g. "/images/portfolio/veterinary/post-01.jpg". Only add files that exist. */
  src: string;
  alt: string;
  caption?: string;
  type: 'image' | 'video';
  /** Set true for generated or illustrative visuals made for this site, so they are labelled as concepts. */
  conceptual?: boolean;
}

export interface Project {
  id: string;
  title: string;
  industry: string;
  categories: CategoryId[];
  status: ProjectStatus;
  /** One or two sentences shown on the card. */
  summary: string;
  overview: string;
  context: string;
  objective: string;
  role: string[];
  approach: string[];
  deliverables: string[];
  visuals: ProjectVisual[];
  /** Only fill in with verified results and evidence. Leave null otherwise. */
  results: string[] | null;
  /** Plain-language explanation of any conceptual or unverified elements. */
  disclosure: string;
}

export type ExperienceKind = 'timeline' | 'undated' | 'pending';

export interface ExperienceEntry {
  id: string;
  title: string;
  /** Verified date text, or null when not provided. */
  dates: string | null;
  /** Verified employer name, or null. Never fill in unless confirmed. */
  employer: string | null;
  kind: ExperienceKind;
  /** Hidden entries are not rendered anywhere. Flip to false once details are confirmed. */
  hidden?: boolean;
  responsibilities: string[];
  skills: string[];
  deliverables?: string[];
  /** Scope clarification shown in the detail panel. */
  note?: string;
}

export interface Skill {
  number: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  detail?: string;
  period?: string;
}
