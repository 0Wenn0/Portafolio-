import type { MetadataRoute } from "next";

const siteUrl = "https://portafolio-wendyrb.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/casos/ice-endes",
    "/casos/openai-metodo",
    "/en",
    "/en/casos/ice-endes",
    "/en/casos/openai-metodo",
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
