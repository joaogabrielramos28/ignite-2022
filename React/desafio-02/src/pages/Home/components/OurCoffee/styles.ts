import styled, { css } from "styled-components";

export const OurCoffeContainer = styled.div``;

export const Title = styled.h2`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  ${({ theme }) => css`
    font-size: ${theme.font.heading.lg};

    color: ${theme.color["base-subtitle"]};
  `}
`;

export const CoffeeContainer = styled.main`
  margin-top: 3rem;

  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
