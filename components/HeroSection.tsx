'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Play, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy or low-power mode blocked auto playback
        setAutoplayBlocked(true);
      });
    }
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setAutoplayBlocked(false);
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-[68vh] sm:h-[75vh] md:h-[80vh] lg:h-[82vh] max-h-[85vh] flex items-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background HTML5 Video Layer */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
      >
        <source src="/videos/hero-abogado-optimized.mp4" type="video/mp4" />
        <source src="/videos/hero-abogado.mp4" type="video/mp4" />
        <source
          src="https://drive.google.com/uc?export=download&id=1C5AHG1hT5b_riMdFF06rYw6M0vkYtUPj"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Dark Contrast Overlay in Negro profesional #0B0B0B */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/85 via-[#0B0B0B]/50 to-[#0B0B0B]/20 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-transparent to-[#0B0B0B]/60 z-10 pointer-events-none" />

      {/* Content Container - Editorial Left-Aligned Composition */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-start">
        <div className="max-w-2xl lg:max-w-3xl text-left select-none">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] drop-shadow-[0_4px_20px_rgba(11,11,11,0.85)] leading-[1.12] sm:leading-[1.15]"
          >
            TUS DERECHOS MERECEN <br />
            UNA{' '}
            <span className="text-[#D4AF37]">
              DEFENSA FIRME.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-5 font-open-sans text-sm sm:text-base md:text-lg text-[#F5F5F5] font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(11,11,11,0.8)]"
          >
            Asesoría jurídica con compromiso, experiencia y responsabilidad en Panamá y Chiriquí.
          </motion.p>

          {/* Discreet WhatsApp CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8"
          >
            <a
              href="https://wa.me/50764556443?text=Hola%20Licdo.%20Jaime%20G%C3%B3mez,%20solicito%20una%20consulta%20legal%20confidencial."
              target="_blank"
              rel="noopener noreferrer"
              className="group font-montserrat inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-md bg-[#0B0B0B]/85 hover:bg-[#D4AF37] border border-[#D4AF37] text-[#FFFFFF] hover:text-[#0B0B0B] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 backdrop-blur-md shadow-lg active:scale-98"
              aria-label="Contactar por WhatsApp al Licdo. Jaime Gómez Araúz"
            >
              <svg
                className="w-4 h-4 text-[#D4AF37] group-hover:text-[#0B0B0B] transition-colors fill-current flex-shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Contactar por WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll-Down Invitation */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#sobre-el-abogado"
          className="flex flex-col items-center gap-1.5 text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors duration-300 group cursor-pointer focus:outline-none"
          aria-label="Desplazarse hacia abajo para explorar el resto de la página"
        >
          <span className="font-montserrat text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-medium text-[#F5F5F5]/80 group-hover:text-[#E7D18A] transition-colors drop-shadow-md">
            Explorar
          </span>
          <div className="w-5 h-8 sm:w-5.5 sm:h-9 rounded-full border border-[#D4AF37]/60 group-hover:border-[#D4AF37] flex items-start justify-center p-1 transition-colors backdrop-blur-[2px] bg-[#0B0B0B]/40 shadow-md">
            <motion.div
              animate={{ y: [0, 9, 0], opacity: [0.95, 0.25, 0.95] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-[#D4AF37]"
            />
          </div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-[#E7D18A] group-hover:text-[#D4AF37] -mt-0.5 transition-colors" />
          </motion.div>
        </a>
      </motion.div>

      {/* Discreet Autoplay Unlock Button if blocked by low-power mode */}
      {autoplayBlocked && (
        <button
          type="button"
          onClick={handleManualPlay}
          className="absolute bottom-5 right-5 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B]/85 border border-[#D4AF37]/70 text-[#E7D18A] font-montserrat text-xs backdrop-blur-md hover:bg-[#0B0B0B] transition-all shadow-lg"
          aria-label="Reproducir video"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Iniciar Video</span>
        </button>
      )}
    </section>
  );
}
