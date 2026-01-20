import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 border-t border-[#8D8273]/10 bg-white/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center">
          {/* 
            Contenedor optimizado: 
            - Altura ajustada para reducir el espacio total del footer.
            - Usamos un ancho generoso para que el imagotipo horizontal quepa bien.
            - El object-cover se encarga de eliminar los bordes blancos/vacíos de la imagen cuadrada.
          */}
          <div className="h-24 md:h-32 w-full max-w-[320px] md:max-w-[600px] overflow-hidden flex items-center justify-center rounded-2xl">
            <img 
              src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/logos/imagotipo.webp" 
              alt="SincroHealth AI Logo Completo" 
              className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <Link to="/privacidad" className="text-sm uppercase tracking-wider font-medium text-taupe hover:text-sincro-blue transition-colors">Privacidad</Link>
          <Link to="/terminos" className="text-sm uppercase tracking-wider font-medium text-taupe hover:text-sincro-blue transition-colors">Términos</Link>
          <a href="mailto:hola@sincrohealth.ai" className="text-sm uppercase tracking-wider font-medium text-taupe hover:text-sincro-blue transition-colors">Contacto</a>
        </div>
        
        <p className="text-xs md:text-sm font-normal tracking-normal text-taupe">
          © 2026 SincroHealth AI. Organic Premium Edition.
        </p>
      </div>
    </footer>
  );
};

export default Footer;