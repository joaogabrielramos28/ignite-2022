import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 90rem;

  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  height: 6.5rem;
  width: 100%;

  background-color: ${({ theme }) => theme.color.background};
  nav {
    display: flex;
    gap: 0.75rem;
  }
`;

export const BadgeText = styled.span`
  font-size: ${({ theme }) => theme.font.text.lg};
  color: ${({ theme }) => theme.color["purple-dark"]};
`;
