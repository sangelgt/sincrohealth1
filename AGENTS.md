
# Kura AI - Contexto del Proyecto

Este documento proporciona el contexto técnico y creativo para el mantenimiento y evolución de la plataforma Kura AI.

## 🚀 Propósito del Proyecto
Kura AI es una solución de gestión clínica de alto rendimiento diseñada bajo el concepto **"Organic Premium"**. El objetivo es proyectar serenidad, eficiencia tecnológica y un trato humano mediante una interfaz sofisticada que reduce la sensación de "caos administrativo" para el profesional médico.

## 🛠️ Stack Tecnológico
- **Frontend:** React 19 + TypeScript.
- **Bundler:** Vite (Configuración ESM pura).
- **Estilos:** Tailwind CSS (Instalación formal, no CDN) + PostCSS.
- **Animaciones:** Framer Motion (Interacciones fluidas y orgánicas).
- **Backend/DB:** Supabase (Tabla principal: `Diagnostico`).
- **Iconografía:** Material Symbols Outlined.
- **Tipografía:** 
  - `Outfit`: Cuerpo y UI moderna.
  - `Playfair Display`: Títulos elegantes (serif).
  - `Inter`: Datos y métricas.

## 📂 Estructura de Archivos Crítica
- `index.tsx`: Punto de entrada de React (Usa `createRoot`).
- `App.tsx`: Enrutador principal (HashRouter para compatibilidad de despliegue).
- `lib/supabase.ts`: Cliente de base de datos con lógica de resiliencia para variables de entorno.
- `pages/LandingPage.tsx`: Contiene las secciones de Hero, Caos (3D), Soluciones y Métricas.
- `components/ContactForm.tsx`: Lógica de captura de leads conectada a Supabase.
- `index.css`: Contiene las directivas de Tailwind y animaciones personalizadas (3D Trackers).

## 🎨 Guía de Estilo (Organic Premium)
- **Paleta de Colores:**
  - `Sincro Blue (#137fec)`: Color de acento, confianza y tecnología.
  - `Cream (#F1F5F9)`: Fondo principal, suavidad visual.
  - `Deep Navy (#0A192F)`: Textos de alto contraste.
  - `Taupe (#8D8273)`: Textos secundarios y elegancia orgánica.
- **Componentes Visuales Clave:**
  - `TiltCard`: Animación 3D basada en un grid de 25 trackers invisibles para seguir el cursor.
  - `VerticalGlassStack`: Efecto de apilamiento de cristal (glassmorphism) con profundidad Z.
  - **Border Radius:** Uso generoso de bordes redondeados (`rounded-[60px]`, `rounded-full`) para evitar ángulos agresivos.

## 🔧 Reglas Técnicas para el Agente
1. **Módulos ES:** El proyecto es `"type": "module"`. Nunca uses `require()`. Usa siempre `import/export`.
2. **Tailwind:** No añadidas scripts de CDN en `index.html`. Usa clases de utilidad de Tailwind en los componentes.
3. **Supabase:** 
   - La tabla de destino es `Diagnostico`.
   - Campos: `full_name`, `specialty`, `email`, `phone`, `monthly_patients`.
   - Las variables de entorno deben buscarse preferentemente vía `import.meta.env`.
4. **Navegación:** Usa `react-router-dom`. Para scroll suave en la misma página, usa los IDs de sección (`#caos`, `#solucion`, etc.).
5. **Renderizado:** Si la página se queda en blanco, verifica que `index.html` tenga `<script type="module" src="./index.tsx"></script>` y que el `id="root"` exista.

## 📝 Roadmap de Desarrollo
- [x] Landing Page Core.
- [x] Integración con Supabase.
- [x] Configuración formal de Tailwind.
- [ ] Implementación de Dashboard de Usuario (Próxima fase).
- [ ] Optimización de SEO y Metatags dinámicos.

---
*Este proyecto prioriza la estética y la experiencia de usuario (UX) sobre la densidad de información.*
