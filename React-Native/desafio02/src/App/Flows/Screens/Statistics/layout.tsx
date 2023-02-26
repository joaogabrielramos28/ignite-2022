import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Card } from "./components/Card";
import {
  BackContainer,
  CardGroup,
  Container,
  Content,
  Header,
  HeaderContent,
  Information,
  Percentage,
  Title,
} from "./styles";

type StatisticsLayoutProps = {
  onBack: () => void;
  percentage: number;
  sequence: number;
  mealsQuantity: number;
  healthyMealsQuantity: number;
  unhealthyMealsQuantity: number;
};

export function StatisticsLayout({
  onBack,
  healthyMealsQuantity,
  mealsQuantity,
  percentage,
  sequence,
  unhealthyMealsQuantity,
}: StatisticsLayoutProps) {
  const { colors } = useTheme();
  return (
    <Container>
      <Header isHealthy>
        <BackContainer>
          <TouchableOpacity onPress={onBack}>
            <ArrowLeft size={24} weight="bold" color={colors["green-dark"]} />
          </TouchableOpacity>
        </BackContainer>
        <HeaderContent>
          <Percentage>{String(percentage.toPrecision(4))}%</Percentage>
          <Information>das refeições dentro da dieta</Information>
        </HeaderContent>
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <Card
          title={String(sequence)}
          subtitle="melhor sequência de pratos dentro da dieta"
          background="default"
        />
        <Card
          title={String(mealsQuantity)}
          subtitle="refeições registradas"
          background="default"
        />

        <CardGroup>
          <Card
            title={String(healthyMealsQuantity)}
            subtitle="refeições dentro da dieta"
            background="success"
          />
          <Card
            hasMarginLeft
            title={String(unhealthyMealsQuantity)}
            subtitle="refeições fora da dieta"
            background="error"
          />
        </CardGroup>
      </Content>
    </Container>
  );
}
