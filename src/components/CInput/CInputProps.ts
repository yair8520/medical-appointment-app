import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface CInputProps extends TextInputProps {
  customStyle?: StyleProp<ViewStyle>;
}
