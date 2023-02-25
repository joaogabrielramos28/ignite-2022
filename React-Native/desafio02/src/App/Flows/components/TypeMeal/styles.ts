import styled, { css } from "styled-components/native";

type StatusProps = {
  status: "success" | "error";
};

type OptionProps = {
  status: "success" | "error";
  selected: boolean;
};

export const Option = styled.TouchableOpacity<OptionProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["gray-7"]};

  padding: 16px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;

  ${({ theme, selected, status }) =>
    selected &&
    css`
      background-color: ${status === "success"
        ? theme.colors["green-light"]
        : theme.colors["red-light"]};

      border-width: 1px;
      border-color: ${status === "success"
        ? theme.colors["green-dark"]
        : theme.colors["red-dark"]};
    `};
`;

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;

  background-color: ${({ theme, status }) =>
    status === "success"
      ? theme.colors["green-dark"]
      : theme.colors["red-dark"]};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;
