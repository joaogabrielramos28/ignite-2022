import styled, { css } from "styled-components/native";

type FormFieldProps = {
  hasMarginLeft?: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["gray-5"]};
`;

export const Header = styled.View`
  width: 100%;
  padding: 40px 24px;

  background-color: ${({ theme }) => theme.colors["gray-5"]};

  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.View``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["xl"]};
  `}
`;

export const Content = styled.ScrollView`
  flex: 1;
  border-radius: 20px;

  padding: 32px 24px;

  background-color: ${({ theme }) => theme.colors["white"]};
`;

export const FormField = styled.View<FormFieldProps>`
  width: 100%;
  flex-shrink: 1;
  margin-bottom: 24px;

  ${({ hasMarginLeft }) =>
    hasMarginLeft &&
    css`
      margin-left: 24px;
    `}
`;

export const FormFieldGroup = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-2"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;

export const Input = styled.TextInput`
  width: 100%;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors["gray-5"]};
  color: ${({ theme }) => theme.colors["gray-1"]};

  padding: 14px;
  margin-top: 4px;
`;

export const TextArea = styled(Input)`
  height: 120px;
`;

export const CreateMeal = styled.Button;
