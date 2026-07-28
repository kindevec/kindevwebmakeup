import React, { useState } from 'react';
import { Sparkles, Heart, Eye, Filter, X, Instagram, Share2, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, BEFORE_AFTER_DATA, WA_MASTER_URL, INSTAGRAM_URL } from '../data/content';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GalleryItem } from '../types';
import { WhatsAppIcon, InstagramIcon } from '../components/SocialLogos';

interface Props {
  onOpenQuoteModal: () => void;
}

export const GalleryPage: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'todas' | 'bodas' | 'social' | 'editorial'>('todas');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleInquireLook = (itemTitle: string) => {
    const text = `Hola Velvet Glam, me encantó este look de su galería: "${itemTitle}". Deseo cotizar un maquillaje similar.`;
    const url = `https://wa.me/593991952889?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HEADER BANNER */}
      <section className="relative py-20 bg-gradient-to-b from-[#141414] to-[#0B0B0B] border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Portafolio Real & Instagram Feed</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            Galería de <span className="text-gold-gradient">Trabajos & Novias</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Explora de cerca el acabado de piel, difuminados de sombras y detalles de alta definición creados en Velvet Glam Studio.
          </p>
        </div>
      </section>

      {/* BEFORE & AFTER SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs text-[#D4AF37] uppercase font-semibold tracking-widest">Muestra Interactiva</span>
          <h2 className="font-serif text-3xl font-bold text-white">Transformaciones Antes & Después</h2>
          <p className="text-xs text-neutral-400">Desliza la barra central para comparar la preparación del rostro y el maquillaje final.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEFORE_AFTER_DATA.map((ba) => (
            <BeforeAfterSlider key={ba.id} item={ba} />
          ))}
        </div>
      </section>

      {/* INSTAGRAM PORTFOLIO FEED WITH CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Portafolio de Estilos & Looks
            </h2>
            <p className="text-xs text-neutral-400 mt-1">Haz clic en cualquier imagen para ver detalles y cotizar el estilo exacto.</p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todas', label: 'Todas las Fotos' },
              { id: 'bodas', label: 'Novias & Bodas' },
              { id: 'social', label: 'Social & Gala' },
              { id: 'editorial', label: 'Editorial & Moda' },
            ].map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-[#D4AF37] text-black shadow-lg gold-glow font-bold'
                      : 'bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-xl bg-neutral-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 uppercase font-semibold">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-white">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{item.likes}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 text-[10px] text-neutral-300">
                    {item.tags.map((tag, t) => (
                      <span key={t}>{tag}</span>
                    ))}
                  </div>
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#D4AF37]">
                    <span>Ver ampliación y notas</span>
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM FOLLOW CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-gold p-8 rounded-3xl border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shrink-0 shadow-lg">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white">
                <InstagramIcon className="w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">Satanás en Instagram @kindevx</h3>
              <p className="text-xs text-neutral-300 mt-1">Publicamos contenido diario de pruebas de novias, reels de antes y después y tips de maquillaje.</p>
            </div>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-full border border-white/20 shrink-0 flex items-center gap-2 transition-all"
          >
            <span>Seguir en Instagram</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#141414] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white hover:text-[#D4AF37] flex items-center justify-center border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-1/2 aspect-[4/5] md:aspect-auto bg-black relative">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
              <div>
                <span className="text-[10px] text-[#D4AF37] uppercase font-semibold tracking-wider border border-[#D4AF37]/30 px-2.5 py-1 rounded-full">
                  {activeModalItem.category}
                </span>

                <h3 className="font-serif text-2xl font-bold text-white mt-3">
                  {activeModalItem.title}
                </h3>

                {activeModalItem.artistNote && (
                  <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-1">
                    <div className="font-semibold text-[#D4AF37]">Nota de la Maquilladora:</div>
                    <p>{activeModalItem.artistNote}</p>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5 text-xs text-[#D4AF37]">
                  {activeModalItem.tags.map((t, idx) => (
                    <span key={idx} className="bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    handleInquireLook(activeModalItem.title);
                    setActiveModalItem(null);
                  }}
                  className="w-full bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] text-black font-bold text-xs uppercase py-3.5 rounded-xl shadow-lg gold-glow flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-black" />
                  <span>Cotizar este Look Exacto</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
