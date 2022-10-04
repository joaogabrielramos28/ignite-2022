import styled, { css } from "styled-components";

interface PaymentTypeButtonProps {
  selected: boolean;
}

export const PaymentTypeButtonContainer = styled.button<PaymentTypeButtonProps>`
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
  ${({ theme, selected }) => css`
    background-color: ${selected
      ? theme.color["purple-light"]
      : theme.color["base-button"]};
    color: ${theme.color["base-text"]};
    font-size: ${theme.font.text.md};
    border: ${selected && `1px solid ${theme.color.purple}`};
  `};
`;
