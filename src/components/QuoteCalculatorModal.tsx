import React, { useState } from 'react';
import { X, Sparkles, Calendar, MapPin, Users, CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/content';
import { WhatsAppIcon } from './SocialLogos';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
}

export const QuoteCalculatorModal: React.FC<Props> = ({ isOpen, onClose, defaultServiceId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(defaultServiceId || SERVICES[0].id);
  const [locationType, setLocationType] = useState<'estudio' | 'domicilio'>('estudio');
  const [guestCount, setGuestCount] = useState(1);
  const [eventDate, setEventDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [cityLocation, setCityLocation] = useState('');
  const [includeHairstyling, setIncludeHairstyling] = useState(false);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = selectedService.title;
    const locText = locationType === 'estudio' ? 'En Estudio Velvet Glam' : `A Domicilio / Hotel (${cityLocation || 'Por definir'})`;
    const hairText = includeHairstyling ? 'Sí, incluir peinado' : 'Solo maquillaje';
    
    const message = `Hola Velvet Glam, deseo solicitar cotización personalizada:%0A%0A` +
      `👤 *Nombre:* ${clientName || 'Cliente'}%0A` +
      `💄 *Servicio:* ${serviceName}%0A` +
      `📍 *Ubicación:* ${locText}%0A` +
      `👥 *Cantidad de personas:* ${guestCount}%0A` +
      `💇‍♀️ *Servicio adicional:* ${hairText}%0A` +
      `📅 *Fecha del evento:* ${eventDate || 'Por confirmar'}%0A` +
      (notes ? `📝 *Detalles:* ${notes}%0A` : '') +
      `%0A¡Espero su respuesta para verificar disponibilidad!`;

    const whatsappUrl = `https://wa.me/593991952889?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#141414] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)] my-8 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Cotizador VIP Instantáneo</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
          Cotiza tu Maquillaje de Ensueño
        </h2>
        <p className="text-sm text-neutral-400 mb-6">
          Completa los datos de tu evento para recibir atención prioritaria y verificar disponibilidad de fecha en tiempo real por WhatsApp.
        </p>

        <form onSubmit={handleWhatsAppSend} className="space-y-6">
          
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase text-neutral-300 mb-2">
              1. Selecciona el servicio principal
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((serv) => {
                const active = serv.id === selectedServiceId;
                return (
                  <button
                    key={serv.id}
                    type="button"
                    onClick={() => setSelectedServiceId(serv.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      active
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white gold-glow'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/30'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${active ? 'border-[#D4AF37] bg-[#D4AF37]' : 'border-neutral-500'}`}>
                      {active && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">{serv.title}</div>
                      <div className="text-xs text-[#D4AF37] font-medium mt-0.5">{serv.priceStart}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location & Guest count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-300 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                2. ¿Dónde será la atención?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLocationType('estudio')}
                  className={`py-2.5 px-3 rounded-lg border text-xs font-medium transition-all ${
                    locationType === 'estudio'
                      ? 'bg-[#D4AF37] text-black font-bold border-[#D4AF37]'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  En Estudio
                </button>
                <button
                  type="button"
                  onClick={() => setLocationType('domicilio')}
                  className={`py-2.5 px-3 rounded-lg border text-xs font-medium transition-all ${
                    locationType === 'domicilio'
                      ? 'bg-[#D4AF37] text-black font-bold border-[#D4AF37]'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  A Domicilio / Hotel
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-300 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                3. N° de Personas a Maquillar
              </label>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))}
                  className="w-10 h-8 rounded bg-white/10 text-white font-bold hover:bg-[#D4AF37] hover:text-black transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center font-bold text-sm text-white">
                  {guestCount} {guestCount === 1 ? 'persona' : 'personas'}
                </span>
                <button
                  type="button"
                  onClick={() => setGuestCount((prev) => prev + 1)}
                  className="w-10 h-8 rounded bg-white/10 text-white font-bold hover:bg-[#D4AF37] hover:text-black transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {locationType === 'domicilio' && (
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">
                Lugar / Ciudad o Nombre de Hotel
              </label>
              <input
                type="text"
                placeholder="Ej: Hotel Hilton / Sector Samborondón"
                value={cityLocation}
                onChange={(e) => setCityLocation(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          )}

          {/* Name & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">
                Tu Nombre Completo
              </label>
              <input
                type="text"
                required
                placeholder="Ej: María José"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Fecha Tentativa del Evento
              </label>
              <input
                type="date"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Extra Option */}
          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="hairstyling"
                checked={includeHairstyling}
                onChange={(e) => setIncludeHairstyling(e.target.checked)}
                className="w-4 h-4 accent-[#D4AF37] rounded cursor-pointer"
              />
              <label htmlFor="hairstyling" className="text-xs text-neutral-200 cursor-pointer font-medium">
                ¿Deseas añadir servicio de Peinado Social / Boda?
              </label>
            </div>
            <span className="text-xs text-[#D4AF37] font-semibold">+ Opcional</span>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">
              Hora deseada o notas adicionales
            </label>
            <textarea
              rows={2}
              placeholder="Ej: Necesito estar lista a las 4:00 PM para la ceremonia..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] hover:from-[#FFF0C2] hover:to-[#D4AF37] text-black font-bold py-4 px-6 rounded-2xl shadow-xl gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-base"
            >
              <WhatsAppIcon className="w-6 h-6 text-black" />
              <span>Enviar Cotización Prioritaria a WhatsApp</span>
              <Send className="w-5 h-5 text-black" />
            </button>
            <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 mt-3">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Sin compromisos
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Respuesta en &lt;15 minutos
              </span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
