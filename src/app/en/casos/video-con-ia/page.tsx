import type { Metadata } from "next";
import { VideoAiCaseStudy } from "@/components/VideoAiCaseStudy";
import { getVideoAi } from "@/content/videoAi";

const content = getVideoAi("en");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/en/casos/video-con-ia",
    languages: {
      es: "/casos/video-con-ia",
      en: "/en/casos/video-con-ia",
    },
  },
};

export default function VideoAiPageEn() {
  return <VideoAiCaseStudy locale="en" />;
}
