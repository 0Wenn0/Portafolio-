import type { Metadata } from "next";
import { OpenAiMethodCaseStudy } from "@/components/OpenAiMethodCaseStudy";
import { getOpenAiMethod } from "@/content/openaiMethod";

const content = getOpenAiMethod("en");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/en/casos/openai-metodo",
    languages: {
      es: "/casos/openai-metodo",
      en: "/en/casos/openai-metodo",
    },
  },
};

export default function OpenAiMethodPageEn() {
  return <OpenAiMethodCaseStudy locale="en" />;
}
