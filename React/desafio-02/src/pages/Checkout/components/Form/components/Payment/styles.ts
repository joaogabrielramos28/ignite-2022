import styled, { css } from "styled-components";

export const PaymentHeader = styled.header`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentTitle = styled.h3`
  line-height: 1.3rem;
  gap: 0.5rem;
  ${({ theme }) => css`
    font-size: ${theme.font.text.xl};
    color: ${theme.color["base-subtitle"]};
  `}
`;
export const PaymentSubTitle = styled.p`
  line-height: 1.125rem;
  ${({ theme }) => css`
    font-size: ${theme.font.text.lg};
    color: ${theme.color["base-text"]};
  `}
`;

export const PaymentContent = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
`;
