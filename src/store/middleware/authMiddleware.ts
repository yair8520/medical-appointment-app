import { Middleware } from '@reduxjs/toolkit';
import { persistKeys } from '@/constants/persist';
import { removeItem, setItem } from '@/services/storage/storage';
import { login, logout } from '@/store/slices/authSlice';

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (login.match(action)) {
    setItem(persistKeys.AUTH, {
      isAuthenticated: true,
      userName: action.payload.userName,
    }).catch((error) => {
      console.error('Error saving auth data:', error);
    });
  }

  if (logout.match(action)) {
    Promise.all([removeItem(persistKeys.AUTH), removeItem(persistKeys.APPOINTMENTS)]).catch(
      (error) => {
        console.error('Error clearing persisted auth and appointments data:', error);
      },
    );
  }

  return result;
};
