import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { FeedbackLayout } from "./layout";

export function Feedback() {
  const { dispatch } = useNavigation();
  const goToStart = () => {
    dispatch(StackActions.popToTop());
  };

  return (
    <FeedbackLayout goToStart={goToStart} isHealthy={false}></FeedbackLayout>
  );
}
