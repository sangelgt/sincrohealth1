
import { supabase } from '../lib/supabase';
import type { Diagnostico } from '../types';

/**
 * Inserta un nuevo registro de diagnóstico en la base de datos.
 * @param data - Objeto de tipo Diagnostico con la información del nuevo registro.
 * @returns Un objeto con `data` y `error` como resultado de la operación en Supabase.
 */
export const createDiagnostico = async (data: Diagnostico) => {
  const { data: responseData, error } = await supabase
    .from('Diagnostico')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Error al crear el diagnóstico:', error);
  }

  return { data: responseData, error };
};
