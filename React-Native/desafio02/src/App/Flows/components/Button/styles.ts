import styled, { css } from "styled-components/native";

type ContainerProps = {
  secondary: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  padding: 16px;
  margin-top: 8px;

  background-color: ${({ theme, secondary }) =>
    !secondary ? theme.colors["gray-2"] : theme.colors.white};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-width: 1px;
  border-color: ${({ theme, secondary }) =>
    !secondary ? null : theme.colors["gray-2"]};
`;

export const Text = styled.Text<ContainerProps>`
  margin-left: 12px;
  ${({ theme, secondary }) => css`
    color: ${!secondary ? theme.colors["white"] : theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;
