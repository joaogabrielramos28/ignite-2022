import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const SearchSection = styled.View`
  height: 342px;
  background-color: ${({ theme }) => theme.colors["gray-100"]};
  padding: 28px 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-size: ${({ theme }) => theme.font_size.lg};
  font-weight: bold;
  margin-top: 36px;
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["gray-200"]};
  border-radius: 4px;
  margin-top: 16px;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
`;

export const SearchInput = styled.TextInput`
  color: ${({ theme }) => theme.colors["gray-400"]};
  padding: 12px 0;
`;

export const CoffeeSection = styled.View`
  width: 100%;
  align-items: flex-end;
  transform: translateX(25px);
`;

export const CoffeeListSection = styled.View`
  padding: 0 32px;
  transform: translateY(-32px);
`;

export const OurCoffeesSection = styled.View`
  margin-top: 36px;
  padding: 0 32px;
`;

export const OurCoffeesTitle = styled.Text`
  color: ${({ theme }) => theme.colors["gray-300"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-size: ${({ theme }) => theme.font_size.md};
`;

export const CategorySection = styled.View`
  flex-direction: row;
  gap: 16px;
  margin-top: 12px;
`;

export const CategoryBadge = styled.View`
  border-radius: 100px;
  padding: 6px 12px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors["purple"]};
`;

export const CategoryBadgeText = styled.Text`
  color: ${({ theme }) => theme.colors["purple-dark"]};
  font-family: ${({ theme }) => theme.font_family.robotoBold};
  font-size: ${({ theme }) => theme.font_size.tag};
  text-transform: uppercase;
`;
