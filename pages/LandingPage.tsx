
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

// Componente para manejar los 25 trackers de la animación 3D
const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="caos-card-wrapper">
      <div className="caos-canvas">
        {/* Generamos 25 trackers invisibles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="caos-tracker"></div>
        ))}
        {/* El contenedor que rota */}
        <div className="caos-card-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

const VerticalGlassStack: React.FC = () => {
  const images = {
    solucion1: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion%201%20.webp",
    solucion2: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion2%20(1).webp",
    solucion3: "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/solucion%203.webp"
  };

  return (
    <div className="uiverse-glass-container">
      <div 
        data-text="Booking Booster" 
        style={{ '--y': -40, '--rx': 10, '--s': 0.92, '--z': 1, '--hover-y': 0 } as React.CSSProperties} 
        className="glass"
      >
        <img src={images.solucion1} alt="Agenda" className="w-full h-full object-cover" />
      </div>
      <div 
        data-text="Triaje Empático" 
        style={{ '--y': 0, '--rx': 0, '--s': 1, '--z': 2, '--hover-y': 0 } as React.CSSProperties} 
        className="glass"
      >
        <img src={images.solucion2} alt="Triaje" className="w-full h-full object-cover" />
      </div>
      <div 
        data-text="Bóveda Segura" 
        style={{ '--y': 40, '--rx': -10, '--s': 0.92, '--z': 1, '--hover-y': 0 } as React.CSSProperties} 
        className="glass"
      >
        <img src={images.solucion3} alt="Bóveda" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-200/50 rounded-full blur-[100px]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-[#8D8273] text-[10px] font-bold uppercase tracking-widest mb-8"
          >
            Organic Premium Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-light text-slate-900 mb-6 leading-[1.1]"
          >
            Transforme su clínica con <br/><span className="font-semibold text-[#137fec]">SincroHealth AI</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-[#8D8273] font-light max-w-3xl mx-auto mb-4 leading-relaxed">
            Elevando la gestión médica hacia una experiencia de serenidad y rentabilidad sincronizada.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <button onClick={() => scrollToSection('registro')} className="bg-[#137fec] text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-all shadow-2xl shadow-blue-500/30 cursor-pointer">
              Obtener Demo Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Equilibrio vs Caos - REVISADO PARA UNIFORMIDAD Y 3D */}
      <section className="py-32 px-6 bg-[#F1F5F9]" id="caos">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">Equilibrio <span className="text-[#8D8273]">vs</span> Caos</h2>
            <div className="w-24 h-1 bg-[#137fec] mx-auto opacity-20 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
            {[
              { icon: 'air', title: 'Recuperar el aliento', desc: 'Diga adiós al <strong>Burnout</strong> operativo. Eliminamos el ruido administrativo para que su equipo vuelva a conectar con el propósito genuino de sanar.' },
              { icon: 'bubble_chart', title: 'Sincronización fluida', desc: 'Adiós al <strong>Info Chaos</strong>. Un flujo de datos armónico donde cada mensaje y cita encuentra su lugar sin requerir esfuerzo manual constante.' },
              { icon: 'expand', title: 'Crezca sin esfuerzo', desc: '<strong>Escalabilidad</strong> orgánica y silenciosa. Nuestra arquitectura se expande a medida que su clínica conquista nuevos horizontes operativos.' },
              { icon: 'water_drop', title: 'Asegure cada gota', desc: 'Detenga la <strong>Fuga de Ingresos</strong>. Optimizamos cada recurso con la delicadeza de un relojero y la visión estratégica de un experto.' }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="w-full"
              >
                <TiltCard>
                  <div className="h-full w-full p-8 xl:p-12 flex flex-col items-center justify-center text-center">
                    {/* Icon Blob Shape - Más grande y elegante */}
                    <div className="w-24 h-24 bg-slate-50/50 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border border-slate-100 flex items-center justify-center mb-8 shadow-inner">
                      <span className="material-symbols-outlined text-[#137fec] text-5xl">{card.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl xl:text-3xl font-semibold text-slate-800 mb-6 tracking-tight leading-tight">{card.title}</h3>
                    
                    <div className="max-w-[280px] mx-auto">
                      <p className="text-[#8D8273] font-light leading-relaxed text-sm xl:text-base opacity-90" dangerouslySetInnerHTML={{ __html: card.desc }} />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IA Humana */}
      <section className="py-32 bg-white" id="solucion">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight tracking-tight">
                La IA que se siente <br/><span className="italic text-[#137fec]">naturalmente</span> humana.
              </h2>
              <div className="space-y-12">
                {[
                  { id: '01', title: 'Booking Booster', desc: '<strong>Natural Agenda:</strong> Un ecosistema de citas que respira solo. Algoritmos predictivos que entienden el contexto del paciente.' },
                  { id: '02', title: 'Triaje Empático', desc: '<strong>Priority & Sensitivity:</strong> Acogida digital que prioriza la urgencia clínica sin sacrificar la calidez humana necesaria.' },
                  { id: '03', title: 'Bóveda WhatsApp-to-EHR', desc: '<strong>Invisible Security:</strong> Cifrado de conversaciones integrado automáticamente en el historial clínico del paciente.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#137fec]/20 flex items-center justify-center">
                      <span className="text-[#137fec] font-bold text-sm">{item.id}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-[#8D8273] font-light text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative flex justify-center py-10">
              <VerticalGlassStack />
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-32 px-6 bg-[#F1F5F9]" id="beneficios">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-[60px] p-12 md:p-20 bg-white text-[#0A192F] relative overflow-hidden shadow-sm border border-slate-100">
            <div className="absolute top-0 right-0 w-[60%] h-full bg-blue-600/5 blur-[120px]"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight tracking-tight">Métricas que inspiran <br/><span className="text-[#137fec]">tranquilidad</span></h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-12">
                  {[
                    { val: '-40%', label: 'AUSENTISMO', desc: 'Recordatorios empáticos' },
                    { val: '+25%', label: 'RETORNO ROI', desc: 'Optimización de agenda' },
                    { val: '-85%', label: 'CARGA MANUAL', desc: 'Automatización de flujos' },
                    { val: '24/7', label: 'DISPONIBILIDAD', desc: 'Atención ininterrumpida' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-5xl font-light text-[#137fec] mb-2">{stat.val}</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-900">{stat.label}</p>
                      <p className="text-[10px] text-slate-500 mt-2">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 backdrop-blur-xl p-8 rounded-[40px] border border-slate-200 shadow-2xl">
                <div className="flex justify-between items-center mb-10">
                  <h4 className="text-xl font-medium">Panel de Calma</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="h-40 flex items-end gap-3">
                   <div className="flex-1 bg-slate-200 h-[30%] rounded-t-xl"></div>
                   <div className="flex-1 bg-slate-300 h-[55%] rounded-t-xl"></div>
                   <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} className="flex-1 bg-[#137fec] rounded-t-xl" />
                   <div className="flex-1 bg-slate-200 h-[60%] rounded-t-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default LandingPage;
