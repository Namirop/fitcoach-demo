"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coachInfo, stats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-white to-[#EFF6FF] -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium rounded-full mb-6">
              Coach Sportif Certifié à Paris 16
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight mb-6">
              Transforme ton corps,{" "}
              <span className="text-[#2563EB]">transforme ta vie</span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] mb-8 max-w-xl mx-auto lg:mx-0">
              Avec {coachInfo.name}, coach sportif certifié avec {coachInfo.experience},
              atteins enfin tes objectifs grâce à un accompagnement 100% personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 h-14 text-base"
              >
                <Link href="/contact">
                  Réserver un appel découverte
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#E5E7EB] hover:bg-[#F9FAFB] hover:text-[#1F2937] px-8 h-14 text-base"
              >
                <Link href="/results">
                  <Play className="mr-2 w-5 h-5" />
                  Voir les résultats
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-[#E5E7EB]">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#2563EB]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#6B7280]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Main image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/coach sportif.jpg"
                  alt={`${coachInfo.name} - Coach sportif`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">8+</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1F2937]">Années</div>
                  <div className="text-sm text-[#6B7280]">d&apos;expérience</div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-[#2563EB] text-white rounded-xl shadow-lg px-4 py-2"
              >
                <div className="text-sm font-medium">Certifié BPJEPS</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
