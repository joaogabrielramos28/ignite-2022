import { BenefitWrapper, IntroContainer, IntroContent } from "./styles";

import { useTheme } from "styled-components";

import heroImg from "../../../../assets/Hero.png";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

export const Intro: React.FC = () => {
  const theme = useTheme();
  return (
    <IntroContainer>
      <IntroContent>
        <h2>
          Encontre o café perfeito
          <br /> para qualquer hora do dia
        </h2>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </p>

        <BenefitWrapper>
          <InfoWithIcon
            background={theme.color["yellow-dark"]}
            text={"Compra simples e segura"}
            icon={
              <ShoppingCart
                size={16}
                weight={"fill"}
                color={theme.color.white}
              />
            }
          />
          <InfoWithIcon
            background={theme.color["base-text"]}
            text={"Embalagem mantém o café intacto"}
            icon={
              <Package size={16} weight={"fill"} color={theme.color.white} />
            }
          />
          <InfoWithIcon
            background={theme.color["yellow"]}
            text={"Entrega rápida e rastreada"}
            icon={<Timer size={16} weight={"fill"} color={theme.color.white} />}
          />

          <InfoWithIcon
            background={theme.color["purple"]}
            text={"O café chega fresquinho até você"}
            icon={
              <Coffee size={16} weight={"fill"} color={theme.color.white} />
            }
          />
        </BenefitWrapper>
      </IntroContent>
      <img src={heroImg} alt="" />
    </IntroContainer>
  );
};
