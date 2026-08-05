export type TimelineSectionMeta = {
  id: string;
  label: string;
  index: string;
};

export const timelineSections: TimelineSectionMeta[] = [
  { id: 'resume', label: 'About', index: '01' },
  { id: 'work', label: 'AI in E-Commerce', index: '02' },
  { id: 'workflow', label: 'D2C workflow', index: '03' },
  { id: 'vibe', label: 'Vibe Coding', index: '04' },
  { id: 'contact', label: 'Contact me', index: '05' },
];
