import React from 'react';
import { WA_MASTER_URL } from '../data/content';
import { WhatsAppIcon } from './SocialLogos';

export const WhatsAppFAB: React.FC = () => {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex items-center gap-3 group">
      {/* Tooltip Badge */}
      <div className="hidden sm:flex items-center gap-2 bg-black/90 text-white text-xs font-semibold py-2 px-3.5 rounded-full border border-[#D4AF37]/50 shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        <span>Cotiza por WhatsApp en tiempo real</span>
      </div>

      {/* Floating Button */}
      <a
        href={WA_MASTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chatear por WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />
        <WhatsAppIcon className="w-8 h-8 text-white relative z-10" />
      </a>
    </div>
  );
};
