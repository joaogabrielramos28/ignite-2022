import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors["gray-2"]};
`;

export const CustomImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
