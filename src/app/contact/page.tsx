import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Alexandre Martin, coach sportif à Paris 16ème. Réservez votre appel découverte gratuit ou envoyez-nous un message pour démarrer votre transformation.",
  openGraph: {
    title: "Contact | FitCoach Pro",
    description:
      "Contactez Alexandre Martin pour votre coaching sportif personnalisé à Paris.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
