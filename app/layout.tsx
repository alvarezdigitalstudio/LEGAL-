import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import { ATTORNEY_INFO, FAQS_DATA, PRACTICE_AREAS } from '@/lib/legal-data';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

const DOMAIN = 'https://vindexgomezlegal.com';

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: 'VINDEXGOMEZ LEGAL | Licdo. Jaime Gómez Araúz - Abogado en Chiriquí y Panamá',
  description:
    'Firma jurídica VINDEXGOMEZ LEGAL liderada por el Licdo. Jaime Gómez Araúz (Idoneidad CSJ No. 22518 - CNA). Más de 10 años de experiencia en Defensa Penal Estratégica SPA, Familiar, Civil, Agrario ANATI y Corporativo.',
  keywords: [
    'VINDEXGOMEZ LEGAL',
    'Licdo Jaime Gomez Arauz',
    'Abogado en Chiriqui',
    'Abogado en David Chiriqui',
    'Defensa Penal SPA David',
    'Idoneidad CSJ 22518',
    'Colegio Nacional de Abogados de Panama',
    'Abogado de Familia Chiriqui',
    'Titulacion ANATI Chiriqui',
    'Abogados Panama',
    'Derecho Agrario David',
    'Bienes Raices David Boquete',
    'Asesoria Juridica Panama'
  ],
  authors: [{ name: 'Licdo. Jaime Gómez Araúz - VINDEXGOMEZ LEGAL' }],
  creator: 'VINDEXGOMEZ LEGAL',
  publisher: 'VINDEXGOMEZ LEGAL',
  icons: {
    icon: [
      {
        url: '/assets/aistudio/26c2ea50-e1e3-11f1-8381-f301d4d158df_79aa34a1.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/assets/aistudio/26c2ea50-e1e3-11f1-8381-f301d4d158df_79aa34a1.svg',
    apple: '/assets/aistudio/26c2ea50-e1e3-11f1-8381-f301d4d158df_79aa34a1.svg',
  },
  openGraph: {
    title: 'VINDEXGOMEZ LEGAL | Licdo. Jaime Gómez Araúz - Abogado en Panamá',
    description:
      'Asesoría jurídica firme, estratégica y confidencial en David, Chiriquí y Panamá. Idoneidad CSJ No. 22518. Más de 10 años de ejercicio profesional.',
    type: 'website',
    locale: 'es_PA',
    url: DOMAIN,
    siteName: 'VINDEXGOMEZ LEGAL',
    images: [
      {
        url: `${DOMAIN}/assets/aistudio/26c2ea50-e1e3-11f1-8381-f301d4d158df_79aa34a1.svg`,
        width: 1640,
        height: 500,
        alt: 'VINDEXGOMEZ LEGAL - Licdo. Jaime Gómez Araúz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VINDEXGOMEZ LEGAL | Licdo. Jaime Gómez Araúz',
    description:
      'Asesoría jurídica con compromiso, experiencia y responsabilidad en Panamá y Chiriquí. Idoneidad CSJ No. 22518.',
    images: [`${DOMAIN}/assets/aistudio/26c2ea50-e1e3-11f1-8381-f301d4d158df_79aa34a1.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${DOMAIN}/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LegalService', 'Attorney'],
        '@id': `${DOMAIN}/#attorney`,
        name: `${ATTORNEY_INFO.firmName} | ${ATTORNEY_INFO.name}`,
        alternateName: 'VINDEXGOMEZ LEGAL Chiriquí Panamá',
        url: DOMAIN,
        logo: `${DOMAIN}${ATTORNEY_INFO.logoUrl}`,
        image: ATTORNEY_INFO.profilePhotoUrl,
        description:
          'Firma jurídica VINDEXGOMEZ LEGAL del Licdo. Jaime Gómez Araúz (Idoneidad No. 22518 - CNA). Más de 10 años de ejercicio ininterrumpido en litigación penal SPA, familiar, civil, agraria y corporativa en David, Chiriquí y toda la República de Panamá.',
        telephone: ATTORNEY_INFO.phone,
        email: ATTORNEY_INFO.email,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Villa Isabela, Oficina B-9',
          addressLocality: 'David',
          addressRegion: 'Chiriquí',
          postalCode: '0426',
          addressCountry: 'PA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '8.4273',
          longitude: '-82.4309',
        },
        hasMap: 'https://maps.google.com/?q=Villa+Isabela+David+Chiriqui+Panama',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '08:30',
            closes: '12:30',
          },
        ],
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Chiriquí',
          },
          {
            '@type': 'Country',
            name: 'Panamá',
          },
        ],
        knowsAbout: PRACTICE_AREAS.map((a) => a.title),
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS_DATA.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://vindexgomezlegal.com/" />

        {/* =========================================================================
            GOOGLE ANALYTICS 4 (GA4) + CONSENT MODE v2 (EJECUCIÓN CONDICIONAL)
            IMPORTANTE: Reemplace 'G-XXXXXXXXXX' por su ID real de medición GA4.
            Este script NO carga ni ejecuta rastreo de Google Analytics mientras el
            usuario no haya aceptado expresamente las cookies en el banner.
           ========================================================================= */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });

              (function initConditionalGA4() {
                var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Reemplazar con ID real GA4 (ej. G-ABC123DEF4)
                var CONSENT_KEY = 'vindexgomez_cookie_consent';
                var loaded = false;

                function loadGA4() {
                  if (loaded || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
                    // Actualiza señal de consentimiento incluso antes de configurar el ID real
                    gtag('consent', 'update', { 'analytics_storage': 'granted' });
                    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
                  }
                  if (loaded) return;
                  loaded = true;

                  gtag('consent', 'update', { 'analytics_storage': 'granted' });
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
                  document.head.appendChild(script);

                  gtag('js', new Date());
                  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
                }

                try {
                  var saved = localStorage.getItem(CONSENT_KEY);
                  if (saved === 'accepted' || saved === 'accepted_all') {
                    loadGA4();
                  } else if (saved && saved.indexOf('{') === 0) {
                    var parsed = JSON.parse(saved);
                    if (parsed && parsed.analytics === true) {
                      loadGA4();
                    }
                  }
                } catch (e) {}

                window.addEventListener('vindexgomez:cookies-accepted', loadGA4);
              })();
            `,
          }}
        />

        {/* FontAwesome 6 icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FFFFFF] text-[#0B0B0B] font-open-sans antialiased selection:bg-[#E7D18A]/50 selection:text-[#0B0B0B] min-h-screen overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
