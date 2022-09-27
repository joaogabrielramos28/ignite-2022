import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
  padding: 0 10rem;
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
`;
