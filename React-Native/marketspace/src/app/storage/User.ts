import { IUser } from "@model/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "./config";

export const getUserFromStorage = async (): Promise<IUser | null> => {
  const user = await AsyncStorage.getItem(StorageKeys.USER_STORAGE);
  return user ? JSON.parse(user) : null;
};

export const updateUserToStorage = async (user: IUser) => {
  await AsyncStorage.setItem(StorageKeys.USER_STORAGE, JSON.stringify(user));
};

export const removeUserFromStorage = async () => {
  await AsyncStorage.removeItem(StorageKeys.USER_STORAGE);
};
