import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors["gray-900"]};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  color: theme.colors.purple,
})``;
