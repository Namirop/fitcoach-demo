import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours d'Alexandre Martin, coach sportif certifié BPJEPS avec 8 ans d'expérience. Ancien athlète de haut niveau, il accompagne aujourd'hui ses clients vers leur transformation.",
  openGraph: {
    title: "À propos | FitCoach Pro",
    description:
      "Découvrez le parcours d'Alexandre Martin, coach sportif certifié à Paris 16ème.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
