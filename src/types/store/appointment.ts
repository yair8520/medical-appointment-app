export interface AppointmentState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}

export interface Appointment {
  id: string;
  specialty: string;
  slot: AppointmentSlot;
  patientName: string;
}

export type MedicalSpecialty = {
  id: number;
  name: string;
  hebrewName: string;
};
export type AppointmentSlot = {
  date: string;
  time: string;
};
