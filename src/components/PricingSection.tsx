import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: "SINCRO-STARTER",
    price: "$79 USD",
    priceUnit: "/mes",
    slogan: "Vuelva a ser médico, deje de ser detective de WhatsApp",
    features: [
      { title: "Agente conversacional de IA 24/7", description: "Bot que califica síntomas, seguro y solvencia automáticamente." },
      { title: "Respuesta en < 5 minutos", description: "Maximiza el agendamiento contactando al paciente en su momento de mayor interés." },
      { title: "Unificación de datos pre-clínica", description: "Consolida chats y archivos en un repositorio único sin fragmentación." },
      { title: "Auto-agendamiento digital", description: "El paciente gestiona su cita sin intervención humana 24/7." },
      { title: "Recordatorios automatizados", description: "Secuencia de mensajes para reducir inasistencias mediante persuasión digital." },
    ],
    impactMetrics: [
      "Recuperación 10h/semana",
      "Admisión de 15min a 4min",
    ],
    buttonText: "SOLICITAR PRUEBA GRATUITA",
    isRecommended: false
  },
  {
    name: "SINCRO-PRO",
    price: "$199 USD",
    priceUnit: "/mes",
    slogan: "La orquesta operativa de su centro médico",
    features: [
        { title: "Todo en Sincro-Starter, y además...", description: "Acceso completo a las funcionalidades del plan inicial." },
        { title: "Soporte Multi-Doctores", description: "Panel centralizado para organizar agendas de diversos especialistas." },
        { title: "Llenado automático de cupos", description: "Detecta cancelaciones y ofrece el hueco a la lista de espera vía WhatsApp." },
        { title: "Sincronización EHR Directa", description: "Transferencia de chats y audios al expediente clínico legal." },
    ],
    impactMetrics: [
      "Reducción No-Shows >40%",
      "Recuperación hasta $150k USD anuales",
    ],
    buttonText: "SINCRONIZAR MI CLÍNICA AHORA",
    isRecommended: true
  },
  {
    name: "SINCRO-ENTERPRISE",
    price: "Cotización",
    priceUnit: "Personalizada",
    slogan: "Visibilidad financiera y arquitectura interoperable.",
    features: [
      { title: "Visibilidad Económica Real-Time", description: "Visualiza pérdida financiera por demoras y valor de cartera." },
      { title: "Interoperabilidad HL7/FHIR", description: "Integración profunda y segura con sistemas de salud existentes." },
      { title: "Ecosistema Multi-Agente", description: "IAs dedicadas a auditoría, facturación y validación de seguros." },
    ],
    impactMetrics: [
      "ROI de 15:1",
      "Aumento de valoración de la práctica",
    ],
    buttonText: "Hablar con un Estratega",
    isRecommended: false
  }
];

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.li 
            layout
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="flex flex-col gap-1 text-sm text-slate-700 cursor-pointer"
        >
            <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-lg text-green-500 mt-0.5">check_circle</span>
                <span className="font-medium">{title}</span>
            </div>
            <AnimatePresence>
            {isHovered && (
                <motion.div
                    layout
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5, transition: { duration: 0.2 } }}
                    className="pl-8 pr-2 text-slate-500 text-xs"
                >
                    {description}
                </motion.div>
            )}
            </AnimatePresence>
        </motion.li>
    );
};


const PricingSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <span className="text-[var(--sincro-blue)] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Inversión en Serenidad</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">Planes de Sincronización Clínica</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
                <motion.div 
                    layout
                    key={index} 
                    className={`clay-card p-8 flex flex-col relative overflow-hidden h-full ${plan.isRecommended ? 'border-2 border-[var(--sincro-blue)]/30 bg-white' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    {plan.isRecommended && (
                        <div className="absolute top-0 right-0 bg-[var(--sincro-blue)] text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-bl-3xl z-10">Popular</div>
                    )}
                    
                    <div className="mb-6 text-center">
                        <h3 className={`text-xl mb-2 font-semibold text-slate-900`}>{plan.name}</h3>
                        <p className="text-[var(--taupe)] text-xs font-light italic min-h-[30px]">{plan.slogan}</p>
                    </div>

                    <div className="mb-8 text-center">
                        <span className="text-4xl font-semibold text-[var(--sincro-blue)]">{plan.price}</span>
                        {plan.priceUnit && <span className="block text-[var(--taupe)] text-xs mt-1">{plan.priceUnit}</span>}
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
                    
                    <a href="#registro" className={`w-full mt-auto py-3 px-6 rounded-full font-semibold text-center transition-all text-sm ${
                        plan.isRecommended 
                        ? 'bg-[var(--sincro-blue)] text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20'
                        : plan.name === 'SINCRO-ENTERPRISE' 
                        ? 'border border-slate-700 text-slate-700 hover:bg-slate-800 hover:text-white'
                        : 'border border-[var(--sincro-blue)] text-[var(--sincro-blue)] hover:bg-[var(--sincro-blue)] hover:text-white'
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