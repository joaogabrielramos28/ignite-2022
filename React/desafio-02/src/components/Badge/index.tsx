import { BadgeContainer } from "./styles";

interface BadgeProps {
  background: string;
  children: React.ReactNode;
  color?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  background,
  children,
}: BadgeProps) => {
  return <BadgeContainer background={background}>{children}</BadgeContainer>;
};
