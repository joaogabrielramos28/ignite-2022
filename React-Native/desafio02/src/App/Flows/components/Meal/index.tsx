import React from "react";
import { Container, Divider, Hour, InfoContainer, Title, Type } from "./styles";

type MealProps = {
  isHealthy: boolean;
  hour: string;
  title: string;
};

export function Meal({ title, hour, isHealthy }: MealProps) {
  return (
    <Container>
      <InfoContainer>
        <Hour>{hour}</Hour>
        <Divider />
        <Title>{title}</Title>
      </InfoContainer>
      <Type isHealthy={isHealthy} />
    </Container>
  );
}
