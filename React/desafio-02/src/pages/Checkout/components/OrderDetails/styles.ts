import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderDetailsWrapper = styled.aside`
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

export const OrderTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OrderTotalDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  line-height: 1.125rem;
  ${({ theme }) => css`
    color: ${theme.color["base-text"]};
    font-size: ${theme.font.text.lg};
  `}
`;
export const OrderTotalDetailsTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  line-height: 1.625rem;

  ${({ theme }) => css`
    color: ${theme.color["base-subtitle"]};
    font-size: ${theme.font.text["3xl"]};
  `}
`;

export const Title = styled.span`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  margin-bottom: 1rem;

  ${({ theme }) => css`
    color: ${theme.color["base-subtitle"]};
    font-size: ${theme.font.heading.md};
  `}
`;

export const ConfirmButton = styled.button`
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  font-weight: 700;

  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.7s;
  ${({ theme }) => css`
    background-color: ${theme.color.yellow};
    font-size: ${theme.font.text.lg};
    color: ${theme.color.white};

    &:hover {
      background-color: ${theme.color["yellow-dark"]};
    }
  `};
`;
