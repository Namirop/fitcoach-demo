"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader, IconBox } from "@/components/shared";
import { CTASection } from "@/components/sections";
import { coachInfo, timeline, values, galleryImages } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/animations";

export function AboutContent() {
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
              À propos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              Mon <span className="text-[#2563EB]">histoire</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              De l&apos;athlétisme de haut niveau au coaching personnalisé,
              découvrez le parcours qui m&apos;a mené à accompagner des
              centaines de personnes dans leur transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt={coachInfo.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#1F2937] mb-6">
              {coachInfo.name}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge
                variant="secondary"
                className="bg-[#2563EB]/10 text-[#2563EB]"
              >
                Coach Sportif Certifié
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#F59E0B]/10 text-[#F59E0B]"
              >
                8 ans d&apos;expérience
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700"
              >
                BPJEPS
              </Badge>
            </div>
            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              {coachInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="gray">
        <SectionHeader
          title="Mon parcours"
          subtitle="Les étapes clés qui ont façonné ma vision du coaching"
        />

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E5E7EB] transform md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              variants={itemVariants}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Year badge */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold text-sm">
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <div
                className={`ml-28 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
                  <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280]">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Values Section */}
      <Section background="white">
        <SectionHeader
          title="Mes valeurs"
          subtitle="Les principes qui guident mon accompagnement au quotidien"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="text-center p-8 rounded-2xl bg-[#F9FAFB] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#E5E7EB]"
            >
              <IconBox
                icon={value.icon}
                size="lg"
                variant="primary"
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                {value.title}
              </h3>
              <p className="text-[#6B7280]">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Gallery Section */}
      <Section background="gray">
        <SectionHeader
          title="En action"
          subtitle="Quelques moments capturés durant les séances et événements"
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-xl overflow-hidden group ${
                index === 0 || index === 5
                  ? "md:col-span-2 aspect-[2/1]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Envie de me rencontrer ?"
        subtitle="Réservez un appel découverte gratuit pour discuter de vos objectifs et voir si nous sommes faits pour travailler ensemble."
        buttonText="Prendre rendez-vous"
      />
    </>
  );
}
