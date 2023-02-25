import styled, { css } from "styled-components/native";

type titleProps = {
  isHealthy: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<titleProps>`
  ${({ theme, isHealthy }) => css`
    color: ${isHealthy ? theme.colors["green-dark"] : theme.colors["red-dark"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["2xl"]};
  `}
`;

export const SubTitle = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["regular"]};
    font-size: ${theme.fontSize["lg"]};
  `}
`;

export const Strong = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["lg"]};
  `}
`;

export const Image = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.View`
  max-width: 200px;
  width: 100%;
`;
