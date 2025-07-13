import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppointmentSummaryProps } from './AppointmentSummaryProps';
import styles from './AppointmentSummaryStyles';
import { MEDICAL_SPECIALTIES } from '@/constants/general';
import { formatDate } from '@/utils/time';

export const AppointmentSummary = ({
  specialtyKey,
  date,
  time,
  patientName,
  onConfirm,
  onCancel,
  onEdit,
}: AppointmentSummaryProps) => {
  const getSpecialtyName = (specialtyKey: string) => {
    const specialtyItem = MEDICAL_SPECIALTIES.find((s) => s.name === specialtyKey.toLowerCase());
    return specialtyItem?.hebrewName || 'לא ידוע';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>סיכום הזימון</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.sectionTitle}>פרטי התור</Text>

        <View style={styles.detailRow}>
          <Text style={styles.label}>מקצוע רפואי:</Text>
          <Text style={styles.value}>{getSpecialtyName(specialtyKey)}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>תאריך:</Text>
          <Text style={styles.value}>{formatDate(date)}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>שעה:</Text>
          <Text style={styles.value}>{time}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>שם המטופל:</Text>
          <Text style={styles.value}>{patientName}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {onConfirm && (
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>אישור הזימון</Text>
          </TouchableOpacity>
        )}
        {onEdit && (
          <TouchableOpacity style={styles.editButton} onPress={onEdit}>
            <Text style={styles.editButtonText}>עריכה</Text>
          </TouchableOpacity>
        )}
        {onCancel && (
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.cancelButtonText}>ביטול</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
