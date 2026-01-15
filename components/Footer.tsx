
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-[#8D8273]/10 bg-white/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#8D8273]/20 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[#8D8273] text-xs">all_inclusive</span>
          </div>
          <span className="font-bold text-slate-400 tracking-tight">SincroHealth AI</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <Link to="/privacidad" className="text-[10px] uppercase tracking-widest font-semibold text-[#8D8273] hover:text-[#137fec] transition-colors">Privacidad</Link>
          <Link to="/terminos" className="text-[10px] uppercase tracking-widest font-semibold text-[#8D8273] hover:text-[#137fec] transition-colors">Términos</Link>
          <a href="mailto:hola@sincrohealth.ai" className="text-[10px] uppercase tracking-widest font-semibold text-[#8D8273] hover:text-[#137fec] transition-colors">Contacto</a>
        </div>
        
        <p className="text-[#8D8273] text-[10px] md:text-xs font-light tracking-wide">
          © 2026 SincroHealth AI. Organic Premium Edition.
        </p>
      </div>
    </footer>
  );
};

export default Footer;