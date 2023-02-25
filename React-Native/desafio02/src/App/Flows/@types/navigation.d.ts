export type FeedBackParamType = {
  isHealthy: boolean;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Start: undefined;
      Statistics: undefined;
      NewMeal: undefined;
      Feedback: FeedBackParamType;
      Meal: undefined;
    }
  }
}
