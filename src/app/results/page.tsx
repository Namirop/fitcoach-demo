import type { Metadata } from "next";
import { ResultsContent } from "./results-content";

export const metadata: Metadata = {
  title: "Résultats",
  description:
    "Découvrez les transformations impressionnantes de nos clients. Photos avant/après, témoignages et résultats concrets de notre accompagnement sportif personnalisé.",
  openGraph: {
    title: "Résultats | FitCoach Pro",
    description:
      "Découvrez les transformations impressionnantes de nos clients avec FitCoach Pro.",
  },
};

export default function ResultsPage() {
  return <ResultsContent />;
}
