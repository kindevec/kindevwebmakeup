import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, Clock, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Star, ArrowRight } from 'lucide-react';
import { SERVICES, BRAND_PARTNERS, WA_MASTER_URL } from '../data/content';
import { WhatsAppIcon } from '../components/SocialLogos';

interface Props {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Con cuánta anticipación debo reservar mi maquillaje de novia?",
      a: "Recomendamos reservar tu fecha con un mínimo de 3 a 6 meses de anticipación, especialmente para la temporada alta de bodas (junio - diciembre). Sin embargo, siempre puedes consultar disponibilidad de última hora por WhatsApp."
    },
    {
      q: "¿La prueba de maquillaje de novia está incluida?",
      a: "Sí, nuestro paquete de 'Novia Real' incluye una sesión de prueba previa de 2 horas en nuestro estudio. En esta sesión probamos tonos, pestañas y estilos de peinado hasta lograr tu aprobación al 100%."
    },
    {
      q: "¿Realizan atención a domicilio u hoteles?",
      a: "¡Por supuesto! Nos trasladamos con nuestro equipo técnico portátil (iluminación, sillas y cosmética de lujo) directamente a tu domicilio, hotel o hacienda dentro y fuera de la ciudad."
    },
    {
      q: "¿Qué marcas de maquillaje utilizan en el estudio?",
      a: "Utilizamos exclusivamente productos de firmas de lujo internacionales como Dior Beauty, M·A·C Cosmetics, Charlotte Tilbury, Tom Ford, NARS, Laura Mercier y Chanel, garantizando cero alergias y máxima durabilidad."
    },
    {
      q: "¿Cómo se realiza la separación de la fecha?",
      a: "Para asegurar la fecha de tu evento en agenda se requiere un anticipo del 50% mediante transferencia bancaria o tarjeta. El saldo restante se cancela el día de la cita o prueba."
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* PAGE HEADER */}
      <section className="relative py-20 bg-gradient-to-b from-[#141414] to-[#0B0B0B] border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Carta de Servicios VIP</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            Servicios de <span className="text-gold-gradient">Maquillaje Profesional</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Paquetes exclusivos diseñados para bodas, eventos sociales de gala, producciones de moda y capacitaciones personalizadas.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              className={`glass-card rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-[#D4AF37]/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl ${
                service.popular ? 'gold-glow' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {service.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#E6C65A] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    ★ Servicio Estrella
                  </div>
                )}
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs text-[#D4AF37] uppercase font-semibold tracking-wider">
                      {service.subtitle}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                      {service.title}
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-2xl font-bold text-[#D4AF37]">{service.priceStart}</div>
                    <div className="text-[11px] text-neutral-400 flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3 text-[#D4AF37]" /> {service.duration}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">¿Qué incluye este paquete?</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] text-black font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg gold-glow hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-black" />
                    <span>Cotizar este Servicio por WhatsApp</span>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* HIGH END COSMETICS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-gold p-8 rounded-3xl border border-[#D4AF37]/30 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantía de Calidad e Higiene</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">
            Cosmética de Lujo Internacional en tus Pinceles
          </h2>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto font-light">
            Cuidamos la textura de tu piel trabajando exclusivamente con fórmulas dermatológicamente testeadas, hipoalergénicas y libres de crueldad animal.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {BRAND_PARTNERS.map((brand, b) => (
              <span key={b} className="bg-black/80 text-white border border-[#D4AF37]/30 px-4 py-2 rounded-full text-xs font-serif font-bold">
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Resuelve tus Dudas sobre el Servicio
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left font-serif text-base sm:text-lg font-bold text-white flex items-center justify-between gap-4 hover:text-[#D4AF37] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* DIRECT CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold text-white">
          ¿Tienes un evento especial o requerimiento personalizado?
        </h2>
        <p className="text-neutral-300 text-sm">
          Platícanos los detalles de tu vestido, peinado y hora del evento para armar una propuesta a tu medida.
        </p>
        <button
          onClick={() => onOpenQuoteModal()}
          className="bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] text-black font-bold py-4 px-8 rounded-full shadow-xl gold-glow hover:scale-105 transition-all inline-flex items-center gap-2"
        >
          <WhatsAppIcon className="w-5 h-5 text-black" />
          <span>Solicitar Cotización Personalizada por WhatsApp</span>
        </button>
      </section>

    </div>
  );
};
