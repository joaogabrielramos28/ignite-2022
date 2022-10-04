import styled from "styled-components";

export const StyledContainer = styled.section`
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.color["base-card"]};

  margin-bottom: 0.75rem;
  border-radius: 6px;
`;
