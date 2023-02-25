import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["green-light"]};
  border-radius: 8px;

  margin-top: 36px;
  padding: 8px 8px 20px 8px;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
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
