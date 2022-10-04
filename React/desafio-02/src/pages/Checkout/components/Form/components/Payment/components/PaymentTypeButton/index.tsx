import { PaymentTypeButtonContainer } from "./styles";

interface PaymentTypeButtonProps {
  title: string;
  icon: React.ReactNode;
  selected?: boolean;
}

export const PaymentTypeButton: React.FC<PaymentTypeButtonProps> = ({
  title,
  icon,
  selected = false,
}: PaymentTypeButtonProps) => {
  return (
    <PaymentTypeButtonContainer selected={selected}>
      {icon} {title}
    </PaymentTypeButtonContainer>
  );
};
