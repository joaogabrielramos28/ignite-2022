import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.header`
  width: 90rem;

  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`;

export const BadgeText = styled.span`
  font-size: ${({ theme }) => theme.text.lg};
  color: ${({ theme }) => theme["purple-dark"]};
`;
