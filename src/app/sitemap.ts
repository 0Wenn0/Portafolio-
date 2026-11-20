import type { MetadataRoute } from "next";

const siteUrl = "https://portafolio-wendyrb.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/casos/ice-endes",
    "/casos/openai-metodo",
    "/casos/pienso-consulto-decido",
    "/casos/el-cuarto-de-mary",
    "/casos/diagnostico-adopcion-ia",
    "/metodo-evident",
    "/servicios",
    "/trabajo",
    "/como-trabajo",
    "/charlas",
    "/charlas/nodo-cero",
    "/en",
    "/en/casos/ice-endes",
    "/en/casos/openai-metodo",
    "/en/casos/pienso-consulto-decido",
    "/en/casos/el-cuarto-de-mary",
    "/en/casos/diagnostico-adopcion-ia",
    "/en/metodo-evident",
    "/en/servicios",
    "/en/trabajo",
    "/en/como-trabajo",
    "/en/charlas",
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
