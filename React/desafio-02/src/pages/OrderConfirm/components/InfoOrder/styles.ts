import styled from "styled-components";

interface IconWrapper {
  background: string;
}

export const InfoOrderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconWrapper = styled.div<IconWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 99999px;

  background-color: ${({ background }) => background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  font-size: ${({ theme }) => theme.font.text.xl};
  color: ${({ theme }) => theme.color["base-text"]};
`;

export const Title = styled.span``;
export const SubTitle = styled.span``;
