"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : ""}`}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once: true }}
      transition={fadeInUp.transition}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-[#1F2937]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-[#6B7280]"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
