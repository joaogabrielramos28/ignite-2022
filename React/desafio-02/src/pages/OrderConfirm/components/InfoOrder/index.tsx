import {
  Content,
  IconWrapper,
  InfoOrderContainer,
  SubTitle,
  Title,
} from "./styles";

interface InfoOrder {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  background: string;
}

export const InfoOrder: React.FC<InfoOrder> = ({
  icon,
  subtitle,
  title,
  background,
}: InfoOrder) => {
  return (
    <InfoOrderContainer>
      <IconWrapper background={background}>{icon}</IconWrapper>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </InfoOrderContainer>
  );
};
