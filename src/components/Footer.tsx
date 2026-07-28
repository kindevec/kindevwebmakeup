import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Sparkles, Heart } from 'lucide-react';
import { WA_MASTER_URL, FACEBOOK_URL, INSTAGRAM_URL } from '../data/content';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialLogos';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070707] border-t border-[#D4AF37]/20 pt-16 pb-24 md:pb-12 text-white relative overflow-hidden">
      {/* Subtle gold glow behind footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#D4AF37] blur-[80px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#0B0B0B]">
                <span className="-rotate-45 text-xs font-bold tracking-widest text-[#D4AF37]">VG</span>
              </div>
              <div className="flex flex-col ml-1">
                <span className="font-sans text-xl font-light tracking-[0.2em] uppercase text-white italic">
                  VELVET <span className="text-[#D4AF37] font-semibold not-italic">GLAM</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-medium -mt-1">
                  Estudio de Maquillaje
                </span>
              </div>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Especialistas en maquillaje profesional de alta gama para bodas, eventos sociales y producciones editoriales. Pieles radiantes, técnicas de alta definición y cosmética internacional.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={WA_MASTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-black text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1877F2] hover:text-white text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 hover:text-white text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#D4AF37] tracking-wider uppercase">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" /> Inicio
                </Link>
              </li>
              <li>
                <Link to="/estudio" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" /> El Estudio & Elena Rosas
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" /> Servicios & Paquetes Novia
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" /> Portafolio Antes y Después
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" /> Reservas & Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#D4AF37] tracking-wider uppercase">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Maquillaje de Novia con Prueba Previa
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Social Glam, Graduaciones & Gala
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Editorial, Pasarela & Fotografía 4K
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Masterclass de Automaquillaje VIP
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Atención a Domicilio u Hotel VIP
              </li>
            </ul>
          </div>

          {/* Direct Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#D4AF37] tracking-wider uppercase">
              Atención al Cliente
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Av. Principal de Lujo, Plaza VIP Nivel 2, Estudio 204</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={WA_MASTER_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  +593 99 195 2889 (WhatsApp Directo)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Lun - Dom: 07:00 AM - 19:00 PM (Previa Cita)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Obligatory Footer Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500 uppercase tracking-[0.2em] gap-4">
          <div className="flex gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Facebook</a>
            <a href={WA_MASTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
          </div>
          <div>
            © 2026 Todos los derechos reservados. Desarrollado por <span className="text-white font-bold tracking-tighter">Kin<span className="text-[#D4AF37]">dev</span></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
