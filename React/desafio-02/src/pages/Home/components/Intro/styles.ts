import styled, { css } from "styled-components";
import { rgba } from "polished";
import bg from "../../../../assets/intro-background.png";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${bg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.color.white} 0%,
        ${rgba(theme.color.background, 0.2)} 50%,
        ${theme.color.background} 100%
      )`};

  background-size: cover;
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 3.5rem;
  }
`;

export const IntroContent = styled.div`
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: 800;
    font-weight: 3.875rem;
    ${({ theme }) => css`
      font-size: ${theme.font.heading.xl};
      color: ${theme.color["base-title"]};
    `};
  }

  p {
    margin-top: 1rem;
    line-height: 1.625rem;
    ${({ theme }) => css`
      font-size: ${theme.font.text["2xl"]};
      color: ${theme.color["base-subtitle"]};
    `};
  }
`;

export const BenefitWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
