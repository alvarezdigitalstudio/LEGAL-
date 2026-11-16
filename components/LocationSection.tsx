'use client';

import React from 'react';
import { ATTORNEY_INFO } from '@/lib/legal-data';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Navigation, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-[#FFFFFF] relative border-b border-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            Sede Física & Canales Oficiales
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0B0B] tracking-tight">
            Ubicación y <span className="text-[#D4AF37]">Contacto Directo</span>
          </h2>
          <p className="mt-4 font-open-sans text-[#242424] text-sm sm:text-base leading-relaxed">
            Despacho accesible en David, Chiriquí. Atención presencial con estricta reserva profesional y consultas virtuales para todo Panamá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Cards: Contact & Address Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-xl bg-[#F5F5F5] border border-[#242424]/15 shadow-sm hover:border-[#D4AF37] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/60 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-wider">
                    Dirección Física Oficial
                  </h4>
                  <p className="text-[#0B0B0B] font-montserrat text-lg font-bold mt-1">
                    Villa Isabela, David, Chiriquí
                  </p>
                  <p className="font-open-sans text-sm text-[#242424] mt-0.5">
                    Oficina B-9, República de Panamá.
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(ATTORNEY_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-montserrat text-xs font-bold text-[#0B0B0B] hover:text-[#D4AF37] hover:underline mt-3"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Cómo llegar con Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="p-6 rounded-xl bg-[#F5F5F5] border border-[#242424]/15 shadow-sm hover:border-[#D4AF37] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/60 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-wider">
                    Teléfono & WhatsApp Corporativo
                  </h4>
                  <p className="text-[#0B0B0B] font-montserrat text-lg font-bold mt-1">
                    {ATTORNEY_INFO.phone}
                  </p>
                  <p className="font-open-sans text-xs text-[#666666] mt-0.5">
                    Llamadas directas y canal cifrado de WhatsApp
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={`https://wa.me/${ATTORNEY_INFO.phoneRaw}?text=Hola%20Licdo.%20Jaime%20G%C3%B3mez,%20solicito%20una%20consulta%20legal%20confidencial.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-montserrat bg-[#0B0B0B] hover:bg-[#D4AF37] text-[#FFFFFF] hover:text-[#0B0B0B] text-xs font-bold px-3.5 py-1.5 rounded transition-colors shadow-sm"
                    >
                      <i className="fa-brands fa-whatsapp text-sm" aria-hidden="true" />
                      <span>Abrir WhatsApp</span>
                    </a>
                    <a
                      href={`tel:+${ATTORNEY_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 font-montserrat border border-[#242424]/25 hover:border-[#D4AF37] text-[#0B0B0B] text-xs font-semibold px-3.5 py-1.5 rounded transition-colors bg-[#FFFFFF]"
                    >
                      <span>Llamar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Outlook Card */}
            <div className="p-6 rounded-xl bg-[#F5F5F5] border border-[#242424]/15 shadow-sm hover:border-[#D4AF37] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/60 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-wider">
                    Correo Electrónico Oficial
                  </h4>
                  <p className="text-[#0B0B0B] font-open-sans text-sm sm:text-base font-bold mt-1 break-all">
                    {ATTORNEY_INFO.email}
                  </p>
                  <p className="font-open-sans text-xs text-[#666666] mt-0.5">
                    Canal corporativo (Outlook) para recepción de autos, poderes y expedientes probatorios.
                  </p>
                  <a
                    href={`mailto:${ATTORNEY_INFO.email}`}
                    className="inline-flex items-center gap-1 font-montserrat text-xs text-[#0B0B0B] hover:text-[#D4AF37] hover:underline mt-2 font-semibold"
                  >
                    <span>Redactar correo oficial</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours & Emergency Notice */}
            <div className="p-5 rounded-xl bg-[#F5F5F5] border border-[#242424]/15 font-open-sans text-xs space-y-2.5 shadow-sm">
              <div className="flex items-center gap-2 text-[#242424]">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>
                  <strong className="font-montserrat text-[#0B0B0B]">Horario Regular:</strong> {ATTORNEY_INFO.officeHours}
                </span>
              </div>
              <div className="flex items-start gap-2 text-[#242424] pt-1 border-t border-[#242424]/10">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="font-montserrat text-[#0B0B0B] font-bold">Urgencias Penales 24/7:</strong>{' '}
                  {ATTORNEY_INFO.emergencyNotice}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Directions */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-[#242424]/20 hover:border-[#D4AF37] shadow-lg h-full min-h-[380px] bg-[#F5F5F5] transition-colors">
              <iframe
                title="Ubicación VINDEXGOMEZ LEGAL - Licdo. Jaime Gómez Araúz David Chiriquí"
                src="https://maps.google.com/maps?q=David,+Chiriqui,+Panama&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[400px] border-0 filter contrast-[1.03]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0B0B0B]/95 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/60 shadow-xl text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span className="font-montserrat text-[10px] uppercase font-bold tracking-wider text-[#E7D18A]">
                    Despacho Jurídico
                  </span>
                </div>
                <p className="font-montserrat font-bold text-[#FFFFFF] text-base">
                  VINDEXGOMEZ LEGAL
                </p>
                <p className="font-open-sans text-xs text-[#F5F5F5] font-semibold">
                  Licdo. Jaime Gómez Araúz
                </p>
                <p className="font-open-sans text-[11px] text-[#E7D18A]/90 mt-1">
                  Villa Isabela, David, Chiriquí. Oficina B-9.
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Villa Isabela David Chiriqui Panama')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 font-montserrat inline-flex items-center gap-1.5 text-xs font-bold text-[#0B0B0B] bg-[#D4AF37] hover:bg-[#E7D18A] px-3.5 py-1.5 rounded transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir Ruta GPS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
