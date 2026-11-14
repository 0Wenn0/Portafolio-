import type { Metadata } from "next";
import { MaryCaseStudy } from "@/components/MaryCaseStudy";
import { getMaryCase } from "@/content/maryCase";

const content = getMaryCase("en");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/en/casos/el-cuarto-de-mary",
    languages: {
      es: "/casos/el-cuarto-de-mary",
      en: "/en/casos/el-cuarto-de-mary",
    },
  },
};

export default function MaryCasePage() {
  return <MaryCaseStudy locale="en" />;
}
