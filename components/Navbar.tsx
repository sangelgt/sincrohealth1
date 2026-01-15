
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLinkActive = (path: string) => location.pathname === path;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegamos al home y dejamos que el navegador maneje el hash
      // O podríamos navegar y luego hacer scroll una vez cargado, pero el enlace simple funciona para Home
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
      <nav className="max-w-6xl w-full bg-white/70 backdrop-blur-xl border border-white/50 px-4 md:px-8 h-16 flex items-center justify-between shadow-sm rounded-full">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#137fec] rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="material-symbols-outlined text-white text-lg">all_inclusive</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-[#137fec]">SincroHealth AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
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
          className="bg-[#137fec] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
        >
          Registro
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
