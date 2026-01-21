import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Definición de tipos para las rutas de navegación
interface NavRoute {
  name: string;
  href: string; // This will be the full hash link, e.g., '#hero'
  targetId: string; // ID del elemento objetivo para hash links, e.g., 'hero'
}

// Rutas de navegación principales
const navRoutes: NavRoute[] = [
  { name: "INICIO", href: "#hero", targetId: "hero" },
  { name: "EL DESAFÍO", href: "#desafio", targetId: "desafio" },
  { name: "IA HUMANA", href: "#ia-humana", targetId: "ia-humana" },
  { name: "MÉTRICAS", href: "#metricas", targetId: "metricas" },
  { name: "PLANES", href: "#planes", targetId: "planes" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  // isHomePage is determined by the pathname being exactly "/" (root of the application)
  // This variable is no longer strictly necessary for handleNavClick but kept for potential future use or context.
  // const isHomePage = location.pathname === "/";

  // Efecto para cerrar el menú móvil si la ruta cambia
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Maneja el clic en los enlaces de navegación para smooth scroll y hash update
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on click

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#/${targetId}`);
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl rounded-[40px] bg-white/70 backdrop-blur-md shadow-lg p-6 lg:px-8">
      <nav
        className="flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SincroHealth AI</span>
            <img
              width={32}
              height={32}
              className="h-8 w-auto"
              src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/logos/isotipo.webp"
              alt="SincroHealth AI Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navRoutes.map((route) => (
            <a
              key={route.name}
              href={route.href}
              onClick={(e) => handleNavClick(e, route.targetId)}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {route.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#registro"
            onClick={(e) => handleNavClick(e, "registro")}
            className="rounded-full bg-[#137fec] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137fec]"
          >
            Solicitar Prueba Gratuita
          </a>
        </div>
      </nav>
      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SincroHealth AI</span>
              <img
                width={32}
                height={32}
                className="h-8 w-auto"
                src="https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/logos/isotipo.webp"
                alt="SincroHealth AI Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navRoutes.map((route) => (
                  <a
                    key={route.name}
                    href={route.href}
                    onClick={(e) => handleNavClick(e, route.targetId)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {route.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#registro"
                  onClick={(e) => handleNavClick(e, "registro")}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Solicitar Prueba Gratuita
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;