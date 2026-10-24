/** Prefix paths to files in public/ when the site is hosted under a project URL. */
export function publicPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
