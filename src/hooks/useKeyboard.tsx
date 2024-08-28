import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

export const useKeyboardVisible = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  console.log("isKeyboardVisible -->", isKeyboardVisible);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};
