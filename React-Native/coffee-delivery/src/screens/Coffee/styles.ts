import { Dimensions } from "react-native";
import styled from "styled-components/native";

const CENTER_WIDTH = Dimensions.get("screen").width / 2 - 50;
export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  width: 100%;
  height: 550px;
  background-color: ${({ theme }) => theme.colors["gray-100"]};
  z-index: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 32px;
`;

export const ProductSection = styled.View`
  margin-top: 40px;
`;

export const TagContainer = styled.View`
  padding: 6px 12px;
  width: 70px;
  background-color: ${({ theme }) => theme.colors["gray-200"]};
  border-radius: 100%;
`;

export const TagText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors["white"]};
  font-family: ${({ theme }) => theme.font_family.robotoBold};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font_size.tag};
  text-transform: uppercase;
`;

export const ProductRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.Text`
  color: ${({ theme }) => theme.colors["white"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font_size.xl};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Symbol = styled.Text`
  color: ${({ theme }) => theme.colors["yellow"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors["yellow"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font_size.xxl};
`;

export const Description = styled.Text`
  margin-top: 18px;

  color: ${({ theme }) => theme.colors["gray-500"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.md};
`;

export const ImageContainer = styled.View`
  position: relative;
`;

export const Image = styled.Image`
  transform: translateY(60px);
`;

export const SmokeImage = styled.Image`
  position: absolute;
  top: -4px;
  left: ${CENTER_WIDTH}px;
`;

export const Footer = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors["white"]};
  padding: 32px;
  margin-top: 18px;
`;

export const FooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors["gray-400"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
`;

export const FooterRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;
`;

export const FooterSize = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["gray-700"]};
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 12px 0;
`;

export const FooterSizeText = styled.Text`
  color: ${({ theme }) => theme.colors["gray-300"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
`;

export const FooterAction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["gray-700"]};
  padding: 16px;
  margin-top: 16px;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
  flex-grow: 1;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.colors["gray-100"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.md};
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors["purple-dark"]};
  padding: 12px 0;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  max-width: 180px;
  flex-grow: 1;
`;

export const AddButtonText = styled.Text`
  color: ${({ theme }) => theme.colors["white"]};
  font-family: ${({ theme }) => theme.font_family.robotoBold};
  font-size: ${({ theme }) => theme.font_size.sm};
  text-transform: uppercase;
`;
