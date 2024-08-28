import { ReactNode } from "react";
import {
  GestureResponderEvent,
  ImageProps,
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

export interface ICustomLabel extends TextProps {
  children: ReactNode;
  customStyle?: StyleProp<TextStyle>;
}

export interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  iconName?: string;
  customIconStyle?: StyleProp<TextStyle>;
  customSvgIconStyle?: StyleProp<TextStyle>;
  cloudinarySvgName?: string;
  disableLoading?: boolean;
  customLoadingIndicatorColor?: string;
  rightIconName?: string; 
  rightIconCustomStyle?: StyleProp<TextStyle>;
  login?: boolean;
  titleFlag?: boolean;
} 

export interface IImageBackground extends ImageProps {
  children: ReactNode;
  hideLogo?: boolean;
  mainContainer?: StyleProp<ViewStyle>;
  scrollEnabled?: boolean;
  backButton?: boolean;
  hideBackgroundImage?: boolean;
  backButtonPress?: () => void;
}

export interface IErrorItem {
  valid: boolean;
  title: string;
}

export interface ICheckBoxProp {
  isChecked: boolean;
  onCheckBoxPress: () => void;
}

export interface ICustomPagigation {
  index: number;
  arraySize: number;
  customActivePillStyle?: StyleProp<ViewStyle>;
  customDisablePillStyle?: StyleProp<ViewStyle>;
}

export interface IHeaderProps {
  title: string;
  customStyle?: TextStyle;
  headerRightTitle?: boolean;
}

export interface ICustomIconButtonProps {
  onPress: () => void;
  name: string;
  customContainerStyle?: StyleProp<ViewStyle>;
  customIconStyle?: StyleProp<TextStyle>;
}

export interface ICustomHeader {
  headerLeftIconName?: string;
  headerTitle: string;
  headerRightIconName?: string;
  headerRightTitle?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  onRightPress?: () => void;
}

export interface IFundResponse {
  media: string[];
}

export interface IFundMedia {
  _id: string;
  media: string[];
}

export interface ICustomPill {
  icon?: string;
  title: string;
  pillColor: string;
  titleStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  pillContainer?: StyleProp<ViewStyle>;
  onPressPill: (event: GestureResponderEvent) => void;
  disablePill?: boolean;
  isLoading?: boolean;
}

export interface ICustomShimmer {
  notiLoaderList?: boolean;
  noticeDetailsLoaderList?: boolean;
  notificationLoaderList?: boolean;
}

export interface ITabItem {
  id: string;
  title: string;
}

export interface ITabProps {
  containerStyle?: StyleProp<ViewStyle>;
  currentPage: number;
  data: ITabItem[];
  onTabClick: (id: number) => void;
}
