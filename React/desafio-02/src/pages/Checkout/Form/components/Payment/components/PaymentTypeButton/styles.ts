import styled, { css } from "styled-components";

export const PaymentTypeButtonContainer = styled.button`
  width: 11.875rem;
  height: 3.18rem;

  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  ${({ theme }) => css`
    background-color: ${theme.color["base-button"]};
    color: ${theme.color["base-text"]};
    font-size: ${theme.font.text.md};
  `};
`;
