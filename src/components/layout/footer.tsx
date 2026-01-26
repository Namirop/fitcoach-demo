import Link from "next/link";
import { Dumbbell, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { navItems, coachInfo, socialLinks } from "@/lib/data";

const socialIcons: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  Youtube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span>FitCoach Pro</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforme ton corps, transforme ta vie. Coaching sportif personnalisé à Paris
              pour atteindre tes objectifs.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <nav className="space-y-3">
              <Link
                href="/services#coaching-1to1"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Coaching 1-to-1
              </Link>
              <Link
                href="/services#programme-en-ligne"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Programme en ligne
              </Link>
              <Link
                href="/services#pack-transformation"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Pack Transformation
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${coachInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{coachInfo.email}</span>
              </a>
              <a
                href={`tel:${coachInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{coachInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{coachInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} FitCoach Pro. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
