'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { LegalPracticeArea } from '@/lib/legal-data';
import Interactive3DForm from './Interactive3DForm';
import { X, CheckCircle, Scale, Shield } from 'lucide-react';

interface ServiceDetailModalProps {
  area: LegalPracticeArea | null;
  onClose: () => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenTermsModal?: () => void;
}

export default function ServiceDetailModal({
  area,
  onClose,
  onOpenPrivacyPolicy,
  onOpenTermsModal,
}: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (area) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [area, onClose]);

  if (!area) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn"
    >
      {/* Background click overlay */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#FFFFFF] border-2 border-[#D4AF37] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col text-[#0B0B0B]">
        {/* Top bar with close button */}
        <div className="sticky top-0 z-30 bg-[#FFFFFF]/95 backdrop-blur-md px-6 py-4 border-b border-[#F5F5F5] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-8 h-8 rounded-full bg-[#0B0B0B] border border-[#D4AF37] text-[#D4AF37] font-montserrat font-bold text-xs flex items-center justify-center shadow-sm flex-shrink-0">
              {area.number < 10 ? `0${area.number}` : area.number}
            </span>
            <div className="min-w-0">
              <span className="font-montserrat text-[11px] font-bold text-[#242424] uppercase tracking-wider block">
                {area.tag}
              </span>
              <span className="text-base font-montserrat font-bold text-[#0B0B0B] truncate max-w-md block">
                {area.title}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#242424] hover:text-[#FFFFFF] rounded-full bg-[#F5F5F5] hover:bg-[#0B0B0B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] flex-shrink-0"
            aria-label="Cerrar ventana de detalles"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header Banner with Image & Overview */}
          <div className="relative rounded-xl overflow-hidden min-h-[220px] sm:min-h-[260px] flex items-end p-6 border border-[#242424]/15 bg-[#0B0B0B]">
            <Image
              src={area.image}
              alt={`Imagen representativa de ${area.title} - VINDEXGOMEZ LEGAL`}
              fill
              loading="lazy"
              className="object-cover filter brightness-[0.45] contrast-[1.08]"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block font-montserrat text-xs font-bold text-[#0B0B0B] bg-[#D4AF37] px-3 py-1 rounded mb-2 shadow-sm uppercase tracking-wide">
                Área de Práctica No. {area.number}
              </span>
              <h2 id="service-modal-title" className="font-montserrat text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] leading-tight">
                {area.title}
              </h2>
              <p className="mt-2 font-open-sans text-sm sm:text-base text-[#F5F5F5] leading-relaxed max-w-2xl drop-shadow">
                {area.shortDesc}
              </p>
            </div>
          </div>

          {/* 2-Column Content: Left Detailed Services & Benefits | Right Embedded 3D Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Scope & Specific Subservices */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-montserrat text-lg sm:text-xl font-bold text-[#0B0B0B] flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                  <span>Alcance y Representación Procesal</span>
                </h3>
                <p className="font-open-sans text-sm text-[#242424] leading-relaxed">
                  {area.fullDesc}
                </p>
              </div>

              {/* Sub-services Viñetas Específicas */}
              <div className="p-5 rounded-xl bg-[#F5F5F5] border border-[#242424]/10 shadow-sm">
                <h4 className="font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-wider mb-4">
                  Sub-Servicios y Trámites Incluidos
                </h4>
                <ul className="space-y-3 font-open-sans">
                  {area.subservices.map((sub, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#242424]">
                      <CheckCircle className="w-4 h-4 text-[#0B0B0B] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="leading-snug">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Commitments */}
              <div>
                <h4 className="font-montserrat text-xs font-bold text-[#242424] uppercase tracking-wider mb-3">
                  Compromisos Profesionales VINDEXGOMEZ LEGAL
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {area.keyBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#F5F5F5] border border-[#242424]/10 flex items-center gap-2.5 text-xs text-[#242424]"
                    >
                      <Shield className="w-3.5 h-3.5 text-[#0B0B0B] flex-shrink-0" aria-hidden="true" />
                      <span className="font-montserrat font-semibold text-[#0B0B0B]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Inmersive WhatsApp Form Specific to this Legal Area */}
            <div className="lg:col-span-6">
              <div className="sticky top-4">
                <Interactive3DForm
                  initialArea={area.title}
                  isModalVariant={true}
                  onOpenPrivacyPolicy={onOpenPrivacyPolicy}
                  onOpenTermsModal={onOpenTermsModal}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer of Modal */}
        <div className="bg-[#F5F5F5] px-6 py-3.5 border-t border-[#242424]/10 flex flex-wrap items-center justify-between gap-2 font-open-sans text-xs text-[#242424]">
          <span>VINDEXGOMEZ LEGAL · Licdo. Jaime Gómez Araúz · David, Chiriquí · CSJ No. 22518</span>
          <button
            type="button"
            onClick={onClose}
            className="font-montserrat text-[#0B0B0B] hover:text-[#242424] font-bold underline decoration-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-1"
          >
            Cerrar Detalles
          </button>
        </div>
      </div>
    </div>
  );
}
