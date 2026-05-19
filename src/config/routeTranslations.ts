import type { Locale } from "./siteSettings";

export const routeTranslations: Record<Locale, Record<string, string>> = {
  en: {
    "about": "about",
  },
  es: {
    "about": "sobre-nosotros",
  },
};

export const localizedCollections = {
  blog: { en: "blog", es: "blog" },
} as const;
