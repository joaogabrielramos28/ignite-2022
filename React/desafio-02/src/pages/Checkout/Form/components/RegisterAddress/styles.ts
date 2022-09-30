import styled, { css } from "styled-components";

export enum InputSize {
  sm = "3.75rem",
  md = "12.5rem",
  lg = "17.25rem",
  xl = "21.75rem",
  "2xl" = "35rem",
}

interface InputProps {
  width: InputSize;
}

export const RegisterAddressHeader = styled.header`
  display: flex;
  gap: 0.75rem;
`;

export const RegisterAddressHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RegisterAddressTitle = styled.h3`
  line-height: 1.3rem;
  gap: 0.5rem;
  ${({ theme }) => css`
    font-size: ${theme.font.text.xl};
    color: ${theme.color["base-subtitle"]};
  `}
`;
export const RegisterAddressSubTitle = styled.p`
  line-height: 1.125rem;
  ${({ theme }) => css`
    font-size: ${theme.font.text.lg};
    color: ${theme.color["base-text"]};
  `}
`;

export const RegisterAddressContent = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input<InputProps>`
  border-radius: 4px;
  padding: 0.75rem;
  height: 2.6em;
  ${({ theme, width }) => css`
    width: ${width};
    background-color: ${theme.color["base-input"]};
    border: 1px solid ${theme.color["base-button"]};
    color: ${theme.color["base-label"]};

    &:placeholder-shown {
      color: ${theme.color["base-label"]};
    }
  `}
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
