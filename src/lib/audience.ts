export type SiteAudience = 'internal' | 'external';

/** Shared value, or one variant per audience. */
export type AudienceValue<T> = T | { internal: T; external: T };

function isAudienceMap<T>(value: AudienceValue<T>): value is { internal: T; external: T } {
  return (
    typeof value === 'object' &&
    value !== null &&
    'internal' in value &&
    'external' in value
  );
}

/** Defaults to external (public baseline). Set PUBLIC_SITE_AUDIENCE=internal for intranet. */
export function getSiteAudience(): SiteAudience {
  const raw = import.meta.env.PUBLIC_SITE_AUDIENCE;
  return raw === 'internal' ? 'internal' : 'external';
}

export function pick<T>(value: AudienceValue<T>, audience: SiteAudience = getSiteAudience()): T {
  return isAudienceMap(value) ? value[audience] : value;
}
