import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  width: 28rem;

  padding: 2.5rem;
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${({ theme }) => css`
    background-color: ${theme.color["base-card"]};
  `}
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 0 0.25rem;
`;
