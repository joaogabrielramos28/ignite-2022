import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useState } from "react";
import { MealParamType } from "../../@types/navigation";
import { updateMeals } from "../../storage/Meals/updateMeals";
import { EditMealLayout } from "./layout";

export type FormValue = {
  name: string;
  description: string;
  date: string;
  time: string;
  isHealthy: boolean;
};

export function EditMeal() {
  const { goBack, dispatch } = useNavigation();

  const { params } = useRoute();

  const { meal } = params as MealParamType;

  const [formValue, setFormValue] = useState<FormValue>({
    date: meal.date,
    time: meal.time,
    name: meal.name,
    description: meal.description,
    isHealthy: meal.isHealthy,
  });

  const onChangeDate = (masked: string, unmasked: string) => {
    setFormValue({ ...formValue, date: masked });
  };

  const onChangeTime = (masked: string, unmasked: string) => {
    setFormValue({ ...formValue, time: masked });
  };

  const onChangeName = (value: string) => {
    setFormValue({ ...formValue, name: value });
  };

  const onChangeDescription = (value: string) => {
    setFormValue({ ...formValue, description: value });
  };

  const onChangeIsHealthy = (value: boolean) => {
    setFormValue({ ...formValue, isHealthy: value });
  };

  const onChange = {
    onChangeDate,
    onChangeTime,
    onChangeName,
    onChangeDescription,
    onChangeIsHealthy,
  };

  const onEditMeal = async () => {
    const payload = {
      ...formValue,
      id: meal.id,
    };

    await updateMeals(payload);
    dispatch(StackActions.popToTop());
  };

  return (
    <EditMealLayout
      formValue={formValue}
      onChange={onChange}
      onGoBack={goBack}
      onEditMeal={onEditMeal}
    ></EditMealLayout>
  );
}
