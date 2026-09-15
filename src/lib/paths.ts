const BASE = "/dry-cleaners-hampstead-demo";

/** Prefix a public asset path for GitHub Pages basePath. */
export function withBase(path: string): string {
  if (!path) return BASE;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("tel:")
  ) {
    return path;
  }
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p}`;
}
