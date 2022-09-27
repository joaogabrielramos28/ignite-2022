import styled, { css } from "styled-components";

interface IconWrapperProps {
  background: string;
}

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 2rem;
  height: 2rem;

  border-radius: 9999px;

  background-color: ${({ background }) => background};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.text.xl};
    color: ${theme.color["base-text"]};
  `};
`;
