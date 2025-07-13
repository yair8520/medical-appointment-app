import { RootState } from '../store';

export const selectAppointments = (state: RootState) => state.appointment.appointments;
