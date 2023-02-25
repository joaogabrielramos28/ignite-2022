import React from "react";
import { Option, Status, Title } from "./styles";

type TypeMealProps = {
  status?: "success" | "error";
  title: string;
};

export function TypeMeal({ title, status }: TypeMealProps) {
  return (
    <Option selected={false} status={status}>
      <Status status={status} />
      <Title>{title}</Title>
    </Option>
  );
}
