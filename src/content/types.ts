export type Locale = "es" | "en";

export type Metric = {
  value: string;
  aside: string;
  label: string;
  case: string;
  mide: string;
  periodo: string;
  contribucion: string;
  fuente: string;
  limite: string;
};

export type CaseStudy = {
  line: string;
  title: string;
  org: string;
  period: string;
  role: string;
  reto: string;
  bridge?: string;
  contrib: string;
  resultado: string;
  imageAlt: string;
  image?: string;
  deepDiveHref?: string;
  pdfHref?: string;
};

export type MethodExample = {
  case: string;
  text: string;
};

export type MethodStep = {
  name: string;
  desc: string;
  examples: MethodExample[];
};

export type Service = {
  name: string;
  desc: string;
  price: string;
  link?: string;
};

export type CommunityItem = {
  title: string;
  role: string;
  period: string;
  desc: string;
};

export type LabItem = {
  title: string;
  desc: string;
  contribution: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type TimelineItem = {
  years: string;
  text: string;
};

export type NetworkNode = {
  id: string;
  label: string;
};

export type NetworkEdge = [source: string, target: string, caseLabel: string];
