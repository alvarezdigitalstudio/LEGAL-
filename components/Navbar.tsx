'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ATTORNEY_INFO } from '@/lib/legal-data';
import { Menu, X, Shield, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre el Abogado', href: '#sobre-el-abogado' },
    { label: 'Áreas de Práctica', href: '#areas-de-practica' },
    { label: 'Consulta Jurídica', href: '#consulta' },
    { label: 'Preguntas Frecuentes', href: '#faqs' },
    { label: 'Ubicación', href: '#ubicacion' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 180;
      const sectionIds = [
        'inicio',
        'sobre-el-abogado',
        'areas-de-practica',
        'consulta',
        'faqs',
        'ubicacion',
      ];

      let current = 'inicio';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          } else if (scrollPosition >= top) {
            current = id;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        current = 'ubicacion';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top executive bar - Negro profesional & Dorado premium */}
      <div className="bg-[#0B0B0B] text-[#F5F5F5] text-xs border-b border-[#242424] py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          {/* Official Credentials */}
          <div className="flex items-center gap-3 text-xs font-open-sans">
            <span className="inline-flex items-center gap-1.5 text-[#E7D18A] font-montserrat font-semibold tracking-wide">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              Idoneidad Profesional CSJ: {ATTORNEY_INFO.idoneidad}
            </span>
            <span className="hidden sm:inline text-[#666666]">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#F5F5F5]">
              {ATTORNEY_INFO.colegio}
            </span>
            <span className="hidden md:inline text-[#666666]">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#F5F5F5]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              David, Chiriquí · República de Panamá
            </span>
          </div>

          {/* Monochrome Corporate Social Media Icons */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-3 text-[#F5F5F5] text-sm">
              <a
                href={ATTORNEY_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial VINDEXGOMEZ LEGAL"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a
                href={ATTORNEY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Corporativo"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href={ATTORNEY_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href={ATTORNEY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Oficial"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href={ATTORNEY_INFO.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Corporativo"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a
                href={ATTORNEY_INFO.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Oficial VINDEXGOMEZ LEGAL"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <i className="fa-brands fa-tiktok" />
              </a>
            </div>

            <div className="hidden lg:block h-3.5 w-px bg-[#242424]" />

            <span className="hidden lg:inline font-montserrat text-[11px] text-[#E7D18A] tracking-wider uppercase font-semibold">
              Atención Presencial & Virtual
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation in Negro profesional #0B0B0B */}
      <header
        className={`sticky top-[37px] z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/40 py-2.5'
            : 'bg-[#0B0B0B] border-b border-[#242424] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Official Original SVG Isotipo & Prominent VINDEXGOMEZ LEGAL Brand */}
          <a href="#inicio" className="flex items-center gap-3 sm:gap-3.5 group flex-shrink-0">
            <div className="relative h-10 sm:h-12 md:h-[52px] aspect-[510/500] overflow-hidden flex-shrink-0 flex items-center">
              <Image
                src={ATTORNEY_INFO.logoUrl}
                alt="Isotipo Oficial VINDEXGOMEZ LEGAL"
                width={1640}
                height={500}
                className="h-full w-auto max-w-none block select-none"
                priority
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="font-montserrat text-lg sm:text-xl lg:text-[22px] xl:text-2xl font-bold tracking-[0.04em] text-[#D4AF37] group-hover:text-[#E7D18A] transition-colors leading-none">
                VINDEXGOMEZ
              </span>
              <span className="font-montserrat text-[11px] sm:text-xs lg:text-[13px] font-semibold tracking-[0.34em] text-[#E7D18A] group-hover:text-[#D4AF37] transition-colors leading-none mt-1.5 pl-0.5">
                LEGAL
              </span>
            </div>
            <div className="hidden 2xl:flex flex-col border-l border-[#242424] pl-3 ml-1">
              <span className="font-montserrat text-[11px] text-[#F5F5F5] font-medium tracking-wide">
                Licdo. Jaime Gómez Araúz · <span className="text-[#D4AF37] font-semibold">CSJ No. 22518</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Montserrat & Strategic Gold Active Highlight */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 font-montserrat">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-sm font-semibold tracking-wide transition-all relative py-1 duration-200 ${
                    isActive
                      ? 'text-[#D4AF37] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF37]'
                      : 'text-[#FFFFFF] hover:text-[#E7D18A] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Direct WhatsApp CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${ATTORNEY_INFO.phoneRaw}?text=Hola%20Licdo.%20Jaime%20G%C3%B3mez,%20solicito%20una%20consulta%20legal%20confidencial.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp a VINDEXGOMEZ LEGAL"
              className="inline-flex items-center gap-2 font-montserrat bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] font-bold text-xs md:text-sm px-4 py-2.5 rounded-md shadow-sm active:scale-95 transition-all"
            >
              <i className="fa-brands fa-whatsapp text-base" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FFFFFF] hover:text-[#D4AF37] rounded-md border border-[#242424] bg-[#0B0B0B] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0B0B] border-b border-[#D4AF37]/40 px-6 pt-3 pb-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col gap-2 font-montserrat">
              {navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm py-2.5 px-3 rounded-lg font-semibold transition-all flex items-center justify-between border-b border-[#242424] ${
                      isActive
                        ? 'text-[#D4AF37] font-bold bg-[#242424]/50 border-l-4 border-[#D4AF37]'
                        : 'text-[#FFFFFF] hover:text-[#E7D18A] hover:bg-[#242424]/30'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${ATTORNEY_INFO.phoneRaw}?text=Hola%20Licdo.%20Jaime%20G%C3%B3mez,%20solicito%20una%20consulta%20legal%20confidencial.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-montserrat bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] font-bold py-3 rounded-md text-sm text-center shadow transition-all"
                  aria-label="Abrir WhatsApp para consulta legal confidencial"
                >
                  <i className="fa-brands fa-whatsapp text-lg" />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
