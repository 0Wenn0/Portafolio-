import type { MetadataRoute } from "next";

const siteUrl = "https://portafolio-wendyrb.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/casos/ice-endes", "/en", "/en/casos/ice-endes"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
