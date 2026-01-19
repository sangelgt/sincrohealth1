
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import AnimatedPhone from '../components/AnimatedPhone';

const chaosCards = [
  {
    icon: 'air',
    title: 'Recuperar el aliento',
    description: 'Diga adiós al Burnout. Eliminamos el ruido administrativo para que su equipo vuelva a conectar con el propósito de sanar.',
  },
  {
    icon: 'bubble_chart',
    title: 'Sincronización fluida',
    description: 'Adiós al Info Chaos. Un flujo de datos armónico donde cada mensaje y cita encuentra su lugar sin esfuerzo humano.',
  },
  {
    icon: 'expand',
    title: 'Crezca sin esfuerzo',
    description: 'Escalabilidad orgánica. Nuestra arquitectura se expande silenciosamente a medida que su clínica conquista nuevos horizontes.',
  },
  {
    icon: 'water_drop',
    title: 'Asegure cada gota',
    description: 'Detenga la Fuga de Ingresos. Optimizamos cada recurso con la delicadeza de un relojero y la visión de un estratega.',
  }
];

const solutions = [
  {
    id: '01',
    title: 'Booking Booster',
    description: 'Natural Agenda: Un ecosistema de citas que respira. Algoritmos predictivos que entienden el contexto vital del paciente para una programación fluida y sin solapamientos.',
  },
  {
    id: '02',
    title: 'Triaje Empático',
    description: 'Priority & Sensitivity: Una acogida digital que prioriza la urgencia clínica sin perder la calidez humana, identificando matices emocionales en cada consulta inicial.',
  },
  {
    id: '03',
    title: 'Bóveda WhatsApp-to-EHR',
    description: 'Invisible Security: Conversaciones cifradas que se integran automáticamente en el historial clínico, garantizando que ninguna palabra del paciente se pierda en el vacío.',
  }
];

const solutionImages = [
    { 
        img: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion%201%20.webp",
        title: "Agenda Inteligente",
        subtitle: "Predicción y Optimización"
    },
    { 
        img: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion2%20(1).webp",
        title: "Triaje Empático",
        subtitle: "Cualificación Humana"
    },
    {
        img: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion%203.webp",
        title: "EHR Sincronizado",
        subtitle: "Integración con WhatsApp"
    }
];

const metrics = [
    { value: "-40%", label: "Ausentismo", sublabel: "Recordatorios empáticos inteligentes" },
    { value: "+25%", label: "Retorno ROI", sublabel: "Optimización de agenda y recursos" },
    { value: "-85%", label: "Carga Manual", sublabel: "Automatización de flujos clínicos" },
    { value: "24/7", label: "Disponibilidad", sublabel: "Atención ininterrumpida de alto nivel" }
];

const benefits = [
    { icon: "check", title: "Diagnóstico Operativo GRATUITO", description: "Análisis profundo de sus cuellos de botella actuales." },
    { icon: "check", title: "Acceso a Demo por 30 días", description: "Experimente el ecosistema completo sin restricciones." },
    { icon: "check", title: "Plan de Sincronización Personalizado", description: "Estrategia a medida adaptada a su volumen de pacientes." },
    { icon: "check", title: "Soporte Prioritario de Implementación", description: "Un consultor dedicado para su fase de transición." }
];


const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7] text-[#0A192F] font-outfit premium-gradient">

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#137fec]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F1F5F9]/50 rounded-full blur-[100px]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/50 border border-[#8D8273]/20 rounded-full text-[#8D8273] text-xs font-bold uppercase tracking-widest mb-8">
            Organic Premium Experience
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light text-[#0A192F] mb-6 font-playfair leading-tight"
          >
            Transforme su clínica con <span className="font-semibold text-[#137fec]">SincroHealth AI</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#8D8273] font-light max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Elevando la gestión médica hacia una experiencia de serenidad y rentabilidad sincronizada.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#contacto" className="cta-button bg-[#137fec] text-white text-lg font-medium hover:scale-105 shadow-2xl shadow-[#137fec]/30 rounded-[40px] py-5 px-10 transition-transform duration-300">
              Solicita una Demo Gratuita
            </a>
            <a className="text-[#8D8273] font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform" href="#solucion">
              Conoce nuestra IA Humana <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Caos Section */}
      <section className="py-32 px-6" id="caos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light text-[#0A192F] mb-6 font-playfair">Equilibrio <span className="text-[#8D8273]">vs</span> Caos</h2>
            <div className="w-24 h-1 bg-[#137fec] mx-auto opacity-20 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {chaosCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 text-center flex flex-col items-center rounded-[60px] shadow-lg border border-black/5 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative w-20 h-20 flex items-center justify-center bg-white/40 backdrop-blur-lg rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border border-white/80 shadow-inner mb-8">
                  <span className="material-symbols-outlined text-[#137fec] text-4xl">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A192F] mb-4 font-playfair">{card.title}</h3>
                <p className="text-[#8D8273] font-light leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solucion Section */}
      <section className="py-32 bg-white/50" id="solucion">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 lg:items-stretch">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-[#0A192F] mb-12 leading-tight font-playfair">
                La IA que se siente <br/><span className="italic text-[#137fec]">naturalmente</span> humana.
              </h2>
              <div className="space-y-12">
                {solutions.map((item) => (
                  <div className="flex gap-6" key={item.id}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#137fec]/20 flex items-center justify-center">
                      <span className="text-[#137fec] font-bold">{item.id}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 font-playfair">{item.title}</h4>
                      <p className="text-[#8D8273] font-light" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center min-h-[450px]">
                 <div className="cards h-full flex flex-col justify-between">
                    {solutionImages.map((card, index) => (
                        <div key={index} className="card">
                           <img src={card.img} alt={card.title} className="card-image" />
                           <div className="card-text-container">
                               <p className="tip">{card.title}</p>
                               <p className="second-text">{card.subtitle}</p>
                           </div>
                       </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Metricas Section */}
      <section className="py-32 px-6" id="beneficios">
          <div className="max-w-7xl mx-auto">
              <div className="rounded-[60px] p-12 md:p-20 bg-slate-50 text-[#0A192F] relative overflow-hidden shadow-lg border border-black/5">
                  <div className="absolute top-0 right-0 w-[60%] h-full bg-[#137fec]/5 blur-[120px]"></div>
                  <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                      <div>
                          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-[#0A192F] font-playfair">Métricas que inspiran <br/><span className="text-[#137fec]">tranquilidad</span></h2>
                          <p className="text-[#0A192F] mb-12 text-lg font-light">Nuestros resultados no solo son números; son minutos recuperados para lo que realmente importa: la atención al paciente.</p>
                          <div className="grid grid-cols-2 gap-12">
                            {metrics.map(metric => (
                                <div key={metric.label}>
                                    <p className="text-5xl font-light text-[#137fec] mb-2 font-inter">{metric.value}</p>
                                    <p className="text-xs text-[#0A192F] uppercase tracking-widest font-bold">{metric.label}</p>
                                    <p className="text-[10px] text-[#0A192F] mt-2 opacity-70">{metric.sublabel}</p>
                                </div>
                            ))}
                          </div>
                      </div>
                      <div className="flex items-center justify-center">
                          <AnimatedPhone />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Contacto/Registro Section */}
      <section className="py-32 px-6" id="contacto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#0A192F] mb-6 tracking-tight font-playfair">Recupere la rentabilidad y el control de su clínica hoy</h2>
            <p className="text-[#8D8273] font-light max-w-3xl mx-auto text-lg leading-relaxed">
              Sincronice sus operaciones y elimine la carga administrativa de forma inmediata. Obtenga un diagnóstico personalizado de su flujo de trabajo.
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 pt-4">
              {benefits.map(benefit => (
                <div key={benefit.title} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-black/5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#137fec]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#137fec] font-bold">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A192F]">{benefit.title}</h4>
                    <p className="text-sm text-[#8D8273]">{benefit.description}</p>
                  </div>
                </div>
              ))}
              <div className="mt-8 p-6 rounded-[40px] border border-blue-100 bg-blue-50/30">
                  <p className="text-[#8D8273] text-sm italic leading-relaxed">
                      "La integración con SincroHealth nos permitió recuperar el enfoque clínico en menos de una semana. La carga administrativa simplemente desapareció."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/men/44.jpg" className="w-8 h-8 rounded-full bg-slate-200" alt="Dr. M. Arrieta"/>
                      <span className="text-xs font-bold text-slate-700">Dr. M. Arrieta, Director Médico</span>
                  </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-14 rounded-[60px] shadow-2xl border-t-8 border-[#137fec]/10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
