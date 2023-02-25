import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { MealMapper } from "../../storage/DTOs/meal";
import { getMeals } from "../../storage/Meals/getMeals";
import { StartLayout } from "./Layout";

import { compareAsc, compareDesc } from "date-fns";
import { formatDate } from "../../utils/string";

export const Start = () => {
  const [meals, setMeals] = useState<MealMapper[]>([]);
  const { navigate } = useNavigation();

  const goToStatistics = () => {
    navigate(StackRoutesEnum.STATISTICS);
  };

  const goToNewMeal = () => {
    navigate(StackRoutesEnum.NEW_MEAL);
  };

  const getMealsFromAsync = async () => {
    const meals = await getMeals();

    const sortedMeals = meals.sort((a, b) => {
      const dateA = new Date(formatDate(a.title));
      const dateB = new Date(formatDate(b.title));

      return compareDesc(dateA, dateB);
    });

    setMeals(sortedMeals);
  };

  useFocusEffect(
    useCallback(() => {
      getMealsFromAsync();
    }, [])
  );
  return (
    <StartLayout
      meals={meals}
      onGoToStatics={goToStatistics}
      onGoToNewMeal={goToNewMeal}
    />
  );
};
