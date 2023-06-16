import styled from "styled-components/native";

type LocationText = {
  isLight?: boolean;
};

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

export const LocationText = styled.Text<LocationText>`
  color: ${({ theme, isLight }) =>
    isLight ? theme.colors["gray-900"] : theme.colors["gray-100"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
`;

export const BadgeCart = styled.View`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["purple"]};
  align-items: center;
  justify-content: center;

  top: -16px;
  left: 16px;
`;

export const BadgeCartCount = styled.Text`
  color: ${({ theme }) => theme.colors["white"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.xs};
  text-align: center;
`;
