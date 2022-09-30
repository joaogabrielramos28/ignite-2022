import styled, { css } from "styled-components";

export const FormContainer = styled.main`
  margin-top: 1rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FormTitle = styled.h2`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;

  ${({ theme }) => css`
    color: ${theme.color["base-subtitle"]};
    font-size: ${theme.font.heading.md};
  `}
`;
