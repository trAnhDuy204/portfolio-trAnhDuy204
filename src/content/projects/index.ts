import type { Locale } from "../../i18n/types";

export const projectIds = ["cubewar", "quibbo", "sharkie", "particles", "pokedex", "ezhost", "hotelsManagerment", "cloudStorageApp", "jobSearchingWebsite"];

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

const vietnameseProjects = simplifyModules(import.meta.glob("./vn/*.ts", { eager: true }));

export const projectModules = {
  vn: vietnameseProjects,
  // Use Vietnamese content until an English version of a project is available.
  en: { ...vietnameseProjects, ...simplifyModules(import.meta.glob("./en/*.ts", { eager: true })) },
} as const satisfies Record<Locale, Record<string, any>>;
