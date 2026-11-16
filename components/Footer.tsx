'use client';

import React from 'react';
import Image from 'next/image';
import { ATTORNEY_INFO, PRACTICE_AREAS } from '@/lib/legal-data';
import { Shield, MapPin, Phone, Mail, FileText, Lock, ArrowUp, Cookie, RefreshCw, Scale } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenCookieModal: () => void;
  onOpenRefundModal: () => void;
}

export default function Footer({
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenCookieModal,
  onOpenRefundModal,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B0B0B] border-t-2 border-[#D4AF37]/40 text-[#F5F5F5] text-sm relative overflow-hidden">
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Credential Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-2.5">
              <div className="relative flex items-center">
                <Image
                  src={ATTORNEY_INFO.logoUrl}
                  alt="Logotipo Oficial VINDEXGOMEZ LEGAL"
                  width={1640}
                  height={500}
                  loading="lazy"
                  className="h-11 w-auto object-contain"
                />
              </div>
              <div>
                <span className="sr-only">VINDEXGOMEZ LEGAL</span>
                <span className="font-montserrat text-xs text-[#E7D18A] font-semibold block">
                  Licdo. Jaime Gómez Araúz
                </span>
              </div>
            </div>

            <p className="font-open-sans text-xs text-[#F5F5F5]/85 leading-relaxed">
              Más de 10 años de ejercicio ininterrumpido en la República de Panamá. Defensa penal técnica en el SPA, litigios civiles, familiares, agrarios y corporativos con probidad, firmeza y solvencia profesional.
            </p>

            <div className="p-3.5 rounded-lg bg-[#242424]/50 border border-[#D4AF37]/30 text-xs space-y-1">
              <div className="flex items-center gap-2 font-montserrat text-[#E7D18A] font-semibold">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                <span>Idoneidad Profesional CSJ: 22518</span>
              </div>
              <p className="font-open-sans text-[#F5F5F5]/80 text-[11px]">
                {ATTORNEY_INFO.colegio}
              </p>
            </div>
          </div>

          {/* Quick Practice Areas (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-montserrat text-base font-bold text-[#FFFFFF] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              Áreas de Práctica Principales
            </h4>
            <ul className="grid grid-cols-1 gap-2 font-open-sans text-xs text-[#F5F5F5]/85">
              {PRACTICE_AREAS.slice(0, 7).map((area) => (
                <li key={area.id}>
                  <a
                    href="#areas-de-practica"
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 truncate"
                  >
                    <span className="text-[#D4AF37] text-[10px]" aria-hidden="true">›</span>
                    <span className="truncate">{area.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#areas-de-practica"
                  className="font-montserrat text-[#D4AF37] hover:text-[#E7D18A] hover:underline font-semibold flex items-center gap-1 mt-1"
                >
                  <span>Explorar el catálogo completo de 13 áreas...</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct NAP and Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-montserrat text-base font-bold text-[#FFFFFF] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              Sede y Datos de Contacto
            </h4>

            <div className="space-y-3 font-open-sans text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="font-montserrat text-[#FFFFFF]">Dirección Física (David, Chiriquí):</strong>
                  <p className="text-[#F5F5F5]/85">{ATTORNEY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="font-montserrat text-[#FFFFFF]">Teléfono / WhatsApp Directo:</strong>
                  <p>
                    <a
                      href={`https://wa.me/${ATTORNEY_INFO.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E7D18A] hover:text-[#D4AF37] hover:underline"
                    >
                      {ATTORNEY_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <strong className="font-montserrat text-[#FFFFFF]">Correo Oficial Confidencial:</strong>
                  <p className="break-all">
                    <a
                      href={`mailto:${ATTORNEY_INFO.email}`}
                      className="text-[#F5F5F5] hover:text-[#D4AF37] underline decoration-[#666666]"
                    >
                      {ATTORNEY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Datos del Titular / Empresa y Jurisdicción + Descargo de Responsabilidad */}
        <div className="mt-12 pt-8 border-t border-[#242424] grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
          <div className="lg:col-span-6 p-4 rounded-xl bg-[#242424]/40 border border-[#D4AF37]/25 space-y-1.5">
            <h5 className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-[#E7D18A] flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span>Identificación del Titular y Jurisdicción</span>
            </h5>
            <div className="font-open-sans text-[11px] text-[#F5F5F5]/85 space-y-1 break-words">
              <p>
                <strong className="text-[#FFFFFF]">Dirección física:</strong> [DIRECCIÓN FÍSICA] · {ATTORNEY_INFO.address}
              </p>
              <p>
                <strong className="text-[#FFFFFF]">Jurisdicción / País de operación:</strong> [JURISDICCIÓN / PAÍS DE OPERACIÓN] · República de Panamá
              </p>
              <p>
                <strong className="text-[#FFFFFF]">Registro profesional:</strong> [NÚMERO DE REGISTRO PROFESIONAL] · Idoneidad CSJ No. 22518
              </p>
              <p>
                <strong className="text-[#FFFFFF]">Correo electrónico oficial:</strong> [CORREO OFICIAL] · {ATTORNEY_INFO.email}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-4 rounded-xl bg-[#242424]/40 border border-[#D4AF37]/25 space-y-1.5">
            <h5 className="font-montserrat text-[11px] font-bold uppercase tracking-wider text-[#E7D18A] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span>Descargo de Responsabilidad Profesional</span>
            </h5>
            <p className="font-open-sans text-[11px] text-[#F5F5F5]/85 leading-relaxed">
              El contenido publicado en <strong className="text-[#FFFFFF]">https://vindexgomezlegal.com</strong> es estrictamente informativo y orientativo; no constituye asesoría legal formal ni establece una relación abogado-cliente hasta la firma expresa de un Contrato de Servicios Profesionales con VINDEXGOMEZ LEGAL.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal Notices, 4 Modals, Copyright & Back to Top */}
      <div className="bg-[#0B0B0B] border-t border-[#242424] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 font-open-sans text-xs text-[#F5F5F5]/85 text-center lg:text-left">
          <div className="min-w-0">
            <p>
              © {currentYear} VINDEXGOMEZ LEGAL · Licdo. Jaime Gómez Araúz. Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-[#E7D18A]/90 mt-0.5 break-words">
              Idoneidad Profesional CSJ No. 22518 · República de Panamá · Dominio oficial: vindexgomezlegal.com
            </p>
          </div>

          <nav
            aria-label="Documentos legales y políticas del sitio"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs"
          >
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="font-montserrat hover:text-[#D4AF37] transition-colors underline flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-1"
            >
              <Lock className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" />
              <span>Política de Privacidad</span>
            </button>

            <button
              type="button"
              onClick={onOpenTermsModal}
              className="font-montserrat hover:text-[#D4AF37] transition-colors underline flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-1"
            >
              <FileText className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" />
              <span>Términos y Condiciones</span>
            </button>

            <button
              type="button"
              onClick={onOpenCookieModal}
              className="font-montserrat hover:text-[#D4AF37] transition-colors underline flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-1"
            >
              <Cookie className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" />
              <span>Política de Cookies</span>
            </button>

            <button
              type="button"
              onClick={onOpenRefundModal}
              className="font-montserrat hover:text-[#D4AF37] transition-colors underline flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-1"
            >
              <RefreshCw className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" />
              <span>Reembolsos y Cancelaciones</span>
            </button>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#242424] border border-[#D4AF37]/50 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0B0B] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Volver arriba de la página"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
