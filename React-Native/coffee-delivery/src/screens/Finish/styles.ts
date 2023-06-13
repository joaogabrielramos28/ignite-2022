import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 64px;
`;

export const Title = styled.Text`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors["yellow_dark"]};
  font-family: ${({ theme }) => theme.font_family.balloBold};
  font-size: ${({ theme }) => theme.font_size.xl};
  font-weight: bold;
`;

export const Description = styled.Text`
  margin-top: 8px;

  color: ${({ theme }) => theme.colors["gray-200"]};
  font-family: ${({ theme }) => theme.font_family.robotoRegular};
  font-size: ${({ theme }) => theme.font_size.sm};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 64px;
  background-color: ${({ theme }) => theme.colors["purple-dark"]};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors["white"]};
  font-family: ${({ theme }) => theme.font_family.robotoBold};
  font-size: ${({ theme }) => theme.font_size.sm};
  font-weight: bold;
  text-transform: uppercase;
`;
