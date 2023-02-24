import React from "react";
import { Image } from "react-native";
import Logo from "../../assets/Logo.png";
import { Avatar, Container, CustomImage } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Image source={Logo} />
      <Avatar>
        <CustomImage
          source={{
            uri: "https://this-person-does-not-exist.com/img/avatar-11a7cb0fb6316a3ff3a1edff9d163b62.jpg",
          }}
        />
      </Avatar>
    </Container>
  );
};
