import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RoutesEnum } from "./routes";
import { Catalog } from "../screens/Catalog";
import { Cart } from "../screens/Cart";
import { Coffee } from "../screens/Coffee";
import { Finish } from "../screens/Finish";

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name={RoutesEnum.CATALOG} component={Catalog} />
        <Screen name={RoutesEnum.CART} component={Cart} />
        <Screen name={RoutesEnum.COFFEE} component={Coffee} />
        <Screen name={RoutesEnum.FINISH} component={Finish} />
      </Navigator>
    </NavigationContainer>
  );
};
