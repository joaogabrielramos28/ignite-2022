import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 76rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;

  background: ${({ theme }) => theme.color.background};
`;
