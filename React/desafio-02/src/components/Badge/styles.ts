import styled from "styled-components";

interface BadgeContainerProps {
  background: string;
}

export const BadgeContainer = styled.button<BadgeContainerProps>`
  display: flex;
  align-items: center;

  background-color: ${({ background }) => background};

  border: none;

  padding: 0.5rem;

  border-radius: 6px;

  gap: 0.25rem;
`;
