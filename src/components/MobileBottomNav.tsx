import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sparkles, Image, PhoneCall, HeartHandshake } from 'lucide-react';
import { WA_MASTER_URL } from '../data/content';
import { WhatsAppIcon } from './SocialLogos';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Inicio', path: '/', icon: Home },
    { label: 'Estudio', path: '/estudio', icon: HeartHandshake },
    { label: 'Servicios', path: '/servicios', icon: Sparkles },
    { label: 'Galería', path: '/galeria', icon: Image },
    { label: 'Contacto', path: '/contacto', icon: PhoneCall },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B]/90 backdrop-blur-xl border-t border-[#D4AF37]/30 px-2 py-2 shadow-2xl">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors min-w-[56px] ${
                isActive ? 'text-[#D4AF37] font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110 text-[#D4AF37]' : ''}`} />
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
            </Link>
          );
        })}

        {/* WhatsApp Direct Tab */}
        <a
          href={WA_MASTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[#25D366] font-bold hover:scale-105 transition-transform"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-0.5">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
