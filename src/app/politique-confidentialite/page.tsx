import { Metadata } from "next";
import { PolitiqueConfidentialiteContent } from "./politique-confidentialite-content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de FitCoach Pro - Protection de vos données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteContent />;
}
