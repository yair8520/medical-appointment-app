import { ILoginForm } from '@/screens/LoginScreen/LoginScreenProps';

export const loginValidation = (form: ILoginForm): boolean => {
  const { userName, password } = form;

  if (!userName?.trim() || !password?.trim()) {
    return false;
  }

  return true;
};
