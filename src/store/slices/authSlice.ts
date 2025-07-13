import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '@/types/store/auth';

const initialState: AuthState = {
  isAuthenticated: false,
  userName: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ userName: string }>) => {
      state.isAuthenticated = true;
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userName = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
