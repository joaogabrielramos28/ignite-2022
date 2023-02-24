import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["gray-6"]};

  padding: 0 24px;
  padding-top: ${getStatusBarHeight() + 64}px;
`;

export const ContentWrapper = styled.View`
  margin-top: 40px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["gray-`"]};
    font-family: ${theme.fonts["regular"]};
    font-size: ${theme.fontSize["lg"]};
  `}
`;

export const NewMeal = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  margin-top: 8px;

  background-color: ${({ theme }) => theme.colors["gray-2"]};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const NewMealText = styled.Text`
  margin-left: 12px;
  ${({ theme }) => css`
    color: ${theme.colors["white"]};
    font-family: ${theme.fonts["bold"]};
    font-size: ${theme.fontSize["md"]};
  `}
`;
