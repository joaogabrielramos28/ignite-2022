import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { Meal, MealMapper } from "../../storage/DTOs/meal";
import { getMeals } from "../../storage/Meals/getMeals";
import { StartLayout } from "./Layout";

import { compareDesc } from "date-fns";
import { formatDate } from "../../utils/string";

type StatisticsProps = {
  percentage: number;
  sequence: number;
  mealsQuantity: number;
  healthyMealsQuantity: number;
  unhealthyMealsQuantity: number;
};

export const Start = () => {
  const [meals, setMeals] = useState<MealMapper[]>([]);

  const [statistics, setStatistics] = useState<StatisticsProps>(
    {} as StatisticsProps
  );

  const { navigate } = useNavigation();

  const goToStatistics = () => {
    navigate(StackRoutesEnum.STATISTICS, {
      statistics,
    });
  };

  const goToNewMeal = () => {
    navigate(StackRoutesEnum.NEW_MEAL);
  };

  const getMealsFromAsync = async () => {
    const meals = await getMeals();
    let positive = 0;
    let negative = 0;
    let cont = 0;

    meals.map((section) => {
      section.data.map((item) => {
        item.isHealthy ? positive++ : negative++;
      });
    });

    meals.map((section) => {
      section.data.map((item) => {
        item.isHealthy ? positive++ : negative++;
      });
    });

    const sortedMeals = meals.sort((a, b) => {
      const dateA = new Date(formatDate(a.title));
      const dateB = new Date(formatDate(b.title));

      return compareDesc(dateA, dateB);
    });

    sortedMeals.map((section) => {
      section.data.map((item) => {
        if (item.isHealthy) cont++;
        else cont = 0;
      });
    });

    setStatistics((prev) => {
      return {
        ...prev,
        percentage: (positive / (positive + negative)) * 100,
        sequence: cont,
        healthyMealsQuantity: positive,
        unhealthyMealsQuantity: negative,
        mealsQuantity: positive + negative,
      };
    });

    setMeals(sortedMeals);
  };

  const goToMeal = async (meal: Meal) => {
    navigate(StackRoutesEnum.MEAL, {
      meal,
    });
  };

  useFocusEffect(
    useCallback(() => {
      getMealsFromAsync();
    }, [])
  );
  return (
    <StartLayout
      goToMeal={goToMeal}
      meals={meals}
      onGoToStatics={goToStatistics}
      onGoToNewMeal={goToNewMeal}
      percentage={statistics.percentage}
    />
  );
};
