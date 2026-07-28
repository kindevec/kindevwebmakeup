import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Award, ShieldCheck, MapPin, CheckCircle2, Coffee, Sparkle, ArrowRight } from 'lucide-react';
import { ARTIST_INFO, BRAND_PARTNERS, WA_MASTER_URL } from '../data/content';
import { WhatsAppIcon } from '../components/SocialLogos';

interface Props {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<Props> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* HEADER BANNER */}
      <section className="relative py-20 bg-gradient-to-b from-[#141414] to-[#0B0B0B] border-b border-white/10 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Nuestra Historia & Esencia</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            El Arte detras de <span className="text-gold-gradient">Velvet Glam</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Un santuario de belleza concebido para ofrecerte una experiencia de maquillaje de clase mundial, donde cada pincelada celebra tu autenticidad.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
              <Heart className="w-4 h-4" />
              <span>Nuestra Filosofía</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Elegancia atemporal que resalta la salud y esplendor de tu piel.
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              En Velvet Glam entendemos que el maquillaje no debe ser una máscara, sino un ritual de elevación personal. Combinamos el conocimiento de la dermatología estética con las técnicas más sofisticadas de visagismo y colorimetría.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-4 rounded-xl border-white/10">
                <div className="font-serif text-lg font-bold text-[#D4AF37] mb-1">Higienización Estricta</div>
                <p className="text-xs text-neutral-400">Pincelería y paletas desinfectadas con grado hospitalario para cuidar la salud cutánea.</p>
              </div>
              <div className="glass-card p-4 rounded-xl border-white/10">
                <div className="font-serif text-lg font-bold text-[#D4AF37] mb-1">Pruebas Personalizadas</div>
                <p className="text-xs text-neutral-400">Sesiones previas de armonización para garantizar tranquilidad absoluta el día del evento.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"
                alt="Instalaciones y Cosmética Velvet Glam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card-gold p-6 rounded-2xl border border-[#D4AF37] hidden sm:block max-w-xs shadow-2xl">
              <div className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-1">100% Garantizado</div>
              <div className="text-sm font-semibold text-white">Marcas Oficiales Importadas Directamente</div>
            </div>
          </div>

        </div>
      </section>

      {/* LEAD ARTIST PROFILE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl">
              <img
                src={ARTIST_INFO.image}
                alt={ARTIST_INFO.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
              Fundadora & Maquilladora Principal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {ARTIST_INFO.name}
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {ARTIST_INFO.bio}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-base font-bold text-white">Formación e Hitso de Carrera:</h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Certificación Internacional en París & Nueva York.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Más de 650 novias acompañadas en Ecuador e internacionalmente.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Directora de maquillaje en pasarelas de alta costura y editoriales.
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] text-black font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg gold-glow hover:scale-105 transition-all flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>Agendar Cita Personalizada con Elena</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* STUDIO FACILITIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Coffee className="w-4 h-4" />
            <span>Espacio de Lujo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Nuestras Instalaciones <span className="text-gold-gradient">VIP</span>
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Diseñadas para brindarte máxima comodidad, iluminación técnica neutra de alta fidelidad de color y una atmósfera relajante antes de tu gran evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold font-serif text-xl">
              01
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Estaciones Ergonómicas VIP</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Sillones de cuero reclinables con espejos de luz continua temperatura 5500K para visualizar los colores exactos de fotografía.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold font-serif text-xl">
              02
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Cava de Bebidas & Bar de Café</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Disfruta de una copa de champagne mimosas, infusiones de té orgánico o espresso mientas te consentimos a ti y a tus acompañantes.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold font-serif text-xl">
              03
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Privacidad & Seguridad</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Atención exclusiva a puerta cerrada para novias e invitadas de honor, parqueadero privado vigilado y climatización optimizada.
            </p>
          </div>
        </div>
      </section>

      {/* LUXURY PRODUCTS */}
      <section className="bg-[#141414] py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs text-[#D4AF37] uppercase font-semibold tracking-widest">Insumos de Alta Gama</span>
            <h2 className="font-serif text-3xl font-bold text-white">El Kit de Cosmeticos con el que Trabajamos</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {BRAND_PARTNERS.map((brand, i) => (
              <div key={i} className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-bold shrink-0">
                  ★
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">{brand.name}</h4>
                  <div className="text-xs text-[#D4AF37] font-medium">{brand.category}</div>
                  <p className="text-xs text-neutral-400 mt-1">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          ¿Deseas vivir la experiencia Velvet Glam?
        </h2>
        <p className="text-neutral-300 text-sm font-light">
          Escríbenos directamente para asesorarte con el paquete que mejor se adapte a tu boda o evento social.
        </p>
        <button
          onClick={onOpenQuoteModal}
          className="bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] text-black font-bold py-4 px-8 rounded-full shadow-xl gold-glow hover:scale-105 transition-all inline-flex items-center gap-2"
        >
          <WhatsAppIcon className="w-5 h-5 text-black" />
          <span>Cotizar mi Fecha por WhatsApp</span>
        </button>
      </section>

    </div>
  );
};
