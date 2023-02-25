import styled, { css } from "styled-components/native";

type FormFieldProps = {
  hasMarginLeft?: boolean;
};

type ContainerProps = {
  isHealthy: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.colors["green-light"] : theme.colors["red-light"]};
`;

export const Header = styled.View`
  width: 100%;
  padding: 40px 24px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

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

  flex-direction: column;

  padding: 32px 24px;

  background-color: ${({ theme }) => theme.colors["white"]};
`;

export const FormField = styled.View<FormFieldProps>`
  width: 100%;
  flex-shrink: 1;
  margin-top: 32px;

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

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["xl"]};
  `}
`;

export const TextSecondary = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;

export const SubTitle = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.colors["gray-2"]};
    font-family: ${theme.fonts["regular"]};
    font-size: ${theme.fontSize["lg"]};
  `}
`;

export const Badge = styled.View`
  margin-top: 24px;
  padding: 8px 16px;
  width: 144px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.colors["gray-7"]};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.Text`
  margin-left: 8px;
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["regular"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;

export const BadgeStatus = styled.View<ContainerProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.colors["green-dark"] : theme.colors["red-dark"]};
`;
export const CreateMeal = styled.Button;
