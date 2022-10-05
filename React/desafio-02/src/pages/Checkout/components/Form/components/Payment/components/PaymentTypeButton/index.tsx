import { ButtonHTMLAttributes } from "react";
import { PaymentTypeButtonContainer } from "./styles";

interface PaymentTypeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: React.ReactNode;
  selected?: boolean;
}

export const PaymentTypeButton: React.FC<PaymentTypeButtonProps> = ({
  title,
  icon,
  selected = false,
  ...rest
}: PaymentTypeButtonProps) => {
  return (
    <PaymentTypeButtonContainer selected={selected} {...rest}>
      {icon} {title}
    </PaymentTypeButtonContainer>
  );
};
