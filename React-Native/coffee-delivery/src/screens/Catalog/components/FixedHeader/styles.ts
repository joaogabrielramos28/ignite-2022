import styled from "styled-components/native";

export const Separator = styled.View`
  margin: 8px 0;
`;

export const Line = styled.View`
  width: 100%;
  height: 0.2px;
  background-color: ${({ theme }) => theme.colors["gray-400"]};
  margin-top: 16px;
`;
