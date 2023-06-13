import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["gray-900"]};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 32px;
  align-items: center;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors["gray-700"]};
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors["gray-200"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-size: ${({ theme }) => theme.font_size.md};
  text-align: center;
  flex-grow: 1;
`;

export const Footer = styled.View`
  width: 100%;

  padding: 32px;
  background-color: ${({ theme }) => theme.colors["white"]};
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: ${({ theme }) => theme.colors["gray-200"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.md};
`;

export const TotalPrice = styled.Text`
  color: ${({ theme }) => theme.colors["gray-200"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-size: ${({ theme }) => theme.font_size.lg};
  font-weight: bold;
`;

export const ConfirmButton = styled.TouchableOpacity`
  border-radius: 6px;
  margin-top: 16px;

  padding: 16px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors["yellow_dark"]};
`;

export const ConfirmButtonText = styled.Text`
  color: ${({ theme }) => theme.colors["white"]};
  font-family: ${({ theme }) => theme.font_family.robotoBold};
  font-size: ${({ theme }) => theme.font_size.sm};
  font-weight: bold;

  text-transform: uppercase;
`;
