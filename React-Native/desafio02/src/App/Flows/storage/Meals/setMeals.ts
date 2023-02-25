import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "..";
import { Meal, MealMapper } from "../DTOs/meal";
import { getMeals } from "./getMeals";

export const setMeals = async (meal: Meal) => {
  const meals = await getMeals();

  const dataByDate = meals.find((item) => item.title === meal.date);

  if (dataByDate) {
    dataByDate.data = [...dataByDate.data, meal];
    await AsyncStorage.setItem(StorageKeys.meals, JSON.stringify(meals));
  } else {
    const newData: MealMapper = {
      title: meal.date,
      data: [meal],
    };
    const updatedData = [...meals, newData];
    await AsyncStorage.setItem(StorageKeys.meals, JSON.stringify(updatedData));
  }
};
