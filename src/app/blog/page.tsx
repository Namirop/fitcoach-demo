import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Découvrez nos articles sur la nutrition, l'entraînement et le mindset. Conseils d'expert pour optimiser votre forme physique et atteindre vos objectifs.",
  openGraph: {
    title: "Blog | FitCoach Pro",
    description:
      "Articles et conseils d'expert sur la nutrition, l'entraînement et le bien-être.",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
