const rawBase = import.meta.env.BASE_URL || "/";

export const routeBase = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

export const normalizeRoutePath = (path: string) => {
  if (!routeBase || routeBase === "/") return path || "/";

  if (path === routeBase) return "/";
  if (path.startsWith(`${routeBase}/`)) return path.slice(routeBase.length) || "/";

  return path || "/";
};

export const withRouteBase = (path: string) => {
  const normalizedPath = normalizeRoutePath(path).startsWith("/")
    ? normalizeRoutePath(path)
    : `/${normalizeRoutePath(path)}`;

  if (!routeBase || routeBase === "/") return normalizedPath;
  if (normalizedPath === "/") return `${routeBase}/`;

  return `${routeBase}${normalizedPath}`;
};
