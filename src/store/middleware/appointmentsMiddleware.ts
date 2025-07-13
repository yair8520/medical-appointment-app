import { Middleware } from '@reduxjs/toolkit';
import { persistKeys } from '@/constants/persist';
import { setItem } from '@/services/storage/storage';
import {
  removeAppointment,
  addOrUpdateAppointment,
  setAppointments,
} from '@/store/slices/appointmentSlice';

const actionsToPersist = [removeAppointment, addOrUpdateAppointment, setAppointments];

export const appointmentsMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (actionsToPersist.some((a) => a.match(action))) {
    const { appointments } = store.getState().appointment;

    setItem(persistKeys.APPOINTMENTS, appointments).catch((error) => {
      console.error('Error saving appointments data:', error);
    });
  }

  return result;
};
