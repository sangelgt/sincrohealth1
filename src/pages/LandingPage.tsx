import React, { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleScroll = (id: string) => {
    const target = document.getElementById(id.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/#${id.replace("#", "")}`);
    }
  };

  const handleCTAClick = async (e: React.MouseEvent<HTMLAnchorElement>, source: string, seccion: string) => { // Added seccion parameter
    e.preventDefault();
    
    const targetUrl = new URL(window.location.href);
    targetUrl.searchParams.set("source", source);
    window.history.pushState({ path: targetUrl.href }, "", targetUrl.href);
    
    // Supabase insert for Interacciones
    console.log("Insertando en:", "Interacciones"); // Added console.log
    try {
      const { data, error } = await supabase
        .from("Interacciones")
        .insert([
          { boton_id: source, seccion: seccion, fecha: new Date().toISOString() }, // Using seccion parameter
        ]);
      if (error) {
        console.error("Error al insertar interacción en Supabase:", error);
        alert("Hubo un problema al registrar tu interés. Por favor, inténtalo de nuevo más tarde."); // User-friendly error message
      } else {
        console.log("Interacción registrada en Supabase:", data);
      }
    } catch (error) {
      console.error("Error en la conexión a Supabase para interacciones:", error);
      alert("No se pudo conectar con el servicio. Por favor, verifica tu conexión a internet."); // User-friendly connection error
    }

    console.log("EVENT: CTA_CLICK", {
        event_category: seccion, // Using seccion for category
        event_label: source,
    });
    
    const registrationSection = document.getElementById("registro");
    if (registrationSection) {
      registrationSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="text-slate-800 premium-gradient">

        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
           <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-50/50 rounded-full blur-[100px]"></div>
            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                
                <h1 className="hero-title text-5xl md:text-7xl font-light text-slate-900 mb-6">
                    Transforme su clínica con <span className="font-semibold text-[var(--sincro-blue)]">SincroHealth AI</span>
                </h1>
                <p className="text-xl md:text-2xl text-[var(--taupe)] font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                    Elevando la gestión médica hacia una experiencia de serenidad y rentabilidad sincronizada.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                        className="cta-button bg-[var(--sincro-blue)] text-white text-lg font-medium hover:scale-105 shadow-2xl shadow-blue-500/30 text-center"
                        href="#registro"
                        onClick={(e) => handleCTAClick(e, "hero", "Hero")} // Passed "Hero" as seccion
                        aria-label="Solicitar Prueba Gratuita de SincroHealth AI"
                    >
                        Solicitar Prueba Gratuita
                    </a>
                    <a 
                        className="text-[var(--taupe)] font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform" 
                        href="#ia-humana"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("#ia-humana");
                        }}
                        aria-label="Conocer más sobre la IA Humana de SincroHealth"
                    >
                        Conoce nuestra IA Humana <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>

        <section id="desafio" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">Equilibrio <span className="text-[var(--taupe)]">vs</span> Caos</h2>
                    <div className="w-24 h-1 bg-[var(--sincro-blue)] mx-auto opacity-20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {chaosCards.map((card, index) => (
                        <motion.div key={index} className="organic-card p-10 text-center flex flex-col items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                            <div className="glass-icon-container mb-8">
                                <span className="material-symbols-outlined text-[var(--sincro-blue)] text-4xl">{card.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">{card.title}</h3>
                            <p className="text-[var(--taupe)] font-light leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section id="ia-humana" className="py-32 bg-white/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">La IA que se siente <br/><span className="italic text-[var(--sincro-blue)]">naturalmente</span> humana.</h2>
                        <div className="space-y-12">
                            {solutions.map((item) => (
                                <motion.div key={item.id} className="flex gap-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--sincro-blue)]/20 flex items-center justify-center"><span className="text-[var(--sincro-blue)] font-bold">{item.id}</span></div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                        <p className="text-[var(--taupe)] font-light">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative py-12 flex flex-col gap-6 items-center">
                        {solutionImages.map((image, index) => (
                            <motion.div key={index} className="w-full max-w-[340px] h-[220px] rounded-2xl shadow-lg overflow-hidden" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05, zIndex: 50}} style={{ zIndex: 30 - index * 10, transform: `translateX(${(index - 1) * -2}rem)` }}>
                                <img src={image.src} width={image.width} height={image.height} loading="lazy" className="w-full h-full object-cover" alt={`Solución ${index + 1}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      
        <section id="metricas" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="organic-card p-12 md:p-20 bg-slate-50 text-[var(--deep-navy)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-600/5 blur-[120px]"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-[var(--deep-navy)]">Métricas que inspiran <br/><span className="text-[var(--sincro-blue)]">tranquilidad</span></h2>
                            <p className="text-[var(--deep-navy)] mb-12 text-lg font-light">Nuestros resultados no solo son números; son minutos recuperados para lo que realmente importa: la atención al paciente.</p>
                            <div className="grid grid-cols-2 gap-12">
                                {metrics.map(metric => (
                                    <div key={metric.label}>
                                        <p className="text-5xl font-light text-[var(--sincro-blue)] mb-2">{metric.value}</p>
                                        <p className="text-xs text-[var(--deep-navy)] uppercase tracking-widest font-bold">{metric.label}</p>
                                        <p className="text-[10px] text-[var(--deep-navy)] mt-2">{metric.sublabel}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                           <Suspense fallback={<div>Cargando...</div>}>
                              <AnimatedPhone />
                           </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        <section id="planes" className="py-32 px-6">
          <Suspense fallback={<div>Cargando...</div>}>
            <PricingSection handleCTAClick={handleCTAClick} />
          </Suspense>
        </section>

        <section id="registro" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">Recupere la rentabilidad y el control de su clínica hoy</h2>
                    <p className="text-[var(--taupe)] font-light max-w-3xl mx-auto text-lg leading-relaxed">Sincronice sus operaciones y elimine la carga administrativa de forma inmediata. Obtenga un diagnóstico personalizado de su flujo de trabajo.</p>
                </div>
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6 pt-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="check-item">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--sincro-blue)]/10 flex items-center justify-center"><span className="material-symbols-outlined text-[var(--sincro-blue)] font-bold">check</span></div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">{benefit.title}</h4>
                                    <p className="text-sm text-[var(--taupe)]">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="mt-8 p-6 rounded-[40px] border border-blue-100 bg-blue-50/30">
                            <p className="text-[var(--taupe)] text-sm italic leading-relaxed">"La integración con SincroHealth nos permitió recuperar el enfoque clínico en menos de una semana. La carga administrativa simplemente desapareció."</p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                <span className="text-xs font-bold text-slate-700">Dr. M. Arrieta, Director Médico</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="organic-card p-10 md:p-14 bg-white shadow-2xl border-t-8 border-[var(--sincro-blue)]/10">
                          <Suspense fallback={<div>Cargando...</div>}>
                            <ContactForm />
                          </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
};

export default LandingPage;