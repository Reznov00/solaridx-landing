import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  APPLE_USER_DATA: 'APPLE_USER_DATA',
};

async function saveItem(key: string, value: string | boolean) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value)).then();
    return true;
  } catch (error) {
    console.log('Error saving data');
    return false;
  }
}

async function removeItem(key: string) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}
async function removeAll() {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (exception) {
    return false;
  }
}

async function getItem(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { removeItem, STORAGE_KEYS, getItem, saveItem, removeAll };
