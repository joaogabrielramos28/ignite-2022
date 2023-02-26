import { Meal } from "../storage/DTOs/meal";

export type FeedBackParamType = {
  isHealthy: boolean;
};

export type MealParamType = {
  meal: Meal;
};
export type MealParamType = {
  meal: Meal;
};

export type StatisticsParamType = {
  statistics: {
    percentage: number;
    sequence: number;
    mealsQuantity: number;
    healthyMealsQuantity: number;
    unhealthyMealsQuantity: number;
  };
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Start: undefined;
      Statistics: StatisticsParamType;
      NewMeal: undefined;
      Feedback: FeedBackParamType;
      Meal: MealParamType;
      EditMeal: MealParamType;
    }
  }
}
