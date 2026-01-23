import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface FormData {
    fullName: string;
    specialty: string;
    email: string;
    phone: string;
    monthlyPatients: string;
}

const specialties = [
    "Odontología / Estética Dental",
    "Dermatología",
    "Pediatría",
    "Ginecología / Obstetricia",
    "Medicina General / Familiar",
    "Estética / Medicina Estética",
    "Oftalmología",
    "Nutrición",
    "Psicología / Psiquiatría",
    "Otra especialidad...",
];

const ContactForm: React.FC = () => {
    const location = useLocation();
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        specialty: '',
        email: '',
        phone: '',
        monthlyPatients: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submissionMessage, setSubmissionMessage] = useState<string>('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const source = params.get('source');

        let patientVolume = '';
        switch (source) {
            case 'sincro-starter':
                patientVolume = '1-100';
                break;
            case 'sincro-pro':
                patientVolume = '101-500';
                break;
            case 'sincro-enterprise':
                patientVolume = '1000+';
                break;
            default:
                break;
        }

        if (patientVolume) {
            setFormData(prev => ({ ...prev, monthlyPatients: patientVolume }));
        }
    }, [location.search]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmissionStatus('idle');
        setSubmissionMessage('');

        try {
            const { error } = await supabase
                .from('Leads')
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

            if (error) {
                console.error('Error inserting data into Leads table:', error);
                setSubmissionStatus('error');
                setSubmissionMessage('Hubo un error al enviar tus datos. Por favor, inténtalo de nuevo.');
            } else {
                console.log('EVENT: FORM_SUBMIT_SUCCESS', { event_category: 'Conversion', event_label: 'Trial_Request_Completed' });
                setSubmissionStatus('success');
                setSubmissionMessage('Tu solicitud de Prueba Gratuita está siendo procesada. Un estratega te contactará en breve.');
                setFormData({ fullName: '', specialty: '', email: '', phone: '', monthlyPatients: '' });
            }
        } catch (submitError) {
            console.error('Network or unexpected error during form submission:', submitError);
            setSubmissionStatus('error');
            setSubmissionMessage('Hubo un error al enviar tus datos. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Nombre Completo</label>
                    <input
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#0d5fb4]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700"
                        placeholder="Ej: Dra. Elena Castillo"
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Especialidad</label>
                    <div className="relative">
                        <select
                            className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#0d5fb4]/20 transition-all text-slate-600 appearance-none bg-none cursor-pointer"
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleChange}
                            required
                            aria-label="Especialidad"
                        >
                            <option value="" disabled>Seleccione una especialidad...</option>
                            {specialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
                        </select>
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[var(--taupe)]">
                            <span className="material-symbols-outlined text-xl">expand_more</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Correo Corporativo</label>
                    <input
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#0d5fb4]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700"
                        placeholder="contacto@tuclinica.com"
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
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus->ring-[#0d5fb4]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700"
                        placeholder="+34 600 000 000"
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
                        className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[#0d5fb4]/20 transition-all text-slate-600 appearance-none bg-none cursor-pointer"
                        name="monthlyPatients"
                        value={formData.monthlyPatients}
                        onChange={handleChange}
                        aria-label="Cantidad de pacientes"
                    >
                        <option value="">Seleccione un rango...</option>
                        <option value="1-100">1 - 100 pacientes</option>
                        <option value="101-500">101 - 500 pacientes</option>
                        <option value="501-1000">501 - 1,000 pacientes</option>
                        <option value="1000+">Más de 1,000 pacientes</option>
                    </select>
                    <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[var(--taupe)]">
                        <span className="material-symbols-outlined text-xl">expand_more</span>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <button
                    className="w-full cta-button bg-[#0d5fb4] text-white text-xl font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-600 hover:shadow-blue-500/40 transform hover:-translate-y-1"
                    type="submit"
                    disabled={submissionStatus === 'success'}
                >
                    Solicitar Prueba Gratuita
                </button>
                {submissionStatus === 'success' && (
                    <p className="text-center mt-4 text-green-600 font-semibold">{submissionMessage}</p>
                )}
                {submissionStatus === 'error' && (
                    <p className="text-center mt-4 text-red-600 font-semibold">{submissionMessage}</p>
                )}
                <p className="text-center text-[var(--taupe)] text-[10px] uppercase tracking-widest font-bold mt-6 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    Confidencialidad garantizada · 30 días de prueba sin compromiso
                </p>
            </div>
        </form>
    );
};

export default ContactForm;