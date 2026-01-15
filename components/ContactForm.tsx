
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Inserción real en Supabase apuntando a la tabla 'Diagnostico'
      const { error: supabaseError } = await supabase
        .from('Diagnostico')
        .insert([
          {
            full_name: formData.fullName,
            specialty: formData.specialty,
            email: formData.email,
            phone: formData.phone,
            monthly_patients: formData.monthlyPatients,
            created_at: new Date().toISOString(),
          },
        ]);

      if (supabaseError) {
        throw new Error(supabaseError.message || 'Error de base de datos');
      }

      setSuccess(true);
      setFormData({
        fullName: '',
        specialty: '',
        email: '',
        phone: '',
        monthlyPatients: ''
      });
    } catch (err: any) {
      console.error('Error detallado de Supabase:', err);
      setError(`Error: ${err.message}. Verifique la configuración de RLS y la existencia de la tabla 'Diagnostico' en Supabase.`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="text-[#8D8273] font-light max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Sincronice sus operaciones y elimine la carga administrativa de forma inmediata.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 pt-4">
            {[
              { title: "Diagnóstico Operativo GRATUITO", desc: "Análisis profundo de sus cuellos de botella actuales." },
              { title: "Acceso a Demo por 30 días", desc: "Experimente el ecosistema completo sin restricciones." },
              { title: "Plan de Sincronización Personalizado", desc: "Estrategia a medida adaptada a su volumen de pacientes." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-white rounded-3xl shadow-sm border border-[#8D8273]/5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#137fec]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#137fec] font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-[#8D8273]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
                  <p className="text-[#8D8273]">Nos pondremos en contacto en breve.</p>
                  <button onClick={() => setSuccess(false)} className="mt-8 text-[#137fec] font-semibold hover:underline">Enviar otra</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs flex gap-3 items-start">
                      <span className="material-symbols-outlined text-sm mt-0.5">error</span>
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Nombre Completo</label>
                      <input 
                        className="w-full bg-[#F1F5F9] border-none rounded-full px-8 py-4 text-sm" 
                        placeholder="Ej: Dr. Julian Casablancas" required type="text" name="fullName" value={formData.fullName} onChange={handleChange} disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Especialidad</label>
                      <select 
                        name="specialty" value={formData.specialty} onChange={handleChange}
                        className="w-full bg-[#F1F5F9] border-none rounded-full px-8 py-4 text-sm appearance-none cursor-pointer" required disabled={isSubmitting}
                      >
                        <option value="">Seleccione...</option>
                        {medicalSpecialties.map((spec) => <option key={spec} value={spec}>{spec}</option>)}
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Correo Corporativo</label>
                      <input 
                        className="w-full bg-[#F1F5F9] border-none rounded-full px-8 py-4 text-sm" 
                        placeholder="contacto@clinica.com" required type="email" name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Teléfono</label>
                      <input 
                        className="w-full bg-[#F1F5F9] border-none rounded-full px-8 py-4 text-sm" 
                        placeholder="+34 000 000 000" required type="tel" name="phone" value={formData.phone} onChange={handleChange} disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Pacientes Mensuales</label>
                    <select 
                      name="monthlyPatients" value={formData.monthlyPatients} onChange={handleChange}
                      className="w-full bg-[#F1F5F9] border-none rounded-full px-8 py-4 text-sm appearance-none cursor-pointer" required disabled={isSubmitting}
                    >
                      <option value="">Seleccione rango...</option>
                      <option value="1-100">1 - 100 pacientes</option>
                      <option value="101-500">101 - 500 pacientes</option>
                      <option value="500+">Más de 500 pacientes</option>
                    </select>
                  </div>

                  <button 
                    type="submit" disabled={isSubmitting}
                    className="w-full py-5 rounded-full bg-[#137fec] text-white text-xl font-semibold shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sincronizando...' : 'Agendar Consultoría Privada'}
                  </button>
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
