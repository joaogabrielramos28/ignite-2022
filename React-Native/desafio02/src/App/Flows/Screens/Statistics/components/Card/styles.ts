import styled, { css } from "styled-components/native";

type ContainerProps = {
  background: "error" | "success" | "default";
  hasMarginLeft: boolean;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({ background, theme }) => {
    switch (background) {
      case "error":
        return theme.colors["red-light"];
      case "success":
        return theme.colors["green-light"];
      default:
        return theme.colors["gray-7"];
    }
  }};
  flex-shrink: 1;
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  margin-top: 12px;

  ${({ hasMarginLeft }) =>
    hasMarginLeft &&
    css`
      margin-left: 12px;
    `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["2xl"]};
  `}
`;
export const SubTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.colors["gray-2"]};
    font-family: ${theme.fonts["regular"]};
    font-size: ${theme.fontSize["md"]};
  `}

  margin-top: 8px;
`;
