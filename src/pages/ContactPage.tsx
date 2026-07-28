import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Sparkles, Send, Calendar, Users, ShieldCheck } from 'lucide-react';
import { WA_MASTER_URL, FACEBOOK_URL, INSTAGRAM_URL } from '../data/content';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from '../components/SocialLogos';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Boda / Novia',
    eventDate: '',
    guestCount: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Velvet Glam, mi nombre es ${formData.name}.%0A%0A` +
      `📞 *Teléfono:* ${formData.phone}%0A` +
      `💄 *Tipo de Evento:* ${formData.eventType}%0A` +
      `📅 *Fecha Tentativa:* ${formData.eventDate || 'Por definir'}%0A` +
      `👥 *N° Personas:* ${formData.guestCount}%0A` +
      (formData.message ? `📝 *Mensaje:* ${formData.message}%0A` : '') +
      `%0A¡Deseo recibir asesoría y verificar disponibilidad!`;

    window.open(`https://wa.me/593991952889?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* PAGE HEADER */}
      <section className="relative py-20 bg-gradient-to-b from-[#141414] to-[#0B0B0B] border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Atención Personalizada</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            Contacto & <span className="text-gold-gradient">Reservas VIP</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Atendemos únicamente previa cita en nuestro estudio o a domicilio. Déjanos tus datos para brindarte asesoría inmediata.
          </p>
        </div>
      </section>

      {/* FORM & INFO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card-gold p-8 rounded-3xl border border-[#D4AF37]/30 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-white">Información del Estudio</h2>
              
              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Ubicación del Estudio</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Av. Principal de Lujo, Plaza VIP Nivel 2, Estudio 204. Parqueadero privado vigilado.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Atención Telefónica / WhatsApp</h4>
                    <a href={WA_MASTER_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-[#D4AF37] font-semibold hover:underline mt-0.5 block">
                      +593 99 195 2889
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horarios de Atención</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Lunes a Domingo: 07:00 AM - 19:00 PM (Previa Cita Reservada)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <h4 className="font-serif text-sm font-bold text-white">Nuestras Redes Oficiales:</h4>
                <div className="flex items-center gap-3">
                  <a
                    href={WA_MASTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 flex items-center justify-center gap-2 text-xs font-bold hover:bg-[#25D366] hover:text-black transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-white hover:text-[#D4AF37] border border-white/10 flex items-center justify-center transition-all"
                    aria-label="Facebook Kindev"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-white hover:text-[#D4AF37] border border-white/10 flex items-center justify-center transition-all"
                    aria-label="Instagram Kindev"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Map Placeholder Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-3 text-center">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-neutral-900 relative border border-white/10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                  alt="Mapa de Ubicación Velvet Glam"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center p-4">
                  <MapPin className="w-8 h-8 text-[#D4AF37] animate-bounce" />
                  <span className="font-serif font-bold text-white text-sm mt-1">Velvet Glam Studio</span>
                  <span className="text-[10px] text-neutral-300">Plaza VIP • Parqueadero Privado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Formulario de Cotización Directa</h2>
                <p className="text-xs text-neutral-400 mt-1">Completa tus datos y serás redirigida instantáneamente a nuestro chat de WhatsApp.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Tu Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Sofía Ramírez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Teléfono o WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: +593 99 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Tipo de Evento</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Boda / Novia Real">Boda / Novia Real</option>
                      <option value="Social Glam / Graduación">Social Glam / Graduación</option>
                      <option value="Madrina / Acompañante">Madrina / Acompañante</option>
                      <option value="Editorial / Fotografía">Editorial / Fotografía</option>
                      <option value="Automaquillaje VIP">Automaquillaje VIP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Fecha del Evento</label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Mensaje o Detalles del Vestido / Evento</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos la hora de la boda, lugar o preferencia de tonos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] text-black font-bold text-sm uppercase py-4 rounded-2xl shadow-xl gold-glow hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 text-black" />
                  <span>Enviar Consulta Directa a WhatsApp</span>
                  <Send className="w-4 h-4 text-black" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
