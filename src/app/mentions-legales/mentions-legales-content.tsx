"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared";
import { coachInfo } from "@/lib/data";

export function MentionsLegalesContent() {
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
              Informations légales
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              Mentions <span className="text-[#2563EB]">légales</span>
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
          className="max-w-3xl mx-auto prose prose-gray"
        >
          <div className="space-y-8">
            {/* Bannière Site Démo */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-800 font-medium text-center">
                ⚠️ <strong>Site de démonstration</strong> - Ce site est un template de démonstration.
                Les informations présentées sont fictives et à titre illustratif uniquement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                1. Éditeur du site
              </h2>
              <div className="bg-[#F9FAFB] rounded-xl p-6 space-y-2">
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Nom :</strong> {coachInfo.name}
                </p>
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Profession :</strong> Coach sportif indépendant
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
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Téléphone :</strong> {coachInfo.phone}
                </p>
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">SIRET :</strong> [Numéro SIRET à compléter]
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                2. Hébergement
              </h2>
              <div className="bg-[#F9FAFB] rounded-xl p-6 space-y-2">
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Hébergeur :</strong> Vercel Inc.
                </p>
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p className="text-[#6B7280]">
                  <strong className="text-[#1F2937]">Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563EB] hover:underline"
                  >
                    vercel.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo,
                icônes, etc.) est la propriété exclusive de FitCoach Pro, à l&apos;exception des
                marques, logos ou contenus appartenant à d&apos;autres sociétés partenaires ou
                auteurs.
              </p>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
                interdite, sauf autorisation écrite préalable de FitCoach Pro.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                4. Responsabilité
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                FitCoach Pro s&apos;efforce de fournir sur ce site des informations aussi précises
                que possible. Toutefois, il ne pourra être tenu responsable des omissions, des
                inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait
                ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                Les informations présentes sur ce site sont données à titre indicatif et sont
                susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur ce site
                ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été
                apportées depuis leur mise en ligne.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                5. Liens hypertextes
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Le site peut contenir des liens hypertextes vers d&apos;autres sites. FitCoach Pro
                n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
                leur contenu ou aux pratiques de protection des données personnelles de ces sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                6. Cookies
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Le site utilise des cookies pour améliorer l&apos;expérience utilisateur et
                analyser le trafic. Pour plus d&apos;informations sur l&apos;utilisation des
                cookies, veuillez consulter notre{" "}
                <a href="/politique-confidentialite" className="text-[#2563EB] hover:underline">
                  Politique de confidentialité
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                7. Droit applicable
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
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
