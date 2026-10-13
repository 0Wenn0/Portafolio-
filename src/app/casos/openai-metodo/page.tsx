import type { Metadata } from "next";
import { OpenAiMethodCaseStudy } from "@/components/OpenAiMethodCaseStudy";
import { getOpenAiMethod } from "@/content/openaiMethod";

const content = getOpenAiMethod("es");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/casos/openai-metodo",
    languages: {
      es: "/casos/openai-metodo",
      en: "/en/casos/openai-metodo",
    },
  },
};

export default function OpenAiMethodPage() {
  return <OpenAiMethodCaseStudy locale="es" />;
}
