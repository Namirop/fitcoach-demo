"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/shared";
import { certifications } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/animations";

export function CertificationsSection() {
  return (
    <Section background="white">
      <SectionHeader
        title="Mes certifications"
        subtitle="Des formations reconnues pour un accompagnement de qualité professionnelle"
      />

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            className="group bg-[#F9FAFB] rounded-xl p-6 text-center hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#E5E7EB]"
          >
            <div className="relative w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-white shadow-sm">
              <Image
                src={cert.logo}
                alt={cert.name}
                fill
                className="object-cover p-2"
                sizes="64px"
              />
            </div>
            <h3 className="font-semibold text-[#1F2937] text-sm mb-1 line-clamp-2">
              {cert.name}
            </h3>
            <span className="text-xs text-[#6B7280]">{cert.year}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
