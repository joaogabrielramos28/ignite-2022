import styled, { css } from "styled-components";

interface BadgeContainerProps {
  background: string;
  quantity: string;
  hasQuantity: boolean;
}

export const BadgeContainer = styled.button<BadgeContainerProps>`
  display: flex;
  align-items: center;

  background-color: ${({ background }) => background};

  border: none;

  padding: 0.5rem;

  border-radius: 6px;

  gap: 0.25rem;

  position: relative;

  &::before {
    ${({ hasQuantity, quantity, theme }) =>
      hasQuantity &&
      css`
        content: "${quantity}";
        position: absolute;
        top: -6px;
        right: -6px;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 1.25rem;
        height: 1.25rem;
        background-color: red;
        border-radius: 99999px;
        font-weight: 700;

        background-color: ${theme.color["yellow-dark"]};
        color: ${theme.color.white};
        font-size: ${theme.font.text.md};
      `}
  }
`;
