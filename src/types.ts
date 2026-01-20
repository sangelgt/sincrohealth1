
export interface FormData {
  fullName: string;
  specialty: string;
  email: string;
  phone: string;
  monthlyPatients: string;
}

export interface Diagnostico {
  full_name: string;
  specialty: string;
  email: string;
  phone: string;
  monthly_patients: number;
}

export const mapFormDataToDiagnostico = (data: FormData): Diagnostico => ({
  full_name: data.fullName,
  specialty: data.specialty,
  email: data.email,
  phone: data.phone,
  monthly_patients: parseInt(data.monthlyPatients, 10),
});

export enum PageRoutes {
  HOME = '/',
  PRIVACY = '/privacidad',
  TERMS = '/terminos'
}
