import styled, { css } from "styled-components";

export const OrderItemContainer = styled.div`
  width: 23rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.color["base-button"]};
`;

export const OrderItemPhoto = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const OrderItemContent = styled.div``;

export const OrderItemName = styled.span`
  line-height: 1.3rem;
  ${({ theme }) => css`
    color: ${theme.color["base-subtitle"]};
    font-size: ${theme.font.text.xl};
  `}
`;

export const OrderItemActions = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 4.5rem;
  height: 2.3rem;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.color["base-button"]};
    color: ${theme.color["base-title"]};
    font-size: ${theme.font.text.xl};
  `}
`;

export const CounterButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.purple};

  transition: color 0.4s;
  &:hover {
    color: ${({ theme }) => theme.color["purple-dark"]};
  }
`;

export const Quantity = styled.span``;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 5.68rem;

  padding: 0.4rem 0.5rem;
  gap: 0.25rem;
  border: none;
  border-radius: 6px;

  text-transform: uppercase;

  ${({ theme }) => css`
    background-color: ${theme.color["base-button"]};
    color: ${theme.color["base-text"]};
    font-size: ${theme.font.text.md};
  `}
`;

export const OrderItemPrice = styled.span`
  font-weight: 700;

  ${({ theme }) => css`
    font-size: ${theme.font.text.xl};
    color: ${theme.color["base-text"]};
  `}
`;
