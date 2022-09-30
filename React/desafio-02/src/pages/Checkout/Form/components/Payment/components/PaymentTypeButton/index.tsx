import { PaymentTypeButtonContainer } from "./styles";

interface PaymentTypeButtonProps {
  title: string;
  icon: React.ReactNode;
}

export const PaymentTypeButton: React.FC<PaymentTypeButtonProps> = ({
  title,
  icon,
}: PaymentTypeButtonProps) => {
  return (
    <PaymentTypeButtonContainer>
      {icon} {title}
    </PaymentTypeButtonContainer>
  );
};
