'use client';

import React, { useState, useId } from 'react';
import { ATTORNEY_INFO, PRACTICE_AREAS } from '@/lib/legal-data';
import { Lock, Send, CheckCircle2, AlertCircle, XCircle, ShieldCheck } from 'lucide-react';

interface Interactive3DFormProps {
  initialArea?: string;
  isModalVariant?: boolean;
  onSuccess?: () => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenTermsModal?: () => void;
}

export default function Interactive3DForm({
  initialArea,
  isModalVariant = false,
  onSuccess,
  onOpenPrivacyPolicy,
  onOpenTermsModal,
}: Interactive3DFormProps) {
  const formUid = useId();
  const fullNameId = `${formUid}-fullname`;
  const phoneId = `${formUid}-phone`;
  const serviceId = `${formUid}-service`;
  const descId = `${formUid}-description`;
  const consentId = `${formUid}-consent`;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [userSelectedService, setUserSelectedService] = useState<string | null>(null);
  const selectedService = userSelectedService ?? (initialArea || PRACTICE_AREAS[0].title);
  const [caseDescription, setCaseDescription] = useState('');
  // Mandatory checkbox: ALWAYS unchecked by default
  const [acceptedConsent, setAcceptedConsent] = useState(false);

  const [touched, setTouched] = useState({
    fullName: false,
    phone: false,
    caseDescription: false,
    acceptedConsent: false,
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState<string | null>(null);

  const isNameValid = fullName.trim().length >= 3;
  const isPhoneValid = phone.trim().length >= 7;
  const isDescValid = caseDescription.trim().length >= 10;
  const isFormReady = isNameValid && isPhoneValid && isDescValid && acceptedConsent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      phone: true,
      caseDescription: true,
      acceptedConsent: true,
    });

    if (!isNameValid) {
      setFormError('Por favor ingrese su Nombre Completo (mínimo 3 caracteres).');
      return;
    }
    if (!isPhoneValid) {
      setFormError('Por favor ingrese un número de teléfono o WhatsApp válido.');
      return;
    }
    if (!isDescValid) {
      setFormError('Por favor describa brevemente su consulta o caso legal (mínimo 10 caracteres).');
      return;
    }
    if (!acceptedConsent) {
      setFormError('Debe aceptar la Política de Privacidad y los Términos y Condiciones antes de enviar su consulta.');
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    const message = `Hola Licdo. Jaime Gómez (VINDEXGOMEZ LEGAL), mi nombre es ${fullName.trim()}. Teléfono: ${phone.trim()}. Solicito consulta jurídica en ${selectedService}. Detalles de mi caso: ${caseDescription.trim()}`;
    const whatsappUrl = `https://wa.me/${ATTORNEY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    setLastWhatsappUrl(whatsappUrl);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      if (onSuccess) {
        onSuccess();
      }

      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
    }, 350);
  };

  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-9 transition-all duration-300 ${
        isModalVariant
          ? 'bg-[#FFFFFF] border border-[#D4AF37]/60 shadow-lg text-[#0B0B0B]'
          : 'bg-[#FFFFFF] border border-[#D4AF37]/50 shadow-xl hover:border-[#D4AF37] text-[#0B0B0B]'
      }`}
    >
      {/* Header banner */}
      <div className="flex items-center justify-between gap-3 pb-5 border-b border-[#F5F5F5] mb-6">
        <div>
          <span className="font-montserrat text-[11px] font-bold text-[#0B0B0B] uppercase tracking-widest flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
            <span>Atención Confidencial Inmediata</span>
          </span>
          <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-[#0B0B0B] mt-1">
            Solicitud Oficial de Consulta Jurídica
          </h3>
          <p className="font-open-sans text-xs text-[#242424] mt-0.5">
            VINDEXGOMEZ LEGAL · Licdo. Jaime Gómez Araúz
          </p>
        </div>
        <div
          className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shadow-sm flex-shrink-0"
          aria-hidden="true"
        >
          <i className="fa-brands fa-whatsapp text-2xl" />
        </div>
      </div>

      {/* Form Error Banner */}
      {formError && (
        <div
          role="alert"
          className="mb-5 p-3.5 rounded-lg bg-[#F5F5F5] border border-[#0B0B0B] text-[#0B0B0B] font-open-sans text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn"
        >
          <AlertCircle className="w-4 h-4 text-[#0B0B0B] mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>{formError}</span>
        </div>
      )}

      {/* Form Success Banner */}
      {isSubmitted && (
        <div
          role="status"
          className="mb-5 p-3.5 rounded-lg bg-[#F5F5F5] border border-[#D4AF37] text-[#0B0B0B] font-open-sans text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn"
        >
          <CheckCircle2 className="w-4 h-4 text-[#0B0B0B] mt-0.5 flex-shrink-0" aria-hidden="true" />
          <div className="space-y-1">
            <p>
              <strong className="font-montserrat text-[#0B0B0B]">¡Solicitud preparada con éxito!</strong> Redirigiendo al WhatsApp oficial del despacho.
            </p>
            {lastWhatsappUrl && (
              <a
                href={lastWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-montserrat text-xs font-bold text-[#0B0B0B] underline decoration-[#D4AF37] decoration-2"
              >
                Abrir conversación en WhatsApp manualmente →
              </a>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left font-open-sans" noValidate>
        {/* Nombre Completo */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label
              htmlFor={fullNameId}
              className="block font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-wide"
            >
              Nombre Completo <span className="text-[#0B0B0B]" aria-hidden="true">*</span>
            </label>
            {touched.fullName && (
              <span className="font-montserrat text-[11px] flex items-center gap-1">
                {isNameValid ? (
                  <span className="text-[#0B0B0B] flex items-center gap-0.5 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" /> Listo
                  </span>
                ) : (
                  <span className="text-[#242424] flex items-center gap-0.5 font-semibold">
                    <XCircle className="w-3 h-3" aria-hidden="true" /> Mín. 3 letras
                  </span>
                )}
              </span>
            )}
          </div>
          <input
            id={fullNameId}
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={fullName}
            onBlur={() => setTouched((p) => ({ ...p, fullName: true }))}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Ej: María González / Carlos Morales"
            className={`w-full bg-[#F5F5F5] text-sm text-[#0B0B0B] placeholder-[#666666] px-4 py-3 rounded-lg border transition-all focus:bg-[#FFFFFF] focus:outline-none ${
              touched.fullName
                ? isNameValid
                  ? 'border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]'
                  : 'border-[#0B0B0B] focus:ring-2 focus:ring-[#0B0B0B]'
                : 'border-[#242424]/25 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]'
            }`}
          />
        </div>

        {/* Teléfono Móvil / WhatsApp */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label
              htmlFor={phoneId}
              className="block font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-wide"
            >
              Teléfono Móvil o WhatsApp <span className="text-[#0B0B0B]" aria-hidden="true">*</span>
            </label>
            {touched.phone && (
              <span className="font-montserrat text-[11px] flex items-center gap-1">
                {isPhoneValid ? (
                  <span className="text-[#0B0B0B] flex items-center gap-0.5 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" /> Listo
                  </span>
                ) : (
                  <span className="text-[#242424] flex items-center gap-0.5 font-semibold">
                    <XCircle className="w-3 h-3" aria-hidden="true" /> Requerido
                  </span>
                )}
              </span>
            )}
          </div>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ej: +507 6455-0000"
            className={`w-full bg-[#F5F5F5] text-sm text-[#0B0B0B] placeholder-[#666666] px-4 py-3 rounded-lg border transition-all focus:bg-[#FFFFFF] focus:outline-none ${
              touched.phone
                ? isPhoneValid
                  ? 'border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]'
                  : 'border-[#0B0B0B] focus:ring-2 focus:ring-[#0B0B0B]'
                : 'border-[#242424]/25 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]'
            }`}
          />
        </div>

        {/* Área Legal de Interés (13 Materias) */}
        <div>
          <label
            htmlFor={serviceId}
            className="block font-montserrat text-xs font-bold text-[#0B0B0B] mb-1.5 uppercase tracking-wide"
          >
            Área Legal de Interés <span className="text-[#0B0B0B]" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id={serviceId}
              name="service"
              value={selectedService}
              onChange={(e) => setUserSelectedService(e.target.value)}
              className="w-full bg-[#F5F5F5] text-sm text-[#0B0B0B] px-4 py-3 pr-10 rounded-lg border border-[#242424]/25 focus:bg-[#FFFFFF] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-all appearance-none cursor-pointer"
            >
              {PRACTICE_AREAS.map((area) => (
                <option key={area.id} value={area.title} className="bg-[#FFFFFF] text-[#0B0B0B] py-1.5">
                  {area.number}. {area.title}
                </option>
              ))}
            </select>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#0B0B0B] text-xs"
              aria-hidden="true"
            >
              ▼
            </div>
          </div>
        </div>

        {/* Descripción Breve del Caso */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label
              htmlFor={descId}
              className="block font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-wide"
            >
              Descripción Breve del Caso <span className="text-[#0B0B0B]" aria-hidden="true">*</span>
            </label>
            {touched.caseDescription && (
              <span className="font-montserrat text-[11px] flex items-center gap-1">
                {isDescValid ? (
                  <span className="text-[#0B0B0B] flex items-center gap-0.5 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" /> Listo
                  </span>
                ) : (
                  <span className="text-[#242424] flex items-center gap-0.5 font-semibold">
                    <XCircle className="w-3 h-3" aria-hidden="true" /> Mín. 10 letras
                  </span>
                )}
              </span>
            )}
          </div>
          <textarea
            id={descId}
            name="caseDescription"
            required
            rows={3}
            value={caseDescription}
            onBlur={() => setTouched((p) => ({ ...p, caseDescription: true }))}
            onChange={(e) => setCaseDescription(e.target.value)}
            placeholder="Describa brevemente su consulta o requerimiento legal (evite incluir datos sensibles innecesarios)..."
            className={`w-full bg-[#F5F5F5] text-sm text-[#0B0B0B] placeholder-[#666666] px-4 py-3 rounded-lg border transition-all focus:bg-[#FFFFFF] focus:outline-none resize-none ${
              touched.caseDescription
                ? isDescValid
                  ? 'border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]'
                  : 'border-[#0B0B0B] focus:ring-2 focus:ring-[#0B0B0B]'
                : 'border-[#242424]/25 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]'
            }`}
          />
        </div>

        {/* Casilla obligatoria desmarcada por defecto */}
        <div className="pt-2">
          <div
            className={`flex items-start gap-3 p-3.5 rounded-lg border transition-colors ${
              acceptedConsent
                ? 'bg-[#FFFFFF] border-[#D4AF37]'
                : touched.acceptedConsent
                  ? 'bg-[#F5F5F5] border-[#0B0B0B]'
                  : 'bg-[#F5F5F5] border-[#242424]/20 hover:border-[#D4AF37]/60'
            }`}
          >
            <input
              id={consentId}
              name="consent"
              type="checkbox"
              required
              checked={acceptedConsent}
              onChange={(e) => {
                setAcceptedConsent(e.target.checked);
                setTouched((p) => ({ ...p, acceptedConsent: true }));
              }}
              className="mt-0.5 w-4 h-4 flex-shrink-0 rounded border-[#242424] text-[#0B0B0B] focus:ring-2 focus:ring-[#D4AF37] bg-[#FFFFFF] cursor-pointer accent-[#0B0B0B]"
            />
            <div className="font-open-sans text-xs text-[#242424] leading-snug">
              <label htmlFor={consentId} className="cursor-pointer">
                He leído y acepto la{' '}
              </label>
              <button
                type="button"
                onClick={() => onOpenPrivacyPolicy?.()}
                className="font-montserrat text-[#0B0B0B] underline decoration-[#D4AF37] decoration-2 font-semibold hover:bg-[#E7D18A]/30 rounded px-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                Política de Privacidad
              </button>
              <label htmlFor={consentId} className="cursor-pointer">
                {' '}y los{' '}
              </label>
              <button
                type="button"
                onClick={() => onOpenTermsModal?.()}
                className="font-montserrat text-[#0B0B0B] underline decoration-[#D4AF37] decoration-2 font-semibold hover:bg-[#E7D18A]/30 rounded px-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                Términos y Condiciones
              </button>
              <label htmlFor={consentId} className="cursor-pointer">
                .
              </label>
            </div>
          </div>
        </div>

        {/* Botón de Envío Oficial */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-4 font-montserrat font-bold text-sm sm:text-base py-3.5 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2.5 active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${
            isFormReady
              ? 'bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] cursor-pointer'
              : 'bg-[#0B0B0B] hover:bg-[#242424] text-[#FFFFFF] border border-[#D4AF37]/40 cursor-pointer'
          }`}
        >
          <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true" />
          <span>{isSubmitting ? 'Preparando conexión...' : 'Enviar Consulta Directa por WhatsApp'}</span>
          <Send className="w-4 h-4 ml-1" aria-hidden="true" />
        </button>

        <p className="text-center font-open-sans text-[11px] text-[#242424] mt-2 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
          <span>Secreto profesional · Datos mínimos conforme a la Ley 81 de 2019</span>
        </p>
      </form>
    </div>
  );
}
