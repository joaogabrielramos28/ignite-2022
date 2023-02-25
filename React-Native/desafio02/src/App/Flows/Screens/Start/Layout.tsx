import { Plus } from "phosphor-react-native";
import React from "react";
import { SectionList } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Feedback } from "../../components/Feedback";
import { Header } from "../../components/Header";
import { Meal } from "../../components/Meal";
import { HeaderSection } from "../../components/Meal/styles";
import { MealMapper } from "../../storage/DTOs/meal";

import { Container, ContentWrapper, Title } from "./styles";

type StartLayoutProps = {
  onGoToStatics: () => void;
  onGoToNewMeal: () => void;
  meals: MealMapper[];
};

export const StartLayout = ({
  onGoToStatics,
  onGoToNewMeal,
  meals,
}: StartLayoutProps) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header />
      <Feedback onPress={onGoToStatics} isHealthy={true} />
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
          <Meal title={item.name} hour={item.time} isHealthy={item.isHealthy} />
        )}
      />
    </Container>
  );
};
