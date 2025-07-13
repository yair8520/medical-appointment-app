import { RootState } from '@/store';

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const selectUserName = (state: RootState) => state.auth.userName;
