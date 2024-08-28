import React, { useRef, useState } from "react";
import SignUpComponent from "./signUpComponent";
import { Linking } from "react-native";
import { useForm } from "react-hook-form";
import { Routes } from "../../../utils/routes";

const SignUpContainer = ({ navigation }: any) => {
  
  const onPressBack = () => {
    navigation.goBack()
  };
  const onPressCompetition = () => {
    navigation.navigate(Routes.COMPETITION_LIST);
  };
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onPressTermsAndCondition = () =>
    Linking.openURL("https://www.google.com");

  return (
      <SignUpComponent onPressBack={onPressBack} 
      onPressCompetition={onPressCompetition}
      control={control}
      errors={errors}
      getValues={getValues}
      refs={{
        email: emailRef,
        password: passwordRef,
        confirmPassword: confirmPasswordRef,
      }}
      onPressTermsAndCondition={onPressTermsAndCondition}

      />
  );
};

export default SignUpContainer;
