import Link from 'next/link';
import { Scale, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-[#FFFFFF] px-4 py-20 text-center">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/60 text-[#D4AF37] shadow-md">
          <Scale className="w-7 h-7" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <p className="font-montserrat text-xs font-bold uppercase tracking-widest text-[#242424]">
            Error 404 · VINDEXGOMEZ LEGAL
          </p>
          <h1 className="font-montserrat text-3xl sm:text-4xl font-bold text-[#0B0B0B] tracking-tight">
            Página no encontrada
          </h1>
          <p className="font-open-sans text-sm sm:text-base text-[#242424] leading-relaxed">
            El enlace al que intenta acceder no existe o ha sido reubicado dentro del portal oficial de VINDEXGOMEZ LEGAL.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-montserrat text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#E7D18A] text-[#0B0B0B] px-6 py-3 rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
