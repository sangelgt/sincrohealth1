import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase'; // Import the supabase client

const plans = [
  {
    id: "sincro-starter",
    name: "SINCRO-STARTER",
    subtitle: "Para médicos independientes o consultorio pequeño (1–2 doctores).",
    price: "79",
    priceUnit: "USD/mes",
    features: [
      { title: "Hasta 2 usuarios / mensajes mensuales ilimitados", description: "Perfecto para un médico y un asistente, sin preocuparse por el volumen de conversaciones." },
      { title: "Agente conversacional de IA 24/7", description: "Bot que califica síntomas, seguro y solvencia automáticamente." },
      { title: "Auto-agendamiento digital", description: "El paciente gestiona su cita sin intervención humana 24/7." },
      { title: "Recordatorios automatizados", description: "Secuencia de mensajes para reducir inasistencias mediante persuasión digital." },
    ],
    impactMetrics: [
      "Recuperación 10h/semana",
      "Admisión de 15min a 4min",
    ],
    buttonText: "Empezar prueba de 30 días.",
    isRecommended: false
  },
  {
    id: "sincro-pro",
    name: "SINCRO-PRO",
    subtitle: "Para clínicas medianas con varios doctores y múltiples consultorios.",
    price: "199",
    priceUnit: "USD/mes",
    features: [
        { title: "Clínicas con 3–15 doctores", description: "Gestión de múltiples agendas, sucursales y permisos de equipo en una sola plataforma." },
        { title: "Todo en Sincro-Starter, y además...", description: "Acceso completo a las funcionalidades del plan inicial." },
        { title: "Soporte Multi-Doctores", description: "Panel centralizado para organizar agendas de diversos especialistas." },
        { title: "Llenado automático de cupos", description: "Detecta cancelaciones y ofrece el hueco a la lista de espera vía WhatsApp." },
        { title: "Sincronización EHR Directa", description: "Transferencia de chats y audios al expediente clínico legal." },
    ],
    impactMetrics: [
      "Reducción No-Shows >40%",
      "Recuperación hasta $150k USD anuales",
    ],
    buttonText: "Empezar prueba de 30 días.",
    isRecommended: true
  },
  {
    id: "sincro-enterprise",
    name: "SINCRO-ENTERPRISE",
    subtitle: "Para redes médicas y grupos más grandes.",
    price: "Cotización",
    priceUnit: "Personalizada",
    features: [
      { title: "Integraciones avanzadas HL7/FHIR", description: "Conecte Kura a su sistema de gestión hospitalaria (EHR/HIS) y ofrezca soporte financiero y de seguros." },
      { title: "Visibilidad Económica Real-Time", description: "Visualiza pérdida financiera por inasistencias y valor de cartera de pacientes." },
      { title: "Ecosistema Multi-Agente", description: "IAs dedicadas a auditoría, facturación y validación de seguros." },
    ],
    impactMetrics: [
      "ROI de 15:1",
      "Aumento de valoración de la práctica",
    ],
    buttonText: "Agendar llamada con un estratega.",
    isRecommended: false
  }
];

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.li
            onHoverStart={() => setIsExpanded(true)}
            onHoverEnd={() => setIsExpanded(false)}
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex flex-col gap-1 text-sm text-slate-700 cursor-pointer"
        >
            <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg text-green-500 mt-0.5">check_circle</span>
                <span className="font-medium text-balance">{title}</span>
            </div>
            <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="pl-8 pr-2 text-slate-500 text-xs text-balance"
                >
                    {description}
                </motion.div>
            )}
            </AnimatePresence>
        </motion.li>
    );
};


const PricingSection: React.FC = () => {

  const handleCTAClick = async (e: React.MouseEvent<HTMLAnchorElement>, source: string) => {
    e.preventDefault();

    try {
      await supabase.from('Interacciones').insert([{ boton_id: source, seccion: 'planes', fecha: new Date().toISOString() }]);
    } catch (error) {
      console.error('Error en la conexión a Supabase para interacciones:', error);
    }

    const element = document.getElementById('registro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/#/registro');
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <span className="text-[var(--sincro-blue)] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Inversión en Serenidad</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">Planes de Sincronización Clínica</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
                <motion.div
                    key={plan.id}
                    className={`p-8 flex flex-col relative overflow-hidden h-full rounded-3xl backdrop-blur-md ${plan.isRecommended ? 'border-2 border-[#0d5fb4]/30 bg-white/70 shadow-xl' : 'border border-slate-200 bg-white/50 shadow'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {plan.isRecommended && (
                        <div className="absolute top-0 right-0 bg-[#0d5fb4] text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-bl-3xl z-10">Popular</div>
                    )}
                    
                    <div className="mb-6 text-center">
                        <h3 className={`text-xl mb-2 font-semibold text-slate-900`}>{plan.name}</h3>
                        <p className="text-[var(--taupe)] text-sm font-light min-h-[40px] text-balance">{plan.subtitle}</p>
                    </div>

                    <div className="mb-8 text-center">
                        <span className="text-4xl font-semibold text-[#0d5fb4]">{plan.price === 'Cotización' ? plan.price : `$${plan.price}`}</span>
                        {plan.priceUnit && <span className="block text-[var(--taupe)] text-sm mt-1">{plan.priceUnit}</span>}
                    </div>

                    <div className="flex-grow mb-8">
                        <h4 className="text-sm font-bold text-center text-taupe/90 mb-4">Beneficios Clave</h4>
                        <ul className="space-y-4 mb-6">
                            {plan.features.map((feature, fIndex) => (
                                <FeatureItem key={fIndex} title={feature.title} description={feature.description} />
                            ))}
                        </ul>
                        
                        {plan.impactMetrics && (
                            <div className="mt-auto pt-4 border-t border-taupe/10">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-taupe mb-3">Métricas de Impacto</h4>
                              <ul className="space-y-2">
                                {plan.impactMetrics.map((metric, mIndex) => (
                                  <li key={mIndex} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                    <span className="material-symbols-outlined text-lg text-sincro-blue/50">trending_up</span>
                                    {metric}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                    </div>
                    
                    <a 
                        href="/#/registro"
                        onClick={(e) => handleCTAClick(e, plan.id)}
                        className={`w-full mt-auto py-3 px-6 rounded-full font-semibold text-center text-sm ${
                        plan.isRecommended 
                        ? 'bg-[#0d5fb4] text-white hover:bg-[#1a73d9] shadow-lg shadow-blue-500/20'
                        : 'border border-slate-300 text-slate-700 hover:bg-slate-100 hover:shadow-md'
                    }`}>
                        {plan.buttonText}
                    </a>
                </motion.div>
            ))}
        </div>
    </div>
  );
};

export default PricingSection;