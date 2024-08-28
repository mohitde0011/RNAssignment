import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Video from "react-native-video";
import {
  CustomButton,
  CustomLabel
} from "../../../components";
import { styles } from "./styles";

const SplashScreenComponent = ({ onPressSignUp, onPressEmail } : {
  onPressSignUp: () => void;
  onPressEmail: () => void;
}) => {
  const splashVideo = require("../../../assets/videos/SplashScreen.mp4");
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={"dark-content"}
      />
      <CustomLabel customStyle={styles.creatAccText}>
        {"Hyperhire \nassignment"}
      </CustomLabel>
      <Video
        source={splashVideo}
        style={styles.video}
        controls={false}
        muted={true}
        resizeMode="cover"
        repeat={true}  // Play the video in a loop
      />
      <View style={styles.bottomContainer}>
        <CustomButton
          containerStyle={{ backgroundColor:  "#253BFF" }}
          disabled={false}
          onPress={onPressSignUp}
          title={'Sign up for free'}
          login={true}
        />
        <CustomButton
          containerStyle={{ marginTop: 10, backgroundColor:  "#1D2939" }}
          disabled={false}
          onPress={onPressEmail}
          title={'Continue with Email'}
          login={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreenComponent;
