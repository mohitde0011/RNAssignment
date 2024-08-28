import React from "react";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  SplashScreenContainer,
  SignUpContainer,
  CompetitionListContainer
} from "../screens";
import { Routes } from "../utils/routes";
import {
  NavigationContainerRef,
} from "@react-navigation/native";

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

const ScreenOptions = { headerShown: false, gestureEnabled: false };
const Auth = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={ScreenOptions}
      initialRouteName={Routes.LANDING}
    >
      <Auth.Screen name={Routes.LANDING} component={SplashScreenContainer} />
      <Auth.Screen name={Routes.SIGN_UP} component={SignUpContainer} />
      <Auth.Screen name={Routes.COMPETITION_LIST} component={CompetitionListContainer} />
    </Auth.Navigator>
  );
};
