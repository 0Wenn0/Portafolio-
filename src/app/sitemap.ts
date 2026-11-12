import type { MetadataRoute } from "next";

const siteUrl = "https://portafolio-wendyrb.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/casos/ice-endes",
    "/casos/openai-metodo",
    "/casos/pienso-consulto-decido",
    "/metodo-evident",
    "/servicios",
    "/trabajo",
    "/como-trabajo",
    "/en",
    "/en/casos/ice-endes",
    "/en/casos/openai-metodo",
    "/en/casos/pienso-consulto-decido",
    "/en/metodo-evident",
    "/en/servicios",
    "/en/trabajo",
    "/en/como-trabajo",
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
