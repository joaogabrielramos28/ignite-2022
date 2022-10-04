import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
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
          title="Cartão de crédito"
          icon={<CreditCard size={16} color={color.purple} />}
        />
        <PaymentTypeButton
          title="cartão de débito"
          icon={<Bank size={16} color={color.purple} />}
        />
        <PaymentTypeButton
          title="dinheiro"
          icon={<Money size={16} color={color.purple} />}
        />
      </PaymentContent>
    </StyledContainer>
  );
};
