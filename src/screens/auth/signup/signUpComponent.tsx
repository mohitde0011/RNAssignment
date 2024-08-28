import React, { useState } from 'react';
import { Alert, Modal, Image, Pressable, View, SafeAreaView, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { styles } from "./styles";
import {
  CustomButton,
  CustomLabel,
  CustomTextInput,
} from "../../../components";

import { REGEX, validatePassword } from '../../../utils/validation';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or any other icon set from the library
import { Color } from '../../../utils/theme';
import {
  Controller,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";


// Define the props interface
interface SignUpComponentProps {
  onPressBack: () => void;
  control: UseFormReturn<FieldValues>['control'];
  errors: FieldValues;
  getValues: UseFormReturn<FieldValues>['getValues'];
  refs: {
    email: React.RefObject<any>;
    password: React.RefObject<any>;
    confirmPassword: React.RefObject<any>;
  };
  onPressCompetition: () => void;
  onPressTermsAndCondition: () => void;
}
const SignUpComponent: React.FC<SignUpComponentProps> = ({
  onPressBack,
  control,
  errors,
  getValues,
  refs,
  onPressCompetition,
  onPressTermsAndCondition,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const CustomCheckBox: React.FC<{ isChecked: boolean; onCheckBoxPress: () => void }> = ({ isChecked, onCheckBoxPress }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onCheckBoxPress}
        activeOpacity={0.7}
      >
        <View style={styles.checkBox}>
          {isChecked ? (
            <Icon name="check" size={20} color={Color.GRAY} />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.centeredView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Pressable style={[styles.iconStyles, { borderColor: "black" }]} onPress={onPressBack}>
                <Image
                  source={require("../../../assets/images/back.png")}
                  style={styles.rightIconStyle}
                />
              </Pressable>
              <CustomLabel customStyle={styles.createAccount}>
                {"Create Account"}
              </CustomLabel>
            </View>
            <Pressable style={styles.inputStyle} onPress={onPressCompetition}>
              <CustomLabel customStyle={styles.signUpCom}>
                {"Competition to sign up * "}
              </CustomLabel>
              <Image
                source={require("../../../assets/images/downArrow.png")}
                style={styles.arrowIconStyle}
              />
            </Pressable>
            <View style={styles.formConatiner}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <CustomTextInput
                    autoCapitalize="none"
                    returnKeyType={"next"}
                    placeholder={"Email*"}
                    value={value}
                    onChangeText={onChange}
                    iconName=""
                    keyboardType="email-address"
                    onBlur={onBlur}
                    errorMessages={errors.email?.message}
                    reference={refs.email}
                    isRequired
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: JSON.stringify([
                      { valid: false, title: "Email address is required!" },
                    ]),
                  },
                  pattern: {
                    value: REGEX.EMAIL,
                    message: JSON.stringify([
                      { valid: false, title: "Email format is invalid" },
                    ]),
                  },
                }}
              />
            </View>
            <View style={styles.passwordContainer}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                  <CustomTextInput
                    autoCapitalize="none"
                    autoFocus={false}
                    returnKeyType={"next"}
                    placeholder={"Password*"}
                    value={value}
                    onChangeText={onChange}
                    iconName="Eye-Closed"
                    keyboardType="default"
                    secureTextEntry={true}
                    onBlur={onBlur}
                    errorMessages={errors.password?.message}
                    reference={refs.password}
                    isRequired
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: JSON.stringify([
                      { valid: false, title: "Password is required!" },
                    ]),
                  },
                  validate: (value) => validatePassword(value),
                }}
              />
            </View>

            <View style={styles.passwordContainer}>
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, value, onBlur } }) => (
                  <CustomTextInput
                    autoCapitalize="none"
                    autoFocus={false}
                    returnKeyType={"done"}
                    placeholder={"Confirm password*"}
                    value={value}
                    onChangeText={onChange}
                    iconName="Eye-Closed"
                    keyboardType="default"
                    secureTextEntry={true}
                    onBlur={onBlur}
                    errorMessages={errors.confirmPassword?.message}
                    reference={refs.confirmPassword}
                    isRequired
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: JSON.stringify([
                      { valid: false, title: "Confirm Password is required!" },
                    ]),
                  },
                  validate: (value) =>
                    value === getValues("password") ||
                    JSON.stringify([
                      { valid: false, title: t("BOTH_PASSWORDS_MATCH") },
                    ]),
                }}
              />
            </View>

            <View style={styles.passwordContainer}>
              <Controller
                control={control}
                name="firtName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <CustomTextInput
                    autoCapitalize="none"
                    autoFocus={false}
                    returnKeyType={"done"}
                    placeholder={"First Name in English*"}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="default"
                    onBlur={onBlur}
                    errorMessages={errors.firtName?.message}
                    reference={refs.confirmPassword}
                    isRequired
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: JSON.stringify([
                      { valid: false, title: "This is a required field." },
                    ]),
                  },
                }}
              />
            </View>

            <View style={styles.passwordContainer}>
              <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <CustomTextInput
                    autoCapitalize="none"
                    autoFocus={false}
                    returnKeyType={"done"}
                    placeholder={"Last Name in English*"}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    errorMessages={errors.lastName?.message}
                    isRequired
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: JSON.stringify([
                      { valid: false, title: "This is a required field." },
                    ]),
                  },
                }}
              />
            </View>

            <View style={styles.termsAndConditionCon}>
              <CustomCheckBox
                isChecked={isChecked}
                onCheckBoxPress={() => setIsChecked(!isChecked)}
              />
              <CustomLabel customStyle={styles.iAgreeText}>
                By signing up, I agree to Cloit's{" "}
                <CustomLabel
                  customStyle={styles.termsAndCondition}
                  onPress={onPressTermsAndCondition}
                >
                  terms and conditions
                </CustomLabel>
                {" "}{"and"}{" "}
                <CustomLabel
                  customStyle={styles.termsAndCondition}
                  onPress={onPressTermsAndCondition}
                >
                  Privacy Policy.
                </CustomLabel>
              </CustomLabel>
            </View>
          </View>
          <CustomButton
            containerStyle={styles.btncontainerStyle}
            disabled={false}
            // onPress={onPressSignUp}
            onPress={() => setModalVisible(true)}
            title={'Sign up'}
            login={true}
            titleFlag={true}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.iconView}>
                  <View style={[styles.iconStyles, { backgroundColor: "#253BFF" }]}>
                    <Image
                      source={require("../../../assets/images/star.png")}
                      style={styles.rightIconStyle}
                    />
                  </View>

                  <Pressable style={[styles.iconStyles, { borderColor: "black" }]} onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      source={require("../../../assets/images/cross.png")}
                      style={styles.rightIconStyle}
                    />
                  </Pressable>
                </View>
                <CustomLabel customStyle={styles.title}>
                  {"Welcome to Hyperhire"}
                </CustomLabel>
                <CustomLabel customStyle={styles.subTitle}>
                  {"Great to have you with us!"}
                </CustomLabel>

                <CustomButton
                  containerStyle={[styles.btncontainerModalStyle]}
                  disabled={false}
                  onPress={() => setModalVisible(!modalVisible)}
                  title={'Got it'}
                  login={true}
                  titleFlag={true}
                />
              </View>
            </View>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpComponent;
