export interface AppointmentSummaryProps {
  specialtyKey: string;
  date: string;
  time: string;
  patientName: string;
  onConfirm?: () => void;
  showCancelButton?: boolean;
  onCancel?: () => void;
  onEdit?: () => void;
}
