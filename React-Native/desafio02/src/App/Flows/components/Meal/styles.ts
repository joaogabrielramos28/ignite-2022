import styled, { css } from "styled-components/native";

type TypeProps = {
  isHealthy: boolean;
};

export const Container = styled.View`
  width: 100%;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors["gray-5"]};

  padding: 14px 16px 14px 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors["gray-1"]};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors["gray-4"]};
  margin: 0 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors["gray-2"]};
  `}
`;

export const Type = styled.View<TypeProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.colors["green-mid"] : theme.colors["red-mid"]};
`;

export const HeaderSection = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors["gray-1"]};
  `}

  margin-top:32px;
`;
