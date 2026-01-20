<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SincroHealth AI: Manual de Mantenimiento Técnico

Este repositorio contiene el código fuente y la documentación técnica de la landing page de SincroHealth AI, una solución de gestión clínica de alto rendimiento diseñada bajo el concepto "Organic Premium".

---

## Propósito del Documento

Este documento proporciona una guía técnica completa para el mantenimiento preventivo, la actualización de contenido y la expansión de la landing page. El objetivo es preservar la consistencia visual y la integridad funcional del proyecto a largo plazo, permitiendo que cualquier desarrollador pueda trabajar sobre él de manera eficiente.

---

## 1. Guía de Estilos y Consistencia Visual

La estética "Organic Premium" es un pilar del proyecto. Para mantenerla, es crucial adherirse a los siguientes tokens de diseño y reglas estructurales.

### 1.1. Tokens de Diseño (Design System)

Estos valores están centralizados en `src/index.css` como variables CSS para su uso global.

#### **Colores:**
-   `--sincro-blue: #137fec` (Acento principal, CTAs, links activos)
-   `--cream: #F1F5F9` (Fondo principal de la página)
-   `--deep-navy: #0A192F` (Texto principal de alto contraste)
-   `--taupe: #8D8273` (Texto secundario, etiquetas, placeholders)
-   `--cloud-white: #F8FAFC` (Fondos de elementos elevados como la navbar)

#### **Tipografías:**
-   **`Outfit`**: Para toda la UI, cuerpo de texto y elementos de navegación.
-   **`Playfair Display`**: Para títulos principales (H1, H2) que requieran un toque elegante (clase `.serif-title`).
-   **`Inter`**: Reservada para datos, métricas y texto que necesite alta legibilidad en tamaños pequeños.

#### **Radios de Borde (Border Radius):**
Se favorecen los bordes generosamente redondeados para una apariencia suave y orgánica.
-   **Grandes Contenedores:** `rounded-[60px]` o `rounded-[70px]` (Ej: Tarjeta 3D).
-   **Botones y Entradas:** `rounded-full` (Ej: Botones de CTA, campos de formulario).
-   **Tarjetas y Elementos UI:** `rounded-2xl` o `rounded-[40px]` (Ej: Navbar, tarjetas de servicios).

### 1.2. Reglas de Contenedores de Imagen (Aspect Ratio)

Para añadir nuevas tarjetas de servicios o elementos visuales sin romper la maquetación, sigue esta estructura y clases.

#### **Efecto de "Zoom + Ocultar Texto":**
Este efecto se logra con CSS. La animación se activa cuando el cursor entra en el contenedor principal (`.cards`).

-   **Estructura HTML/JSX Requerida:**

    ```jsx
    // Estructura para una nueva tarjeta de servicio
    <div className="card">
        {/* La imagen que recibirá el efecto de zoom */}
        <img src="URL_IMAGEN" alt="Descripción" className="card-image" />

        {/* El contenedor del texto que se ocultará */}
        <div className="card-text-container">
            <p className="tip">Título del Servicio</p>
            <p className="second-text">Descripción breve</p>
        </div>
    </div>
    ```

-   **Lógica CSS (`src/index.css`):**

    ```css
    /* El hover en el contenedor padre afecta a los hijos que NO están en hover */
    .cards:hover > .card:not(:hover) {
      transform: scale(0.95);
      filter: blur(8px) opacity(0.7);
    }

    /* Oculta el texto al hacer hover sobre su tarjeta correspondiente */
    .cards .card:hover .card-text-container {
        opacity: 0;
    }

    /* Aplica zoom a la imagen al hacer hover */
    .cards .card:hover .card-image {
        transform: scale(1.1);
    }
    ```

---

## 2. Gestión de Activos (Assets)

Todos los activos visuales dinámicos se gestionan a través de Supabase Storage para permitir actualizaciones sin necesidad de un nuevo despliegue.

### 2.1. Flujo de Actualización de Imágenes

1.  **Acceso a Supabase:** Inicia sesión en tu dashboard de Supabase.
2.  **Navegar a Storage:** En el menú lateral, ve a `Storage`.
3.  **Seleccionar Bucket:** Entra al bucket `sincrohealth`.
4.  **Subir Imagen:** Arrastra y suelta el nuevo archivo. Se recomienda optimizarlo y usar formato `.webp`.
5.  **Obtener URL:** Selecciona el archivo subido y haz clic en "Get URL". Copia la URL pública.
6.  **Actualizar Código:** Pega la nueva URL en el atributo `src` del componente de React correspondiente.

### 2.2. Mantenimiento del "Phone Mockup"

-   **Ruta del Componente:** `src/components/AnimatedPhone.tsx`

#### **Para reemplazar la captura de pantalla de métricas:**

1.  Sigue el flujo del punto 2.1 para subir la nueva imagen a Supabase.
2.  Abre el componente y reemplaza la URL en la etiqueta `<img>`:

    ```tsx
    // src/components/AnimatedPhone.tsx
    <img
      src="URL_DE_SUPABASE_AQUI" // <-- Pega la nueva URL
      className="metrics-image"
      alt="Métricas de SincroHealth"
    />
    ```

#### **Para ajustar el scroll de la imagen:**

El sistema es automático. El contenedor `.phone-screen` tiene una altura fija y la propiedad `overflow-y: auto`.

-   **Si la nueva imagen es más larga:** El rango de scroll se expandirá automáticamente.
-   **Si la nueva imagen es más corta:** El rango de scroll se reducirá. Si es más corta que la pantalla, el scroll simplemente no se activará.

**No es necesario ajustar manualmente ninguna altura en el CSS o JS.**

---

## 3. Estructura de Formularios

Para mantener la consistencia y funcionalidad del formulario de contacto.

### 3.1. Lógica de Normalización de Selectores

El error de las "flechas duplicadas" en los campos `<select>` se resuelve eliminando la flecha nativa del navegador.

-   **Mecanismo:** La clase `appearance-none` de Tailwind aplica la propiedad CSS `appearance: none`. Hemos reforzado esto en `src/index.css` con `!important` para máxima compatibilidad.
-   **Para añadir un nuevo campo `<select>`:**
    1.  Asegúrate de que el elemento `<select>` tenga la clase `appearance-none`.
    2.  Envuélvelo en un `div` con `className="relative"`.
    3.  Añade el `<span>` con el ícono de Material Symbols como un hermano del `<select>`.

    ```jsx
    // Plantilla para un nuevo campo de selección
    <div className="relative">
      <select className="... appearance-none ...">
        {/* ... opciones ... */}
      </select>
      <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
    </div>
    ```

### 3.2. Añadir Opciones a los Desplegables

-   **Ruta del Componente:** `src/components/ContactForm.tsx`

#### **Para añadir una nueva 'Especialidad':**
Localiza el array `medicalSpecialties` y añade el nuevo valor como un string.

```tsx
const medicalSpecialties = [
  // ... especialidades existentes
  "Urología",
  "Otra",
  "Nueva Especialidad a Añadir" // <-- Añadir aquí
];
```

#### **Para añadir un nuevo 'Rango de Pacientes':**
Localiza el JSX del desplegable y añade una nueva etiqueta `<option>`.

```jsx
<select name="monthly_patients" ...>
  // ... opciones existentes
  <option value="1000+">Más de 1,000 pacientes</option>
  <option value="2000+">Más de 2,000 pacientes</option> {/* <-- Añadir aquí */}
</select>
```

---

## 4. Guía de Expansión de Secciones

### 4.1. Duplicar una Sección Existente

1.  **Identificar y Copiar:** En `src/pages/LandingPage.tsx`, localiza y copia el bloque `<section>` completo que deseas duplicar (ej. `<section id="solucion" ...>`).
2.  **Pegar y Renombrar:** Pega el bloque donde desees la nueva sección. **Cambia el `id`** a uno nuevo y descriptivo (ej. `id="testimonios"`).
3.  **Actualizar Contenido:** Modifica el título (`<h2>`) y el contenido interno de la nueva sección.
4.  **Añadir a Navegación (Opcional):** Si quieres que la nueva sección sea accesible desde la navbar, abre `src/components/Navbar.tsx` y añade un nuevo enlace `<a>` que apunte al `href` con el nuevo ID (ej. `href="/#testimonios"`).

### 4.2. Heredar Efectos de Hover y Blur

Si la nueva sección contiene elementos que deben usar la animación de las tarjetas de servicios, simplemente reutiliza la misma estructura de clases CSS documentada en el punto 1.2. La lógica de animación es global y se aplicará a cualquier elemento del DOM que coincida con esa estructura.

### 4.3. Gestión de la Sección de Precios

-   **Ruta del Componente:** `src/components/PricingSection.tsx`

La sección de precios es totalmente dinámica y se gestiona a través de un array de objetos llamado `plans` dentro del componente. Esto permite modificar los planes sin tocar la lógica de renderizado (JSX).

**Para modificar o añadir un plan:**

Localiza el array `plans` y edita uno de los objetos existentes o añade uno nuevo siguiendo la misma estructura.

```javascript
const plans = [
  {
    name: "Sincro-Starter", // Nombre corto del plan
    title: "Profesional Independiente", // Título principal que se muestra
    price: "$80", // El precio o texto como "Cotización Personalizada"
    priceUnit: "USD/mes", // La unidad del precio (puede ser null)
    features: [ // Lista de características
      { icon: "smart_toy", text: "Capacidades completas de Bot de IA" },
      // ... más features
    ],
    impact: "Recupere 10 horas...", // Texto de la tarjeta de impacto
    buttonText: "Solicitar Demo...", // Texto del botón de CTA
    isRecommended: false // `true` si es el plan recomendado (aplica estilos especiales)
  },
  // ... más planes
];
```

-   **`isRecommended: true`**: Al marcar un plan como recomendado, se le aplicarán automáticamente los estilos de la tarjeta `pro` (borde azul, etiqueta de "RECOMENDADO", etc.). Asegúrate de que solo un plan tenga este valor en `true`.

---

## 5. Checkpoint de Despliegue (Deployment)

### 5.1. Pasos para Publicar Cambios

1.  **Construir el Proyecto (Build):** Abre una terminal y ejecuta el siguiente comando para generar los archivos de producción optimizados.
    ```bash
    npm run build
    ```
    Esto creará una carpeta `dist` con todo el código listo para ser desplegado.

2.  **Desplegar en Firebase Hosting:** Ejecuta el comando de despliegue de Firebase.
    ```bash
    firebase deploy --only hosting
    ```
    Esto publicará el contenido de la carpeta `dist`.

### 5.2. Verificación Post-Despliegue

Tras cada despliegue, realiza esta lista de verificación en la URL de producción:
-   [ ] **Limpiar Caché:** Realiza una recarga forzada (Ctrl+Shift+R o Cmd+Shift+R).
-   [ ] **Enlaces de Navegación:** Verifica que todos los enlaces del menú llevan a la sección correcta.
-   [ ] **Formulario de Contacto:** Envía una prueba para confirmar que los datos llegan a Supabase.
-   [ ] **Enlaces Externos:** Verifica todos los enlaces salientes (si los hay).
