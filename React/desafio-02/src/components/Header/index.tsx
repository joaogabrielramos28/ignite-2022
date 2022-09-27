import { BadgeText, HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.png";
import { ShoppingCart, MapPin } from "phosphor-react";
import { Badge } from "../Badge";
import { useTheme } from "styled-components";

export const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <nav>
        <Badge background={theme.color["purple-light"]}>
          <MapPin size={22} color={theme.color.purple} />
          <BadgeText>Porto Alegre, RS</BadgeText>
        </Badge>
        <Badge background={theme.color["yellow-light"]}>
          <ShoppingCart size={22} color={theme.color["yellow-dark"]} />
        </Badge>
      </nav>
    </HeaderContainer>
  );
};
