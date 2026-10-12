import type { CategoryId, Project } from './types';

export const categories: { id: 'all' | CategoryId; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'social', label: 'Social Media Content' },
  { id: 'planning', label: 'Content Planning' },
  { id: 'ads', label: 'Advertising & Campaigns' },
  { id: 'healthcare-vet', label: 'Healthcare & Veterinary Marketing' },
  { id: 'restaurant', label: 'Restaurant & Café Marketing' },
  { id: 'seo', label: 'SEO & Website Content' },
  { id: 'ai-video', label: 'AI Video & Reels' },
  { id: 'creative-direction', label: 'Creative Direction' },
];

const CONCEPT_NOTE =
  'Concept Project — Created for Portfolio Demonstration. This case study illustrates an approach and the kind of deliverables involved. It is not a published client campaign and contains no client names, sales figures or results.';

const AWAITING_NOTE =
  'Awaiting real assets. The description reflects my responsibilities in this area. Verified samples, screenshots or links will replace this placeholder, and no results are claimed until evidence is added.';

/**
 * Add real material by editing `visuals` (files go in /public/images/portfolio/...)
 * and updating `status`. Only fill `results` with verified, evidenced outcomes.
 */
export const projects: Project[] = [
  {
    id: 'veterinary-equipment-medical-supplies',
    title: 'Veterinary Equipment & Medical Supplies Marketing',
    industry: 'Veterinary equipment & medical supplies',
    categories: ['social', 'healthcare-vet'],
    status: 'Concept Project',
    summary:
      'Product-focused social content and promotional copy written for veterinary professionals and clinic owners.',
    overview:
      'A conceptual case study showing how social media content and promotional copy for veterinary equipment, medical supplies, products and services can be structured for a professional audience.',
    context:
      'The audience is veterinary professionals and clinic owners, not pet owners looking for general pet care. The tone is direct and professional product marketing.',
    objective:
      'Communicate products and services clearly to veterinary professionals and clinic owners.',
    role: [
      'Developing content ideas',
      'Writing product-focused posts and promotional captions',
      'Planning content',
      'Preparing design briefs for the creative team',
    ],
    approach: [
      'Lead with what the product does and how it is used in a clinic.',
      'Keep the tone factual and professional, with a clear call to action.',
      'Brief designers with the copy, product details and layout needs.',
    ],
    deliverables: [
      'Product-focused social media posts',
      'Promotional captions',
      'Content ideas and content planning',
      'Design briefs',
      'Product and service communication',
    ],
    visuals: [],
    results: null,
    disclosure: CONCEPT_NOTE,
  },
  {
    id: 'veterinary-clinic-setup-services',
    title: 'Veterinary Clinic Setup Services',
    industry: 'Veterinary clinic setup & equipment installation',
    categories: ['healthcare-vet', 'social', 'ai-video'],
    status: 'Concept Project',
    summary:
      'Service-focused content explaining clinic setup and equipment installation to veterinary professionals.',
    overview:
      'A conceptual case study on promoting veterinary clinic setup and equipment installation as a service, from the offering to the setup process.',
    context:
      'The message is aimed at veterinary professionals planning or upgrading a clinic. It focuses on the service, the equipment and the setup process.',
    objective:
      'Explain the setup service, the equipment and the value of the process to veterinary professionals.',
    role: [
      'Developing service-focused content concepts',
      'Writing promotional captions',
      'Outlining AI-assisted video and Reels concepts',
      'Preparing design briefs',
    ],
    approach: [
      'Present the service as a clear sequence from planning to installed equipment.',
      'Show the equipment in context and explain the value in plain terms.',
      'Adapt the same story to posts, short video and design briefs.',
    ],
    deliverables: [
      'Service-focused content',
      'Promotional captions',
      'Clinic setup storytelling concepts',
      'Equipment presentation ideas',
      'AI-assisted video and Reels concepts',
      'Design briefs',
    ],
    visuals: [],
    results: null,
    disclosure: `${CONCEPT_NOTE} Any visuals added later that were generated for this site will be labelled as conceptual mockups.`,
  },
  {
    id: 'healthcare-medical-services-content',
    title: 'Healthcare & Medical Services Content',
    industry: 'Healthcare',
    categories: ['healthcare-vet', 'social', 'seo'],
    status: 'Awaiting Assets',
    summary:
      'Social media and website content describing healthcare services in a clear, responsible tone.',
    overview:
      'Social media and website content related to healthcare services, including organizing medical services information so it is easy to read.',
    context:
      'Healthcare communication calls for a careful, professional style. The content avoids clinical claims, patient outcomes and endorsements.',
    objective:
      'Present medical services and healthcare awareness topics clearly and responsibly.',
    role: [
      'Writing healthcare social media content',
      'Writing website content and organizing medical services information',
      'Creating content calendars',
      'Preparing design briefs and handling content revisions',
    ],
    approach: [
      'Organize service information before writing.',
      'Keep language plain and professional.',
      'Coordinate revisions with the creative team.',
    ],
    deliverables: [
      'Healthcare social media content',
      'Medical service descriptions',
      'Website content',
      'Content calendars',
      'Design briefs and content revisions',
      'Healthcare awareness content',
    ],
    visuals: [],
    results: null,
    disclosure: AWAITING_NOTE,
  },
  {
    id: 'restaurant-cafe-marketing',
    title: 'Restaurant & Café Marketing',
    industry: 'Food & beverage',
    categories: ['restaurant', 'social', 'creative-direction'],
    status: 'Awaiting Assets',
    summary:
      'Social content, promotions and creative direction for restaurant and café brands.',
    overview:
      'Social media content management, promotions and menu marketing concepts for restaurant and café brands, with creative direction for photography and video.',
    context:
      'Restaurant and café content depends on appetizing visuals, timely promotions and a consistent brand feel across channels.',
    objective:
      'Keep restaurant and café channels active and on-brand with promotions, menu concepts and creative ideas.',
    role: [
      'Managing social media content',
      'Developing promotion and menu marketing concepts',
      'Giving creative direction for photography and video',
      'Supporting influencer marketing campaigns',
    ],
    approach: [
      'Turn menu and promotion details into clear content ideas.',
      'Brief photography, video and design work.',
      'Where photographers, designers or account managers contributed, their work will be identified separately from mine.',
    ],
    deliverables: [
      'Social media content',
      'Promotions and menu marketing concepts',
      'Creative content ideas',
      'Branding and design concepts',
      'Creative direction for photography and video',
      'Influencer campaign support',
    ],
    visuals: [],
    results: null,
    disclosure: AWAITING_NOTE,
  },
  {
    id: 'paid-social-advertising',
    title: 'Paid Social Advertising',
    industry: 'Multiple industries',
    categories: ['ads'],
    status: 'Awaiting Assets',
    summary:
      'Support for Facebook and Instagram advertising: copy, briefs, performance review and competitor observations.',
    overview:
      'Support for Facebook and Instagram advertising activities through Meta Ads Manager and Meta Business Suite.',
    context:
      'My role supported advertising work within a team. Account management was handled by an Account Manager, and I did not independently own account strategy.',
    objective:
      'Support paid social campaigns with clear copy and briefs, and review the available data afterwards.',
    role: [
      'Writing advertising copy',
      'Preparing creative briefs',
      'Supporting ad setup and management tasks',
      'Reviewing advertising performance data and noting observations',
      'Competitor analysis',
    ],
    approach: [
      'Write copy and briefs from the campaign information provided.',
      'Review the available performance data and note what stands out.',
      'Use competitor observations to inform content direction.',
    ],
    deliverables: [
      'Advertising copy',
      'Creative briefs',
      'Ad setup or management examples, where materials are available',
      'Campaign performance reviews',
      'Advertising data analysis',
      'Competitor observations',
    ],
    visuals: [],
    results: null,
    disclosure: AWAITING_NOTE,
  },
  {
    id: 'seo-article-writing',
    title: 'SEO Article Writing',
    industry: 'Website content',
    categories: ['seo'],
    status: 'Awaiting Assets',
    summary: 'Approximately 25 SEO-focused articles written for website content.',
    overview:
      'I wrote approximately 25 SEO-focused articles, with attention to relevance, readability and search intent.',
    context:
      'Article titles, topics, audiences and publishing details will be added once the actual writing samples are supplied.',
    objective:
      'Write clear, relevant articles that answer what a reader is searching for.',
    role: [
      'Researching topics and writing the articles',
      'Structuring content for readability and search intent',
    ],
    approach: [
      'Start from the reader’s question.',
      'Structure each article so it is easy to scan and read.',
    ],
    deliverables: [
      'Approximately 25 SEO-focused articles',
      'Writing samples (to be added)',
    ],
    visuals: [],
    results: null,
    disclosure:
      'Writing samples pending. Real article titles, excerpts and published links will be added when supplied. No rankings, traffic or growth figures are claimed.',
  },
  {
    id: 'ai-video-reels-concepts',
    title: 'AI Video & Reels Concepts',
    industry: 'Product & service promotion',
    categories: ['ai-video', 'creative-direction'],
    status: 'Concept Project',
    summary:
      'AI-assisted video concepts and Reels storyboards for product and service promotion.',
    overview:
      'A conceptual case study on developing short-form video ideas with AI-assisted tools, from the first idea to a finished concept.',
    context:
      'Short-form video is a fast way to show a product or explain a service. AI-assisted tools make it possible to explore visual ideas quickly.',
    objective:
      'Turn a product or service message into a clear short video concept.',
    role: [
      'Developing video concepts and Reels storyboards',
      'Creating AI-assisted visual sequences',
      'Giving creative direction',
    ],
    approach: [
      'Start with one message per video.',
      'Storyboard the sequence before generating visuals.',
      'Review and refine the output against the brief.',
    ],
    deliverables: [
      'Video concepts',
      'Reels storyboards',
      'Product marketing concepts',
      'Service promotion concepts',
      'AI-assisted visual sequences',
    ],
    visuals: [],
    results: null,
    disclosure: `${CONCEPT_NOTE} Generated examples added later will be labelled "Concept Project — Created for Portfolio Demonstration".`,
  },
  {
    id: 'content-planning-creative-coordination',
    title: 'Content Planning & Creative Coordination',
    industry: 'Multiple industries',
    categories: ['planning', 'creative-direction'],
    status: 'Awaiting Assets',
    summary:
      'Content calendars, creative briefs and design feedback that keep content organized and on schedule.',
    overview:
      'Content calendars, creative briefs, post concepts, caption samples and design feedback used to organize content and coordinate revisions.',
    context:
      'Planning documents are mine. Finished designs and other creative work produced by team members will be credited to them, not shown as my own.',
    objective:
      'Keep content organized, briefed clearly and scheduled consistently.',
    role: [
      'Creating content calendars',
      'Writing creative briefs and post concepts',
      'Writing caption samples',
      'Reviewing designs and coordinating revisions',
    ],
    approach: [
      'Organize ideas by channel, theme and date.',
      'Write briefs with the information a designer needs.',
      'Give clear feedback and track revisions.',
    ],
    deliverables: [
      'Content calendars',
      'Creative briefs',
      'Post concepts',
      'Caption samples',
      'Design feedback',
      'Content revision examples',
    ],
    visuals: [],
    results: null,
    disclosure: AWAITING_NOTE,
  },
];
