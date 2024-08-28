import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type IAuthStackParamList = {
  AppTour: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  Verification: { email: string; comingFrom: string };
  ResetPassword: undefined;
  SignUp: undefined;
};


// Auth
type IAppTourScreenNavigationProp = NativeStackNavigationProp<
  IAuthStackParamList,
  "AppTour"
>;
type ISignUpScreenNavigationProp = NativeStackNavigationProp<
  IAuthStackParamList,
  "SignUp"
>;
type ISignInScreenNavigationProp = NativeStackNavigationProp<
  IAuthStackParamList,
  "SignIn"
>;
type IVerificationScreenNavigationProp = NativeStackNavigationProp<
  IAuthStackParamList,
  "Verification"
>;
type IVerificationScreenRouteProp = RouteProp<
  IAuthStackParamList,
  "Verification"
>;
