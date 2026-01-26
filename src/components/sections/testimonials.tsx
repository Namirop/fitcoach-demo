"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section, SectionHeader, StarRating } from "@/components/shared";
import { testimonials } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <Section background="gray">
      <SectionHeader
        title="Ils ont transformé leur vie"
        subtitle="Découvrez les témoignages de clients qui ont atteint leurs objectifs"
      />

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <Quote className="w-10 h-10 text-[#2563EB]/20 mb-4" />

            <p className="text-[#6B7280] leading-relaxed mb-6">
              &ldquo;{testimonial.text}&rdquo;
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-[#E5E7EB]">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#1F2937]">{testimonial.name}</div>
                <div className="text-sm text-[#2563EB] font-medium">{testimonial.result}</div>
              </div>
              <StarRating rating={testimonial.rating} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
