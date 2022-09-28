import styled, { css } from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.3rem;

  background-color: ${({ theme }) => theme.color["base-card"]};

  padding: 0 1.25rem;
  border-radius: 6px 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
`;

export const CoffeeTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-bottom: 1rem;
  margin-top: 0.75rem;
`;
export const CoffeeType = styled.span`
  border-radius: 100px;
  width: 5.05rem;
  height: 1.3rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.color["yellow-light"]};
    color: ${theme.color["yellow-dark"]};
    font-size: ${theme.font.text.sm};
  `};
`;

export const CoffeeName = styled.h2`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;

  ${({ theme }) => css`
    font-size: ${theme.font.heading.md};
    color: ${theme.color["base-subtitle"]};
  `}
`;
export const CoffeeDescription = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  line-height: 1.125rem;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.color["base-label"]};
    font-size: ${theme.font.text.lg};
  `}
`;

export const CoffeeFooter = styled.footer`
  display: flex;
  gap: 1.4rem;
  padding-bottom: 2.45rem;
`;

export const CoffeePrice = styled.span`
  display: flex;
  align-items: center;

  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  ${({ theme }) => css`
    font-size: ${theme.font.text["4xl"]};
    color: ${theme.color["base-text"]};
  `}
`;
export const CoffeePriceAdornment = styled.span`
  margin-right: 0.2rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  ${({ theme }) => css`
    font-size: ${theme.font.text.md};
    color: ${theme.color["base-text"]};
  `};
`;

export const CoffeeCountWrapper = styled.div`
  display: flex;
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
`;

export const Quantity = styled.span``;

export const AddToCart = styled.button`
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  padding: 0.5rem;

  width: 2.37rem;
  height: 2.37rem;

  ${({ theme }) => css`
    background-color: ${theme.color["purple-dark"]};
  `}
`;
