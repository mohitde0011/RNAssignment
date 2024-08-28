import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
  ColorValue,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ReturnKeyType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Color, FontFamily } from "../../utils/theme";
import { CustomLabel } from "..";
import { IErrorItem } from "../interface";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Choose your icon set

interface ICustomTextInput extends TextInputProps {
  stickLabel?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  customStickyLabelStyle?: Record<string, any>;
  customInputStyle?: StyleProp<ViewStyle | TextStyle>;
  customIconStyle?: Record<string, any>;
  isRequired?: boolean;
  placeholder?: string;
  iconName?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  placeholderTextColor?: ColorValue;
  errorMessages?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyType;
  reference?: React.LegacyRef<TextInput>;
  leftIcon?: string;
  customLeftIconStyle?: StyleProp<TextStyle>;
  onRightIconPress?: () => void;
}

const CustomTextInput = ({
  stickLabel,
  value,
  onChangeText,
  isRequired = false,
  placeholder,
  iconName,
  keyboardType,
  maxLength,
  placeholderTextColor = Color.GRAY,
  customStickyLabelStyle,
  customInputStyle,
  customIconStyle,
  errorMessages,
  secureTextEntry = false,
  onBlur,
  returnKeyType,
  reference,
  leftIcon,
  customLeftIconStyle,
  onRightIconPress,
  ...props
}: ICustomTextInput) => {
  const [showPassword, setShowPassword] = useState(Boolean(secureTextEntry));

  return (
    <>
      <View style={styles.inputConatiner}>
        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={"#667085"}
          value={value}
          onChangeText={onChangeText}
          style={StyleSheet.flatten([
            styles.inputStyle,
            { paddingLeft: leftIcon ? 50 : 16 },
            customInputStyle,
          ])}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onBlur={onBlur}
          secureTextEntry={showPassword}
          returnKeyType={
            keyboardType == "number-pad"
              ? "done"
              : returnKeyType
              ? returnKeyType
              : "default"
          }
          ref={reference}
        />
        {/* {leftIcon ? (
          <CustomIcon
            name={leftIcon}
            style={[styles.leftIconStyle, customLeftIconStyle]}
          />
        ) : null} */}
       {iconName && (
        <Icon
          name={
            secureTextEntry
              ? showPassword
                ? "visibility"
                : "visibility-off"
              : iconName
          }
          size={24}
          color="#667085"
          style={[styles.iconStyles, customIconStyle]}
          onPress={() => {
            if (secureTextEntry) {
              setShowPassword(!showPassword);
            } else if (onRightIconPress) {
              onRightIconPress();
            }
          }}
        />
      )}
      </View>
      {errorMessages && errorMessages?.length > 0
        ? JSON.parse(errorMessages)?.map((item: IErrorItem, index: number) => {
            if (item.title.length === 0) return null;

            return (
              <View key={index.toString()} style={styles.errorConatiner}>
                {/* <CustomIcon
                  name={item.valid ? "Check-Circle" : "Info-Circle"}
                  style={[
                    styles.errorIcon,
                    { color: item.valid ? Color.SHADED_GREY : Color.RED },
                  ]}
                /> */}

                <CustomLabel
                  customStyle={[
                    styles.errorText,
                    { color: item.valid ? Color.GRAY : Color.RED },
                  ]}
                >
                  {item?.title}
                </CustomLabel>
              </View>
            );
          })
        : null}
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  requiredStyle: {
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: FontFamily.PLUS_JAKARTA_REGULAR,
    color: Color.RED,
  },
  inputStyle: {
    marginTop: 8,
    backgroundColor: "#F9FAFB",
    borderRadius: 46,
    height: 52,
    paddingLeft: 16,
    fontSize: 14,
    fontFamily: FontFamily.PLUS_JAKARTA_REGULAR,
    paddingRight: 50,
    width: '100%'
  },
  inputConatiner: {
    width: '100%'
  },
  iconStyles: {
    position: "absolute",
    fontSize: 24,
    right: 8,
    top: 8,
    color: Color.GRAY,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  errorConatiner: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  errorIcon: {
    color: Color.RED,
    fontSize: 18,
  },

  errorText: {
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: FontFamily.PLUS_JAKARTA_REGULAR,
    color: Color.RED,
    marginLeft: 4,
  },
  leftIconStyle: {
    position: "absolute",
    fontSize: 24,
    left: 16,
    top: 18,
    color: Color.GRAY,
  },
});
