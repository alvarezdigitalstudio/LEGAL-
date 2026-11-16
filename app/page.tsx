'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PracticeAreasSection from '@/components/PracticeAreasSection';
import Interactive3DForm from '@/components/Interactive3DForm';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import FaqSection from '@/components/FaqSection';
import LocationSection from '@/components/LocationSection';
import CookieBannerAndModals from '@/components/CookieBannerAndModals';
import Footer from '@/components/Footer';
import { ATTORNEY_INFO, LegalPracticeArea } from '@/lib/legal-data';
import { Shield } from 'lucide-react';

export default function HomePage() {
  const [selectedArea, setSelectedArea] = useState<LegalPracticeArea | null>(null);
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);
  const [openTermsModal, setOpenTermsModal] = useState(false);
  const [openCookieModal, setOpenCookieModal] = useState(false);
  const [openRefundModal, setOpenRefundModal] = useState(false);

  const scrollToBooking = () => {
    const el = document.getElementById('consulta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0B0B0B] selection:bg-[#E7D18A]/50 selection:text-[#0B0B0B] overflow-x-clip">
      {/* Sticky Header Navigation with Official Logo & CSJ Credentials */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Background Video, Editorial Typography & Scroll Down Invitation */}
        <HeroSection onOpenBooking={scrollToBooking} />

        {/* 2. Sobre el Abogado & VINDEXGOMEZ LEGAL Trayectoria (10+ Años, David Chiriquí) */}
        <AboutSection onOpenBooking={scrollToBooking} />

        {/* 3. Catálogo de 13 Áreas de Práctica Especializadas con Skeleton Loaders */}
        <PracticeAreasSection onSelectArea={(area) => setSelectedArea(area)} />

        {/* 4. Solicitud Oficial de Consulta Jurídica (WhatsApp + Ley 81 de Panamá) */}
        <section id="consulta" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#F5F5F5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-[#0B0B0B] uppercase tracking-widest mb-3">
                <Shield className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                <span>Agendamiento Rápido & Confidencial</span>
              </div>
              <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0B0B] tracking-tight">
                Consulte su Caso con el <span className="text-[#D4AF37]">Licdo. Jaime Gómez</span>
              </h2>
              <p className="mt-4 font-open-sans text-[#242424] text-sm sm:text-base leading-relaxed">
                Complete el formulario interactivo para conectarse directamente con el WhatsApp oficial del despacho. Evaluamos su situación con reserva deontológica y le brindamos orientación jurídica clara.
              </p>
            </div>

            {/* Interactive Form Container */}
            <div className="max-w-3xl mx-auto">
              <Interactive3DForm
                onOpenPrivacyPolicy={() => setOpenPrivacyModal(true)}
                onOpenTermsModal={() => setOpenTermsModal(true)}
              />
            </div>
          </div>
        </section>

        {/* 5. Preguntas Frecuentes (FAQ Section) */}
        <FaqSection onOpenBooking={scrollToBooking} />

        {/* 6. Ubicación y Contacto Directo (NAP David Chiriquí, Google Maps & Outlook) */}
        <LocationSection />
      </main>

      {/* Footer with VINDEXGOMEZ LEGAL Branding, 4 Legal Modals, Business Info & Disclaimer */}
      <Footer
        onOpenPrivacyModal={() => setOpenPrivacyModal(true)}
        onOpenTermsModal={() => setOpenTermsModal(true)}
        onOpenCookieModal={() => setOpenCookieModal(true)}
        onOpenRefundModal={() => setOpenRefundModal(true)}
      />

      {/* Practice Area Detailed Modal with Subservices & Embedded Form */}
      <ServiceDetailModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenPrivacyPolicy={() => setOpenPrivacyModal(true)}
        onOpenTermsModal={() => setOpenTermsModal(true)}
      />

      {/* Cookie CMP Banner & 4 Legal Modals */}
      <CookieBannerAndModals
        openPrivacyModal={openPrivacyModal}
        setOpenPrivacyModal={setOpenPrivacyModal}
        openTermsModal={openTermsModal}
        setOpenTermsModal={setOpenTermsModal}
        openCookieModal={openCookieModal}
        setOpenCookieModal={setOpenCookieModal}
        openRefundModal={openRefundModal}
        setOpenRefundModal={setOpenRefundModal}
      />

      {/* Floating WhatsApp Action Button for Quick Access on Mobile/Desktop */}
      <aside aria-label="Contacto rápido" className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${ATTORNEY_INFO.phoneRaw}?text=Hola%20Licdo.%20Jaime%20G%C3%B3mez,%20solicito%20una%20consulta%20legal%20confidencial.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0B0B0B] text-[#D4AF37] shadow-xl hover:bg-[#D4AF37] hover:text-[#0B0B0B] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Contactar por WhatsApp al Licdo. Jaime Gómez Araúz"
        >
          <i className="fa-brands fa-whatsapp text-3xl" aria-hidden="true" />
          <span className="absolute right-16 bg-[#0B0B0B] text-[#FFFFFF] font-montserrat text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-[#D4AF37]/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Consulta Directa WhatsApp
          </span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4AF37] border border-[#0B0B0B]" />
          </span>
        </a>
      </aside>
    </div>
  );
}
