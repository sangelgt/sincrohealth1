
import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <main className="pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif-title text-5xl md:text-6xl text-[#0A192F] mb-6"
          >
            Términos y Condiciones
          </motion.h1>
          <p className="text-[#8D8273] font-light">Última actualización: 1 de Enero de 2026</p>
        </div>

        <div className="space-y-8">
          {[
            {
              icon: 'verified',
              title: "Aceptación de Términos",
              content: "Al acceder y utilizar la plataforma Kura AI, usted acepta quedar vinculado por estos Términos y Condiciones de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios. Este acuerdo constituye el entendimiento completo entre el profesional o entidad clínica ('Usuario') y Kura AI."
            },
            {
              icon: 'psychology',
              title: "Uso del Software y Licencia",
              content: "Kura AI otorga al Usuario una licencia limitada, no exclusiva e intransferible para acceder y utilizar la plataforma exclusivamente para la gestión de su práctica clínica profesional.",
              list: [
                "El Usuario es responsable de mantener la confidencialidad de sus credenciales.",
                "Queda prohibido el uso de la plataforma para fines ilícitos o no autorizados.",
                "La IA generativa debe ser supervisada por personal médico cualificado antes de cualquier decisión."
              ]
            },
            {
              icon: 'copyright',
              title: "Propiedad Intelectual",
              content: "Todos los derechos de propiedad intelectual sobre el software, algoritmos, interfaces y contenido original de Kura AI son propiedad exclusiva de la compañía. El Usuario conserva los derechos sobre los datos de pacientes."
            }
          ].map((item, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 md:p-14 shadow-sm border border-slate-100"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#137fec]">{item.icon}</span>
                {item.title}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                <p>{item.content}</p>
                {item.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {/* Fix: changed 'section' to 'item' to match the map variable name */}
                    {item.list.map((li, i) => <li key={i}>{li}</li>)}
                  </ul>
                )}
              </div>
            </motion.section>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#8D8273] text-sm italic">Para consultas legales adicionales, por favor contacte a legal@sincrohealth.ai</p>
        </div>
      </div>
    </main>
  );
};

export default Terms;
