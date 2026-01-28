import type {
  Service,
  Testimonial,
  Certification,
  TimelineItem,
  Transformation,
  BlogPost,
  FAQ,
  Stat,
  Value,
  NavItem,
} from "@/types";

// Navigation
export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/about" },
  { label: "Résultats", href: "/results" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Coach info
export const coachInfo = {
  name: "Alexandre Martin",
  title: "Coach Sportif Certifié",
  experience: "8 ans d'expérience",
  location: "Paris 16ème",
  email: "romainmaes@outlook.fr",
  phone: "06 40 53 38 45",
  address: "42 Avenue Victor Hugo, 75116 Paris",
  bio: [
    "Ancien athlète de haut niveau en athlétisme, j'ai découvert ma vocation pour le coaching sportif après une blessure qui a mis fin à ma carrière de compétiteur. Cette épreuve m'a permis de comprendre l'importance d'un accompagnement personnalisé et bienveillant dans la transformation physique.",
    "Certifié BPJEPS et formé aux dernières méthodologies d'entraînement, j'accompagne depuis 8 ans des hommes et des femmes de tous niveaux dans leur quête de bien-être et de performance. Ma philosophie repose sur une approche holistique qui intègre nutrition, entraînement et mental.",
    "Chaque client est unique, et c'est pourquoi je crée des programmes sur mesure adaptés à vos objectifs, votre emploi du temps et vos contraintes. Mon objectif n'est pas simplement de vous faire perdre du poids ou gagner du muscle, mais de vous transmettre les clés d'un mode de vie sain et durable.",
  ],
};

// Services
export const services: Service[] = [
  {
    id: "coaching-1to1",
    title: "Coaching 1-to-1",
    description:
      "Un suivi personnalisé en présentiel pour des résultats optimaux. Je vous accompagne à chaque séance pour maximiser votre progression.",
    price: "80€",
    priceDetail: "par séance",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    features: [
      "Séances individuelles de 60 minutes",
      "Programme d'entraînement personnalisé",
      "Correction posturale en temps réel",
      "Suivi de progression mensuel",
      "Conseils nutrition inclus",
      "Accès à l'application de suivi",
    ],
  },
  {
    id: "programme-en-ligne",
    title: "Programme en ligne",
    description:
      "Un accompagnement à distance complet avec suivi via application. Idéal pour ceux qui préfèrent s'entraîner de manière autonome.",
    price: "150€",
    priceDetail: "par mois",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    features: [
      "Programme mensuel personnalisé",
      "Vidéos explicatives de chaque exercice",
      "Suivi hebdomadaire par visio",
      "Plan alimentaire adapté",
      "Groupe de motivation privé",
      "Support WhatsApp illimité",
    ],
    popular: true,
  },
  {
    id: "pack-transformation",
    title: "Pack Transformation 3 mois",
    description:
      "Le programme intensif complet pour une transformation visible et durable. L'offre idéale pour atteindre vos objectifs ambitieux.",
    price: "1200€",
    priceDetail: "pour 3 mois",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
    features: [
      "12 séances en présentiel",
      "Programme en ligne complet",
      "Bilan corporel mensuel (InBody)",
      "Plan nutrition détaillé",
      "Coaching mindset inclus",
      "Garantie résultats ou remboursé",
    ],
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Durand",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Alexandre a complètement transformé ma relation avec le sport. En 6 mois, j'ai perdu 15kg et gagné une confiance en moi que je n'avais jamais eue. Son approche bienveillante et professionnelle fait toute la différence.",
    result: "-15kg en 6 mois",
  },
  {
    id: "2",
    name: "Thomas Lefebvre",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "Après des années de tentatives infructueuses, j'ai enfin trouvé un coach qui comprend mes contraintes professionnelles. Les séances sont efficaces et le suivi impeccable. Je recommande à 100%.",
    result: "+8kg de muscle en 4 mois",
  },
  {
    id: "3",
    name: "Marie-Claire Petit",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
    text: "À 52 ans, je pensais que c'était trop tard pour me remettre en forme. Alexandre m'a prouvé le contraire. Je me sens plus énergique et plus forte que jamais. Merci infiniment !",
    result: "-12kg et forme olympique à 52 ans",
  },
];

// Certifications
export const certifications: Certification[] = [
  {
    id: "1",
    name: "BPJEPS Activités de la Forme",
    logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=150&q=80",
    year: "2016",
  },
  {
    id: "2",
    name: "Certification CrossFit Level 2",
    logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=150&q=80",
    year: "2018",
  },
  {
    id: "3",
    name: "Nutritionniste Sportif Certifié",
    logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=150&q=80",
    year: "2019",
  },
  {
    id: "4",
    name: "Coach Mental Performance",
    logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=150&q=80",
    year: "2021",
  },
];

// Timeline
export const timeline: TimelineItem[] = [
  {
    year: "2012",
    title: "Carrière d'athlète",
    description:
      "Champion régional d'athlétisme, spécialiste du 400m haies. Membre de l'équipe de France espoirs.",
  },
  {
    year: "2015",
    title: "Reconversion",
    description:
      "Suite à une blessure, je me tourne vers le coaching et obtiens mon BPJEPS avec mention très bien.",
  },
  {
    year: "2018",
    title: "Ouverture du studio",
    description:
      "Création de FitCoach Pro et installation dans le 16ème arrondissement. Premiers clients fidèles.",
  },
  {
    year: "2024",
    title: "Plus de 500 clients",
    description:
      "Aujourd'hui, plus de 500 personnes m'ont fait confiance pour leur transformation physique.",
  },
];

// Values
export const values: Value[] = [
  {
    icon: "Heart",
    title: "Authenticité",
    description:
      "Je crois en une approche honnête et transparente. Pas de fausses promesses, seulement du travail et des résultats concrets.",
  },
  {
    icon: "Users",
    title: "Bienveillance",
    description:
      "Chaque parcours est unique. J'accompagne mes clients avec empathie et compréhension, sans jugement.",
  },
  {
    icon: "Trophy",
    title: "Excellence",
    description:
      "Je me forme continuellement pour offrir les meilleures méthodes et garantir des résultats optimaux.",
  },
];

// Transformations
export const transformations: Transformation[] = [
  {
    id: "1",
    name: "Jean-Marc D.",
    beforeImage: "/images/jean marc before.png",
    afterImage: "/images/jean marc after.png",
    duration: "6 mois",
    weightLost: "5kg",
    testimonial:
      "Une transformation complète qui a changé ma vie. Alexandre m'a donné les outils pour réussir.",
  },
  {
    id: "2",
    name: "Caroline M.",
    beforeImage: "/images/caroline before.png",
    afterImage: "/images/caroline after.png",
    duration: "4 mois",
    weightLost: "12kg",
    muscleGained: "3kg",
    testimonial:
      "Je n'aurais jamais cru pouvoir atteindre ces résultats. Merci pour ta patience et ton expertise.",
  },
  {
    id: "3",
    name: "Pierre L.",
    beforeImage: "/images/pierre before.png",
    afterImage: "/images/pierre after.png",
    duration: "8 mois",
    muscleGained: "6kg",
    testimonial:
      "Prise de masse réussie après des années de stagnation. Les résultats parlent d'eux-mêmes.",
  },
  {
    id: "4",
    name: "Émilie R.",
    beforeImage: "/images/emilie before.png",
    afterImage: "/images/emilie after.png",
    duration: "3 mois",
    weightLost: "5kg",
    testimonial:
      "Le pack transformation a dépassé toutes mes attentes. Je recommande sans hésitation !",
  },
  {
    id: "5",
    name: "Marc T.",
    beforeImage: "/images/marc before.png",
    afterImage: "/images/marc after.png",
    duration: "5 mois",
    weightLost: "18kg",
    testimonial:
      "À 45 ans, j'ai retrouvé la forme de mes 30 ans. Un accompagnement exceptionnel.",
  },
  {
    id: "6",
    name: "Lucie B.",
    beforeImage: "/images/lucie before.png",
    afterImage: "/images/lucie after.png",
    duration: "6 mois",
    weightLost: "15kg",
    muscleGained: "4kg",
    testimonial:
      "Recomposition corporelle parfaite. Je suis fière de mon parcours avec Alexandre.",
  },
  {
    id: "7",
    name: "François G.",
    beforeImage: "/images/francois before.png",
    afterImage: "/images/francois after.png",
    duration: "4 mois",
    weightLost: "9kg",
    testimonial:
      "Enfin un coach qui comprend mes objectifs de performance. Résultats au rendez-vous.",
  },
  {
    id: "8",
    name: "Nathalie S.",
    beforeImage: "/images/nathalie before.png",
    afterImage: "/images/nathalie after.png",
    duration: "7 mois",
    weightLost: "20kg",
    testimonial:
      "Une aventure incroyable qui m'a permis de reprendre confiance en moi. Merci Alexandre !",
  },
];

// Stats
export const stats: Stat[] = [
  { value: "500+", label: "Clients accompagnés" },
  { value: "8", label: "Années d'expérience" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "4.9/5", label: "Note moyenne" },
];

// Blog posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Les 5 erreurs qui ruinent votre perte de poids",
    excerpt:
      "Découvrez les pièges courants qui empêchent de nombreuses personnes d'atteindre leurs objectifs de perte de poids, et comment les éviter.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    category: "nutrition",
    date: "2024-01-15",
    readTime: "5 min",
    slug: "5-erreurs-perte-de-poids",
  },
  {
    id: "2",
    title: "Comment construire une routine d'entraînement efficace",
    excerpt:
      "Apprenez à créer un programme d'entraînement adapté à vos objectifs et à votre emploi du temps pour des résultats durables.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    category: "training",
    date: "2024-01-10",
    readTime: "7 min",
    slug: "routine-entrainement-efficace",
  },
  {
    id: "3",
    title: "L'importance du mindset dans la transformation physique",
    excerpt:
      "Le mental joue un rôle crucial dans votre réussite. Découvrez comment développer une mentalité de champion.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    category: "mindset",
    date: "2024-01-05",
    readTime: "6 min",
    slug: "mindset-transformation-physique",
  },
  {
    id: "4",
    title: "Guide complet des protéines : quantité et sources",
    excerpt:
      "Tout ce que vous devez savoir sur les protéines pour optimiser votre récupération et votre développement musculaire.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80",
    category: "nutrition",
    date: "2023-12-28",
    readTime: "8 min",
    slug: "guide-complet-proteines",
  },
  {
    id: "5",
    title: "HIIT vs Cardio traditionnel : que choisir ?",
    excerpt:
      "Analyse comparative des deux approches pour vous aider à choisir celle qui correspond à vos objectifs.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80",
    category: "training",
    date: "2023-12-20",
    readTime: "6 min",
    slug: "hiit-vs-cardio",
  },
  {
    id: "6",
    title: "Comment rester motivé sur le long terme",
    excerpt:
      "Stratégies éprouvées pour maintenir votre motivation et atteindre vos objectifs fitness année après année.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    category: "mindset",
    date: "2023-12-15",
    readTime: "5 min",
    slug: "rester-motive-long-terme",
  },
];

// FAQs
export const faqs: FAQ[] = [
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer:
      "Les premiers résultats sont généralement visibles après 4 à 6 semaines de suivi régulier. Cependant, cela dépend de votre point de départ, de vos objectifs et de votre assiduité. Je vous accompagne pour fixer des attentes réalistes dès notre premier rendez-vous.",
  },
  {
    question: "Les séances se déroulent où exactement ?",
    answer:
      "Les séances en présentiel se déroulent dans mon studio privé situé avenue Victor Hugo dans le 16ème arrondissement de Paris. Le studio est entièrement équipé et offre un cadre calme et professionnel. Je peux également me déplacer à votre domicile ou en entreprise selon vos préférences.",
  },
  {
    question: "Je n'ai jamais fait de sport, c'est adapté pour moi ?",
    answer:
      "Absolument ! J'accompagne des personnes de tous niveaux, des grands débutants aux sportifs confirmés. Chaque programme est entièrement personnalisé et adapté à votre condition physique actuelle. Nous progressons à votre rythme, sans pression.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer:
      "Oui, je propose des facilités de paiement pour le pack transformation 3 mois (paiement en 3 fois sans frais). Pour les autres formules, le règlement s'effectue en début de période. N'hésitez pas à me contacter pour discuter de vos besoins.",
  },
  {
    question: "Comment fonctionne le programme en ligne ?",
    answer:
      "Le programme en ligne comprend un plan d'entraînement mensuel avec vidéos explicatives, un suivi hebdomadaire en visioconférence, un plan alimentaire personnalisé et un accès illimité par WhatsApp pour toutes vos questions. Vous bénéficiez également d'un accès à un groupe de motivation privé avec d'autres clients.",
  },
];

// Why choose me points
export const whyChooseMe = [
  {
    icon: "UserCheck",
    title: "Suivi personnalisé",
    description:
      "Chaque programme est conçu sur mesure selon vos objectifs, votre morphologie et votre mode de vie.",
  },
  {
    icon: "TrendingUp",
    title: "Résultats prouvés",
    description:
      "Plus de 500 clients transformés avec un taux de satisfaction de 98%. Les résultats parlent d'eux-mêmes.",
  },
  {
    icon: "Dumbbell",
    title: "Programmes sur mesure",
    description:
      "Des exercices adaptés à votre niveau et à vos contraintes pour une progression optimale et durable.",
  },
];

// Gallery images
export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    alt: "Séance de coaching",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    alt: "Entraînement personnalisé",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
    alt: "Transformation client",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    alt: "Exercices musculation",
  },
  {
    src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80",
    alt: "Coaching fitness",
  },
  {
    src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
    alt: "Entraînement extérieur",
  },
];

// Social links
export const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/fitcoachpro",
    icon: "Instagram",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/fitcoachpro",
    icon: "Facebook",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@fitcoachpro",
    icon: "Youtube",
  },
];

// Request types for contact form
export const requestTypes = [
  { value: "info", label: "Demande d'information" },
  { value: "coaching", label: "Coaching 1-to-1" },
  { value: "online", label: "Programme en ligne" },
  { value: "transformation", label: "Pack Transformation" },
  { value: "other", label: "Autre" },
];
