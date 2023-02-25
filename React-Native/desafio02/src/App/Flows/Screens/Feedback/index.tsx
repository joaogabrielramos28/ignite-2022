import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { FeedBackParamType } from "../../@types/navigation";
import { FeedbackLayout } from "./layout";

export function Feedback() {
  const { dispatch } = useNavigation();
  const goToStart = () => {
    dispatch(StackActions.popToTop());
  };

  const { params } = useRoute();

  const { isHealthy } = params as FeedBackParamType;

  return (
    <FeedbackLayout
      goToStart={goToStart}
      isHealthy={isHealthy}
    ></FeedbackLayout>
  );
}
