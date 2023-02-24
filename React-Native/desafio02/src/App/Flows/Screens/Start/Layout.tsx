import { Plus } from "phosphor-react-native";
import React from "react";
import { useTheme } from "styled-components/native";
import { Feedback } from "../../components/Feedback";
import { Header } from "../../components/Header";
import {
  Container,
  ContentWrapper,
  NewMeal,
  NewMealText,
  Title,
} from "./styles";

export const StartLayout = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header />
      <Feedback />
      <ContentWrapper>
        <Title>Refeições</Title>
      </ContentWrapper>

      <NewMeal>
        <Plus color={colors.white} size={18} weight="bold" />
        <NewMealText>Nova refeição</NewMealText>
      </NewMeal>
    </Container>
  );
};
