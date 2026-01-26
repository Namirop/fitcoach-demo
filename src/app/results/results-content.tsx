"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Scale, Dumbbell, Users, Calendar, Star, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/shared";
import { CTASection } from "@/components/sections";
import { transformations, stats } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/animations";

export function ResultsContent() {
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
              Résultats
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              Des transformations <span className="text-[#2563EB]">réelles</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Découvrez les résultats concrets de clients qui ont décidé de prendre leur santé
              en main avec un accompagnement personnalisé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section background="primary" className="py-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const icons = [Users, Calendar, Star, Star];
            const Icon = icons[index];
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Transformations Grid */}
      <Section background="white">
        <SectionHeader
          title="Transformations clients"
          subtitle="Chaque parcours est unique, mais tous partagent la même détermination"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {transformations.map((transformation) => (
            <motion.div
              key={transformation.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-shadow"
            >
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={transformation.beforeImage}
                      alt={`${transformation.name} - Avant`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Avant
                    </div>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={transformation.afterImage}
                      alt={`${transformation.name} - Après`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-2 right-2 bg-[#2563EB] text-white text-xs px-2 py-1 rounded">
                      Après
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 bottom-0 w-0.5 bg-white/50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1F2937] mb-3">
                  {transformation.name}
                </h3>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-[#F9FAFB] px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-[#6B7280]" />
                    <span className="text-sm text-[#6B7280]">{transformation.duration}</span>
                  </div>
                  {transformation.weightLost && (
                    <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                      <Scale className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-700">-{transformation.weightLost}</span>
                    </div>
                  )}
                  {transformation.muscleGained && (
                    <div className="flex items-center gap-1 bg-[#2563EB]/10 px-3 py-1 rounded-full">
                      <Dumbbell className="w-4 h-4 text-[#2563EB]" />
                      <span className="text-sm text-[#2563EB]">+{transformation.muscleGained}</span>
                    </div>
                  )}
                </div>

                <p className="text-[#6B7280] text-sm italic">
                  &ldquo;{transformation.testimonial}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Video Testimonials Section */}
      <Section background="gray">
        <SectionHeader
          title="Témoignages vidéo"
          subtitle="Écoutez directement les retours d'expérience de nos clients"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[1, 2].map((video) => (
            <motion.div
              key={video}
              variants={itemVariants}
              className="relative aspect-video bg-[#1F2937] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={`https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80`}
                alt="Témoignage vidéo"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-[#2563EB] ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Témoignage client #{video}</p>
                <p className="text-sm text-white/70">
                  {video === 1 ? "Perte de poids - Sophie D." : "Prise de masse - Marc T."}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-[#6B7280] mt-8">
          Plus de vidéos disponibles sur notre chaîne YouTube
        </p>
      </Section>

      {/* Disclaimer */}
      <Section background="white" className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-[#6B7280]">
            <strong>Note :</strong> Les résultats présentés sont propres à chaque individu et
            dépendent de nombreux facteurs (engagement, régularité, alimentation, etc.). Ces
            témoignages ne garantissent pas des résultats similaires. Un programme adapté à
            votre profil sera élaboré lors de notre premier rendez-vous.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Prêt à écrire votre propre success story ?"
        subtitle="Rejoignez les centaines de personnes qui ont transformé leur vie grâce à un accompagnement sur mesure."
        buttonText="Commencer ma transformation"
      />
    </>
  );
}
