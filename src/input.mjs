export function isPresent(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  return true;
}

export function normalizeInput(source) {
  if (Array.isArray(source)) return source;
  if (source && Array.isArray(source.items)) return source.items;
  if (source && typeof source === 'object') return [source];
  return [];
}
