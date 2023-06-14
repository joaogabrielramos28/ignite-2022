import styled from "styled-components/native";

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.colors["gray-800"]};
  padding: 16px;
  width: 200px;
  align-items: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const CoffeeImage = styled.Image`
  width: 120px;
  height: 120px;
  transform: translateY(-40px);
`;

export const TagContainer = styled.View`
  padding: 4px 8px;
  width: 100px;
  background-color: ${({ theme }) => theme.colors["purple-light"]};
  border-radius: 100%;
`;

export const TagText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors["purple-dark"]};
  font-family: ${({ theme }) => theme.font_family.robotoBold};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font_size.tag};
  text-transform: uppercase;
`;

export const InfoCard = styled.View`
  margin-top: 14px;
  gap: 4px;
  align-items: center;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors["gray-200"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font_size.lg};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors["gray-400"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-weight: bold;
  text-align: center;
  font-size: ${({ theme }) => theme.font_size.xs};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 18px;
`;

export const Symbol = styled.Text`
  color: ${({ theme }) => theme.colors["yellow_dark"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors["yellow_dark"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font_size.xl};
`;
