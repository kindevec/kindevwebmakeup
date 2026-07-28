import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Star, ShieldCheck, Award, ArrowRight, Heart, CheckCircle2, ChevronRight, Clock, Users } from 'lucide-react';
import { SERVICES, BEFORE_AFTER_DATA, TESTIMONIALS, BRAND_PARTNERS, ARTIST_INFO, WA_MASTER_URL } from '../data/content';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { WhatsAppIcon } from '../components/SocialLogos';

interface Props {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const HomePage: React.FC<Props> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="Novia con Maquillaje de Lujo Velvet Glam"
            className="w-full h-full object-cover object-center opacity-35 scale-105 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-semibold"
          >
            Estudio de Maquillaje de Alta Gama & Bodas
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tighter text-white"
          >
            Belleza <br className="hidden sm:block" />
            <span className="italic font-serif text-[#D4AF37]">Atemporal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400 font-light leading-relaxed"
          >
            Especialistas en novias reales, eventos sociales de gala y producciones editoriales. Realzamos tu esencia con las técnicas más sofisticadas del mundo y cosmética internacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              <span>Cotizar Fecha por WhatsApp</span>
            </button>

            <div className="flex items-center gap-3 px-4 py-2">
              <div className="w-10 h-[1px] bg-white/20" />
              <span className="text-[10px] uppercase tracking-widest text-white/40">Dior • MAC • Chanel</span>
            </div>
          </motion.div>

          {/* Quick Stats Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center"
          >
            <div className="glass-card p-4 rounded-2xl border-white/10">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">650+</div>
              <div className="text-xs text-neutral-400 mt-1">Novias Reales Satisfechas</div>
            </div>
            <div className="glass-card p-4 rounded-2xl border-white/10">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">10+ Años</div>
              <div className="text-xs text-neutral-400 mt-1">De Experiencia Pro</div>
            </div>
            <div className="glass-card p-4 rounded-2xl border-white/10">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">100%</div>
              <div className="text-xs text-neutral-400 mt-1">Marcas de Alta Gama</div>
            </div>
            <div className="glass-card p-4 rounded-2xl border-white/10">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">24 Horas</div>
              <div className="text-xs text-neutral-400 mt-1">Duración Inquebrantable</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* BEFORE / AFTER INTERACTIVE COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Transformaciones de Impacto</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Resultados Reales: <span className="text-gold-gradient">Antes & Después</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Efecto piel de seda, visagismo perfecto y ojos expresivos sin perder la esencia natural de cada rostro. Desliza el controlador para observar el cambio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <BeforeAfterSlider item={BEFORE_AFTER_DATA[0]} />
          
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border-white/10 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#D4AF37]">
                ¿Por qué nuestro acabado es inigualable?
              </h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Preparación de Piel Personalizada:</strong> Evaluamos tu biotipo cutáneo y aplicamos mascarillas de suero hidratante previas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>A prueba de Lágrimas y Sudor:</strong> Sellado técnico multicapa con fijadores de nivel cinematográfico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Fotografía 4K Ultra HD:</strong> Cero efecto "flashback" o reflejos indeseados ante las cámaras profesionales.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-[#1A1810] to-[#0B0B0B] border border-[#D4AF37]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-white">¿Quieres ver más antes y después?</h4>
                <p className="text-xs text-neutral-400">Explora nuestro portafolio completo con más de 50 transformaciones.</p>
              </div>
              <Link
                to="/galeria"
                className="bg-[#D4AF37] text-black font-bold text-xs uppercase px-5 py-3 rounded-full hover:bg-[#FFF0C2] transition-colors shrink-0 flex items-center gap-2"
              >
                <span>Ver Galería</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY BRANDS SHOWCASE */}
      <section className="bg-[#141414]/60 border-y border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase font-semibold tracking-widest text-[#D4AF37] mb-8">
            Tratamientos y Maquillaje Exclusivo con Productos Internacionales de Alta Gama
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {BRAND_PARTNERS.map((brand, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-xl border border-white/5 hover:border-[#D4AF37]/40 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="font-serif text-lg font-bold text-white tracking-wider">{brand.name}</div>
                <div className="text-[10px] text-[#D4AF37] font-medium mt-1">{brand.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SUMMARY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Nuestras Especialidades</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Experiencias de <span className="text-gold-gradient">Maquillaje VIP</span>
            </h2>
          </div>
          <Link
            to="/servicios"
            className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 uppercase tracking-wider"
          >
            <span>Ver todos los detalles y precios</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1.5 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {service.popular && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#E6C65A] to-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                    ★ Más Solicitado
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#D4AF37] font-semibold mb-1">
                    <span>{service.duration}</span>
                    <span>{service.priceStart}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="w-full bg-white/5 hover:bg-[#D4AF37] hover:text-black text-white font-bold text-xs uppercase py-3 rounded-xl border border-white/10 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Cotizar este Servicio</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD ARTIST HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-gold rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_0_50px_rgba(212,175,55,0.15)]">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl">
              <img
                src={ARTIST_INFO.image}
                alt={ARTIST_INFO.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-black/90 backdrop-blur-md p-4 rounded-2xl border border-[#D4AF37] text-center shadow-xl">
              <div className="font-serif text-2xl font-bold text-[#D4AF37]">{ARTIST_INFO.experienceYears}</div>
              <div className="text-[10px] text-neutral-300 uppercase tracking-widest font-semibold">Anos de Trayectoria</div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>Directora Artística</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {ARTIST_INFO.name}
              <span className="block text-sm font-sans text-[#D4AF37] font-normal mt-1">
                {ARTIST_INFO.title}
              </span>
            </h2>

            <blockquote className="italic text-base sm:text-lg text-neutral-300 border-l-2 border-[#D4AF37] pl-4 font-serif">
              "{ARTIST_INFO.quote}"
            </blockquote>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {ARTIST_INFO.bio}
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Certificaciones de Prestigio:</h4>
              <div className="flex flex-wrap gap-2">
                {ARTIST_INFO.certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="text-xs bg-black/60 text-[#D4AF37] px-3 py-1.5 rounded-full border border-[#D4AF37]/30"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/estudio"
                className="bg-[#D4AF37] text-black font-bold text-xs uppercase py-3 px-6 rounded-full hover:bg-[#FFF0C2] transition-all flex items-center gap-2"
              >
                <span>Conocer Más Sobre el Estudio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Star className="w-4 h-4 fill-[#D4AF37]" />
            <span>Reseñas Reales de Novias</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Historias Inolvidables en <span className="text-gold-gradient">Velvet Glam</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                  "{test.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{test.name}</h4>
                  <p className="text-[11px] text-[#D4AF37] font-medium">{test.role} • {test.eventDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGH CONVERTING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-r from-[#1A1810] via-[#2A2310] to-[#0B0B0B] border-2 border-[#D4AF37]/50 shadow-[0_0_60px_rgba(212,175,55,0.25)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/40">
            <Sparkles className="w-4 h-4" />
            <span>Disponibilidad Limitada por Temporada</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white max-w-3xl mx-auto">
            ¿Lista para lucir la versión más deslumbrante de ti misma?
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto font-light">
            Las fechas para bodas y eventos de fin de semana suelen agotarse con meses de anticipación. Escríbenos directamente para separar tu cita.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_MASTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] text-black font-bold text-base py-4 px-8 rounded-full shadow-2xl gold-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="w-6 h-6 text-black" />
              <span>Chatear con el Estudio por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
