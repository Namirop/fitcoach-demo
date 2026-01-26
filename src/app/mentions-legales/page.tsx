import { Metadata } from "next";
import { MentionsLegalesContent } from "./mentions-legales-content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site FitCoach Pro - Informations juridiques et légales.",
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />;
}
