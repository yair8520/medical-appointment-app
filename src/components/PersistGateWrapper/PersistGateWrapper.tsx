import React from 'react';
import { PersistGateWrapperProps } from './PersistGateWrapperProps';
import { ActivityIndicator, View } from 'react-native';
import { usePersistData } from '@/hooks/usePersistData/usePersistData';
import styles from './PersistGateWrapperStyles';

//@comment- this component is used to wrap the app in a persist gate
//it is used to load the data on the app start

export const PersistGateWrapper = ({ children }: PersistGateWrapperProps) => {
  const { loading } = usePersistData();
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return <>{children}</>;
};
