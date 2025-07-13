import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async <T>(key: string, value: T): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};

export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
    throw error;
  }
};

export const multiGet = async <T = any>(keys: string[]): Promise<Partial<Record<string, T>>> => {
  try {
    const result = await AsyncStorage.multiGet(keys);
    const parsed: Partial<Record<string, T>> = {};

    for (const [key, value] of result) {
      parsed[key] = value != null ? JSON.parse(value) : null;
    }

    return parsed;
  } catch (error) {
    console.error('multiGetObject error:', error);
    return {};
  }
};
