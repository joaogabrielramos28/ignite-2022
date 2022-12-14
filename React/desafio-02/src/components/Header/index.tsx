import { BadgeText, HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.png";
import { ShoppingCart, MapPin } from "phosphor-react";
import { Badge } from "../Badge";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext/CartContext";

export const Header: React.FC = () => {
  const { cart } = useCartContext();

  const cartQuantity = cart.cart.length;
  console.log(cartQuantity);

  const theme = useTheme();
  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={Logo} alt="" />
      </NavLink>

      <nav>
        <Badge background={theme.color["purple-light"]}>
          <MapPin size={22} color={theme.color.purple} />
          <BadgeText>Porto Alegre, RS</BadgeText>
        </Badge>
        <Badge
          hasQuantity={true}
          quantity={String(cartQuantity)}
          background={theme.color["yellow-light"]}
        >
          <NavLink to={"/checkout"}>
            <ShoppingCart size={22} color={theme.color["yellow-dark"]} />
          </NavLink>
        </Badge>
      </nav>
    </HeaderContainer>
  );
};
