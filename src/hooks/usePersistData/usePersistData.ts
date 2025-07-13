import { useEffect, useState } from 'react';
import { persistKeys } from '@/constants/persist';
import { Appointment, AuthState } from '@/types/store';
import { multiGet } from '@/services/storage/storage';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/authSlice';
import { setAppointments } from '@/store/slices/appointmentSlice';
import { Alert } from 'react-native';

export const usePersistData = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    persistData();
  }, []);

  const persistData = async () => {
    try {
      const keys = [persistKeys.AUTH, persistKeys.APPOINTMENTS];
      const data = await multiGet<{
        [persistKeys.AUTH]: AuthState;
        [persistKeys.APPOINTMENTS]: Appointment[];
      }>(keys);

      const auth = data[persistKeys.AUTH] as unknown as AuthState | null;
      const appointments = data[persistKeys.APPOINTMENTS] as unknown as Appointment[] | null;

      if (auth !== null && auth.userName !== null) {
        dispatch(login({ userName: auth.userName }));
      }
      if (appointments !== null) {
        dispatch(setAppointments(appointments));
      }
    } catch (error) {
      Alert.alert('שגיאה', 'אירעה שגיאה בטעינת הנתונים.');
    } finally {
      setLoading(false);
    }
  };

  return { loading };
};
