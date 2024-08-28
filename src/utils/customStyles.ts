import { Platform } from "react-native";

export default {
  shadowEffect: {
    shadowColor:
      Platform.OS === "ios" ? "rgba(8, 30, 29, 0.15)" : "rgba(8, 30, 29, 1)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 25,
  },
  horizontalShadowEffect: {
    shadowColor: Platform.OS === "ios" ? "rgba(8, 30, 29, 0.15)" : "rgba(8, 30, 29, 1)",
    shadowOffset: {
      width: 2,  // adding horizontal shadow
      height: 2, // reducing vertical shadow for better balance
    },
    shadowOpacity: 0.8, // slightly reducing opacity for a softer effect
    shadowRadius: 10, // adjusting radius for a more subtle effect
    elevation: 10, // adjusting elevation for Android
  },
  dropShadowEffect: {
    shadowColor:
      Platform.OS === "ios" ? "rgba(8, 30, 29, 0.15)" : "rgba(8, 30, 29, 1)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 25,
  },
};
