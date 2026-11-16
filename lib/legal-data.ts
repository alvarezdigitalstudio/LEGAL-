export interface LegalPracticeArea {
  id: string;
  number: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  subservices: string[];
  keyBenefits: string[];
}

export const ATTORNEY_INFO = {
  firmName: "VINDEXGOMEZ LEGAL",
  firmTagline: "Firma Jurídica & Consultoría Corporativa",
  name: "Licdo. Jaime Gómez Araúz",
  title: "Abogado & Consultor Jurídico",
  idoneidad: "No. 22518",
  colegio: "Colegio Nacional de Abogados de Panamá (CNA)",
  experienceYears: "Más de 10 años",
  experienceTagline: "Ejercicio ininterrumpido del derecho en la República de Panamá",
  specialties: [
    "Defensa Penal Estratégica (SPA)",
    "Defensa Familiar & Sucesiones",
    "Defensa Pública & Garantías",
    "Derecho Agrario & Tierras ANATI",
    "Derecho Mercantil & Corporativo"
  ],
  phone: "+507 6455-6443",
  phoneRaw: "50764556443",
  email: "jaimegomez.abogado@outlook.com",
  secondaryEmail: "licd.jaimegomez@proton.me",
  address: "Villa Isabela, David, Chiriquí, Panamá. Oficina B-9",
  city: "David",
  province: "Chiriquí",
  country: "Panamá",
  logoUrl: "/assets/aistudio/26c2ea50-e1e3-11f1-8381-f301d4d158df_79aa34a1.svg",
  profilePhotoUrl: "https://lh3.googleusercontent.com/d/1C48Kr9_ZOiRRACrar1M7Jgn-Srzpcz9i",
  heroVideoUrl: "https://drive.google.com/uc?export=download&id=1C5AHG1hT5b_riMdFF06rYw6M0vkYtUPj",
  heroVideoDriveUrl: "https://drive.google.com/file/d/1C5AHG1hT5b_riMdFF06rYw6M0vkYtUPj/view?usp=drivesdk",
  heroVideoEmbedUrl: "https://drive.google.com/file/d/1C5AHG1hT5b_riMdFF06rYw6M0vkYtUPj/preview",
  whatsappBaseUrl: "https://wa.me/50764556443",
  googleMapsQuery: "Villa+Isabela+David+Chiriqui+Panama",
  officeHours: "Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 8:30 AM - 12:30 PM (Previa Cita)",
  emergencyNotice: "Atención de urgencias penales y audiencias de control de aprehensión 24/7.",
  domain: "vindexgomezlegal.com",
  socialLinks: {
    whatsapp: "https://wa.me/50764556443",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    x: "https://x.com",
    tiktok: "https://www.tiktok.com"
  }
};

export const PRACTICE_AREAS: LegalPracticeArea[] = [
  {
    id: "penal-administrativo",
    number: 1,
    title: "Derecho Penal y Administrativo",
    shortDesc: "Defensa técnica de alta precisión en el Sistema Penal Acusatorio (SPA) y procedimientos sancionatorios gubernativos.",
    fullDesc: "Representación integral en todas las etapas del proceso penal panameño bajo las normas del Código Procesal Penal. Asistencia inmediata desde la aprehensión policial, audiencias de control de garantías ante los Tribunales de Chiriquí, formulación de acusación, juicio oral y fase de cumplimiento. Asimismo, ejercemos una sólida defensa frente a procesos disciplinarios y sancionatorios de entidades gubernamentales.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    tag: "Defensa Penal & SPA",
    subservices: [
      "Asistencia inmediata en audiencias de control de aprehensión, imputación y medidas cautelares.",
      "Defensa técnica rigurosa en juicio oral ante el Tribunal de Juicio de Chiriquí.",
      "Negociación estratégica de métodos alternos de solución de conflictos y acuerdos de pena favorables.",
      "Interposición de recursos extraordinarios: Anulación, Casación Penal y Hábeas Corpus.",
      "Defensa en procedimientos sancionatorios administrativos y recursos en vía gubernativa.",
      "Representación de víctimas del delito con constitución de querella y acción civil resarcitoria."
    ],
    keyBenefits: [
      "Atención de urgencia penal 24/7 en Chiriquí",
      "Profundo dominio de la oralidad y litigación forense",
      "Garantía estricta de presunción de inocencia y debido proceso"
    ]
  },
  {
    id: "civil-familia-sucesiones",
    number: 2,
    title: "Civil, Familia y Sucesiones",
    shortDesc: "Solución humana y jurídica en divorcios, pensiones alimenticias, custodias y partición de herencias hereditarias.",
    fullDesc: "Protección integral del patrimonio familiar y de los derechos fundamentales de cónyuges, hijos y herederos. Guiamos a nuestros clientes en momentos cruciales con tacto, firmeza y absoluta reserva profesional, orientando soluciones sostenibles o litigando con solidez técnica en los juzgados de familia y civiles de la provincia de Chiriquí.",
    image: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&w=800&q=80",
    tag: "Familia & Sucesiones",
    subservices: [
      "Procesos de divorcio por mutuo consentimiento y por causales contenciosas.",
      "Fijación, aumento, rebaja o exoneración de pensiones alimenticias de menores y mayores.",
      "Régimen de guarda, crianza, custodia compartida y reglamentación de visitas.",
      "Juicios de sucesión testada e intestada con inventario y adjudicación de bienes.",
      "Disolución y liquidación de la sociedad conyugal de bienes.",
      "Procesos ordinarios civiles, prescripción adquisitiva de dominio y cobros ejecutivos."
    ],
    keyBenefits: [
      "Enfoque protector del interés superior del menor",
      "Liquidación ordenada y pacífica de patrimonios familiares",
      "Seguimiento diligente en tribunales civiles de David"
    ]
  },
  {
    id: "derecho-laboral",
    number: 3,
    title: "Derecho Laboral",
    shortDesc: "Asesoría estratégica patronal y defensa técnica de trabajadores conforme al Código de Trabajo de Panamá.",
    fullDesc: "Equilibramos la relación laboral garantizando el estricto apego a las leyes de la República de Panamá. Representamos tanto a empresas en la estructuración de contrataciones claras y auditorías de cumplimiento, como a trabajadores en la defensa de sus derechos laborales, despidos injustificados y reclamo de prestaciones adeudadas.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    tag: "Litigio & Asesoría Laboral",
    subservices: [
      "Demandas por despido injustificado, salarios caídos y prima de antigüedad.",
      "Cálculo y auditoría pericial de liquidaciones, vacaciones, décimo tercer mes y horas extras.",
      "Defensa en casos de fueros especiales: fuero maternal, fuero sindical y fuero de discapacidad.",
      "Conciliaciones individuales ante las Direcciones Regionales de MITRADEL en Chiriquí.",
      "Redacción y homologación de reglamentos internos de trabajo y contratos individuales.",
      "Asesoría preventiva para empleadores en prevención de contingencias y demandas colectivas."
    ],
    keyBenefits: [
      "Cálculos liquidatorios rigurosos basados en la ley y jurisprudencia",
      "Representación diligente ante las Juntas de Conciliación y Decisión",
      "Estrategias de negociación extrajudicial de mutuo acuerdo"
    ]
  },
  {
    id: "derecho-migratorio",
    number: 4,
    title: "Derecho Migratorio",
    shortDesc: "Radicación legal, visas de residencia y permisos de trabajo para profesionales, inversionistas y familias.",
    fullDesc: "Acompañamiento integral ante el Servicio Nacional de Migración y el Ministerio de Trabajo (MITRADEL). Evaluamos la alternativa migratoria adecuada conforme al perfil de extranjeros que buscan invertir, trabajar o jubilarse pacíficamente en la República de Panamá, especialmente en David, Boquete y Tierras Altas.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    tag: "Residencias & Visas",
    subservices: [
      "Permiso de Residente Permanente por Países Amigos (Friendly Nations Visa).",
      "Visa de Inversionista Calificado y Solvencia Económica Propia.",
      "Residencia de Jubilado o Pensionado (Pensionado Visa con amplios beneficios fiscales).",
      "Permisos de trabajo ante MITRADEL (porcentajes de extranjeros, técnico especializado, etc.).",
      "Reagrupación familiar de cónyuges, hijos y dependientes.",
      "Cartas de naturaleza y procesos de naturalización para obtención de cédula panameña."
    ],
    keyBenefits: [
      "Tramitación diligente y seguimiento directo de expedientes",
      "Asesoría bilingüe para la comunidad expatriada en Chiriquí",
      "Cumplimiento riguroso de los decretos migratorios vigentes"
    ]
  },
  {
    id: "propiedad-intelectual",
    number: 5,
    title: "Derecho de Propiedad Intelectual",
    shortDesc: "Protección legal de marcas comerciales, patentes, derechos de autor y secretos industriales.",
    fullDesc: "Su identidad de marca y sus creaciones son activos comerciales de incalculable valor. Gestionamos el registro y defensa activa de marcas, lemas, nombres comerciales y patentes ante la Dirección General del Registro de la Propiedad Industrial (DIGERPI) del Ministerio de Comercio e Industrias (MICI), protegiéndole frente a plagios e infracciones.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    tag: "Marcas & Patentes DIGERPI",
    subservices: [
      "Búsqueda de antecedentes fonéticos y viabilidad de registro marcario.",
      "Registro de marcas de productos, servicios, marcas colectivas y nombres comerciales.",
      "Contestación de objeciones oficiales e interposición de demandas de oposición.",
      "Depósito y protección de derechos de autor, obras de software y creaciones artísticas.",
      "Contratos de franquicia, cesión de derechos patrimoniales y licencias de uso marcario.",
      "Acciones penales y civiles por falsificación, competencia desleal e infracción de marca."
    ],
    keyBenefits: [
      "Protección registral territorial de marca en Panamá",
      "Monitoreo continuo en el Boletín Oficial de la Propiedad Industrial",
      "Resguardo jurídico de intangibles empresariales"
    ]
  },
  {
    id: "derecho-ambiental",
    number: 6,
    title: "Derecho Ambiental",
    shortDesc: "Cumplimiento normativo, concesiones hídricas y defensa legal ante el Ministerio de Ambiente (MiAmbiente).",
    fullDesc: "Asesoramiento especializado para empresas agrícolas, hidroeléctricas, turísticas y constructoras en el cumplimiento de la Ley General del Ambiente (Ley 41 de 1998) y sus reglamentaciones. Salvaguardamos la viabilidad jurídica de sus operaciones mediante una gestión preventiva y defensa procesal en controversias ambientales en la provincia de Chiriquí.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    tag: "Normativa MiAmbiente",
    subservices: [
      "Asesoría legal en la tramitación de Estudios de Impacto Ambiental (EsIA Categorías I, II y III).",
      "Defensa en procesos administrativos sancionatorios y multas impuestas por MiAmbiente.",
      "Solicitud de concesiones de agua para uso agropecuario, industrial o generación eléctrica.",
      "Permisos de aprovechamiento forestal, planes de manejo y podas supervisadas.",
      "Consultoría en adecuación a planes de ordenamiento territorial ambiental.",
      "Litigios ecológicos y acciones de tutela para salvaguarda de fuentes hídricas y ecosistemas."
    ],
    keyBenefits: [
      "Evite costosas paralizaciones o clausuras de proyectos",
      "Relación fluida y transparente con entes fiscalizadores",
      "Seguridad jurídica en el desarrollo sostenible regional"
    ]
  },
  {
    id: "derecho-agrario",
    number: 7,
    title: "Derecho Agrario",
    shortDesc: "Titulación de fincas, regularización ante ANATI y resolución de litigios en juzgados agrarios.",
    fullDesc: "Chiriquí es el corazón productivo de Panamá. Brindamos soporte especializado en la regularización y titulación de tierras ante la Autoridad Nacional de Administración de Tierras (ANATI), resolución de conflictos limítrofes entre fincas, protección de derechos posesorios históricos y estructuración de negocios agrícolas y ganaderos de gran escala.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    tag: "Tierras & ANATI Chiriquí",
    subservices: [
      "Tramitación integral de títulos de propiedad y titulación masiva ante ANATI.",
      "Juicios agrarios de deslinde, amojonamiento y fijación de servidumbres de paso y acueducto.",
      "Defensa de derechos posesorios rurales y amparos de posesión pacífica e ininterrumpida.",
      "Contratos de arrendamiento agrario, pastoreo, aparcería y explotación cafetalera.",
      "Saneamiento registral de fincas con duplicidad de folios o inconsistencias catastrales.",
      "Procesos de prescripción adquisitiva agraria en juzgados especializados de Chiriquí."
    ],
    keyBenefits: [
      "Certeza jurídica sobre el valor de sus tierras productivas",
      "Resolución pacífica o judicial efectiva de disputas de linderos",
      "Gestión directa y presencial ante oficinas de ANATI en David"
    ]
  },
  {
    id: "bancario-seguros-inmobiliario",
    number: 8,
    title: "Bancario, Seguros, Bienes Raíces y Contratos",
    shortDesc: "Cierres inmobiliarios verificados, diligencia debida en compras y reclamación de indemnizaciones.",
    fullDesc: "Brindamos asesoría patrimonial en las transacciones comerciales y personales más relevantes. Realizamos Due Diligence legal en adquisiciones de propiedades residenciales y comerciales en David, Boquete y playas chiricanas, orientamos gestiones con entidades bancarias y reclamamos formalmente el cumplimiento de pólizas de seguros conforme a derecho.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tag: "Bienes Raíces & Contratos",
    subservices: [
      "Due Diligence inmobiliario: verificación exhaustiva en Registro Público de gravámenes y pleitos.",
      "Elaboración y perfeccionamiento de Contratos de Promesa de Compraventa y Escrituras Públicas.",
      "Asistencia en créditos hipotecarios bancarios, fideicomisos de garantía y cancelaciones de hipoteca.",
      "Reclamación a compañías aseguradoras por pólizas de vida, salud, incendio y colisión vehicular.",
      "Redacción de contratos mercantiles complejos, arrendamientos comerciales y joint ventures.",
      "Demandas por incumplimiento contractual y resarcimiento de daños materiales y morales."
    ],
    keyBenefits: [
      "Verificación registral preventiva de gravámenes y cargas",
      "Coordinación diligente con Notarías de Circuito y Registro Público",
      "Gestión técnica integral en reclamación de pólizas denegadas"
    ]
  },
  {
    id: "contencioso-administrativo",
    number: 9,
    title: "Derecho Contencioso-Administrativo",
    shortDesc: "Demandas de Plena Jurisdicción y Nulidad ante la Sala Tercera de la Corte Suprema de Justicia.",
    fullDesc: "Cuando el Estado actúa al margen de la ley o lesiona sus derechos subjetivos, ejercemos las acciones de control de legalidad más contundentes del ordenamiento panameño. Litigamos ante la Sala Tercera de la Corte Suprema de Justicia y agotamos rigurosamente la vía gubernativa previa ante ministerios y municipios.",
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=800&q=80",
    tag: "Sala Tercera CSJ",
    subservices: [
      "Demandas Contencioso-Administrativas de Plena Jurisdicción para restablecimiento de derechos.",
      "Demandas de Nulidad contra actos administrativos, decretos ejecutivos y resoluciones ilegales.",
      "Reclamaciones de Responsabilidad Patrimonial del Estado por daños y perjuicios sufridos.",
      "Recursos de Reconsideración y Apelación en la vía gubernativa previa.",
      "Controversias en contrataciones públicas y recursos de impugnación ante el Tribunal Administrativo de Contrataciones Públicas.",
      "Defensa frente a cobros coactivos ilegales de la DGI y Tesorerías Municipales."
    ],
    keyBenefits: [
      "Rigurosidad técnica en la fundamentación de conceptos de violación",
      "Representación calificada ante la Corte Suprema en Ciudad de Panamá",
      "Suspensión provisional de actos administrativos lesivos"
    ]
  },
  {
    id: "derecho-constitucional",
    number: 10,
    title: "Derecho Constitucional",
    shortDesc: "Acciones de Amparo de Garantías, Hábeas Corpus y demandas de Inconstitucionalidad.",
    fullDesc: "La Constitución es la norma suprema que resguarda su dignidad y libertades. Interponemos acciones constitucionales de choque inmediato para frenar arbitrariedades judiciales o administrativas, restituir la libertad personal amenazada o vulnerada y expulsar del ordenamiento jurídico normas contrarias a la Carta Fundamental de Panamá.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    tag: "Garantías Fundamentales",
    subservices: [
      "Acciones de Amparo de Garantías Constitucionales contra autos u órdenes de autoridades arbitrarias.",
      "Acciones de Hábeas Corpus preventivo, correctivo y reparador para proteger la libertad física.",
      "Acciones de Hábeas Data para exigir acceso, rectificación o eliminación de datos reservados.",
      "Demandas de Inconstitucionalidad ante el Pleno de la Corte Suprema de Justicia de Panamá.",
      "Advertencias de Inconstitucionalidad incidentales dentro de procesos judiciales en curso.",
      "Defensa y tutela judicial efectiva de derechos humanos y debido proceso legal."
    ],
    keyBenefits: [
      "Intervención urgente y prioritaria ante violaciones flagrantes",
      "Suspensión expedita de medidas que atenten contra garantías",
      "Doctrina jurisprudencial de vanguardia"
    ]
  },
  {
    id: "procesos-judiciales-forense",
    number: 11,
    title: "Procesos Judiciales y Práctica Forense",
    shortDesc: "Litigación oral de alto impacto, medidas cautelares, embargos y ejecución de sentencias.",
    fullDesc: "La práctica forense exige temple, estrategia probatoria y excelencia argumentativa en sala de audiencia. Diseñamos tácticas procesales milimétricas para salvaguardar sus intereses desde la interposición de la demanda hasta la ejecución efectiva de la sentencia favorable en tribunales de la República de Panamá.",
    image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=800&q=80",
    tag: "Litigio Estratégico & Embargos",
    subservices: [
      "Interposición y contestación de Demandas Ordinarias Civiles de Mayor Cuantía.",
      "Solicitud de medidas cautelares previas, secuestros judiciales de bienes y retención de cuentas.",
      "Interrogatorio y contrainterrogatorio estratégico de peritos y testigos en juicio.",
      "Ejecución coactiva de sentencias judiciales y procesos ejecutivos de pagarés y letras de cambio.",
      "Homologación y ejecución de laudos arbitrales y sentencias judiciales extranjeras (Exequátur).",
      "Defensa frente a tercerías de dominio y oposición a embargos ilegítimos."
    ],
    keyBenefits: [
      "Aseguramiento preventivo del patrimonio sujeto a criterio judicial",
      "Dominio sólido de las técnicas de litigación oral",
      "Gestión diligente orientada a la ejecución de sentencias"
    ]
  },
  {
    id: "redaccion-documentos",
    number: 12,
    title: "Redacción de Documentos Jurídicos",
    shortDesc: "Constitución de sociedades, fundaciones de interés privado, testamentos y contratos claros.",
    fullDesc: "Un documento legal bien estructurado ayuda a prevenir futuros litigios. Redactamos y protocolizamos instrumentos jurídicos, comerciales y notariales con claridad y validez registral en la República de Panamá, procurando que su voluntad quede debidamente documentada conforme a la ley.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    tag: "Sociedades & Contratos Notariales",
    subservices: [
      "Constitución y pactos sociales de Sociedades Anónimas (S.A.) y Sociedades de Emprendimiento (SEP).",
      "Creación de Fundaciones de Interés Privado (FIP) para planificación y resguardo patrimonial.",
      "Redacción de Testamentos Abiertos y Cerrados y mandatos sucesorios.",
      "Poderes Generales, Especiales y Judiciales con cláusulas especiales de representación.",
      "Minutas para Escrituras Públicas de compraventa, donaciones, segregaciones y permutas.",
      "Convenios transaccionales de finiquito con valor de cosa juzgada."
    ],
    keyBenefits: [
      "Cláusulas claras sin ambigüedades interpretativas",
      "Tramitación notarial y registral directa en David",
      "Estructuras fiscales y corporativas a la medida"
    ]
  },
  {
    id: "formacion-ejercicio-profesional",
    number: 13,
    title: "Formación y Ejercicio Profesional en Panamá",
    shortDesc: "Consultoría deontológica, acompañamiento para idoneidad y capacitación procesal estratégica.",
    fullDesc: "El ejercicio de la abogacía en Panamá se fundamenta en la probidad, el conocimiento continuo y el estricto respeto a la Ley 9 de 1984 y el Código de Ética Judicial. El Licdo. Jaime Gómez Araúz ofrece asesoría y consultoría estratégica para nuevos profesionales del derecho, pasantes y despachos en formación sobre gestión procesal, cumplimiento normativo y litigación práctica.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    tag: "Consultoría Forense & Ética",
    subservices: [
      "Asesoramiento en el trámite y requisitos para la obtención de la Idoneidad Profesional ante la Corte Suprema de Justicia.",
      "Capacitación en técnicas avanzadas de litigación oral en el Sistema Penal Acusatorio (SPA).",
      "Consultoría sobre ética profesional, régimen disciplinario y prevención de faltas deontológicas.",
      "Adecuación de despachos a normativas de prevención de blanqueo de capitales (Ley 23 de 2015).",
      "Organización y digitalización estratégica del expediente judicial y gestión de despacho.",
      "Mentoría procesal en manejo de audiencias de garantías y juicio oral."
    ],
    keyBenefits: [
      "10+ años de experiencia práctica real transmitida",
      "Compromiso inquebrantable con la excelencia ética forense",
      "Fortalecimiento de la comunidad jurídica chiricana"
    ]
  }
];

export const FAQS_DATA = [
  {
    question: "¿Qué debo hacer inmediatamente si un familiar es aprehendido o citado por el Ministerio Público en Chiriquí?",
    answer: "Lo primero es contactar de inmediato a un abogado defensor idóneo antes de rendir cualquier declaración. En el Sistema Penal Acusatorio (SPA) de Panamá, las primeras 48 horas son críticas para la audiencia de garantías de control de aprehensión, formulación de imputación y medidas cautelares. Nuestro despacho ofrece asistencia legal penal de urgencia 24/7 en David y toda la provincia de Chiriquí."
  },
  {
    question: "¿Cómo se tramita un proceso de divorcio y cuánto tiempo puede demorar en Panamá?",
    answer: "Si es por mutuo consentimiento y no existen desacuerdos respecto a hijos menores o bienes, el trámite suele completarse con mayor agilidad en los Juzgados de Familia de David. Si es contencioso (por causales tipificadas en el Código de la Familia), requiere demanda, contestación y periodo de pruebas, por lo que los plazos dependen de la carga del despacho judicial. Brindamos asesoría para procurar una tramitación equilibrada y ordenada."
  },
  {
    question: "¿Puedo titular una finca o terreno que tengo en posesión en Chiriquí ante la ANATI?",
    answer: "Sí, conforme a la Ley de Titulación de Tierras y los requisitos de la Autoridad Nacional de Administración de Tierras (ANATI). Se debe acreditar la posesión pacífica, pública, continua e ininterrumpida por el periodo legal, acompañada de planos aprobados, inspección ocular y edictos. Gestionamos el expediente desde la solicitud inicial hasta su trámite registral."
  },
  {
    question: "¿Qué requisitos exige la Ley de Protección de Datos Personales de Panamá (Ley 81 de 2019)?",
    answer: "La Ley 81 exige que todo tratamiento de datos personales cuente con el consentimiento libre, previo, expreso e informado del titular, además de garantizar sus derechos ARCO (Acceso, Rectificación, Cancelación, Oposición y Portabilidad). En nuestro despacho aplicamos estrictos protocolos de confidencialidad y secreto profesional para salvaguardar su información."
  },
  {
    question: "¿Dónde está ubicada la oficina del Licdo. Jaime Gómez Araúz y cómo agendo una cita?",
    answer: "Nuestra oficina física se encuentra en Villa Isabela, David, Chiriquí, Panamá, Oficina B-9. Para agendar una consulta confidencial, puede comunicarse vía WhatsApp o llamada telefónica al +507 6455-6443 o escribir al correo oficial jaimegomez.abogado@outlook.com. Se atiende de forma presencial previa cita y también se realizan consultas virtuales por videollamada para clientes fuera de Chiriquí."
  },
  {
    question: "¿Qué ventajas tiene constituir una Fundación de Interés Privado (FIP) en Panamá?",
    answer: "La Fundación de Interés Privado panameña, regulada por la Ley 25 de 1995, es un instrumento reconocido para la planificación sucesoria y la organización patrimonial. Permite constituir un patrimonio autónomo destinado a los fines establecidos en el acta fundacional y su reglamento, sujeto a las excepciones y límites legales vigentes, y manteniendo reserva conforme a la normativa aplicable."
  },
  {
    question: "¿Cuáles son los honorarios del Licdo. Jaime Gómez Araúz?",
    answer: "Nuestros honorarios se establecen con total transparencia en un Contrato de Servicios Profesionales conforme a la complejidad del asunto, la cuantía y el Arancel Oficial del Colegio Nacional de Abogados de Panamá. Ofrecemos planes de pago estructurados por etapas procesales, garantizando previsibilidad y seriedad absoluta."
  },
  {
    question: "¿Atienden casos en otras provincias de Panamá además de Chiriquí?",
    answer: "Sí. Aunque nuestra sede principal está en David, Chiriquí, atendemos con regularidad causas en Bocas del Toro, Veraguas y Ciudad de Panamá, especialmente en recursos de Casación y procesos Contencioso-Administrativos ante la Corte Suprema de Justicia."
  }
];
