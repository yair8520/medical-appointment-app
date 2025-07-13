export interface LoginScreenProps {
  [key: string]: any;
}
export interface ILoginForm {
  userName: string;
  password: string;
}
export const initialLoginForm: ILoginForm = {
  userName: '',
  password: '',
} as const;
export type TLoginFormKey = keyof typeof initialLoginForm;
