import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <footer className="py-10 px-6 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center">
          <div className="h-24 md:h-32 w-full max-w-[320px] md:max-w-[600px] overflow-hidden flex items-center justify-center rounded-2xl">
            <img 
              src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/logos/imagotipo_vertical.webp" 
              alt="Kura AI Logo Completo" 
              className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <Link to="/privacidad" className="text-sm uppercase tracking-wider font-medium text-slate-600 hover:text-sincro-blue transition-colors" aria-label="Leer nuestra política de privacidad">Privacidad</Link>
          <Link to="/terminos" className="text-sm uppercase tracking-wider font-medium text-slate-600 hover:text-sincro-blue transition-colors" aria-label="Leer nuestros términos y condiciones">Términos</Link>
          <a href="#registro" onClick={(e) => handleNavClick(e, 'registro')} className="text-sm uppercase tracking-wider font-medium text-slate-600 hover:text-sincro-blue transition-colors" aria-label="Ir a la sección de contacto">Contacto</a>
        </div>
        
        <p className="text-xs md:text-sm font-normal tracking-normal text-slate-600">
          © 2026 Kura AI. Organic Premium Edition.
        </p>
      </div>
    </footer>
  );
};

export default Footer;