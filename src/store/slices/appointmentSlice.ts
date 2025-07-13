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
    addOrUpdateAppointment: (state, action) => {
      const newAppt = action.payload;

      const existingIndex = newAppt.id?.startsWith('appt_')
        ? state.appointments.findIndex((appt) => appt.id === newAppt.id)
        : -1;
      if (existingIndex !== -1) {
        state.appointments[existingIndex] = newAppt;
        return;
      }

      const duplicateIndex = state.appointments.findIndex(
        (appt) =>
          appt.specialty === newAppt.specialty &&
          appt.slot.date === newAppt.slot.date &&
          appt.slot.time === newAppt.slot.time &&
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
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.appointments = [];
    });
  },
});

export const { removeAppointment, addOrUpdateAppointment, setAppointments } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
