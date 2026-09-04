import { withRouteBase } from "./routeBase";

export const useRouter = () => {
  const push = (path: string) => {
    if (typeof window !== "undefined") {
      // The intercepted pushState in useRoute.ts will automatically trigger path updates
      window.history.pushState(null, "", withRouteBase(path));
    }
  };

  const replace = (path: string) => {
    if (typeof window !== "undefined") {
      // The intercepted replaceState in useRoute.ts will automatically trigger path updates
      window.history.replaceState(null, "", withRouteBase(path));
    }
  };

  const back = () => {
    if (typeof window !== "undefined") {
      window.history?.back?.();
    }
  };

  return {
    push,
    replace,
    back,
  };
};
