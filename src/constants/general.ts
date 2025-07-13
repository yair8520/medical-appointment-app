import { MedicalSpecialty } from '@/types/store';

export const medicalSpecialtyTypes: Record<string, string> = {
  FAMILY_MEDICINE: 'family_medicine',
  DERMATOLOGY: 'dermatology',
  GYNECOLOGY: 'gynecology',
};

export const specialityHebrewNames: Record<string, string> = {
  [medicalSpecialtyTypes.FAMILY_MEDICINE]: 'רפואה משפחה',
  [medicalSpecialtyTypes.DERMATOLOGY]: 'רופא עור',
  [medicalSpecialtyTypes.GYNECOLOGY]: 'רופאת נשים',
};

export const MEDICAL_SPECIALTIES: MedicalSpecialty[] = [
  {
    id: 1,
    name: medicalSpecialtyTypes.FAMILY_MEDICINE,
    hebrewName: specialityHebrewNames[medicalSpecialtyTypes.FAMILY_MEDICINE],
  },
  {
    id: 2,
    name: medicalSpecialtyTypes.DERMATOLOGY,
    hebrewName: specialityHebrewNames[medicalSpecialtyTypes.DERMATOLOGY],
  },
  {
    id: 3,
    name: medicalSpecialtyTypes.GYNECOLOGY,
    hebrewName: specialityHebrewNames[medicalSpecialtyTypes.GYNECOLOGY],
  },
];
