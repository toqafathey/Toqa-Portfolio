import type { ApproachStep, EducationItem, Skill, ValueItem } from './types';

export const skills: Skill[] = [
  {
    number: '01',
    title: 'Social Media Management',
    description:
      'Content organization, scheduling, publishing support, and maintaining consistent communication across social channels.',
  },
  {
    number: '02',
    title: 'Content Creation & Copywriting',
    description:
      'Developing content ideas, writing social media captions, creating promotional copy, and adapting messaging to different audiences.',
  },
  {
    number: '03',
    title: 'Content Planning & Calendar Creation',
    description:
      'Organizing content ideas, scheduling publications, and structuring content calendars around communication needs.',
  },
  {
    number: '04',
    title: 'Competitor Analysis',
    description:
      'Reviewing competitor communication, content approaches, and visible marketing activity to inform content development.',
  },
  {
    number: '05',
    title: 'Facebook & Instagram Ads',
    description:
      'Creating and supporting paid social advertising activities through Meta advertising tools.',
  },
  {
    number: '06',
    title: 'Advertising Performance Analysis',
    description:
      'Reviewing available advertising data, identifying observations, and evaluating campaign performance.',
  },
  {
    number: '07',
    title: 'Creative Direction',
    description:
      'Developing visual concepts and providing creative direction for photography, video, branding, and promotional content.',
  },
  {
    number: '08',
    title: 'AI Video Creation',
    description:
      'Developing AI-assisted video concepts and short-form content ideas, from initial concept to execution.',
  },
  {
    number: '09',
    title: 'Website & SEO Content Writing',
    description:
      'Writing website content and SEO-focused articles with attention to relevance, readability, and search intent.',
  },
  {
    number: '10',
    title: 'Design Briefs & Creative Concepts',
    description:
      'Preparing clear briefs, communicating content requirements, reviewing designs, and coordinating revisions.',
  },
];

export const tools: string[] = [
  'Meta Business Suite',
  'Meta Ads Manager',
  'Canva',
  'AI Content Creation Tools',
  'Microsoft Office',
];

export const approach: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand the Brand & Audience',
    description:
      'Review the brand, audience, products or services, communication needs, and objectives.',
  },
  {
    number: '02',
    title: 'Research & Content Planning',
    description:
      'Review competitors, develop content ideas, organize content calendars, and identify relevant content directions.',
  },
  {
    number: '03',
    title: 'Create & Coordinate',
    description:
      'Write captions, promotional copy, website content, and design briefs while coordinating creative development and revisions.',
  },
  {
    number: '04',
    title: 'Support Campaign Execution',
    description:
      'Support social media advertising, content publishing, and campaign activities according to assigned responsibilities.',
  },
  {
    number: '05',
    title: 'Review & Improve',
    description:
      'Analyze available advertising performance data, identify useful observations, and use the findings to inform future content and campaign improvements.',
  },
];

export const teamValue: ValueItem[] = [
  {
    title: 'Creative Content Development',
    description:
      'Experience creating content ideas, writing captions, developing promotional messaging, and adapting content to different industries.',
  },
  {
    title: 'Structured Content Planning',
    description:
      'Experience organizing content calendars, preparing creative briefs, and coordinating revisions.',
  },
  {
    title: 'Advertising Support & Analysis',
    description:
      'Experience supporting Meta advertising activities and reviewing available campaign performance data.',
  },
  {
    title: 'Cross-Industry Experience',
    description:
      'Experience working with healthcare-related content, veterinary equipment and services, restaurant and café marketing, product promotion, and website content.',
  },
  {
    title: 'SEO Writing Experience',
    description: 'Experience writing approximately 25 SEO-focused articles.',
  },
  {
    title: 'Creative Coordination',
    description:
      'Experience communicating requirements to designers, reviewing designs, and coordinating content adjustments.',
  },
  {
    title: 'Customer Communication',
    description:
      'Earlier customer-facing experience supporting product promotion, responding to inquiries, order follow-up, and understanding customer needs.',
  },
];

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Law',
    institution: 'Cairo University',
    period: '2019–2023',
    detail: 'Grade: Good',
  },
  {
    title: 'Digital Marketing Course',
    institution: 'Abdelrahman Alaa',
  },
  {
    title: 'Digital Marketing Internship',
    institution: 'Shatara Marketing',
    detail: 'Duration: 2 months',
  },
];

export const transferableSkills = [
  'Communication',
  'Customer understanding',
  'Product promotion',
  'Inquiry handling',
];
