import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { Meal } from "../../storage/DTOs/meal";
import { setMeals } from "../../storage/Meals/setMeals";
import { NewMealLayout } from "./layout";

export type FormValue = {
  name: string;
  description: string;
  date: string;
  time: string;
  isHealthy: boolean;
};

export function NewMeal() {
  const { goBack, navigate } = useNavigation();
  const goToFeedback = () => {
    navigate(StackRoutesEnum.FEEDBACK, {
      isHealthy: formValue.isHealthy,
    });
  };
  const [formValue, setFormValue] = useState<FormValue>({} as FormValue);

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

  const onCreateMeal = async () => {
    const payload: Meal = {
      id: String(new Date().getTime()),
      ...formValue,
    };
    try {
      await setMeals(payload);
      goToFeedback();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NewMealLayout
      onCreateMeal={onCreateMeal}
      formValue={formValue}
      onChange={onChange}
      onGoBack={goBack}
      onGoToFeedback={goToFeedback}
    ></NewMealLayout>
  );
}
