
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    specialty: '',
    email: '',
    phone: '',
    monthlyPatients: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({
        fullName: '',
        specialty: '',
        email: '',
        phone: '',
        monthlyPatients: ''
      });
    }, 1500);
  };

  const checklistItems = [
    { title: "Diagnóstico Operativo GRATUITO", desc: "Análisis profundo de sus cuellos de botella actuales." },
    { title: "Acceso a Demo por 30 días", desc: "Experimente el ecosistema completo sin restricciones." },
    { title: "Plan de Sincronización Personalizado", desc: "Estrategia a medida adaptada a su volumen de pacientes." },
    { title: "Soporte Prioritario de Implementación", desc: "Un consultor dedicado para su fase de transición." }
  ];

  const medicalSpecialties = [
    "Medicina General / Familiar",
    "Cardiología",
    "Dermatología",
    "Pediatría",
    "Ginecología y Obstetricia",
    "Odontología",
    "Psicología / Psiquiatría",
    "Traumatología y Ortopedia",
    "Nutrición",
    "Oftalmología",
    "Dermatología Estética",
    "Neurología",
    "Endocrinología",
    "Otro"
  ];

  return (
    <section className="py-32 px-6 bg-[#F1F5F9]" id="registro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight"
          >
            Recupere la rentabilidad y el control de su clínica hoy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8D8273] font-light max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Sincronice sus operaciones y elimine la carga administrativa de forma inmediata. Obtenga un diagnóstico personalizado de su flujo de trabajo.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 pt-4">
            {checklistItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white rounded-3xl shadow-sm border border-[#8D8273]/5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#137fec]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#137fec] font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs text-[#8D8273]">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-[40px] border border-blue-100 bg-blue-50/30"
            >
              <p className="text-[#8D8273] text-sm italic leading-relaxed">
                "La integración con SincroHealth nos permitió recuperar el enfoque clínico en menos de una semana. La carga administrativa simplemente desapareció."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Dr. M. Arrieta, Director Médico</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[60px] p-8 md:p-14 shadow-2xl border-t-8 border-[#137fec]/10">
              {success ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-[#8D8273]">Nos pondremos en contacto con usted en menos de 24 horas.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-8 text-[#137fec] font-semibold hover:underline"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Nombre Completo</label>
                      <input 
                        className="w-full bg-[#F1F5F9] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#137fec]/20 transition-all placeholder:text-[#8D8273]/40 text-slate-700 text-sm" 
                        placeholder="Ej: Dr. Julian Casablancas" 
                        required 
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Especialidad</label>
                      <div className="relative group">
                        {/* Se añadió bg-none para eliminar la flecha por defecto del plugin forms */}
                        <select 
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleChange}
                          className="w-full bg-[#F1F5F9] bg-none border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#137fec]/20 transition-all text-slate-700 appearance-none cursor-pointer text-sm pr-12"
                          required
                        >
                          <option value="">Seleccione especialidad...</option>
                          {medicalSpecialties.map((spec) => (
                            <option key={spec} value={spec}>{spec}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[#8D8273]">
                          <span className="material-symbols-outlined text-xl transition-transform group-focus-within:rotate-180">expand_more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Correo Corporativo</label>
                      <input 
                        className="w-full bg-[#F1F5F9] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#137fec]/20 transition-all placeholder:text-[#8D8273]/40 text-slate-700 text-sm" 
                        placeholder="contacto@clinica.com" 
                        required 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Teléfono</label>
                      <input 
                        className="w-full bg-[#F1F5F9] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#137fec]/20 transition-all placeholder:text-[#8D8273]/40 text-slate-700 text-sm" 
                        placeholder="+34 000 000 000" 
                        required 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Pacientes Mensuales (Volumen Estimado)</label>
                    <div className="relative group">
                      {/* Se añadió bg-none para eliminar la flecha por defecto del plugin forms */}
                      <select 
                        name="monthlyPatients"
                        value={formData.monthlyPatients}
                        onChange={handleChange}
                        className="w-full bg-[#F1F5F9] bg-none border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#137fec]/20 transition-all text-slate-600 appearance-none cursor-pointer text-sm pr-12"
                        required
                      >
                        <option value="">Seleccione un rango...</option>
                        <option value="low">1 - 100 pacientes</option>
                        <option value="medium">101 - 500 pacientes</option>
                        <option value="high">501 - 1,000 pacientes</option>
                        <option value="enterprise">Más de 1,000 pacientes</option>
                      </select>
                      <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[#8D8273]">
                        <span className="material-symbols-outlined text-xl transition-transform group-focus-within:rotate-180">expand_more</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-full bg-[#137fec] text-white text-xl font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-600 hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Procesando...' : 'Agendar Consultoría Privada'}
                    </button>
                    <p className="text-center text-[#8D8273] text-[9px] uppercase tracking-widest font-bold mt-6 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified_user</span>
                      Confidencialidad garantizada · 30 días de prueba sin compromiso
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
