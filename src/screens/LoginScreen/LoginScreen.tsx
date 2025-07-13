import { View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { ILoginForm, initialLoginForm, LoginScreenProps, TLoginFormKey } from './LoginScreenProps';
import styles from './LoginScreenStyles';
import { CInput } from '@/components/CInput';
import { ROUTES } from '@/constants/routes';
import { login } from '@/store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { loginValidation } from '@/utils/validation';

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [loginForm, setLoginForm] = useState<ILoginForm>(initialLoginForm);
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (!loginValidation(loginForm)) return Alert.alert('Error', 'Invalid username or password');

    dispatch(login({ userName: loginForm.userName }));
  };
  const onChangeText = (key: TLoginFormKey) => (text: string) => {
    setLoginForm((prev) => ({ ...prev, [key]: text }));
  };
  const isDisabled = !loginForm.userName || !loginForm.password;
  return (
    <View style={styles.container}>
      <CInput
        placeholder="User Name"
        style={styles.input}
        value={loginForm.userName}
        onChangeText={onChangeText('userName')}
      />

      <CInput
        placeholder="Password"
        style={styles.input}
        value={loginForm.password}
        onChangeText={onChangeText('password')}
      />
      <Button title="Login" onPress={handleLogin} disabled={isDisabled} />
    </View>
  );
};
