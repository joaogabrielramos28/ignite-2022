import styled, { css } from "styled-components";
import { linearGradient } from "polished";
export const OrderConfirmContainer = styled.main`
  display: flex;
  margin-top: 5rem;
  gap: 6.375rem;
  flex: 1;
`;

export const OrderConfirmMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  line-height: 2.625rem;

  ${({ theme }) => css`
    font-size: ${theme.font.heading.lg};
    color: ${theme.color["yellow-dark"]};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.color["base-subtitle"]};
    font-size: ${theme.font.text["3xl"]};
  `}
`;

export const OrderConfirmInfo = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.color.background};
  width: 32rem;
  height: 16.875rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;

    z-index: -1;
    inset: -1px;

    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;
