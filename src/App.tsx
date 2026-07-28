import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

// ScrollToTop helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage onOpenQuoteModal={() => {}} />} />
          <Route path="/estudio" element={<AboutPage onOpenQuoteModal={() => {}} />} />
          <Route path="/servicios" element={<ServicesPage onOpenQuoteModal={() => {}} />} />
          <Route path="/galeria" element={<GalleryPage onOpenQuoteModal={() => {}} />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<HomePage onOpenQuoteModal={() => {}} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
