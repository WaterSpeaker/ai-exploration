import { pick } from '../lib/audience';
import { withBase } from '../lib/paths';

export const aboutSection = {
  ctaLabel: 'More about me',
  ctaHref: pick({
    internal: 'https://bytedance.larkoffice.com/docx/YZljdzO2HorQqqxqbduc6SnanVh',
    external: withBase('/chen-wang-resume.pdf'),
  }),
};
