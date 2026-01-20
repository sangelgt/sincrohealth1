
import React, { useState } from 'react';
import { createDiagnostico } from '../services/diagnosticoService';
import { mapFormDataToDiagnostico, FormData } from '../types';

const medicalSpecialties = [
  "Alergología", "Anestesiología", "Angiología y Cirugía Vascular", "Aparato Digestivo",
  "Bioquímica Clínica", "Cardiología", "Cirugía Cardiovascular", "Cirugía General y del Aparato Digestivo",
  "Cirugía Oral y Maxilofacial", "Cirugía Pediátrica", "Cirugía Plástica, Estética y Reparadora",
  "Cirugía Torácica", "Dermatología Médico-Quirúrgica y Venereología", "Endocrinología y Nutrición",
  "Farmacología Clínica", "Geriatría", "Ginecología y Obstetricia", "Hematología y Hemoterapia",
  "Inmunología", "Medicina del Trabajo", "Medicina Deportiva", "Medicina Familiar y Comunitaria",
  "Medicina Física y Rehabilitación", "Medicina Intensiva", "Medicina Interna", "Medicina Legal y Forense",
  "Medicina Nuclear", "Medicina Preventiva y Salud Pública", "Microbiología y Parasitología",
  "Nefrología", "Neumología", "Neurocirugía", "Neurofisiología Clínica", "Neurología", "Oftalmología",
  "Oncología Médica", "Oncología Radioterápica", "Otorrinolaringología", "Pediatría", "Psicología Clínica",
  "Psiquiatría", "Radiodiagnóstico", "Reumatología", "Traumatología y Cirugía Ortopédica", "Urología", "Otra"
];

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        specialty: '',
        email: '',
        phone: '',
        monthlyPatients: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const diagnosticoData = mapFormDataToDiagnostico(formData);
        const { error } = await createDiagnostico(diagnosticoData);

        if (error) {
            console.error('Error inserting data:', error);
            alert('Hubo un error al enviar tus datos.');
        } else {
            alert('¡Gracias por registrarte! Nos pondremos en contacto contigo pronto.');
            setFormData({
                fullName: '',
                specialty: '',
                email: '',
                phone: '',
                monthlyPatients: '',
            });
        }
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Nombre Completo</label>
                    <input 
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700" 
                        placeholder="Ej: Dr. Julian Casablancas" 
                        required 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Especialidad</label>
                    <input 
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700" 
                        placeholder="Ej: Cardiología" 
                        required 
                        type="text"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Correo Corporativo</label>
                    <input 
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700" 
                        placeholder="contacto@clinica.com" 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Teléfono</label>
                    <input 
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700" 
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
                <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Pacientes Mensuales (Volumen Estimado)</label>
                <div className="relative">
                    <select 
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all text-slate-600 appearance-none cursor-pointer"
                        name="monthlyPatients"
                        value={formData.monthlyPatients}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione un rango...</option>
                        <option value="low">1 - 100 pacientes</option>
                        <option value="medium">101 - 500 pacientes</option>
                        <option value="high">501 - 1,000 pacientes</option>
                        <option value="enterprise">Más de 1,000 pacientes</option>
                    </select>
                    <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[var(--taupe)]">
                        <span className="material-symbols-outlined text-xl">expand_more</span>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <button className="w-full cta-button bg-[var(--sincro-blue)] text-white text-xl font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-600 hover:shadow-blue-500/40 transform hover:-translate-y-1">
                    Solicitar Prueba Gratuita
                </button>
                <p className="text-center text-[var(--taupe)] text-[10px] uppercase tracking-widest font-bold mt-6 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    Confidencialidad garantizada · 30 días de prueba sin compromiso
                </p>
            </div>
        </form>
    );
};

export default ContactForm;