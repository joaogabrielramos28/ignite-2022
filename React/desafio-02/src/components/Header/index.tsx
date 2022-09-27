import { BadgeText, HeaderContainer, HeaderWrapper } from "./styles";
import Logo from "../../assets/Logo.png";
import { ShoppingCart, MapPin } from "phosphor-react";
import { Badge } from "../Badge";
import { useTheme } from "styled-components";

export const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img src={Logo} alt="" />

        <nav>
          <Badge background={theme["purple-light"]}>
            <MapPin size={22} color={theme.purple} />
            <BadgeText>Porto Alegre, RS</BadgeText>
          </Badge>
          <Badge background={theme["yellow-light"]}>
            <ShoppingCart size={22} color={theme["yellow-dark"]} />
          </Badge>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
