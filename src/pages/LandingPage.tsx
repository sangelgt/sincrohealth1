import React, { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { supabase } from "../lib/supabase"; // Import supabase

const ContactForm = lazy(() => import("../components/ContactForm"));
const AnimatedPhone = lazy(() => import("../components/AnimatedPhone"));
const PricingSection = lazy(() => import("../components/PricingSection"));

const chaosCards = [
  { icon: "air", title: "Recuperar el aliento", description: "Diga adiós al Burnout. Eliminamos el ruido administrativo para que su equipo vuelva a conectar con el propósito de sanar." },
  { icon: "bubble_chart", title: "Sincronización fluida", description: "Adiós al Info Chaos. Un flujo de datos armónico donde cada mensaje y cita encuentra su lugar sin esfuerzo humano." },
  { icon: "expand", title: "Crezca sin esfuerzo", description: "Escalabilidad orgánica. Nuestra arquitectura se expande silenciosamente a medida que su clínica conquista nuevos horizontes." },
  { icon: "water_drop", title: "Asegure cada gota", description: "Detenga la Fuga de Ingresos. Optimizamos cada recurso con la delicadeza de un relojero y la visión de un estratega." }
];
const solutions = [
  { id: "01", title: "Booking Booster", description: "Natural Agenda: Un ecosistema de citas que respira. Algoritmos predictivos que entienden el contexto vital del paciente para una programación fluida y sin solapamientos." },
  { id: "02", title: "Triaje Empático", description: "Priority & Sensitivity: Una acogida digital que prioriza la urgencia clínica sin perder la calidez humana, identificando matices emocionales en cada consulta inicial." },
  { id: "03", title: "Bóveda WhatsApp-to-EHR", description: "Invisible Security: Conversaciones cifradas que se integran automáticamente en el historial clínico, garantizando que ninguna palabra del paciente se pierda en el vacío." }
];

const solutionImages = [
    {src: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion%201%20.webp", width: 340, height: 220},
    {src: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion2%20(1).webp", width: 340, height: 220},
    {src: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion%203.webp", width: 340, height: 220}
];

const metrics = [
    { value: "-40%", label: "Ausentismo", sublabel: "Recordatorios empáticos inteligentes" },
    { value: "+25%", label: "Retorno ROI", sublabel: "Optimización de agenda y recursos" },
    { value: "-85%", label: "Carga Manual", sublabel: "Automatización de flujos clínicos" },
    { value: "24/7", label: "Disponibilidad", sublabel: "Atención ininterrumpida de alto nivel" }
];
const benefits = [
    { title: "Diagnóstico Operativo GRATUITO", description: "Análisis profundo de sus cuellos de botella actuales." },
    { title: "Acceso a prueba por 30 días", description: "Experimente el ecosistema completo sin restricciones." },
    { title: "Plan de Sincronización Personalizado", description: "Estrategia a medida adaptada a su volumen de pacientes." },
    { title: "Soporte Prioritario de Implementación", description: "Un consultor dedicado para su fase de transición." }
];

const LandingPage: React.FC = () => {
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#/${id}`);
    }
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '').replace('/', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="text-slate-800 premium-gradient">

        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-6">
           <img src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/baner%20/%20fondos%20/banner.webp" fetchPriority="high" loading="eager" decoding="async" alt="Banner de Kura AI" className="absolute inset-0 w-full h-full object-cover z-0" />
           <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-50/50 rounded-full blur-[100px]"></div>
            <div className="max-w-5xl mx-auto relative z-20">
                <div className="bg-white/40 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
                    <h1 className="hero-title text-5xl md:text-7xl font-light text-slate-900 mb-6">
                        Transforme su clínica con <span className="font-semibold text-[#0d5fb4]">Kura AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--taupe)] font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                        Elevando la gestión médica hacia una experiencia de serenidad y rentabilidad sincronizada.\n                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="/#/registro" onClick={(e) => handleScroll(e, 'registro')} className="cta-button bg-[#0d5fb4] text-white text-lg font-medium hover:scale-105 shadow-2xl shadow-blue-500/30 text-center">
                            Solicitar Prueba Gratuita
                        </a>
                        <a href="/#/ia-humana" onClick={(e) => handleScroll(e, 'ia-humana')} className="text-[var(--taupe)] hover:text-slate-900 transition-colors flex items-center gap-2">
                          Conoce nuestra IA Humana →
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <LazyMotion features={domAnimation}>
        <section id="caos" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-sky-50" style={{contain: 'content'}}>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">Equilibrio <span className="text-[var(--taupe)]">vs</span> Caos</h2>
                    <div className="w-24 h-1 bg-[#0d5fb4] mx-auto opacity-20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {chaosCards.map((card, index) => (
                        <motion.div key={index} className="organic-card p-10 text-center flex flex-col items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                            <div className="glass-icon-container mb-8">
                                <span className="material-symbols-outlined text-[#0d5fb4] text-4xl">{card.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">{card.title}</h3>
                            <p className="text-[var(--taupe)] font-light leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section id="ia-humana" className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-sky-50 px-6" style={{contain: 'content'}}>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">La IA que se siente <br/><span className="italic text-[#0d5fb4]">naturalmente</span> humana.</h2>
                        <div className="space-y-12">
                            {solutions.map((item) => (
                                <motion.div key={item.id} className="flex gap-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#0d5fb4]/20 flex items-center justify-center"><span className="text-[#0d5fb4] font-bold">{item.id}</span></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-[var(--taupe)] font-light">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative py-12 flex flex-col gap-6 items-center">
                        {solutionImages.map((image, index) => (
                            <motion.div key={index} className="w-full max-w-[340px] h-[220px] rounded-2xl shadow-lg overflow-hidden" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05, zIndex: 50}} style={{ zIndex: 30 - index * 10, transform: `translateX(${(index - 1) * -2}rem)` }}>
                                <img src={image.src} width={image.width} height={image.height} loading="lazy" decoding="async" className="w-full h-full object-cover" alt={`Solución ${index + 1}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="metricas" className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-sky-50">
            <div className="max-w-7xl mx-auto w-full">
                <div className="organic-card p-8 md:p-20 bg-slate-50 text-[var(--deep-navy)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-600/5 blur-[120px]"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-[var(--deep-navy)]">Métricas que inspiran <br/><span className="text-[#0d5fb4]">tranquilidad</span></h2>
                            <p className="text-[var(--deep-navy)] mb-12 text-lg font-light">Nuestros resultados no solo son números; son minutos recuperados para lo que realmente importa: la atención al paciente.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"> {/* Changed to grid-cols-1 for small screens, gap-6 instead of px-4 on main container */}
                                {metrics.map(metric => (
                                    <div key={metric.label} className="w-full h-auto min-h-fit"> {/* Ensure w-full, h-auto, min-h-fit */}
                                        <p className="text-5xl font-light text-[#0d5fb4] mb-2 break-words">{metric.value}</p>
                                        <p className="text-xs text-[var(--deep-navy)] uppercase tracking-widest font-bold break-words">{metric.label}</p>
                                        <p className="text-[10px] text-[var(--deep-navy)] mt-2 break-words whitespace-normal">{metric.sublabel}</p> {/* Removed max-w-[150px] */}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center py-8 overflow-visible"> {/* Modified classes */}
                            {/* The inner div, which was the wrapper, is now removed as per the new AnimatedPhone structure */}
                               <Suspense fallback={null}>
                                  <AnimatedPhone />
                               </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="planes" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-sky-50">
          <Suspense fallback={null}>
            <PricingSection />
          </Suspense>
        </section>

        <section id="registro" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
        <img 
          src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/baner%20/%20fondos%20/Fondo%20de%20Dashboard.webp" 
          alt="Dashboard de gestión médica Kura AI"
          className="absolute inset-0 w-full h-full object-cover z-0" 
          loading="lazy" 
          decoding="async"
        />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">Recupere la rentabilidad y el control de su clínica hoy</h2>
                    <p className="text-white/90 font-light max-w-3xl mx-auto text-lg leading-relaxed">Recupera el control de tu clínica, libera tu tiempo y optimiza tus recursos con la inteligencia artificial de Kura.</p>
                </div>
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6 pt-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white/90 backdrop-blur-md shadow-xl border border-white/20 rounded-3xl p-6 flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0d5fb4]/10 flex items-center justify-center"><span className="material-symbols-outlined text-[#0d5fb4] font-bold">check</span></div>
                                <div>
                                    <h3 className="font-semibold text-slate-800">{benefit.title}</h3>
                                    <p className="text-sm text-[var(--taupe)]">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        <div className="mt-8 p-6 rounded-[40px] border border-blue-100 bg-black/60 backdrop-blur-sm">
                            <p className="text-white/80 text-sm italic leading-relaxed">"La integración con Kura nos permitió recuperar el enfoque clínico en menos de una semana. La carga administrativa simplemente desapareció."</p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                <span className="text-xs font-bold text-white">Dr. M. Arrieta, Director Médico</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="bg-white/90 backdrop-blur-md shadow-xl border border-white/20 rounded-3xl p-10 md:p-14">
                          <Suspense fallback={null}>
                            <ContactForm />
                          </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </LazyMotion>

    </div>
  );
};

export default LandingPage;