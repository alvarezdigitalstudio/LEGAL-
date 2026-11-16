'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRACTICE_AREAS, LegalPracticeArea } from '@/lib/legal-data';
import { Scale, ArrowUpRight, Search } from 'lucide-react';
import { motion } from 'motion/react';

interface PracticeAreasSectionProps {
  onSelectArea: (area: LegalPracticeArea) => void;
}

export default function PracticeAreasSection({ onSelectArea }: PracticeAreasSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

  const filterCategories = [
    { id: 'all', label: 'Todos (13)' },
    { id: 'penal', label: 'Penal & SPA' },
    { id: 'civil-familia', label: 'Civil & Familia' },
    { id: 'tierras-negocios', label: 'Tierras & Negocios' },
    { id: 'constitucional', label: 'Garantías & Estado' },
  ];

  // Brief simulated loading state on filter change to trigger skeleton loader smoothly
  const handleFilterChange = (categoryId: string) => {
    setActiveFilter(categoryId);
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 280);
    return () => clearTimeout(timer);
  };

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    const matchesSearch =
      area.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.subservices.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeFilter === 'all') return true;
    if (activeFilter === 'penal') return area.id.includes('penal');
    if (activeFilter === 'civil-familia') return area.id.includes('civil') || area.id.includes('familia');
    if (activeFilter === 'tierras-negocios')
      return (
        area.id.includes('agrario') ||
        area.id.includes('bancario') ||
        area.id.includes('propiedad') ||
        area.id.includes('laboral')
      );
    if (activeFilter === 'constitucional')
      return (
        area.id.includes('constitucional') ||
        area.id.includes('contencioso') ||
        area.id.includes('forense') ||
        area.id.includes('documentos') ||
        area.id.includes('formacion')
      );
    return true;
  });

  return (
    <section id="areas-de-practica" className="py-20 md:py-28 bg-[#F5F5F5] relative border-b border-[#242424]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 font-montserrat text-xs font-bold text-[#0B0B0B] uppercase tracking-widest mb-3">
            <Scale className="w-4 h-4 text-[#D4AF37]" />
            Catálogo Integral de Servicios Jurídicos
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0B0B] tracking-tight">
            13 Áreas de <span className="text-[#D4AF37]">Práctica Especializada</span>
          </h2>
          <p className="mt-4 font-open-sans text-[#242424] text-sm sm:text-base leading-relaxed">
            Cobertura jurídica integral en Chiriquí y Panamá. Cada materia cuenta con protocolos probados, litigación rigurosa y atención confidencial para personas naturales y empresas.
          </p>

          {/* Quick Search & Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full max-w-md">
              <label htmlFor="practice-areas-search" className="sr-only">
                Buscar materia legal o servicio jurídico
              </label>
              <Search className="w-4 h-4 text-[#0B0B0B] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input
                id="practice-areas-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar materia legal (ej: divorcio, SPA, fianza, ANATI)..."
                className="w-full bg-[#FFFFFF] font-open-sans text-sm text-[#0B0B0B] placeholder-[#666666] pl-10 pr-9 py-2.5 rounded-lg border border-[#242424]/20 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-sm transition-all"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#666666] hover:text-[#0B0B0B]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter Categories Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleFilterChange(cat.id)}
                className={`font-montserrat text-xs font-semibold px-4 py-1.5 rounded-full transition-all focus:outline-none ${
                  activeFilter === cat.id
                    ? 'bg-[#0B0B0B] text-[#D4AF37] font-bold shadow-sm border border-[#D4AF37]'
                    : 'bg-[#FFFFFF] text-[#242424] hover:text-[#0B0B0B] hover:border-[#D4AF37] border border-[#242424]/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skeleton Loaders to prevent Layout Shifts */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden aspect-[3/4] border border-[#242424]/10 bg-[#FFFFFF] p-5 flex flex-col justify-end space-y-3 relative"
              >
                <div className="absolute inset-0 skeleton-shimmer" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-[#F5F5F5]" />
                <div className="relative z-10 h-6 bg-[#F5F5F5] rounded w-3/4" />
                <div className="relative z-10 h-4 bg-[#F5F5F5] rounded w-full" />
                <div className="relative z-10 h-4 bg-[#F5F5F5] rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          /* 13 Dynamic Cards Grid in 3:4 Aspect Ratio */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredAreas.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: (idx % 4) * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => onSelectArea(area)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectArea(area);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ver detalles de ${area.title}`}
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[3/4] border border-[#242424]/20 hover:border-[#D4AF37] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-end bg-[#0B0B0B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                {/* Background realistic legal photography */}
                <Image
                  src={area.image}
                  alt={`Fotografía ilustrativa de ${area.title} - VINDEXGOMEZ LEGAL`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 z-0 filter brightness-[0.75] contrast-[1.08]"
                  referrerPolicy="no-referrer"
                />

                {/* Numbering badge top left */}
                <div className="absolute top-3.5 left-3.5 z-20">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0B0B0B]/90 border border-[#D4AF37] font-montserrat text-xs font-bold text-[#D4AF37] shadow-sm backdrop-blur-md">
                    {area.number < 10 ? `0${area.number}` : area.number}
                  </span>
                </div>

                {/* Tag top right */}
                <div className="absolute top-3.5 right-3.5 z-20 max-w-[65%] text-right">
                  <span className="inline-block font-montserrat text-[10px] font-bold tracking-wider uppercase text-[#0B0B0B] bg-[#FFFFFF]/95 border border-[#D4AF37]/40 px-2.5 py-1 rounded shadow-sm backdrop-blur-md truncate">
                    {area.tag}
                  </span>
                </div>

                {/* Gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10 opacity-95 group-hover:opacity-90 transition-opacity" />

                {/* Card Bottom Content */}
                <div className="relative z-20 p-5 flex flex-col justify-end">
                  <h3 className="font-montserrat text-lg sm:text-xl font-bold text-[#FFFFFF] group-hover:text-[#E7D18A] transition-colors leading-snug line-clamp-2">
                    {area.title}
                  </h3>

                  <p className="mt-2 font-open-sans text-xs text-[#F5F5F5] line-clamp-3 leading-relaxed">
                    {area.shortDesc}
                  </p>

                  {/* Subservice indicator */}
                  <div className="mt-3 font-open-sans text-[11px] text-[#E7D18A] flex items-center gap-1 font-medium">
                    <span className="text-[#D4AF37]">•</span>
                    <span>{area.subservices.length} sub-servicios especializados</span>
                  </div>

                  {/* Ver Detalles Button */}
                  <div className="mt-4 pt-3 border-t border-[#242424] flex items-center justify-between">
                    <span className="font-montserrat text-xs font-bold text-[#E7D18A] group-hover:text-[#FFFFFF] transition-colors">
                      Ver Detalles & Asesoría
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#D4AF37] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-[#0B0B0B]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredAreas.length === 0 && !isLoading && (
          <div className="text-center py-16 bg-[#FFFFFF] rounded-xl border border-[#242424]/15">
            <p className="font-open-sans text-[#242424] text-base">No se encontraron áreas legales con el término ingresado.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="mt-3 font-montserrat text-sm text-[#0B0B0B] font-bold underline decoration-[#D4AF37] hover:text-[#D4AF37]"
            >
              Restablecer búsqueda
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
