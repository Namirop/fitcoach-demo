"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title = "Prêt à commencer ta transformation ?",
  subtitle = "Réserve ton appel découverte gratuit et discutons de tes objectifs ensemble.",
  buttonText = "Réserver mon appel gratuit",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl" />
      </div>

      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-10 h-14 text-lg font-medium"
          >
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
