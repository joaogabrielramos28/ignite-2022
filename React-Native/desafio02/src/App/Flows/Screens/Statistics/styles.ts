import styled, { css } from "styled-components/native";

type HeaderProps = {
  isHealthy: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<HeaderProps>`
  width: 100%;

  padding: 40px 24px;

  background-color: ${({ isHealthy, theme }) =>
    isHealthy ? theme.colors["green-light"] : theme.colors["red-light"]};
`;

export const BackContainer = styled.View`
  width: 100%;
`;

export const HeaderContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["3xl"]};
  `}
`;

export const Information = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-2"]};
    font-family: ${theme.fonts["regular"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;

export const Content = styled.View`
  flex: 1;
  border-radius: 40px;

  padding: 32px 24px;

  background-color: ${({ theme }) => theme.colors["white"]};

  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;

export const CardGroup = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;
