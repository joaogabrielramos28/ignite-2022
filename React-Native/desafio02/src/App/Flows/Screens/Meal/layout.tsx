import {
  ArrowLeft,
  Pencil,
  PencilSimpleLine,
  Trash,
} from "phosphor-react-native";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { TypeMeal } from "../../components/TypeMeal";
import { Meal } from "../../storage/DTOs/meal";
import {
  Badge,
  BadgeStatus,
  BadgeText,
  Container,
  Content,
  Form,
  FormField,
  FormFieldGroup,
  Header,
  SubTitle,
  Text,
  TextSecondary,
  Title,
} from "./styles";

type MealLayoutProps = {
  onGoBack: () => void;
  item: Meal;
  onGoToEditMeal: () => void;
  onDeleteMeal: (id: string, date: string) => Promise<void>;
};

export function MealLayout({
  onGoBack,
  onGoToEditMeal,
  item,
  onDeleteMeal,
}: MealLayoutProps) {
  const { colors } = useTheme();

  const badgeText = item.isHealthy ? "dentro da dieta" : "fora da dieta";

  return (
    <Container isHealthy={item.isHealthy}>
      <Header>
        <TouchableOpacity onPress={onGoBack}>
          <ArrowLeft size={24} weight="bold" color={colors["gray-2"]} />
        </TouchableOpacity>

        <Title>Refeição</Title>
      </Header>

      <Content
        contentContainerStyle={{
          paddingBottom: 48,
          flexGrow: 1,
        }}
      >
        <Form>
          <View>
            <Text>{item.name}</Text>
            <SubTitle>{item.description}</SubTitle>

            <FormField>
              <TextSecondary>Data e hora</TextSecondary>
              <SubTitle>
                {item.date} às {item.time}
              </SubTitle>
            </FormField>

            <Badge>
              <BadgeStatus isHealthy={item.isHealthy} />
              <BadgeText>{badgeText}</BadgeText>
            </Badge>
          </View>
          <View>
            <Button
              onPress={onGoToEditMeal}
              title="Editar refeição"
              icon={
                <PencilSimpleLine
                  size={22}
                  color={colors.white}
                  weight={"bold"}
                />
              }
            />
            <Button
              secondary
              onPress={() => onDeleteMeal(item.id, item.date)}
              title="Excluir refeição"
              icon={<Trash size={22} color={colors["gray-1"]} />}
            />
          </View>
        </Form>
      </Content>
    </Container>
  );
}
