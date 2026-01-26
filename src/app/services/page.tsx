import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez nos formules de coaching sportif personnalisé : Coaching 1-to-1, Programme en ligne et Pack Transformation 3 mois. Trouvez l'accompagnement qui correspond à vos objectifs.",
  openGraph: {
    title: "Services | FitCoach Pro",
    description:
      "Découvrez nos formules de coaching sportif personnalisé : Coaching 1-to-1, Programme en ligne et Pack Transformation.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
