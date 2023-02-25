import React from "react";
import { Container, Divider, Hour, InfoContainer, Title, Type } from "./styles";

type MealProps = {
  isHealthy: boolean;
  hour: string;
  title: string;
  onPress: () => void;
};

export function Meal({ title, hour, isHealthy, onPress }: MealProps) {
  return (
    <Container onPress={onPress}>
      <InfoContainer>
        <Hour>{hour}</Hour>
        <Divider />
        <Title>{title}</Title>
      </InfoContainer>
      <Type isHealthy={isHealthy} />
    </Container>
  );
}
