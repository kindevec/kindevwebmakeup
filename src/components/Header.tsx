import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Phone, ChevronRight } from 'lucide-react';
import { WA_MASTER_URL, FACEBOOK_URL, INSTAGRAM_URL } from '../data/content';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialLogos';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'El Estudio', path: '/estudio' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0B0B0B] via-[#1A1810] to-[#0B0B0B] border-b border-[#D4AF37]/20 py-2 px-4 text-center text-xs text-neutral-300 flex items-center justify-center gap-2 sm:gap-6">
        <span className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          Agenda Abierta Bodas 2026 - 2027
        </span>
        <span className="hidden md:inline text-neutral-500">|</span>
        <span className="hidden md:inline text-neutral-300">
          Atención Exclusiva en Estudio VIP o a Domicilio / Hotel
        </span>
        <a
          href={WA_MASTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden sm:flex items-center gap-1 text-[#D4AF37] hover:underline font-semibold text-xs"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>Cotizar Ahora</span>
        </a>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#0B0B0B] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <span className="-rotate-45 text-xs font-bold tracking-widest text-[#D4AF37] group-hover:text-black transition-colors">VG</span>
            </div>
            <div className="flex flex-col ml-1">
              <span className="font-sans text-lg sm:text-2xl font-light tracking-[0.2em] uppercase text-white italic group-hover:text-[#D4AF37] transition-colors">
                VELVET <span className="text-[#D4AF37] font-semibold not-italic">GLAM</span>
              </span>
              <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-medium -mt-1">
                Studio & Bridal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative transition-colors py-1 ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social Icons & Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-white/5 hover:bg-[#D4AF37] hover:text-black text-gray-400 flex items-center justify-center transition-all border border-white/10"
                aria-label="Facebook Kindev"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-white/5 hover:bg-[#D4AF37] hover:text-black text-gray-400 flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram Kindev"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Citar Ahora</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#D4AF37] text-black p-2 rounded-full gold-glow text-xs font-bold"
              aria-label="Cotización rápida"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 animate-fade-in">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37] bg-black flex items-center justify-center text-[#D4AF37] text-sm font-bold">
                  VG
                </div>
                <span className="font-serif text-lg font-bold text-white tracking-widest">
                  VELVET GLAM
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-lg font-medium p-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 font-bold'
                        : 'text-neutral-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 opacity-60" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-gradient-to-r from-[#E6C65A] via-[#D4AF37] to-[#B88E18] text-black font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Cotizar Maquillaje por WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-white hover:text-[#D4AF37] border border-white/10"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-white hover:text-[#D4AF37] border border-white/10"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={WA_MASTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
