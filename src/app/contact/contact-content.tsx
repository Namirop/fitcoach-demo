"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Section } from "@/components/shared";
import { coachInfo, requestTypes } from "@/lib/data";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      requestType: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setStatusMessage(result.message);
        form.reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(result.error || "Une erreur s'est produite.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Impossible d'envoyer le message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              Commençons votre <span className="text-[#2563EB]">transformation</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Prêt à passer à l&apos;action ? Contactez-moi pour un premier échange gratuit
              et sans engagement sur vos objectifs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Envoyez-moi un message</h2>

            {/* Status messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-green-800">{statusMessage}</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-800">{statusMessage}</p>
              </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet *</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean Dupont" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jean@exemple.fr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="06 12 34 56 78" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="requestType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type de demande *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {requestTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Décrivez vos objectifs et vos attentes..."
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Info & Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Calendly Embed */}
            <div className="bg-[#F9FAFB] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-[#1F2937]">Réservez un appel découverte</h2>
              </div>
              <p className="text-[#6B7280] mb-4">
                Choisissez un créneau pour un appel gratuit de 15 minutes pour discuter de vos
                objectifs.
              </p>
              {/* Calendly iframe placeholder */}
              <div className="bg-white rounded-lg border border-[#E5E7EB] p-8 text-center">
                <Calendar className="w-12 h-12 text-[#6B7280] mx-auto mb-4" />
                <p className="text-[#6B7280]">
                  Intégration Calendly
                  <br />
                  <span className="text-sm">(Remplacez par votre lien Calendly)</span>
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ouvrir Calendly
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1F2937]">Coordonnées</h2>

              <a
                href={`mailto:${coachInfo.email}`}
                className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded-xl hover:bg-[#F3F4F6] transition-colors"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Email</div>
                  <div className="font-medium text-[#1F2937]">{coachInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${coachInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded-xl hover:bg-[#F3F4F6] transition-colors"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Téléphone</div>
                  <div className="font-medium text-[#1F2937]">{coachInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded-xl">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Adresse</div>
                  <div className="font-medium text-[#1F2937]">{coachInfo.address}</div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2157449579837!2d2.2769947!3d48.8699444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8c66c3c9e3%3A0x8edbe5fa8c7b8e3e!2sAv.%20Victor%20Hugo%2C%2075116%20Paris!5e0!3m2!1sfr!2sfr!4v1699000000000!5m2!1sfr!2sfr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation FitCoach Pro"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
