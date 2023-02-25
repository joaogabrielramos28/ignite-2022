import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Masks } from "react-native-mask-input";
import { useTheme } from "styled-components/native";
import { FormValue } from ".";
import { Button } from "../../components/Button";
import { InputMask } from "../../components/InputMask";
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

const HOUR_MASK = [/[0-2]/, /[0-9]/, ":", /[0-5]/, /[0-9]/];

type NewMealLayoutProps = {
  onGoBack: () => void;
  onGoToFeedback: () => void;
  onChange: {
    onChangeDate: (masked: string, unmasked: string) => void;
    onChangeTime: (masked: string, unmasked: string) => void;
    onChangeName: (value: string) => void;
    onChangeDescription: (value: string) => void;
    onChangeIsHealthy: (value: boolean) => void;
  };
  formValue: FormValue;
  onCreateMeal: () => Promise<void>;
};

export function NewMealLayout({
  onGoBack,
  onGoToFeedback,
  onChange,
  formValue,
  onCreateMeal,
}: NewMealLayoutProps) {
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
            <Input
              onChangeText={onChange.onChangeName}
              value={formValue.name}
            />
          </FormField>
          <FormField>
            <Label>Descrição</Label>
            <TextArea
              onChangeText={onChange.onChangeDescription}
              value={formValue.description}
              multiline={true}
              textAlignVertical={"top"}
            />
          </FormField>
          <FormFieldGroup>
            <FormField>
              <Label>Data</Label>
              <InputMask
                onChangeText={onChange.onChangeDate}
                value={formValue.date}
                mask={Masks.DATE_DDMMYYYY}
              />
            </FormField>
            <FormField hasMarginLeft>
              <Label>Hora</Label>
              <InputMask
                onChangeText={onChange.onChangeTime}
                value={formValue.time}
                mask={HOUR_MASK}
              />
            </FormField>
          </FormFieldGroup>
          <FormField>
            <Label>Está dentro da dieta?</Label>
            <FormFieldGroup>
              <FormField>
                <TypeMeal
                  onPress={() => onChange.onChangeIsHealthy(true)}
                  title="Sim"
                  status="success"
                  isSelected={formValue.isHealthy === true}
                />
              </FormField>
              <FormField hasMarginLeft>
                <TypeMeal
                  onPress={() => onChange.onChangeIsHealthy(false)}
                  title="Não"
                  status="error"
                  isSelected={formValue.isHealthy === false}
                />
              </FormField>
            </FormFieldGroup>
          </FormField>
        </Form>

        <Button onPress={onCreateMeal} title="Cadastrar refeição" />
      </Content>
    </Container>
  );
}
