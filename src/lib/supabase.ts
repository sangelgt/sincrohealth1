
import { createClient } from '@supabase/supabase-js';

/**
 * Intenta recuperar las credenciales de Supabase de múltiples fuentes y formatos.
 * Cumple con la directiva de no usar texto plano y depender de variables de entorno,
 * pero añade resiliencia para diferentes entornos de ejecución.
 */
const getSupabaseConfig = () => {
  // Contextos donde podrían vivir las variables
  const envSources = [
    (import.meta as any).env,
    (globalThis as any).process?.env,
    (globalThis as any).env,
    globalThis
  ];

  // Nombres posibles para la URL
  const urlKeys = [
    'VITE_SUPABASE_URL', 
    'NEXT_PUBLIC_SUPABASE_URL', 
    'SUPABASE_URL'
  ];

  // Nombres posibles para la API Key
  const keyKeys = [
    'VITE_SUPABASE_ANON_KEY', 
    'NEXT_PUBLIC_SUPABASE_ANON_KEY', 
    'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY',
    'SUPABASE_ANON_KEY'
  ];

  let url = '';
  let key = '';

  for (const source of envSources) {
    if (!source) continue;
    
    // Buscar URL
    for (const uk of urlKeys) {
      if (source[uk]) {
        url = source[uk];
        break;
      }
    }
    
    // Buscar Key
    for (const kk of keyKeys) {
      if (source[kk]) {
        key = source[kk];
        break;
      }
    }
    
    if (url && key) break;
  }

  return { url, key };
};

const { url, key } = getSupabaseConfig();

// En lugar de un error crítico, usamos un aviso informativo si los valores no se encuentran.
// Esto permite que la app cargue (UI) aunque las llamadas a la DB fallen hasta que se configure el entorno.
if (!url || !key) {
  console.warn(
    'SincroHealth: No se detectaron las variables de entorno de Supabase.\n' +
    'Si estás en local, verifica tu archivo .env.\n' +
    'Si estás en despliegue, configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en el panel de control.'
  );
}

// Exportamos el cliente instanciado.
// Usamos placeholders si no hay valores para evitar errores de inicialización ("url is required")
// que bloquean el renderizado de toda la aplicación.
export const supabase = createClient(
  url || 'https://missing-url.supabase.co',
  key || 'missing-key'
);
