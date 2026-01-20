import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 'hero', title: 'Inicio' },
  { id: 'caos', title: 'El Desafío' },
  { id: 'solucion', title: 'IA Humana' },
  { id: 'beneficios', title: 'Métricas' },
  { id: 'planes', title: 'Planes' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' } 
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', ' ');
    }
    // If not on home page, the Link component will handle navigation to '/'
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4">
      <nav className="max-w-6xl w-full bg-white/70 backdrop-blur-xl border border-white/50 px-8 h-20 flex items-center justify-between shadow-sm rounded-full">
        <Link to="/" className="flex items-center" onClick={handleHomeClick}>
            <img 
                src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/logos/isotipo.webp" 
                alt="SincroHealth AI Isotipo" 
                className="h-12 object-contain p-0 m-0"
            />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
                <a 
                    key={link.id}
                    href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`nav-link hover:text-[var(--sincro-blue)] transition-colors ${
                        activeSection === link.id && isHomePage ? 'text-[var(--sincro-blue)]' : 'text-[var(--taupe)]'
                    }`}>
                    {link.title}
                </a>
            ))}
        </div>
        
        <a 
          href={isHomePage ? "#registro" : "/#registro"}
          onClick={(e) => handleNavClick(e, 'registro')}
          className="bg-[var(--sincro-blue)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap"
        >
          Solicitar Prueba Gratuita
        </a>
      </nav>
    </header>
  );
};

export default Navbar;