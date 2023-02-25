import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Header, Information, Percentage } from "./styles";
import { ArrowUpRight } from "phosphor-react-native";

type FeedbackProps = {
  onPress: () => void;
  isHealthy?: boolean;
};

export const Feedback = ({ onPress, isHealthy }: FeedbackProps) => {
  const color = isHealthy ? "green-dark" : "red-dark";
  const { colors } = useTheme();
  return (
    <Container onPress={onPress} isHealthy={isHealthy}>
      <Header>
        <ArrowUpRight size={24} weight="bold" color={colors[color]} />
      </Header>

      <Percentage>90,86%</Percentage>
      <Information>das refeições dentro da dieta</Information>
    </Container>
  );
};
