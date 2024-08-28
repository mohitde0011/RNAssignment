
export interface IStep1Data {
  goal: string;
  goalDescription: string;
}
export interface IAuthSliceState {
  isOnboarded: boolean;
  authToken: string | null;
  refreshToken: string | null;
  userData: IUserData;
  currentStep: number;
  step1Data: IStep1Data;
  isAppTourShown: boolean;
  onBoardedSteps: null | number;
  socialEmail: string | null;
  verificationCode: string | null;
}

export interface ITokenPayload {
  authToken: string;
  refreshToken: string;
}

export interface IEncrypted {
  encryptedData: string;
}

export interface IEncrtptedPayload {
  data: string;
}
export interface IEncrtptedResponse {
  message: string;
  data: IEncrypted;
}

export interface IAppTourItem {
  id: string;
  img: string;
  title: string;
  subTitle: string;
  desc: string;
}

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface IModalData {
  headerText: string;
  bodyText: string;
  buttonTitle: string;
  subHeaderText: string;
}

export interface IModalPaymentData {
  headerText: string;
  bodyText: string;
  subHeaderText: string;
  buttonTitleLeft: string;
  buttonTitleRight: string;
  bodyTextAmount: string;
}

export interface IModalFundData {
  headerText: string;
  subHeaderText: string;
  buttonTitleLeft: string;
  buttonTitleRight: string;
  subText: string;
}
export interface IForgotPassword {
  email: string;
  otp: string;
  role: string;
}

export interface IRestPasswordFormData {
  password: string;
  confirmPassword: string;
}
export interface ISignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  termsCondition: boolean;
}
export interface IOnBoardingFormData {
  name: string;
  email?: string;
  selectedCountry: string;
}
export interface ICreateFundFormData {
  title: string;
  targetDate: Date;
  aboutFundraiser: string;
}

export interface IUserPic {
  uri: string;
  type: string;
  name: string;
}

export interface ICountry {
  country: string;
  code: string;
}

export interface IDropDownCountry extends ICountry {
  label: string;
  value: string;
}

export interface ISetGoalDetailItem {
  title: string;
  subTitle: string;
}

export interface ISetGoalDetailFormData {
  goal: string;
  goalDescription: string;
  donationAmount: number;
  targetDate: Date;
}

export interface ISetDonationFormData {
  houseNo: string;
  postCode: string;
}

export interface ICommonSlice {
  isLoading: boolean;
  internetStatus: boolean;
}

export interface ITokenResponse {
  role: string;
  accesstoken: string;
  accesstokenexpire: string;
  refreshtoken: string;
  refreshtokenexpire: string;
}

export interface ISignupPayload {
  emailid: string;
  password: string;
  role?: string;
}

export interface ISignupResponse {
  id: string;
  email: string;
  isOnboarded: boolean;
  onBoardingStep: number;
  code?: number;
}
export interface IGetAccessToken {
  email: string;
}

export interface IVerificationResponse {
  onBoardingStep: number;
}
export interface IResendOTPPayload {
  emailid: string;
}

export interface ITokenData {
  authToken: string;
  refreshToken: string;
}

export interface IOnboardingPayload {
  name: string;
  profileImage: string;
  email?: string;
  country: string;
  sentEmail?: boolean;
}

export interface ISetGoalPayload {
  goal: string;
  goalDesc: string;
  goalAmount: number;
  goalDate: Date;
}
export interface IIslamifyPayload {
  islamify: boolean;
  onboarding?: boolean;
}

export interface IForgotPwdPayload {
  emailid: string;
  role: string;
}

export interface IIslamifyResponse {
  token: ITokenData;
  user: IUserData;
}

export enum ApiStatus {
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
  PENDING = "pending",
}

export interface ISigninResponse extends IUserData {
  accesstoken: string;
  refreshtoken: string;
}

export interface ISocialLoginParams {
  id: string;
  name?: string;
  email: string;
  profileImage?: string;
  type: string;
}

export interface IUserData {
  __v: number;
  _id: string;
  createdAt: string;
  deviceToken: any[];
  goal: IGoalData;
  isOnboarded: boolean;
  islamify: boolean;
  onBoardingStep: number | null;
  organisationFollowed: string[];
  personalDetails: IPersonalDetails;
  sID: string;
  status: string;
  updatedAt: string;
  appleID: string;
  googleID: string;
  role: string;
}

export interface IGoalData {
  amount: number;
  desc: string;
  targetDate: string | Date;
  title: string;
}

export interface IPersonalDetails {
  country: string;
  email: string;
  image: string;
  name: string;
}

export interface ICountriesDropDown {
  capital: string;
  currency: string;
  emoji: string;
  id: number;
  iso2: string;
  iso3: string;
  name: string;
  native: string;
  phonecode: string;
}
export interface IOnboardingResponse extends IUserData {
  code: string;
}

export interface IBoostDonationParams {
  houseNo: string;
  postCode: string;
}
