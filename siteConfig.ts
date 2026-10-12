/**
 * Central, editable site configuration.
 * Empty strings mean "not supplied yet": the site then hides the matching link
 * instead of showing a fake or broken one.
 */
export const siteConfig = {
  name: 'Toqa Fathey',
  wordmark: 'TOQA FATHEY',
  title: 'Social Media Specialist & Content Creator',
  headline: 'Creative Content. Strategic Thinking. Meaningful Digital Presence.',
  intro:
    "I'm a Social Media Specialist and Content Creator with experience in developing engaging content, planning social media calendars, writing promotional copy, supporting advertising campaigns, analyzing performance, and creating SEO-focused website content. I combine creative thinking with a structured approach to help brands communicate their value effectively across digital channels.",

  /** Path under /public, e.g. "/images/profile/portrait.jpg". Leave empty to show the placeholder. */
  portraitSrc: '',
  portraitAlt: 'Portrait of Toqa Fathey',

  contact: {
    /** e.g. "name@example.com" */
    email: '',
    /** Full profile URL, e.g. "https://www.linkedin.com/in/your-profile" */
    linkedin: '',
    /** Optional, e.g. "+20 000 000 0000" */
    phone: '',
    /** Optional, e.g. "Cairo, Egypt" */
    location: '',
    /** Path under /public, e.g. "/documents/Toqa-Fathey-CV.pdf". Leave empty until the real file exists. */
    cvPath: '',
  },

  /** Verified profiles only, e.g. { label: 'Instagram', url: 'https://...' } */
  social: [] as { label: string; url: string }[],

  /** When no CV file is set, show a visibly unavailable button in the hero. Set false to hide it. */
  showCvPlaceholder: true,

  about: {
    heading: 'A Little About Me',
    paragraphs: [
      "I'm a Social Media Specialist and Content Creator with hands-on experience developing social media content, organizing content calendars, writing promotional copy, supporting advertising activities, and coordinating creative work.",
      'My experience spans healthcare-related content, veterinary equipment and services, restaurant and café marketing, and SEO-focused website articles.',
      'I enjoy turning brand information and business needs into clear content ideas, useful creative briefs, and organized content plans. I also work with AI-assisted video creation to explore short-form content concepts and visual storytelling.',
      "I'm continuing to strengthen my research, content strategy, and paid advertising skills while building on my practical experience in content creation, creative coordination, and campaign support.",
    ],
    highlights: [
      'Develop content ideas aligned with brand objectives',
      'Write social media captions and promotional copy',
      'Organize content calendars and scheduling',
      'Prepare design briefs and coordinate creative revisions',
      'Support Facebook and Instagram advertising',
      'Review advertising performance data',
      'Conduct competitor analysis',
      'Develop website content and SEO-focused articles',
      'Create concepts for AI-assisted videos and Reels',
      'Adapt content to different industries and audiences',
    ],
  },

  seo: {
    title: 'Toqa Fathey | Social Media Specialist & Content Creator',
    description:
      "Explore Toqa Fathey's portfolio in social media content creation, content planning, Meta advertising support, SEO writing, creative coordination, and digital marketing.",
  },
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Selected Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
