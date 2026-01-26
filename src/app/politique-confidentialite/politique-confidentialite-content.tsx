"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared";
import { coachInfo } from "@/lib/data";

export function PolitiqueConfidentialiteContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[#2563EB]/10 text-[#2563EB] hover:bg-[#2563EB]/20">
              Protection des données
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              Politique de <span className="text-[#2563EB]">confidentialité</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-8">
            <div className="bg-[#2563EB]/5 rounded-xl p-6 border border-[#2563EB]/20">
              <p className="text-[#6B7280] leading-relaxed">
                La protection de vos données personnelles est une priorité pour FitCoach Pro.
                Cette politique de confidentialité décrit comment nous collectons, utilisons et
                protégeons vos informations lorsque vous visitez notre site web ou utilisez nos
                services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                1. Responsable du traitement
              </h2>
              <div className="bg-[#F9FAFB] rounded-xl p-6 space-y-2">
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Responsable :</strong> {coachInfo.name}
                </p>
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Adresse :</strong> {coachInfo.address}
                </p>
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Email :</strong>{" "}
                  <a href={`mailto:${coachInfo.email}`} className="text-[#2563EB] hover:underline">
                    {coachInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                2. Données collectées
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Nous collectons les données suivantes :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-[#1F2937]">Données d&apos;identification :</strong>
                    <span className="text-[#6B7280]">
                      {" "}nom, prénom, adresse email, numéro de téléphone
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-[#1F2937]">Données de navigation :</strong>
                    <span className="text-[#6B7280]">
                      {" "}adresse IP, type de navigateur, pages visitées, durée de visite
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-[#1F2937]">Données de contact :</strong>
                    <span className="text-[#6B7280]">
                      {" "}messages envoyés via le formulaire de contact
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                3. Finalités du traitement
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Vos données sont collectées pour les finalités suivantes :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Répondre à vos demandes de contact et d&apos;information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Gérer les rendez-vous et les programmes de coaching
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Envoyer notre newsletter (avec votre consentement)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Améliorer notre site web et nos services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Analyser le trafic et le comportement des visiteurs
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                4. Base légale du traitement
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Votre consentement (formulaire de contact, newsletter)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    L&apos;exécution d&apos;un contrat (prestations de coaching)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    L&apos;intérêt légitime (amélioration de nos services)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                5. Durée de conservation
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Vos données sont conservées pendant une durée n&apos;excédant pas celle nécessaire
                aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Données clients : 3 ans après la fin de la relation commerciale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Données prospects : 3 ans à compter du dernier contact
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#6B7280]">
                    Cookies : 13 mois maximum
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                6. Cookies
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Notre site utilise des cookies pour :
              </p>
              <div className="bg-[#F9FAFB] rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-2">Cookies essentiels</h3>
                  <p className="text-[#6B7280] text-sm">
                    Nécessaires au fonctionnement du site (pas de consentement requis).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-2">Cookies analytiques</h3>
                  <p className="text-[#6B7280] text-sm">
                    Google Analytics pour comprendre comment vous utilisez notre site.
                  </p>
                </div>
              </div>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de
                votre navigateur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                7. Vos droits
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Droit d'accès", desc: "Obtenir une copie de vos données" },
                  { title: "Droit de rectification", desc: "Corriger vos données inexactes" },
                  { title: "Droit d'effacement", desc: "Demander la suppression de vos données" },
                  { title: "Droit d'opposition", desc: "Vous opposer au traitement" },
                  { title: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré" },
                  { title: "Droit de limitation", desc: "Limiter le traitement de vos données" },
                ].map((right) => (
                  <div key={right.title} className="bg-[#F9FAFB] rounded-lg p-4">
                    <h3 className="font-semibold text-[#1F2937] mb-1">{right.title}</h3>
                    <p className="text-[#6B7280] text-sm">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à{" "}
                <a href={`mailto:${coachInfo.email}`} className="text-[#2563EB] hover:underline">
                  {coachInfo.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                8. Sécurité des données
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Nous mettons en place des mesures techniques et organisationnelles appropriées
                pour protéger vos données contre tout accès non autorisé, modification, divulgation
                ou destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges
                de données.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                9. Réclamation
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Si vous estimez que le traitement de vos données personnelles constitue une
                violation du RGPD, vous avez le droit d&apos;introduire une réclamation auprès de
                la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                10. Modifications
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout
                moment. Les modifications prendront effet dès leur publication sur cette page. Nous
                vous encourageons à consulter régulièrement cette page pour prendre connaissance
                des éventuelles mises à jour.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280]">
                Dernière mise à jour : Janvier 2024
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
