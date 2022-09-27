import { IconWrapper, InfoText, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
  icon: React.ReactNode;
  background: string;
  text: string;
}

export const InfoWithIcon: React.FC<InfoWithIconProps> = ({
  text,
  icon,
  background,
}: InfoWithIconProps) => {
  return (
    <InfoWithIconContainer>
      <IconWrapper background={background}>{icon}</IconWrapper>
      <InfoText>{text}</InfoText>
    </InfoWithIconContainer>
  );
};
