export type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isHealthy: boolean;
};

export type MealMapper = {
  title: string;
  data: Meal[];
};
