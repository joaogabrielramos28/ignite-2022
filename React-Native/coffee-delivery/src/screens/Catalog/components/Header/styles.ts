import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 28px;
  align-items: center;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: ${({ theme }) => theme.colors["gray-900"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
`;
