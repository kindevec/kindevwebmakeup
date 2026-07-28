import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppFAB } from './WhatsAppFAB';
import { MobileBottomNav } from './MobileBottomNav';
import { QuoteCalculatorModal } from './QuoteCalculatorModal';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Page Content */}
      <main className="flex-1">
        {React.cloneElement(children as React.ReactElement<any>, {
          onOpenQuoteModal: handleOpenQuoteModal,
        })}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for WhatsApp */}
      <WhatsAppFAB />

      {/* Translucent Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Quote Calculator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultServiceId={selectedServiceId}
      />
    </div>
  );
};
