import type { ExperienceEntry } from './types';

/**
 * Single source of truth for career history. It feeds the 3D timeline, the 2D
 * fallback and the "earlier experience" block.
 *
 * Rules:
 *  - `employer` stays null until the employer name is confirmed.
 *  - `kind: 'pending'` entries are NOT verified employment. They are hidden by default.
 *    To show one: confirm its details, fill in `dates`/`employer`, change `kind` to
 *    'timeline' (or keep 'pending' to show it with a "pending confirmation" label)
 *    and remove `hidden: true`.
 *  - Order in this array is the order on the timeline. Do not imply promotions or
 *    uninterrupted employment beyond the dates given.
 */
export const experience: ExperienceEntry[] = [
  {
    id: 'telesales',
    title: 'Telesales',
    dates: '2021–2022',
    employer: null,
    kind: 'timeline',
    responsibilities: [
      'Promoting Vodafone offers and packages',
      'Communicating with customers over the phone',
      'Explaining available plans and offers',
      'Supporting sales targets',
    ],
    skills: [
      'Customer communication',
      'Product promotion',
      'Explaining plans and offers',
      'Working toward sales targets',
    ],
  },
  {
    id: 'social-media-moderator',
    title: 'Social Media Moderator',
    dates: '2022–2024',
    employer: null,
    kind: 'timeline',
    responsibilities: [
      'Social media moderation',
      'Selling Apple products through social media',
      'Responding to customer inquiries',
      'Following up on customer orders',
      'Customer communication',
    ],
    skills: [
      'Social media moderation',
      'Social selling',
      'Customer inquiry handling',
      'Order follow-up',
    ],
  },
  {
    id: 'social-media-specialist',
    title: 'Social Media Specialist',
    dates: 'July 2024 – August 2025',
    employer: null,
    kind: 'timeline',
    responsibilities: [
      'Social media content creation',
      'Writing captions and advertising copy',
      'Preparing design briefs',
      'Reviewing and revising designs',
      'Supporting social media advertising',
      'Analyzing advertising performance',
      'Competitor analysis',
      'Writing approximately 25 SEO articles',
      'Supporting influencer marketing campaigns',
    ],
    skills: [
      'Content creation',
      'Copywriting',
      'Design briefs and review',
      'Advertising support',
      'Performance analysis',
      'Competitor analysis',
      'SEO writing',
      'Influencer campaign support',
    ],
    deliverables: ['Approximately 25 SEO-focused articles'],
    note: 'An Account Manager handled account management. My responsibilities focused on content execution, advertising tasks, performance analysis, and creative coordination.',
  },
  {
    id: 'social-media-specialist-content-creator',
    title: 'Social Media Specialist & Content Creator',
    dates: 'August 2025 – Present',
    employer: null,
    kind: 'timeline',
    responsibilities: [
      'Social media management and content scheduling',
      'Content ideas and calendar creation',
      'Healthcare content writing',
      'Website content writing',
      'Organizing medical services information',
      'Preparing design briefs and handling content revisions',
      'AI-assisted video creation',
      'Supporting social media campaigns',
    ],
    skills: [
      'Content scheduling',
      'Content planning',
      'Healthcare and website writing',
      'Design briefs and revisions',
      'AI-assisted video',
      'Campaign support',
    ],
    deliverables: [
      'Content ideas and content calendars',
      'Design briefs',
      'Healthcare and website content',
      'AI-assisted video concepts',
    ],
  },

  // Undated earlier experience. Shown below the timeline, never placed on it.
  {
    id: 'customer-service',
    title: 'Customer Service',
    dates: null,
    employer: null,
    kind: 'undated',
    responsibilities: [
      'Receiving orders through calls, applications, and social media',
      'Coordinating orders with restaurant branches',
      'Following up on customer requests',
      'Handling customer feedback',
    ],
    skills: ['Order coordination', 'Request follow-up', 'Feedback handling'],
  },

  // Employment details pending confirmation. Hidden until confirmed.
  {
    id: 'pending-veterinary-marketing',
    title: 'Veterinary Equipment & Services Marketing',
    dates: null,
    employer: null,
    kind: 'pending',
    hidden: true,
    responsibilities: [
      'Social media content and promotional copy for veterinary equipment, medical supplies, products, and services',
      'Marketing content for veterinary clinic setup and equipment installation services',
      'Content ideas, content planning, and design briefs',
    ],
    skills: ['Product marketing', 'Promotional copywriting', 'Content planning', 'Design briefs'],
    note: 'Employment Details Pending Confirmation. It is not yet confirmed whether this belongs to an existing role or a separate engagement.',
  },
  {
    id: 'pending-restaurant-cafe-marketing',
    title: 'Restaurant & Café Marketing',
    dates: null,
    employer: null,
    kind: 'pending',
    hidden: true,
    responsibilities: [
      'Social media content management',
      'Restaurant and café promotions and menu marketing concepts',
      'Creative content ideas, branding and design concepts',
      'Creative direction for photography and video',
      'Influencer marketing campaign support',
    ],
    skills: ['Social media content', 'Promotions', 'Creative direction', 'Influencer campaign support'],
    note: 'Employment Details Pending Confirmation. It is not yet confirmed which role or employer this belongs to.',
  },
];

export const isVisible = (e: ExperienceEntry) => !e.hidden;

/** Entries placed on the timeline (dated roles, plus any pending entries once un-hidden). */
export const getTimelineEntries = (): ExperienceEntry[] =>
  experience.filter((e) => isVisible(e) && (e.kind === 'timeline' || e.kind === 'pending'));

/** Earlier experience with no dates, shown separately. */
export const getUndatedEntries = (): ExperienceEntry[] =>
  experience.filter((e) => isVisible(e) && e.kind === 'undated');
