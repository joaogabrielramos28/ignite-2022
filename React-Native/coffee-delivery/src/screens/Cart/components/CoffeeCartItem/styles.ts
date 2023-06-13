import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px 32px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors["gray-700"]};
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
`;

export const CoffeeInfo = styled.View`
  flex-grow: 1;
`;

export const CoffeeRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CoffeeName = styled.Text`
  color: ${({ theme }) => theme.colors["gray-100"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.md};
`;
export const CoffeePrice = styled.Text`
  color: ${({ theme }) => theme.colors["gray-100"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-size: ${({ theme }) => theme.font_size.md};
  font-weight: bold;
`;

export const CoffeeSize = styled.Text`
  color: ${({ theme }) => theme.colors["gray-400"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
  margin-top: 4px;
`;

export const CoffeeQuantityContainer = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors["gray-700"]};
  margin-top: 8px;
  padding: 4px;
  border-radius: 6px;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.colors["gray-100"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

export const RemoveButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors["gray-700"]};
`;
