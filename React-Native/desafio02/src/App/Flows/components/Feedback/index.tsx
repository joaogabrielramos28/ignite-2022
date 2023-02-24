import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Header, Information, Percentage } from "./styles";
import { ArrowUpRight } from "phosphor-react-native";

export const Feedback = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <ArrowUpRight size={24} weight="bold" color={colors["green-dark"]} />
      </Header>

      <Percentage>90,86%</Percentage>
      <Information>das refeições dentro da dieta</Information>
    </Container>
  );
};
