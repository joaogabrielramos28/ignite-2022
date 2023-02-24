import { Plus } from "phosphor-react-native";
import React from "react";
import { SectionList, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Feedback } from "../../components/Feedback";
import { Header } from "../../components/Header";
import { Meal } from "../../components/Meal";
import { HeaderSection } from "../../components/Meal/styles";
import meals from "../../constants/meals";

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

      <SectionList
        style={{
          marginTop: 32,
        }}
        sections={meals}
        renderSectionHeader={({ section: { title } }) => (
          <HeaderSection>{title}</HeaderSection>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, section: { title } }) => (
          <Meal
            title={item.title}
            hour={item.hour}
            isHealthy={item.isHealthy}
          />
        )}
      />
    </Container>
  );
};
