import type { Metadata } from "next";
import { VideoAiCaseStudy } from "@/components/VideoAiCaseStudy";
import { getVideoAi } from "@/content/videoAi";

const content = getVideoAi("es");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/casos/video-con-ia",
    languages: {
      es: "/casos/video-con-ia",
      en: "/en/casos/video-con-ia",
    },
  },
};

export default function VideoAiPage() {
  return <VideoAiCaseStudy locale="es" />;
}
