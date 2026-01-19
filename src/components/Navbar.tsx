import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { id: 'hero', title: 'Inicio' },
  { id: 'caos', title: 'El Desafío' },
  { id: 'solucion', title: 'IA Humana' },
  { id: 'beneficios', title: 'Métricas' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // CORREGIDO: Se amplía el margen para una detección más estable.
      // Una sección se activa cuando entra en la mitad superior de la pantalla.
      { rootMargin: '0px 0px -50% 0px' } 
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      <nav className="max-w-6xl w-full bg-white/70 backdrop-blur-xl border border-white/50 px-6 md:px-10 h-24 md:h-32 flex items-center justify-between shadow-sm rounded-[40px] md:rounded-full">
        <Link to="/" className="flex items-center group" onClick={handleHomeClick}>
          <img 
            src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/logos/isotipo.webp" 
            alt="SincroHealth AI" 
            className="h-20 md:h-24 w-auto transition-transform group-hover:scale-105"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-[10px] uppercase tracking-widest font-semibold transition-colors hover:text-[#137fec] ${
                activeSection === link.id ? 'text-[#137fec]' : 'text-[#8D8273]'
              }`}>
              {link.title}
            </a>
          ))}
        </div>
        
        <a 
          href="/#contacto"
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
