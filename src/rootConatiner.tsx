import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthStack, navigationRef } from "./navigation";

const RootConatiner = ({ }) => {
  const [isNavigationIsReady, setNavigationIsReady] = useState(true);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          setNavigationIsReady(true);
        }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
            <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootConatiner;