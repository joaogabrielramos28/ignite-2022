import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTheme } from "styled-components";
import { StyledContainer } from "../StyledPaper/styles";
import { PaymentTypeButton } from "./components/PaymentTypeButton";
import {
  PaymentContent,
  PaymentHeader,
  PaymentHeaderContent,
  PaymentSubTitle,
  PaymentTitle,
} from "./styles";

export const Payment: React.FC = () => {
  const { color } = useTheme();
  const { setValue } = useFormContext();
  const [paymentType, setPaymentType] = useState("credit");

  const handleChangePaymentType = (
    type: "Cartão de crédito" | "Cartão de débito" | "Dinheiro"
  ) => {
    setPaymentType(type);
    setValue("paymentType", type);
  };

  return (
    <StyledContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} color={color.purple} />
        <PaymentHeaderContent>
          <PaymentTitle>Pagamento</PaymentTitle>
          <PaymentSubTitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </PaymentSubTitle>
        </PaymentHeaderContent>
      </PaymentHeader>

      <PaymentContent>
        <PaymentTypeButton
          type="button"
          title="Cartão de crédito"
          onClick={() => handleChangePaymentType("Cartão de crédito")}
          selected={paymentType === "Cartão de crédito"}
          icon={<CreditCard size={16} color={color.purple} />}
        />
        <PaymentTypeButton
          type="button"
          title="Cartão de débito"
          onClick={() => {
            handleChangePaymentType("Cartão de débito");
          }}
          selected={paymentType === "Cartão de débito"}
          icon={<Bank size={16} color={color.purple} />}
        />
        <PaymentTypeButton
          type="button"
          title="Dinheiro"
          onClick={() => handleChangePaymentType("Dinheiro")}
          selected={paymentType === "Dinheiro"}
          icon={<Money size={16} color={color.purple} />}
        />
      </PaymentContent>
    </StyledContainer>
  );
};
