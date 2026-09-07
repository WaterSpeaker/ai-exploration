import { withBase } from '../lib/paths';

export type PortfolioItem = {
  year: string;
  href: string;
  image: string;
  alt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    year: 'GEC',
    href: withBase('/portfolios/chen-wang-portfolio-gec-web.pdf'),
    image: withBase('/portfolios/portfolio-gec-cover.jpg?v=1'),
    alt: '王琛 GEC Portfolio',
  },
  {
    year: '2023',
    href: withBase('/portfolios/chen-wang-portfolio-2023-web.pdf'),
    image: withBase('/portfolios/portfolio-2023-cover.jpg?v=3'),
    alt: '王琛 Portfolio 2023',
  },
  {
    year: '2022',
    href: withBase('/portfolios/chen-wang-portfolio-2022-web.pdf'),
    image: withBase('/portfolios/portfolio-2022-cover.png?v=3'),
    alt: '王琛 Portfolio 2022',
  },
];
