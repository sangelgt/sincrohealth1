
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

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
    const [specialty, setSpecialty] = useState('');
    const [monthlyPatients, setMonthlyPatients] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { error } = await supabase.from('Diagnostico').insert([data]);

        if (error) {
            console.error('Error inserting data:', error);
            alert('Hubo un error al enviar tus datos.');
        } else {
            alert('¡Gracias por registrarte! Nos pondremos en contacto contigo pronto.');
            event.currentTarget.reset();
            setSpecialty('');
            setMonthlyPatients('');
        }
    };

    // Clase base para los campos de formulario
    const baseInputStyle = "w-full bg-[#FDFBF7] border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-[#137fec]/20 transition-all";
    const placeholderStyle = "placeholder:text-[#8D8273]/40";

    // Estilo condicional para el texto del select
    const getSelectTextStyle = (value: string) => value === '' ? 'text-[#8D8273]/50' : 'text-slate-700';

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Nombre Completo</label>
          <input className={`${baseInputStyle} ${placeholderStyle} text-slate-700`} placeholder="Ej: Dr. Julian Casablancas" required type="text" name="full_name" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Especialidad</label>
          <div className="relative">
            <select 
              className={`${baseInputStyle} pl-6 pr-12 cursor-pointer appearance-none ${getSelectTextStyle(specialty)}`} 
              name="specialty" 
              required
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="" disabled>Seleccione una especialidad...</option>
              {medicalSpecialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[#8D8273]">
              <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Correo Corporativo</label>
          <input className={`${baseInputStyle} ${placeholderStyle} text-slate-700`} placeholder="contacto@clinica.com" required type="email" name="email" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Teléfono</label>
          <input className={`${baseInputStyle} ${placeholderStyle} text-slate-700`} placeholder="+34 000 000 000" type="tel" name="phone" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-[#8D8273] font-bold ml-4">Pacientes Mensuales (Volumen Estimado)</label>
        <div className="relative">
          <select 
            className={`${baseInputStyle} pl-6 pr-12 cursor-pointer appearance-none ${getSelectTextStyle(monthlyPatients)}`}
            name="monthly_patients" 
            required
            value={monthlyPatients}
            onChange={(e) => setMonthlyPatients(e.target.value)}
          >
            <option value="" disabled>Seleccione un rango...</option>
            <option value="1-100">1 - 100 pacientes</option>
            <option value="101-500">101 - 500 pacientes</option>
            <option value="501-1000">501 - 1,000 pacientes</option>
            <option value="1000+">Más de 1,000 pacientes</option>
          </select>
          <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[#8D8273]">
            <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <button className="w-full bg-[#137fec] text-white text-xl font-semibold rounded-[40px] py-5 px-10 shadow-xl shadow-[#137fec]/20 hover:bg-blue-600 hover:shadow-[#137fec]/40 transform hover:-translate-y-1 transition-all duration-300">
          Agendar Consultoría Privada
        </button>
        <p className="text-center text-[#8D8273] text-[10px] uppercase tracking-widest font-bold mt-6 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">verified_user</span>
          Confidencialidad garantizada · 30 días de prueba sin compromiso
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
