import React, { useCallback } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  View,
  Image,
} from "react-native";
import { CustomLabel } from "..";
import { Color, FontFamily } from "../../utils/theme";
import { CustomButtonProps } from "../interface";

const CustomButton = ({
  onPress,
  title = "",
  login,
  disabled,
  isLoading,
  iconName,
  customIconStyle,
  cloudinarySvgName,
  customSvgIconStyle,
  disableLoading = false,
  rightIconName,
  rightIconCustomStyle,
  customLoadingIndicatorColor = Color.WHITE,
  titleFlag,
  ...props
}: CustomButtonProps) => {
  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      onPress(event);
    },
    [onPress]
  );

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      onPress={handlePress}
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? Color.DARK_GREEN_PLACEHOLDER
            : Color.DARK_GREEN,
        },
        props.containerStyle,
      ]}
    >
      {
        titleFlag ?
          <CustomLabel
            customStyle={[
              styles.label,
              {
                color: disabled ? Color.DARK_GREEN : Color.WHITE,
                opacity: disabled ? 0.35 : 1,
              },
              props.labelStyle,
            ]}
          >
            {title}
          </CustomLabel>
          :
          <View style={styles.childStyle}>
            <View style={{
              flexDirection: 'row', alignItems: "center", flex: 1,
            }}>
              {login ? <Image
                source={require("../../assets/images/login.png")}
                style={styles.svgIconStyle}
              /> :
                <Image
                  source={require("../../assets/images/mail.png")}
                  style={styles.svgIconStyle}
                />
              }
              <CustomLabel
                customStyle={[
                  styles.label,
                  {
                    color: disabled ? Color.DARK_GREEN : Color.WHITE,
                    opacity: disabled ? 0.35 : 1,
                  },
                  props.labelStyle,
                ]}
              >
                {title}
              </CustomLabel>
            </View>
            <View style={styles.iconStyles}>
              <Image
                source={require("../../assets/images/Icon.png")}
                style={[styles.rightIconStyle]}
              />
            </View>
          </View>
      }
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    paddingLeft: 20,
    borderRadius: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    fontFamily: FontFamily.PLUS_JAKARTA_BOLD,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 2
  },
  childStyle: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyles: {
    height: 54, width: 54, borderRadius: 44, borderColor: Color.WHITE, borderWidth: 1, justifyContent: 'center',
    alignItems: 'center'
  },
  svgIconStyle: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  rightIconStyle: {
    width: 28,
    height: 28,
  },
});
