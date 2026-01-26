"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeader } from "@/components/shared";
import { CTASection } from "@/components/sections";
import { services, faqs } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/animations";

export function ServicesContent() {
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
              Nos formules
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              Choisissez votre{" "}
              <span className="text-[#2563EB]">accompagnement</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Des formules adaptées à chaque profil et chaque objectif. Trouvez
              celle qui vous correspond et commencez votre transformation dès
              aujourd&apos;hui.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="white">
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={itemVariants}
              className={`relative group bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                service.popular
                  ? "border-[#2563EB] shadow-lg shadow-[#2563EB]/10"
                  : "border-[#E5E7EB] hover:border-[#2563EB]/50 hover:shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-[#F59E0B] text-white hover:bg-[#D97706]">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Populaire
                  </Badge>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#1F2937] mb-2">
                  {service.title}
                </h2>
                <p className="text-[#6B7280] mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#2563EB]">
                    {service.price}
                  </span>
                  {service.priceDetail && (
                    <span className="text-[#6B7280] ml-2">
                      /{service.priceDetail}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-[#1F2937]">
                    Ce qui est inclus :
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#6B7280]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full ${
                    service.popular
                      ? "bg-[#2563EB] hover:bg-[#1D4ED8]"
                      : "bg-[#1F2937] hover:bg-[#374151]"
                  }`}
                >
                  <Link href="/contact">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <SectionHeader
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir avant de commencer"
        />

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-[#E5E7EB] px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-[#1F2937] hover:text-[#2563EB] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280] pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Une question sur nos offres ?"
        subtitle="Réservez un appel découverte gratuit pour discuter de vos objectifs et trouver la formule idéale."
        buttonText="Réserver un appel"
      />
    </>
  );
}
