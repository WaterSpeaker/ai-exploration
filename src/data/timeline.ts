export type TimelineSectionMeta = {
  id: string;
  label: string;
  index: string;
};

export const timelineSections: TimelineSectionMeta[] = [
  { id: 'resume', label: 'Intro', index: '01' },
  { id: 'portfolios', label: 'Traditional Portfolios', index: '02' },
  { id: 'contact', label: 'Contact me', index: '03' },
];
