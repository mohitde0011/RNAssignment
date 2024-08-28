import React from 'react';
import SplashScreenComponent from './splashScreenComponent';
import { Routes } from '../../../utils/routes';

const SplashScreenContainer = ({ navigation }: any) => {

  const onPressSignUp = () => {
    navigation.navigate(Routes.SIGN_UP);
  };

  const onPressEmail = () => {
    navigation.navigate(Routes.SIGN_UP);
  };

  return <SplashScreenComponent onPressSignUp={onPressSignUp} onPressEmail={onPressEmail}   />;
};

export default SplashScreenContainer;
