import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { BookingScreenProps } from './BookingScreenProps';
import styles from './BookingScreenStyles';
import { ROUTES } from '@/constants/routes';
import { MEDICAL_SPECIALTIES } from '@/constants/general';
import { MedicalSpecialty } from '@/types/store';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const BookingScreen = ({ navigation }: BookingScreenProps) => {
  const appointments = useSelector((state: RootState) => state.appointment.appointments);
  const [selectedSpecialty, setSelectedSpecialty] = useState<MedicalSpecialty | null>(null);

  const handleSpecialtySelect = (specialty: MedicalSpecialty) => {
    if (selectedSpecialty === specialty) {
      setSelectedSpecialty(null);
    } else {
      setSelectedSpecialty(specialty);
    }
  };

  const handleSearchCalendars = () => {
    if (selectedSpecialty) {
      navigation.navigate(ROUTES.CALENDAR, {
        specialty: selectedSpecialty.name,
        title: selectedSpecialty.hebrewName,
      });
    }
  };
  const isSelectedSpecialty = (specialty: MedicalSpecialty) => {
    return selectedSpecialty === specialty;
  };

  const displayAppointments = appointments.length > 0;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>בחירת מקצוע רפואי</Text>

      <View style={styles.specialtiesContainer}>
        {MEDICAL_SPECIALTIES.map((specialty) => (
          <TouchableOpacity
            key={specialty.id}
            style={[
              styles.specialtyItem,
              isSelectedSpecialty(specialty) && styles.selectedSpecialty,
            ]}
            onPress={() => handleSpecialtySelect(specialty)}
          >
            <Text
              style={[
                styles.specialtyText,
                isSelectedSpecialty(specialty) && styles.selectedSpecialtyText,
              ]}
            >
              {specialty.hebrewName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedSpecialty && (
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchCalendars}>
          <Text style={styles.searchButtonText}>חיפוש יומנים</Text>
        </TouchableOpacity>
      )}

      <View style={styles.separator} />

      <TouchableOpacity
        style={[styles.manageAppointmentsButton, !displayAppointments && styles.disabledButton]}
        onPress={() => navigation.navigate(ROUTES.MANAGE_APPOINTMENT)}
        disabled={!displayAppointments}
      >
        <Text style={styles.manageAppointmentsButtonText}>ניהול תורים קיימים</Text>
        {displayAppointments && (
          <View style={styles.manageAppointmentsButtonIcon}>
            <Text style={styles.manageAppointmentsButtonIconText}>{appointments.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};
