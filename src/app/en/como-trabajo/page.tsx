import type { Metadata } from "next";
import { HowIWorkPage } from "@/components/HowIWorkPage";

export const metadata: Metadata = {
  title: "How I work — Wendy Ramírez Burgos",
  description: "Four steps with their frameworks and real examples per case, and the methods I am testing.",
  alternates: { canonical: "/en/como-trabajo", languages: { es: "/como-trabajo", en: "/en/como-trabajo" } },
};

export default function Page() {
  return <HowIWorkPage locale="en" />;
}
