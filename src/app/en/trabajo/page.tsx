import type { Metadata } from "next";
import { WorkPage } from "@/components/WorkPage";

export const metadata: Metadata = {
  title: "Work in detail — Wendy Ramírez Burgos",
  description: "Instructional design, prototypes, community and research: objectives, frameworks and evidence for each piece.",
  alternates: { canonical: "/en/trabajo", languages: { es: "/trabajo", en: "/en/trabajo" } },
};

export default function Page() {
  return <WorkPage locale="en" />;
}
