"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, IconBox } from "@/components/shared";
import { whyChooseMe } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/animations";

export function WhyChooseMeSection() {
  return (
    <Section background="white">
      <SectionHeader
        title="Pourquoi me choisir ?"
        subtitle="Un accompagnement complet et personnalisé pour garantir votre réussite"
      />

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {whyChooseMe.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className="group relative bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-lg hover:border-[#2563EB]/20 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity" />

            <IconBox icon={item.icon} size="lg" variant="primary" className="mb-6" />

            <h3 className="text-xl font-bold text-[#1F2937] mb-3">{item.title}</h3>

            <p className="text-[#6B7280] leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
