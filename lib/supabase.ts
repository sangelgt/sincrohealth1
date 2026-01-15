
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://ddnnmcfbgqnhcuozurio.supabase.co';
const supabaseKey = 'sb_publishable_dGyRYsySnOTwQMvepfOdhw_mv3WigCv';

// Creamos una única instancia del cliente para toda la aplicación
export const supabase = createClient(supabaseUrl, supabaseKey);
