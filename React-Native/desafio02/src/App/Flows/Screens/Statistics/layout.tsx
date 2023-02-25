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
};

export function StatisticsLayout({ onBack }: StatisticsLayoutProps) {
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
          <Percentage>90,86%</Percentage>
          <Information>das refeições dentro da dieta</Information>
        </HeaderContent>
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <Card
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          background="default"
        />
        <Card
          title="109"
          subtitle="refeições registradas"
          background="default"
        />

        <CardGroup>
          <Card
            title="99"
            subtitle="refeições dentro da dieta"
            background="success"
          />
          <Card
            hasMarginLeft
            title="10"
            subtitle="refeições fora da dieta"
            background="error"
          />
        </CardGroup>
      </Content>
    </Container>
  );
}
