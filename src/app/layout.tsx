import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitcoachpro.fr"),
  title: {
    default: "FitCoach Pro | Alexandre Martin - Coach Sportif Paris 16",
    template: "%s | FitCoach Pro",
  },
  description:
    "Coaching sportif personnalisé à Paris 16ème avec Alexandre Martin. Programmes sur mesure, suivi nutritionnel et accompagnement mental pour transformer votre corps et votre vie.",
  keywords: [
    "coach sportif Paris",
    "coaching personnalisé",
    "personal trainer",
    "transformation physique",
    "perte de poids",
    "prise de muscle",
    "coaching en ligne",
    "Paris 16",
  ],
  authors: [{ name: "Alexandre Martin" }],
  creator: "FitCoach Pro",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fitcoachpro.fr",
    siteName: "FitCoach Pro",
    title: "FitCoach Pro | Alexandre Martin - Coach Sportif Paris 16",
    description:
      "Coaching sportif personnalisé à Paris 16ème. Programmes sur mesure pour transformer votre corps et votre vie.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FitCoach Pro - Coaching Sportif Personnalisé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitCoach Pro | Coach Sportif Paris 16",
    description:
      "Coaching sportif personnalisé à Paris 16ème avec Alexandre Martin.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Google Analytics Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics placeholder
              // Replace GA_MEASUREMENT_ID with your actual ID
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
