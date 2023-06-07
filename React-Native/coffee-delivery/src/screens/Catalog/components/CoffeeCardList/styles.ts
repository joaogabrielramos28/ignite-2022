import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors["gray-800"]};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  padding: 16px;
  flex-direction: row;
  align-items: flex-end;
  gap: 16px;
  flex-grow: 1;
`;

export const Image = styled.Image`
  width: 96px;
  height: 96px;
  transform: translateY(-50px);
`;

export const InfoCoffee = styled.View`
  flex-direction: column;
  flex-shrink: 1;
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
  text-align: left;
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
