import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "..";
import { Meal } from "../DTOs/meal";
import { getMeals } from "./getMeals";

export const updateMeals = async (meal: Meal) => {
  const meals = await getMeals();

  const dataByDate = meals.find((item) => item.title === meal.date);

  if (dataByDate) {
    dataByDate.data.map((item) => {
      if (item.id === meal.id) {
        item.date = meal.date;
        item.time = meal.time;
        item.isHealthy = meal.isHealthy;
        item.description = meal.description;
        item.name = meal.name;
      }
    });

    console.log("dataByDate.data", dataByDate.data);
  }

  const formattedMeals = JSON.stringify(meals);

  await AsyncStorage.setItem(StorageKeys.meals, formattedMeals);
};
