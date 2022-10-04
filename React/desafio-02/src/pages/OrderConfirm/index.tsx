import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { InfoOrder } from "./components/InfoOrder";
import {
  OrderConfirmContainer,
  OrderConfirmInfo,
  OrderConfirmMessage,
  Subtitle,
  Title,
} from "./styles";

import ConfirmImage from "../../assets/Illustration.png";

export const OrderConfirm: React.FC = () => {
  const { color } = useTheme();
  return (
    <OrderConfirmContainer>
      <div>
        <OrderConfirmMessage>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </OrderConfirmMessage>

        <OrderConfirmInfo>
          <InfoOrder
            icon={<MapPin size={16} weight="fill" color={color.white} />}
            title={"Entrega em Rua João Daniel Martinelli, 102"}
            subtitle={"Farrapos - Porto Alegre, RS"}
            background={color.purple}
          />
          <InfoOrder
            icon={<Timer size={16} weight="fill" color={color.white} />}
            title={"Previsão de entrega"}
            subtitle={"20 min - 30 min"}
            background={color.yellow}
          />
          <InfoOrder
            icon={
              <CurrencyDollar size={16} weight="fill" color={color.white} />
            }
            title={"Pagamento na entrega"}
            subtitle={"Cartão de Crédito"}
            background={color["yellow-dark"]}
          />
        </OrderConfirmInfo>
      </div>
      <img src={ConfirmImage} />
    </OrderConfirmContainer>
  );
};
