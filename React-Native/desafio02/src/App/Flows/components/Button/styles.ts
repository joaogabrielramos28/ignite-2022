import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  margin-top: 8px;

  background-color: ${({ theme }) => theme.colors["gray-2"]};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  margin-left: 12px;
  ${({ theme }) => css`
    color: ${theme.colors["white"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;
