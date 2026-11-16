'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '@/lib/legal-data';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FaqSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#F5F5F5] relative border-b border-[#242424]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-widest mb-3">
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            Respuestas Clave & Asesoría Preventiva
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0B0B] tracking-tight">
            Preguntas <span className="text-[#D4AF37]">Frecuentes</span>
          </h2>
          <p className="mt-4 font-open-sans text-[#242424] text-sm sm:text-base leading-relaxed">
            Claridad jurídica inmediata para dudas habituales en materia penal, familiar, laboral, sucesiones y trámites de tierras en Chiriquí y Panamá.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#242424]/15 bg-[#FFFFFF] shadow-sm overflow-hidden transition-all duration-200 hover:border-[#D4AF37]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-montserrat text-base sm:text-lg font-bold text-[#0B0B0B] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 border-[#D4AF37] bg-[#0B0B0B] text-[#D4AF37]'
                        : 'border-[#242424]/15 bg-[#F5F5F5] text-[#666666]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 font-open-sans text-sm text-[#242424] leading-relaxed border-t border-[#F5F5F5] pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Banner - Negro profesional Authority Block */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4AF37]/50">
          <div className="text-left">
            <h4 className="text-[#FFFFFF] font-montserrat text-lg sm:text-xl font-bold">
              ¿Tiene una consulta específica sobre su caso?
            </h4>
            <p className="font-open-sans text-xs sm:text-sm text-[#F5F5F5] mt-1">
              Atención directa y confidencial con el Licdo. Jaime Gómez Araúz (VINDEXGOMEZ LEGAL).
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="font-montserrat inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-sm flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
