"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared";
import { blogPosts } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/animations";

const categories = [
  { value: "all", label: "Tous" },
  { value: "nutrition", label: "Nutrition" },
  { value: "training", label: "Entraînement" },
  { value: "mindset", label: "Mindset" },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  nutrition: { bg: "bg-green-100", text: "text-green-700" },
  training: { bg: "bg-[#2563EB]/10", text: "text-[#2563EB]" },
  mindset: { bg: "bg-purple-100", text: "text-purple-700" },
};

export function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

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
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              Conseils & <span className="text-[#2563EB]">Actualités</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Retrouvez mes articles sur la nutrition, l&apos;entraînement et le développement
              personnel pour vous accompagner dans votre parcours fitness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <Section background="white">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className={
                selectedCategory === category.value
                  ? "bg-[#2563EB] hover:bg-[#1D4ED8]"
                  : "border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#2563EB]"
              }
              onClick={() => {
                setSelectedCategory(category.value);
                setCurrentPage(1);
              }}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {paginatedPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${categoryColors[post.category].bg} ${categoryColors[post.category].text}`}
                    >
                      {post.category === "nutrition"
                        ? "Nutrition"
                        : post.category === "training"
                          ? "Entraînement"
                          : "Mindset"}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-[#1F2937] mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#6B7280] mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Link */}
                  <span className="inline-flex items-center text-[#2563EB] font-medium group-hover:gap-2 transition-all cursor-pointer">
                    Lire l&apos;article
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="border-[#E5E7EB]"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(i + 1)}
                className={
                  currentPage === i + 1
                    ? "bg-[#2563EB] hover:bg-[#1D4ED8]"
                    : "border-[#E5E7EB]"
                }
              >
                {i + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="border-[#E5E7EB]"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {/* Empty State */}
        {paginatedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#6B7280]">Aucun article dans cette catégorie pour le moment.</p>
          </div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4">
              Ne manquez aucun conseil
            </h2>
            <p className="text-[#6B7280] mb-6">
              Inscrivez-vous pour recevoir mes derniers articles et conseils directement dans
              votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              />
              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] px-6">
                S&apos;inscrire
              </Button>
            </div>
            <p className="text-xs text-[#6B7280] mt-3">
              Pas de spam, désinscription possible à tout moment.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
