import { Meal } from "../storage/DTOs/meal";

export type FeedBackParamType = {
  isHealthy: boolean;
};

export type MealParamType = {
  meal: Meal;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Start: undefined;
      Statistics: undefined;
      NewMeal: undefined;
      Feedback: FeedBackParamType;
      Meal: MealParamType;
    }
  }
}
