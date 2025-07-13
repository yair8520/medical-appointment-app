import { ScrollView } from 'react-native';
import React from 'react';
import { SummaryScreenProps } from './SummaryScreenProps';
import styles from './SummaryScreenStyles';
import { ROUTES } from '@/constants/routes';
import { AppointmentSummary } from '@/components/AppointmentSummary';
import { addOrUpdateAppointment } from '@/store/slices/appointmentSlice';
import { useDispatch } from 'react-redux';
import { Appointment } from '@/types/store/appointment';

export const SummaryScreen = ({ route, navigation }: SummaryScreenProps) => {
  const { specialty, date, time, patientName, existingAppointmentId } = route.params;
  const dispatch = useDispatch();
  //@comment- the id is generated based on the date, time, patient name and specialty
  const handleConfirmAppointment = () => {
    const appointment: Appointment = {
      id: existingAppointmentId || `appt_${date}_${time}_${patientName}_${specialty}`,
      specialty,
      slot: { date, time },
      patientName,
    };
    dispatch(addOrUpdateAppointment(appointment));
    navigation.reset({
      index: 1,
      routes: [{ name: ROUTES.BOOKING }, { name: ROUTES.MANAGE_APPOINTMENT }],
    });
  };

  const handleCancelAppointment = () => {
    //@comment- reset the navigation to the booking screen
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.BOOKING }],
    });
  };

  return (
    <ScrollView style={styles.container}>
      <AppointmentSummary
        specialtyKey={specialty}
        date={date}
        time={time}
        patientName={patientName}
        onConfirm={handleConfirmAppointment}
        onCancel={handleCancelAppointment}
      />
    </ScrollView>
  );
};
