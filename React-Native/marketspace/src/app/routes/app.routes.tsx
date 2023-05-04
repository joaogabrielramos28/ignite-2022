import { Home } from "@flows/signed-in/Home";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { House, SignOut, Tag } from "phosphor-react-native";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { Screens } from "./screens";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { CreateAd } from "@flows/signed-in/CreateAd";
import { useAuth } from "@hooks/network/useAuth";
import { PreviewAd } from "@flows/signed-in/PreviewAd";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

type AppRoutes = {
  [Screens.HOME]: undefined;
  [Screens.CREATED_AD]: undefined;
  [Screens.PREVIEW_AD]: {
    type: string;
    title: string;
    description: string;
    price: number;
    acceptExchange: boolean;
    paymentMethods: string[];
    images: string[];
  };
};

export type AppNavigatorRoutesProps = StackNavigationProp<AppRoutes>;

const MockScreen = () => <></>;

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen name={Screens.HOME} component={Home} />
      <Stack.Screen name={Screens.CREATED_AD} component={CreateAd} />
      <Stack.Screen name={Screens.PREVIEW_AD} component={PreviewAd} />
    </Stack.Navigator>
  );
};

export const TabRoutes = () => {
  const { colors, sizes } = useTheme();
  const { logout } = useAuth();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[200],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.gray[700],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 72,
          paddingTop: sizes[4],
        },
      }}
    >
      <Tab.Screen
        name={Screens.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House size={24} weight="bold" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tag"
        component={MockScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Tag size={24} weight="bold" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={MockScreen}
        options={{
          tabBarButton(props) {
            return (
              <TouchableOpacity {...props} onPress={logout}>
                <SignOut size={24} weight="bold" color={colors.red[300]} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
