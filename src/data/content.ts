import { ServiceItem, BeforeAfterItem, GalleryItem, Testimonial, BrandPartner } from '../types';

export const WA_MASTER_URL = "https://wa.me/593991952889?text=Hola,%20deseo%20recibir%20informaci%C3%B3n%20sobre%20el%20maquillaje";
export const FACEBOOK_URL = "https://www.facebook.com/kindevec/";
export const INSTAGRAM_URL = "https://www.instagram.com/kindevx/";

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    name: "Dior Beauty",
    category: "Bases & Iluminación",
    description: "Acabado radiante y durabilidad extrema de 24 horas."
  },
  {
    name: "M·A·C Cosmetics",
    category: "Pigmentos & Labiales",
    description: "Sombras ultra pigmendas y fijación profesional."
  },
  {
    name: "Charlotte Tilbury",
    category: "Skincare & Glow",
    description: "Preparación de piel 'Hollywood Flawless Filter'."
  },
  {
    name: "Tom Ford Beauty",
    category: "Contornos Elegantes",
    description: "Sombras y paletas de lujo para novias exclusivas."
  },
  {
    name: "NARS Cosmetics",
    category: "Rubores & Selladores",
    description: "Efecto piel de porcelana y rubores icónicos."
  },
  {
    name: "Laura Mercier",
    category: "Polvos Translucidos",
    description: "Textura sedosa 'Airbrush' cero transferencia."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "boda-novia-real",
    title: "Maquillaje de Novia Real (Bridal Experience)",
    subtitle: "El paquete definitivo para el día más especial de tu vida.",
    description: "Diseñado para hacerte lucir deslumbrante, fresca y radiante desde el primer abrazo hasta el último baile. Incluye prueba previa en estudio, velado de piel con aerógrafo o técnicas HD, pestaña tira/pelo a pelo premium y kit de retoque exclusivo.",
    duration: "2.5 horas + Prueba previa",
    priceStart: "Desde $180",
    popular: true,
    category: "boda",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Prueba previa personalizada en estudio (2 horas)",
      "Preparación de piel con tratamiento pre-maquillaje luxury",
      "Maquillaje de alta duración a prueba de agua y lágrimas",
      "Diseño de cejas y pestañas de visón/pelo a pelo",
      "Maquillaje de escote y hombros con destellos de luz",
      "Luxury Touch-Up Kit (Labial mini, sellador y polvos)"
    ]
  },
  {
    id: "maquillaje-social-glam",
    title: "Social Glam & Eventos de Gala",
    subtitle: "Elegancia sofisticada para quinceañeras, graduaciones y madrinas.",
    description: "Ideal para invitadas de honor, eventos nocturnos o galas. Adaptamos las mejores tendencias (Smokey, Soft Glam, Foxy Eyes) para realzar tu belleza única según tu tipo de rostro y vestuario.",
    duration: "1.5 horas",
    priceStart: "Desde $75",
    popular: false,
    category: "social",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Preparación de piel ultra hidratante",
      "Técnicas de contouring y highlighting HD",
      "Pestañas de banda premium incluidas",
      "Sellado de alta resistencia de 16+ horas",
      "Asesoría de estilo según vestuario y joyas"
    ]
  },
  {
    id: "editorial-pasarela",
    title: "Editorial, Shooting & TV",
    subtitle: "Maquillaje de alta definición para fotografía, moda y video.",
    description: "Desarrollo de conceptos creativos para campañas de moda, sesiones fotográficas de embarazo, portadas de revistas y pasarelas. Control de brillos y contraste técnico para luces de estudio.",
    duration: "2 - 3 horas",
    priceStart: "Desde $120",
    popular: false,
    category: "editorial",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Técnica 4K Ultra HD a prueba de reflectores",
      "Asistencia técnica durante la sesión de fotos",
      "Cambios de Look o ajustes entre tomas",
      "Uso de pigmentos de alta densidad y texturas avant-garde"
    ]
  },
  {
    id: "automaquillaje-vip",
    title: "Masterclass Automaquillaje VIP",
    subtitle: "Aprende a maquillarte como una profesional paso a paso.",
    description: "Clase personalizada individual donde aprenderás a analizar tu tipo de piel, crear tu rutina diaria exprés y elevar tu look a una noche glamurosa con tu propia cosmetiquera.",
    duration: "3.5 horas",
    priceStart: "Desde $110",
    popular: false,
    category: "curso",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Diagnóstico personalizado de piel y visagismo",
      "Depuración y análisis de tu kit personal de maquillaje",
      "Manual impreso y digital de técnicas paso a paso",
      "Certificado de asistencia impreso",
      "Regalo de kit inicial de brochas Velvet Glam"
    ]
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Transformación Novia Real - Soft Glow",
    category: "Bodas",
    beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    details: "Corrección de rojeces, piel aterciopelada y delineado Foxy Eye para resaltar mirada ahumada cálida."
  },
  {
    id: "ba-2",
    title: "Glamour de Gala - Noche de Graduación",
    category: "Social Glam",
    beforeImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    details: "Contouring estructurado, labios 'overlined' en tono Nude Satinado y pestañas de volumen 3D."
  },
  {
    id: "ba-3",
    title: "Novia Clásica Atemporal",
    category: "Bodas Premium",
    beforeImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop",
    details: "Piel de porcelana efecto seda, destellos dorados champagne e iluminación estratificada."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Novia Romántica en Hacienda",
    category: "bodas",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    likes: 342,
    tags: ["#NoviaVelvet", "#MakeupBoda", "#DiorBeauty"],
    artistNote: "Novia con terminado piel de cristal y tonos rosados cálidos."
  },
  {
    id: "gal-2",
    title: "Editorial Velvet Night",
    category: "editorial",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    likes: 489,
    tags: ["#Editorial", "#HighFashion", "#MACPro"],
    artistNote: "Sesión nocturna con pigmentos metalizados y labios vino."
  },
  {
    id: "gal-3",
    title: "Social Glam Madrina de Boda",
    category: "social",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
    likes: 215,
    tags: ["#SocialGlam", "#CharlotteTilbury", "#EventosGala"],
    artistNote: "Look rejuvenecedor y fresco para madrina de honor."
  },
  {
    id: "gal-4",
    title: "Detalle de Pincelería & Paleta Gold",
    category: "editorial",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop",
    likes: 180,
    tags: ["#LuxuryBrushes", "#VelvetGlamStudio"],
    artistNote: "Nuestros instrumentos higienizados y cosmética de alta gama."
  },
  {
    id: "gal-5",
    title: "Novia Boho Chic con Pestañas Pelo a Pelo",
    category: "bodas",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop",
    likes: 512,
    tags: ["#BridalLook", "#BohoBride", "#NarsCosmetics"],
    artistNote: "Mirada abierta con pestañas naturales ultra livianas."
  },
  {
    id: "gal-6",
    title: "Look Graduación Smokey Bronze",
    category: "social",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop",
    likes: 298,
    tags: ["#SmokeyEyes", "#GraduationMakeup"],
    artistNote: "Ahumado cálido con destellos bronces ideales para la noche."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Valentina Mendoza",
    role: "Novia Real 2025",
    eventDate: "Diciembre 2025",
    comment: "Mi maquillaje duró más de 16 horas intacto. Lloré en la ceremonia, bailé toda la noche y en las fotos de alta resolución la piel se veía increíblemente natural pero perfecta. Elena y su equipo son unas verdaderas artistas del lujo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    serviceUsed: "Paquete Novia Real Premium"
  },
  {
    id: "test-2",
    name: "Camila Arciniegas",
    role: "Quinceañera",
    eventDate: "Enero 2026",
    comment: "Me sentí como una princesa de revista. No quería un maquillaje cargado y captaron mi idea exactamente a la primera. Las brochas son súper suaves y el estudio es precioso.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    serviceUsed: "Social Glam VIP"
  },
  {
    id: "test-3",
    name: "Isabella Viteri",
    role: "Madrina de Boda",
    eventDate: "Febrero 2026",
    comment: "Puntualidad absoluta en el hotel y una atención inolvidable. Utilizan únicamente maquillaje de Dior, MAC y Charlotte Tilbury. Sin duda mi estudio de confianza para cualquier gala.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop",
    serviceUsed: "Atención a Domicilio / Hotel"
  }
];

export const ARTIST_INFO = {
  name: "Elena Rosas",
  title: "Fundadora & Lead Makeup Artist",
  bio: "Con más de 10 años de experiencia internacional y certificaciones en París, Milán y Nueva York, Elena ha diseñado la imagen de más de 600 novias e influyentes de moda. Su filosofía fusiona la salud cutánea con técnicas de alta definición para crear pieles radiantes e inolvidables.",
  experienceYears: "10+",
  bridesCount: "650+",
  certifications: ["Master Certified by Mario Dedivanovic", "Make Up For Ever Academy Paris", "Bridal Specialist New York"],
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  quote: "El maquillaje no debe disfrazarte, sino revelar la versión más poderosa y deslumbrante que ya habita en ti."
};
