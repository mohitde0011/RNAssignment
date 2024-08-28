/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import RootConatiner from "./src/rootConatiner";
import { enableScreens } from "react-native-screens";
import "./src/utils/ignoreWarnings";

function App(): React.JSX.Element {
  useEffect(() => {
    enableScreens(false);
  }, []);

  return (
      <RootConatiner />
  );
}

export default App;
