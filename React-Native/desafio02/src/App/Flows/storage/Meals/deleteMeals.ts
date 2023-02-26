import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeals } from "./getMeals";

export const deleteMeal = async (id: string, date: string) => {
  const meals = await getMeals();

  const dataByDate = meals.find((item) => item.title === date);
  const index = meals.findIndex((item) => item.title === date);

  if (dataByDate) {
    if (dataByDate.data.length === 1) {
      meals.splice(index, 1);
    } else dataByDate.data = dataByDate.data.filter((item) => item.id !== id);
  }

  await AsyncStorage.setItem("@dailyDiet:meals", JSON.stringify(meals));
};
