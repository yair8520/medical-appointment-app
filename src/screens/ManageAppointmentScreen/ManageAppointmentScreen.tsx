import React from 'react';
import { View, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectAppointments } from '@/store/selectors/appointmentSelector';
import { removeAppointment } from '@/store/slices/appointmentSlice';
import { ROUTES } from '@/constants/routes';
import styles from './ManageAppointmentScreenStyles';
import { Text } from 'react-native';
import { AppointmentSummary } from '@/components/AppointmentSummary';
import { ManageAppointmentScreenProps } from './ManageAppointmentScreenProps';

export const ManageAppointmentScreen = ({ navigation }: ManageAppointmentScreenProps) => {
  const appointments = useSelector(selectAppointments);
  const dispatch = useDispatch();

  const handleCancel = (appointmentId: string) => {
    dispatch(removeAppointment(appointmentId));
    Alert.alert('הצלחה', 'התור בוטל בהצלחה');
  };

  const handleUpdate = (appointment: any) => {
    navigation.navigate(ROUTES.CALENDAR, {
      specialty: appointment.specialty,
      title: 'עדכון תור',
      existingAppointmentId: appointment.id,
    });
  };

  const onNewAppointmentPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.BOOKING }],
    });
  };

  const isNoAppointments = appointments.length === 0;
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
        {isNoAppointments ? (
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.title}>אין תורים פעילים</Text>
          </View>
        ) : (
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.title}>תורים פעילים</Text>
          </View>
        )}
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <AppointmentSummary
              specialtyKey={appointment.specialty}
              date={appointment.slot.date}
              time={appointment.slot.time}
              patientName={appointment.patientName}
              onCancel={() => handleCancel(appointment.id)}
              onEdit={() => handleUpdate(appointment)}
            />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.newAppointmentButton} onPress={onNewAppointmentPress}>
        <Text style={styles.newAppointmentButtonText}>תור חדש</Text>
      </TouchableOpacity>
    </View>
  );
};
