
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isLinkActive = (path: string) => location.pathname === path;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('registro');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      {/* Se aumenta la altura del nav de h-16 a h-28 o h-32 para permitir que el logo x2 luzca imponente */}
      <nav className="max-w-6xl w-full bg-white/70 backdrop-blur-xl border border-white/50 px-6 md:px-10 h-24 md:h-32 flex items-center justify-between shadow-sm rounded-[40px] md:rounded-full">
        <Link to="/" className="flex items-center group">
          <img 
            src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/logos/isotipo.webp" 
            alt="SincroHealth AI" 
            className="h-20 md:h-24 w-auto transition-transform group-hover:scale-105"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className={`text-[10px] uppercase tracking-widest font-semibold transition-colors hover:text-[#137fec] ${isLinkActive('/') ? 'text-[#137fec]' : 'text-[#8D8273]'}`}>Inicio</Link>
          <a 
            href="/#caos" 
            onClick={(e) => handleNavClick(e, 'caos')}
            className="text-[10px] uppercase tracking-widest font-semibold text-[#8D8273] hover:text-[#137fec] transition-colors"
          >
            El Desafío
          </a>
          <a 
            href="/#solucion" 
            onClick={(e) => handleNavClick(e, 'solucion')}
            className="text-[10px] uppercase tracking-widest font-semibold text-[#8D8273] hover:text-[#137fec] transition-colors"
          >
            IA Humana
          </a>
          <a 
            href="/#beneficios" 
            onClick={(e) => handleNavClick(e, 'beneficios')}
            className="text-[10px] uppercase tracking-widest font-semibold text-[#8D8273] hover:text-[#137fec] transition-colors"
          >
            Métricas
          </a>
        </div>
        
        <a 
          href="/#registro" 
          onClick={handleRegisterClick}
          className="bg-[#137fec] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
        >
          Obtener Demo
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
