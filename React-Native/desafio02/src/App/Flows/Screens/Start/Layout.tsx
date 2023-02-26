import { Plus } from "phosphor-react-native";
import React from "react";
import { SectionList } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Feedback } from "../../components/Feedback";
import { Header } from "../../components/Header";
import { Meal } from "../../components/Meal";
import { HeaderSection } from "../../components/Meal/styles";
import { Meal as MealType, MealMapper } from "../../storage/DTOs/meal";

import { Container, ContentWrapper, Title } from "./styles";

type StartLayoutProps = {
  onGoToStatics: () => void;
  onGoToNewMeal: () => void;
  meals: MealMapper[];
  goToMeal: (meal: MealType) => Promise<void>;
  percentage?: number;
};

export const StartLayout = ({
  onGoToStatics,
  onGoToNewMeal,
  meals,
  goToMeal,
  percentage,
}: StartLayoutProps) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header />
      <Feedback
        percentage={String(percentage?.toPrecision(4))}
        onPress={onGoToStatics}
        isHealthy={true}
      />
      <ContentWrapper>
        <Title>Refeições</Title>
      </ContentWrapper>

      <Button
        onPress={onGoToNewMeal}
        title="Nova refeição"
        icon={<Plus color={colors.white} size={18} weight="bold" />}
      />

      <SectionList
        stickySectionHeadersEnabled={false}
        style={{
          marginTop: 32,
        }}
        sections={meals}
        renderSectionHeader={({ section: { title } }) => (
          <HeaderSection>{title}</HeaderSection>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Meal
            onPress={() => goToMeal(item)}
            title={item.name}
            hour={item.time}
            isHealthy={item.isHealthy}
          />
        )}
      />
    </Container>
  );
};
