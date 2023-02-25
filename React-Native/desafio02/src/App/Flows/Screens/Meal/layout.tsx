import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { TypeMeal } from "../../components/TypeMeal";
import {
  Container,
  Content,
  Form,
  FormField,
  FormFieldGroup,
  Header,
  Input,
  Label,
  TextArea,
  Title,
} from "./styles";

type MealLayoutProps = {
  onGoBack: () => void;
  onGoToFeedback: () => void;
};

export function MealLayout({ onGoBack, onGoToFeedback }: MealLayoutProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={onGoBack}>
          <ArrowLeft size={24} weight="bold" color={colors["gray-2"]} />
        </TouchableOpacity>

        <Title>Nova refeição</Title>
      </Header>

      <Content
        contentContainerStyle={{
          paddingBottom: 48,
          flexGrow: 1,
        }}
      >
        <Form>
          <FormField>
            <Label>Nome</Label>
            <Input />
          </FormField>
          <FormField>
            <Label>Descrição</Label>
            <TextArea multiline={true} textAlignVertical={"top"} />
          </FormField>
          <FormFieldGroup>
            <FormField>
              <Label>Data</Label>
              <Input />
            </FormField>
            <FormField hasMarginLeft>
              <Label>Hora</Label>
              <Input />
            </FormField>
          </FormFieldGroup>
          <FormField>
            <Label>Está dentro da dieta?</Label>
          </FormField>
        </Form>

        <Button onPress={onGoToFeedback} title="Cadastrar refeição" />
      </Content>
    </Container>
  );
}
