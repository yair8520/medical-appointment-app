import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CalendarScreenProps } from './CalendarScreenProps';
import styles from './CalendarScreenStyles';
import { MOCK_APPOINTMENT_SLOTS } from '@/mocks/appointment';
import { formatDate } from '@/utils/time';
import { AppointmentSlot } from '@/types/store/appointment';
import { ROUTES } from '@/constants/routes';
import { useSelector } from 'react-redux';
import { selectUserName } from '@/store/selectors/authSelector';

export const CalendarScreen = ({ route, navigation }: CalendarScreenProps) => {
  const { specialty, title, existingAppointmentId } = route.params;
  const slots = MOCK_APPOINTMENT_SLOTS[specialty];
  const [selectedTime, setSelectedTime] = useState<AppointmentSlot | null>(null);
  const patientName = useSelector(selectUserName);
  const handleSelectSlot = (slot: AppointmentSlot) => {
    if (isSelectedItem(slot)) {
      setSelectedTime(null);
    } else {
      setSelectedTime(slot);
    }
  };
  const isNextButtonDisabled = selectedTime === null;

  const isSelectedItem = (slot: AppointmentSlot) => {
    return selectedTime?.date === slot.date && selectedTime?.time === slot.time;
  };
  const handleNext = () => {
    if (selectedTime) {
      navigation.navigate(ROUTES.SUMMARY, {
        specialty: specialty,
        date: selectedTime.date,
        time: selectedTime.time,
        patientName,
        existingAppointmentId,
      });
    }
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>{title}</Text>
        {Object.entries(slots).map(([date, times]) => (
          <View key={date} style={styles.dateContainer}>
            <Text style={styles.dateText}>{formatDate(date)}</Text>
            {times.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeButton,
                  isSelectedItem({ date, time }) && styles.timeButtonSelected,
                ]}
                onPress={() => handleSelectSlot({ date, time })}
              >
                <Text
                  style={[
                    styles.timeText,
                    isSelectedItem({ date, time }) && styles.timeTextSelected,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[styles.nextButton, isNextButtonDisabled && styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={isNextButtonDisabled}
      >
        <Text style={styles.nextButtonText}>זימון התור</Text>
      </TouchableOpacity>
    </>
  );
};
