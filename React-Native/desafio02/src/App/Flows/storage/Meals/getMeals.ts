import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "..";

export const getMeals = async () => {
  const response = await AsyncStorage.getItem(StorageKeys.meals);
  const data = response ? JSON.parse(response) : [];

  return data;
};
