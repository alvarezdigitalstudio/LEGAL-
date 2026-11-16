'use client';

import React from 'react';
import Image from 'next/image';
import { ATTORNEY_INFO } from '@/lib/legal-data';
import { Scale, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const credentials = [
    {
      title: 'Más de 10 Años de Litigación Activa',
      desc: 'Ejercicio profesional ininterrumpido defendiendo causas complejas ante tribunales de la República de Panamá.',
    },
    {
      title: 'Defensa Penal SPA, Familiar y Civil',
      desc: 'Especialización comprobada en Sistema Penal Acusatorio, procesos sucesorios, pensiones, divorcios y amparos constitucionales.',
    },
    {
      title: 'Gestión Procesal Diligente',
      desc: 'Seguimiento técnico ante el Órgano Judicial, Ministerio Público, ANATI y registros públicos conforme al procedimiento vigente.',
    },
    {
      title: 'Sede Física en David, Chiriquí',
      desc: 'Despacho abierto para atención presencial y confidencial en Villa Isabela, David, Oficina B-9.',
    },
  ];

  return (
    <section id="sobre-el-abogado" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-widest mb-3">
            <Scale className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
            Perfil Profesional & Trayectoria Forense
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0B0B] tracking-tight">
            Sobre el <span className="text-[#D4AF37]">Licdo. Jaime Gómez Araúz</span>
          </h2>
          <p className="mt-4 font-open-sans text-[#242424] text-base sm:text-lg">
            Titular de <strong className="text-[#0B0B0B] font-semibold">VINDEXGOMEZ LEGAL</strong>. Compromiso ético inquebrantable, experiencia forense real y lealtad irrestricta a la causa de cada patrocinado.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Profile Image with Clean Gold Border */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              <div className="relative rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-[#FFFFFF] p-2">
                <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-[#D4AF37]/40 bg-[#0B0B0B]">
                  <Image
                    src={ATTORNEY_INFO.profilePhotoUrl}
                    alt="Licdo. Jaime Gómez Araúz - Abogado Idoneidad 22518 David Chiriquí"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Corner ornamental accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

                  {/* Floating ID badge over image */}
                  <div className="absolute bottom-3 inset-x-3 bg-[#0B0B0B]/95 backdrop-blur-md border border-[#D4AF37]/70 rounded-lg p-3 text-center shadow-lg">
                    <p className="text-[#FFFFFF] font-montserrat font-bold text-base leading-tight">
                      Licdo. Jaime Gómez Araúz
                    </p>
                    <p className="text-[#D4AF37] font-montserrat text-xs font-semibold tracking-wider mt-0.5">
                      Idoneidad Profesional CSJ No. 22518
                    </p>
                    <p className="text-[#F5F5F5] font-open-sans text-[11px] mt-0.5">
                      Colegio Nacional de Abogados de Panamá (CNA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Structured Professional Bio */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div>
              <span className="font-montserrat text-xs sm:text-sm font-bold text-[#0B0B0B] uppercase tracking-wider border-b-2 border-[#D4AF37] pb-0.5 inline-block">
                Trayectoria Jurídica en Chiriquí & Panamá
              </span>
              <h3 className="font-montserrat text-2xl sm:text-3xl font-bold text-[#0B0B0B] mt-2">
                Estrategia Procesal, Firmeza y Trato Personalizado
              </h3>
            </div>

            <div className="space-y-4 font-open-sans text-[#242424] leading-relaxed text-sm sm:text-base">
              <p>
                Con <strong className="text-[#0B0B0B] font-bold">más de 10 años en el ejercicio profesional ininterrumpido</strong> del derecho en la provincia de Chiriquí y a nivel nacional, el <strong className="text-[#0B0B0B] font-bold">Licdo. Jaime Gómez Araúz</strong> lidera la firma <strong className="text-[#0B0B0B] font-semibold">VINDEXGOMEZ LEGAL</strong>, distinguida por su solvencia técnica, estricta reserva deontológica y probidad en cada etapa procesal.
              </p>
              <p>
                Su práctica abarca la <strong className="text-[#0B0B0B]">Defensa Penal Estratégica</strong> dentro del Sistema Penal Acusatorio (SPA), donde la inmediatez probatoria y la oratoria técnica resultan determinantes, así como litigios de <strong className="text-[#0B0B0B]">Familia, Sucesiones, Tierras ANATI y Contencioso-Administrativo</strong> ante los tribunales panameños.
              </p>
              <p>
                Un pilar distintivo del despacho es su <strong className="text-[#0B0B0B] font-bold">sólida gestión profesional y seguimiento procesal</strong> ante el Órgano Judicial, Ministerio Público, ANATI y registros públicos, orientado a <span className="text-[#0B0B0B] font-semibold underline decoration-[#D4AF37] decoration-2 underline-offset-4">procurar el impulso oportuno de cada expediente conforme a la ley</span>.
              </p>
            </div>

            {/* 4 Feature Cards in Clean Light Gray Surface #F5F5F5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {credentials.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08, ease: 'easeOut' }}
                  className="p-4 rounded-xl bg-[#F5F5F5] border border-[#242424]/10 hover:border-[#D4AF37] shadow-sm transition-all"
                >
                  <h4 className="font-montserrat text-xs sm:text-sm font-bold text-[#0B0B0B] flex items-center gap-1.5 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{item.title}</span>
                  </h4>
                  <p className="font-open-sans text-xs text-[#242424] leading-snug">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* NAP & Actions Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4, ease: 'easeOut' }}
              className="pt-4 border-t border-[#F5F5F5] flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 font-open-sans text-xs sm:text-sm text-[#242424]">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>
                  <strong className="font-montserrat text-[#0B0B0B]">Oficina Central:</strong> Villa Isabela, David, Chiriquí. Oficina B-9.
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="font-montserrat inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] font-bold px-5 py-2.5 rounded text-sm shadow-sm transition-all active:scale-95"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Solicitar Asesoría Directa</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
