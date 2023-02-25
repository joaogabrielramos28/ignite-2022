import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeals } from "./getMeals";

export const deleteMeal = async (id: string) => {
  const meals = await getMeals();
  const filteredMeals = meals.filter((meal: any) => meal.id !== id);

  await AsyncStorage.setItem("@dailyDiet:meals", JSON.stringify(filteredMeals));
};
