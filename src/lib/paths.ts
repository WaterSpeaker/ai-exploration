/** Prefix site-root paths with Astro `base` (e.g. `/ai-exploration`). */
export function withBase(path: string): string {
  if (!path || /^https?:\/\//i.test(path) || path.startsWith('#') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  if (path === '/') {
    return base.endsWith('/') ? base : `${base}/`;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base.replace(/\/$/, '')}${normalized}`;
}

/** Rewrite root-absolute src/href in raw HTML for GitHub Pages project base. */
export function withBaseHtml(html: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (!base) return html;
  return html.replace(/\b(src|href)="\/(?!\/)/g, `$1="${base}/`);
}
