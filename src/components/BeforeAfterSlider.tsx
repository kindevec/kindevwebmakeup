import React, { useState, useRef, useCallback } from 'react';
import { BeforeAfterItem } from '../types';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface Props {
  item: BeforeAfterItem;
}

export const BeforeAfterSlider: React.FC<Props> = ({ item }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPos(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/5] sm:aspect-[4/3] rounded-2xl overflow-hidden select-none border border-[#D4AF37]/30 shadow-2xl cursor-ew-resize group"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background full width) */}
        <img
          src={item.afterImg}
          alt={`Después - ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold tracking-wider flex items-center gap-1.5 uppercase shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          DESPUÉS (VELVET GLAM)
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={item.beforeImg}
            alt={`Antes - ${item.title}`}
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white/90 text-xs font-semibold tracking-wider uppercase shadow-lg">
            ANTES (NATURAL)
          </div>
        </div>

        {/* Vertical Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-[#FFF0C2] via-[#D4AF37] to-[#997A15] shadow-[0_0_15px_rgba(212,175,55,0.8)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-2xl gold-glow transition-transform group-hover:scale-110">
            <MoveHorizontal className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="bg-[#141414] p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
            {item.title}
            <span className="text-xs font-sans text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
              {item.category}
            </span>
          </h4>
          <p className="text-xs text-neutral-400 mt-1">{item.details}</p>
        </div>
        <p className="text-xs text-[#D4AF37] italic shrink-0">
          *Desliza para comparar
        </p>
      </div>
    </div>
  );
};
