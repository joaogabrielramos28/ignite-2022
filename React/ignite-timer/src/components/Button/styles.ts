import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

interface ButtonContainer {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainer>`
  width: 100px;
  height: 40px;

  background-color: ${({ theme }) => theme.primary};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
