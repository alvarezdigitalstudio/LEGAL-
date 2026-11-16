'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, X, Lock, FileText, RefreshCw } from 'lucide-react';
import { ATTORNEY_INFO } from '@/lib/legal-data';

interface CookieBannerAndModalsProps {
  openPrivacyModal: boolean;
  setOpenPrivacyModal: (val: boolean) => void;
  openTermsModal: boolean;
  setOpenTermsModal: (val: boolean) => void;
  openCookieModal: boolean;
  setOpenCookieModal: (val: boolean) => void;
  openRefundModal: boolean;
  setOpenRefundModal: (val: boolean) => void;
}

const CONSENT_STORAGE_KEY = 'vindexgomez_cookie_consent';

export default function CookieBannerAndModals({
  openPrivacyModal,
  setOpenPrivacyModal,
  openTermsModal,
  setOpenTermsModal,
  openCookieModal,
  setOpenCookieModal,
  openRefundModal,
  setOpenRefundModal,
}: CookieBannerAndModalsProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
        if (!consent) {
          setShowBanner(true);
        }
      } catch {
        setShowBanner(true);
      }
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (openPrivacyModal) setOpenPrivacyModal(false);
        if (openTermsModal) setOpenTermsModal(false);
        if (openCookieModal) setOpenCookieModal(false);
        if (openRefundModal) setOpenRefundModal(false);
      }
    };
    const anyModalOpen = openPrivacyModal || openTermsModal || openCookieModal || openRefundModal;
    if (anyModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [
    openPrivacyModal,
    openTermsModal,
    openCookieModal,
    openRefundModal,
    setOpenPrivacyModal,
    setOpenTermsModal,
    setOpenCookieModal,
    setOpenRefundModal,
  ]);

  const handleAcceptCookies = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    } catch {}
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('vindexgomez:cookies-accepted'));
    }
    setShowBanner(false);
    setOpenCookieModal(false);
  };

  const handleRejectCookies = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, 'rejected');
    } catch {}
    if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
    setShowBanner(false);
    setOpenCookieModal(false);
  };

  return (
    <>
      {/* Discreet Brand-Matched Cookie Banner with Aceptar / Rechazar */}
      {showBanner && (
        <aside
          aria-label="Aviso de cookies y privacidad"
          className="fixed bottom-0 inset-x-0 z-50 px-3 py-3 sm:px-5 sm:py-4 bg-[#FFFFFF]/95 backdrop-blur-md border-t-2 border-[#D4AF37] shadow-2xl text-[#242424] animate-fadeIn max-w-full overflow-hidden"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start gap-3 text-left min-w-0">
              <div
                className="w-9 h-9 rounded-lg bg-[#0B0B0B] border border-[#D4AF37]/60 flex items-center justify-center flex-shrink-0 text-[#D4AF37] mt-0.5"
                aria-hidden="true"
              >
                <Cookie className="w-4 h-4" />
              </div>
              <div className="font-open-sans text-xs text-[#242424] min-w-0">
                <p className="font-montserrat font-bold text-[#0B0B0B] flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                  <span>Uso de Cookies y Privacidad</span>
                  <span className="text-[11px] text-[#242424] font-semibold">· VINDEXGOMEZ LEGAL</span>
                </p>
                <p className="mt-1 leading-relaxed text-[#242424]">
                  Utilizamos cookies esenciales para el funcionamiento seguro del sitio y, únicamente con su consentimiento expreso, cookies analíticas para mejorar la experiencia de navegación. Consulte nuestra{' '}
                  <button
                    type="button"
                    onClick={() => setOpenCookieModal(true)}
                    className="font-montserrat font-semibold text-[#0B0B0B] underline decoration-[#D4AF37] decoration-2 hover:bg-[#E7D18A]/30 rounded px-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    Política de Cookies
                  </button>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end flex-shrink-0">
              <button
                type="button"
                onClick={handleRejectCookies}
                className="font-montserrat text-xs text-[#0B0B0B] hover:bg-[#EAEAEA] px-4 py-2 rounded border border-[#242424]/30 transition-colors font-semibold bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={handleAcceptCookies}
                className="font-montserrat text-xs font-bold text-[#0B0B0B] bg-[#D4AF37] hover:bg-[#E7D18A] px-5 py-2 rounded shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
              >
                Aceptar
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 1. Política de Privacidad Modal */}
      {openPrivacyModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 bg-[#0B0B0B]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl bg-[#FFFFFF] border-2 border-[#D4AF37] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#242424]">
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#F5F5F5] mb-6">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#0B0B0B] flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 id="privacy-modal-title" className="font-montserrat font-bold text-xl sm:text-2xl text-[#0B0B0B]">
                    Política de Privacidad y Protección de Datos
                  </h3>
                  <p className="font-montserrat text-xs text-[#242424] font-semibold">
                    Cumplimiento de la Ley 81 de 2019 (República de Panamá) · vindexgomezlegal.com
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenPrivacyModal(false)}
                className="p-1.5 text-[#242424] hover:text-[#FFFFFF] rounded-lg bg-[#F5F5F5] hover:bg-[#0B0B0B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Cerrar modal de Política de Privacidad"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4 font-open-sans text-xs sm:text-sm text-[#242424] leading-relaxed text-left">
              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                1. Responsable del Tratamiento
              </h4>
              <p>
                El responsable del tratamiento de los datos personales recopilados a través de <strong className="text-[#0B0B0B]">https://vindexgomezlegal.com</strong> es <strong className="text-[#0B0B0B]">VINDEXGOMEZ LEGAL</strong>, bajo la titularidad del{' '}
                <strong className="text-[#0B0B0B]">Licdo. Jaime Gómez Araúz</strong> (Idoneidad Profesional CSJ No. 22518 - CNA), con domicilio profesional en Villa Isabela, David, Chiriquí, República de Panamá, Oficina B-9. Correo oficial:{' '}
                <strong className="text-[#0B0B0B]">{ATTORNEY_INFO.email}</strong>.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                2. Minimización de Datos y Finalidad
              </h4>
              <p>
                Aplicamos el principio de minimización de datos: únicamente solicitamos nombre completo, teléfono de contacto, área legal de interés y una descripción general de su requerimiento. Estos datos se utilizan exclusivamente para coordinar consultas jurídicas preliminares, verificar eventuales conflictos de interés y atender solicitudes enviadas voluntariamente por el usuario.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                3. Secreto Profesional y Seguridad
              </h4>
              <p>
                La información suministrada es tratada bajo estricta confidencialidad y resguardada conforme a los deberes deontológicos de la abogacía en Panamá y las disposiciones de la Ley 81 de 2019 sobre Protección de Datos Personales. Sus datos no son comercializados ni cedidos a terceros.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                4. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
              </h4>
              <p>
                En cualquier momento usted puede ejercer sus derechos de acceso, rectificación, cancelación, oposición y portabilidad remitiendo una solicitud a <code className="text-[#0B0B0B] bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono border border-[#242424]/15">{ATTORNEY_INFO.email}</code>.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F5F5F5] flex justify-end">
              <button
                type="button"
                onClick={() => setOpenPrivacyModal(false)}
                className="font-montserrat bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] font-bold px-6 py-2.5 rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
              >
                Cerrar Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Términos y Condiciones Modal */}
      {openTermsModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-modal-title"
          className="fixed inset-0 z-50 bg-[#0B0B0B]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl bg-[#FFFFFF] border-2 border-[#D4AF37] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#242424]">
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#F5F5F5] mb-6">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#0B0B0B] flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 id="terms-modal-title" className="font-montserrat font-bold text-xl sm:text-2xl text-[#0B0B0B]">
                    Términos y Condiciones de Uso
                  </h3>
                  <p className="font-montserrat text-xs text-[#242424] font-semibold">
                    VINDEXGOMEZ LEGAL · https://vindexgomezlegal.com
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenTermsModal(false)}
                className="p-1.5 text-[#242424] hover:text-[#FFFFFF] rounded-lg bg-[#F5F5F5] hover:bg-[#0B0B0B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Cerrar modal de Términos y Condiciones"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4 font-open-sans text-xs sm:text-sm text-[#242424] leading-relaxed text-left">
              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                1. Carácter Informativo del Sitio Web
              </h4>
              <p>
                Toda la información publicada en <strong className="text-[#0B0B0B]">https://vindexgomezlegal.com</strong> tiene finalidad exclusivamente informativa y descriptiva de las áreas de ejercicio profesional de VINDEXGOMEZ LEGAL y del Licdo. Jaime Gómez Araúz. Su lectura o el envío de formularios de contacto no constituye asesoría jurídica formal ni perfecciona por sí misma una relación abogado-cliente.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                2. Formalización de la Relación Profesional
              </h4>
              <p>
                La representación legal y el patrocinio judicial o administrativo se formalizan únicamente mediante la suscripción de un Contrato de Servicios Profesionales por escrito, la aceptación previa del alcance y honorarios (conforme al Arancel del Colegio Nacional de Abogados de Panamá) y el otorgamiento del Poder correspondiente.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                3. Propiedad Intelectual y Uso Adecuado
              </h4>
              <p>
                La marca denominativa VINDEXGOMEZ LEGAL, su isotipo y los textos del portal están protegidos por la normativa de propiedad intelectual vigente. Queda prohibida su reproducción no autorizada o uso con fines ilícitos.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                4. Legislación y Jurisdicción Aplicable
              </h4>
              <p>
                Estos términos se rigen por las leyes de la República de Panamá. Cualquier controversia derivada del acceso o uso de este portal se someterá a la competencia de los tribunales ordinarios de la República de Panamá.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F5F5F5] flex justify-end">
              <button
                type="button"
                onClick={() => setOpenTermsModal(false)}
                className="font-montserrat bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] font-bold px-6 py-2.5 rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
              >
                Cerrar Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Política de Cookies Modal */}
      {openCookieModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-[#0B0B0B]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl bg-[#FFFFFF] border-2 border-[#D4AF37] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#242424]">
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#F5F5F5] mb-6">
              <div className="flex items-center gap-3">
                <Cookie className="w-6 h-6 text-[#0B0B0B] flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 id="cookie-modal-title" className="font-montserrat font-bold text-xl sm:text-2xl text-[#0B0B0B]">
                    Política de Cookies
                  </h3>
                  <p className="font-montserrat text-xs text-[#242424] font-semibold">
                    Gestión de Consentimiento y Transparencia · vindexgomezlegal.com
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenCookieModal(false)}
                className="p-1.5 text-[#242424] hover:text-[#FFFFFF] rounded-lg bg-[#F5F5F5] hover:bg-[#0B0B0B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Cerrar modal de Política de Cookies"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4 font-open-sans text-xs sm:text-sm text-[#242424] leading-relaxed text-left">
              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                1. ¿Qué son las cookies?
              </h4>
              <p>
                Las cookies y mecanismos equivalentes de almacenamiento local (<code className="text-[#0B0B0B] bg-[#F5F5F5] px-1 py-0.5 rounded font-mono">localStorage</code>) son pequeños archivos que se guardan en su navegador para recordar sus preferencias de privacidad y permitir el funcionamiento correcto de la interfaz web.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                2. Tipos de Cookies Utilizadas
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0B0B0B]">Cookies Técnicas o Esenciales:</strong> Necesarias para recordar si usted aceptó o rechazó el uso de cookies analíticas y para operar de manera segura la navegación del portal.
                </li>
                <li>
                  <strong className="text-[#0B0B0B]">Cookies de Analítica (Condicionales):</strong> Este sitio incorpora soporte técnico preparado para Google Analytics 4 (GA4). Dichas cookies <strong className="text-[#0B0B0B]">permanecen bloqueadas por defecto</strong> y únicamente se activan si usted hace clic en el botón <strong className="text-[#0B0B0B]">«Aceptar»</strong>.
                </li>
              </ul>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                3. Cómo Modificar o Revocar su Consentimiento
              </h4>
              <p>
                Usted puede aceptar o rechazar las cookies analíticas directamente mediante los botones inferiores, o bien eliminar los datos de navegación desde la configuración de su navegador web en cualquier momento.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F5F5F5] flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleRejectCookies}
                className="font-montserrat bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#0B0B0B] border border-[#242424]/25 font-semibold px-5 py-2.5 rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
              >
                Rechazar Cookies Analíticas
              </button>
              <button
                type="button"
                onClick={handleAcceptCookies}
                className="font-montserrat bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] font-bold px-6 py-2.5 rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
              >
                Aceptar Cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Política de Reembolsos y Cancelaciones Modal */}
      {openRefundModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="refund-modal-title"
          className="fixed inset-0 z-50 bg-[#0B0B0B]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl bg-[#FFFFFF] border-2 border-[#D4AF37] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#242424]">
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#F5F5F5] mb-6">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-[#0B0B0B] flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 id="refund-modal-title" className="font-montserrat font-bold text-xl sm:text-2xl text-[#0B0B0B]">
                    Política de Reembolsos y Cancelaciones
                  </h3>
                  <p className="font-montserrat text-xs text-[#242424] font-semibold">
                    Transparencia en Citas, Consultas y Servicios Jurídicos · VINDEXGOMEZ LEGAL
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenRefundModal(false)}
                className="p-1.5 text-[#242424] hover:text-[#FFFFFF] rounded-lg bg-[#F5F5F5] hover:bg-[#0B0B0B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Cerrar modal de Política de Reembolsos y Cancelaciones"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4 font-open-sans text-xs sm:text-sm text-[#242424] leading-relaxed text-left">
              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                1. Consultas Agendadas y Cancelación de Citas
              </h4>
              <p>
                Las solicitudes iniciales enviadas mediante los formularios de este sitio web o por WhatsApp para orientación preliminar no generan cobro automático. En caso de contratarse una consulta jurídica formal presencial o virtual con honorarios previamente pactados, el cliente podrá solicitar la reprogramación sin cargo adicional notificando con al menos <strong className="text-[#0B0B0B]">24 horas de antelación</strong>.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                2. Honorarios y Provisiones de Fondos
              </h4>
              <p>
                Todos los servicios de asesoría, redacción documental o representación procesal se regulan por un <strong className="text-[#0B0B0B]">Contrato de Servicios Profesionales</strong> escrito. Si se produce una terminación anticipada de la relación profesional antes de completarse las etapas contratadas, las sumas entregadas en concepto de provisión de gastos no erogados o anticipos sobre actuaciones aún no ejecutadas serán objeto de liquidación documentada y reembolso proporcional, deduciendo únicamente los honorarios devengados por las gestiones, redacciones, estudios de expediente o comparecencias efectivamente realizadas, así como los gastos notariales, registrales o timbres ya sufragados.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                3. Consultas Ya Ejecutadas y Trámites de Terceros
              </h4>
              <p>
                Los honorarios correspondientes a consultas jurídicas ya celebradas, dictámenes emitidos o escritos ya presentados ante autoridades judiciales o administrativas no son reembolsables por tratarse de prestaciones profesionales debidamente consumadas, con independencia de la decisión que posteriormente adopte la autoridad competente.
              </p>

              <h4 className="font-montserrat font-bold text-[#0B0B0B] text-base">
                4. Canal para Solicitudes de Liquidación o Cancelación
              </h4>
              <p>
                Toda solicitud de cancelación, reprogramación o revisión de liquidación debe enviarse por escrito al correo oficial del despacho (<code className="text-[#0B0B0B] bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono border border-[#242424]/15">{ATTORNEY_INFO.email}</code>), indicando el nombre completo del titular y la referencia del contrato o cita.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F5F5F5] flex justify-end">
              <button
                type="button"
                onClick={() => setOpenRefundModal(false)}
                className="font-montserrat bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] font-bold px-6 py-2.5 rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
              >
                Cerrar Política de Reembolsos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
