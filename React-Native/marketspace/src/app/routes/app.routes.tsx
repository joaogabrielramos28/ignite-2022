import { Home } from "@flows/signed-in/Home";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { House, SignOut, Tag } from "phosphor-react-native";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { Navigators, Screens } from "./screens";

const { Navigator, Screen } = createBottomTabNavigator();

type AppRoutes = {
  [Navigators.HOME_NAVIGATOR]: undefined;
};

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const MockScreen = () => <></>;

export const AppRoutes = () => {
  const { colors, sizes } = useTheme();
  return (
    <Navigator
      initialRouteName={Navigators.HOME_NAVIGATOR}
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
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House size={24} weight="bold" color={color} />
          ),
        }}
      />
      <Screen
        name="Tag"
        component={MockScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Tag size={24} weight="bold" color={color} />
          ),
        }}
      />
      <Screen
        name="Logout"
        component={MockScreen}
        options={{
          tabBarButton(props) {
            return (
              <TouchableOpacity {...props}>
                <SignOut size={24} weight="bold" color={colors.red[300]} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Navigator>
  );
};
