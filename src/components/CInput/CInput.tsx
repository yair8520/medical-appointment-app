import { View, TextInput } from 'react-native';
import React from 'react';
import { CInputProps } from './CInputProps';
import styles from './CInputStyles';

export const CInput = ({ customStyle, ...props }: CInputProps) => {
  return <TextInput {...props} style={[styles.input, customStyle]} />;
};
