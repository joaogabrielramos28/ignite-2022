import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "..";
import { getMeals } from "./getMeals";

export const updateMeals = async (meal: any) => {
  const meals = await getMeals();

  const updatedMeals = meals.map((item: any) => {
    if (item.id === meal.id) {
      return meal;
    }
    return item;
  });

  const formattedMeals =JSON.stringify(updatedMeals)

  await AsyncStorage.setItem(StorageKeys.meals, formattedMeals);
};
