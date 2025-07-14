import { AppointmentState } from '@/types/store';
import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice';

const initialState: AppointmentState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    removeAppointment: (state, action) => {
      const index = state.appointments.findIndex(
        (appointment) => appointment.id === action.payload,
      );
      if (index !== -1) {
        state.appointments.splice(index, 1);
      }
    },
    //@comment- make sure there is no duplicate appointment in the same day for the same doctor
    addOrUpdateAppointment: (state, action) => {
      const newAppt = action.payload;

      //@comment- if the appointment is already in the state, update it
      const existingIndex = newAppt.id?.startsWith('appt_')
        ? state.appointments.findIndex((appt) => appt.id === newAppt.id)
        : -1;
      if (existingIndex !== -1) {
        state.appointments[existingIndex] = newAppt;
        return;
      }

      //@comment- if the appointment is not in the state, check if there is a duplicate appointment in the same day for the same doctor
      const duplicateIndex = state.appointments.findIndex(
        (appt) =>
          appt.specialty === newAppt.specialty &&
          appt.slot.date === newAppt.slot.date &&
          appt.patientName === newAppt.patientName,
      );

      if (duplicateIndex !== -1) {
        state.appointments[duplicateIndex].slot = newAppt.slot;
      } else {
        state.appointments.push(newAppt);
      }
    },
    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },
  },
  //@comment- clean the appointments when the user is logged out
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.appointments = [];
    });
  },
});

export const { removeAppointment, addOrUpdateAppointment, setAppointments } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
