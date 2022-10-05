import { BadgeContainer } from "./styles";

interface BadgeProps {
  background: string;
  children: React.ReactNode;
  color?: string;
  hasQuantity?: boolean;
  quantity?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  background,
  children,
  hasQuantity = false,
  quantity = "0",
}: BadgeProps) => {
  return (
    <BadgeContainer
      hasQuantity={hasQuantity}
      quantity={quantity}
      background={background}
    >
      {children}
    </BadgeContainer>
  );
};
