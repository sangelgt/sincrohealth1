
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif-title text-5xl md:text-6xl text-[#0A192F] mb-6"
          >
            Política de Privacidad
          </motion.h1>
          <p className="text-[#8D8273] font-light">Última actualización: 1 de Enero de 2026</p>
        </div>
        
        <div className="space-y-12">
          {[
            {
              title: "Recopilación de Datos",
              content: `En SincroHealth AI, la privacidad y seguridad de la información médica es nuestra prioridad absoluta. Recopilamos información necesaria para proporcionar una gestión clínica eficiente, incluyendo:`,
              list: [
                "Datos de Identificación: Nombre completo, especialidad médica y datos de contacto corporativo.",
                "Información de Pacientes: Datos procesados a través de nuestra IA para triaje y agenda (siempre bajo los más estrictos estándares de cifrado).",
                "Uso del Sistema: Registros de actividad técnica para asegurar la estabilidad y latencia del servicio prometido."
              ]
            },
            {
              title: "Uso de la Información",
              content: "La información recopilada se utiliza exclusivamente para fines operativos y de mejora del servicio:",
              list: [
                "Optimización de agendas mediante algoritmos predictivos (Natural Agenda).",
                "Personalización del triaje empático digital.",
                "Sincronización segura de conversaciones vía WhatsApp hacia el historial clínico (EHR).",
                "Generación de métricas de rentabilidad y eficiencia operativa."
              ],
              italic: "Nunca comercializamos con sus datos ni con los datos de sus pacientes para fines publicitarios de terceros."
            },
            {
              title: "Seguridad de los Datos",
              content: "Implementamos medidas de seguridad de grado bancario y médico: Todos los flujos de información están protegidos mediante cifrado de extremo a extremo. Nuestra infraestructura 'Invisible Security' garantiza el cumplimiento de normativas HIPAA/GDPR.",
              badge: "Certificación de Cumplimiento Normativo Vigente"
            }
          ].map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 md:p-14 shadow-sm border border-slate-100"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#0A192F] flex items-center gap-3">
                <span className="w-2 h-8 bg-[#137fec] rounded-full"></span>
                {section.title}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>{section.content}</p>
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.list.map((li, i) => <li key={i}>{li}</li>)}
                  </ul>
                )}
                {section.italic && <p className="italic">{section.italic}</p>}
                {section.badge && (
                  <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 mt-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600 text-sm">shield_lock</span>
                    <p className="text-sm font-medium text-[#137fec]">{section.badge}</p>
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[#8D8273] font-light mb-8">¿Tiene preguntas sobre nuestra política de privacidad?</p>
          <a href="mailto:privacy@sincrohealth.ai" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A192F] text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg active:scale-95">
            Contactar con Delegado de Protección de Datos
            <span className="material-symbols-outlined text-sm">mail</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
