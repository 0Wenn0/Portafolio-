import type { Locale, Service } from "./types";

const servicesEs: Service[] = [
  {
    name: "Taller de adopción de IA",
    desc: "3 a 4 horas para equipos, docentes o grupos de investigación.",
    price: "Desde $4,500 MXN",
  },
  {
    name: "Diagnóstico de adopción y roadmap",
    desc: "Encuesta, entrevistas y plan por etapas en 2 a 3 semanas.",
    price: "A la medida",
  },
  {
    name: "Programa formativo o curso en LMS",
    desc: "Diseño instruccional, materiales y métricas de finalización.",
    price: "A la medida",
  },
  {
    name: "Mapeo de actores y policy brief",
    desc: "Para organizaciones que trabajan con gobierno o educación pública.",
    price: "A la medida",
  },
  {
    name: "Sitio o micrositio para proyectos educativos o institucionales",
    desc: "Arquitectura de contenido, diseño UX/UI y sitio publicado.",
    price: "A la medida",
    link: "Ver ejemplos en Laboratorio",
  },
];

const servicesEn: Service[] = [
  {
    name: "AI adoption workshop",
    desc: "3 to 4 hours for teams, teaching staff, or research groups.",
    price: "From $4,500 MXN",
  },
  {
    name: "Adoption diagnostic & roadmap",
    desc: "Survey, interviews, and a staged plan in 2 to 3 weeks.",
    price: "Custom",
  },
  {
    name: "Training program or LMS course",
    desc: "Instructional design, materials, and completion metrics.",
    price: "Custom",
  },
  {
    name: "Stakeholder mapping & policy brief",
    desc: "For organizations working with government or public education.",
    price: "Custom",
  },
  {
    name: "Site or microsite for educational or institutional projects",
    desc: "Content architecture, UX/UI design, and a published site.",
    price: "Custom",
    link: "See examples in the Lab",
  },
];

export function getServices(locale: Locale): Service[] {
  return locale === "en" ? servicesEn : servicesEs;
}
