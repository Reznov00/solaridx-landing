import { RouteProp } from '@react-navigation/native';
import { OTPScreenType } from './Others.interface';
export type GenericRouteProps<T extends keyof any> = {
  route: RouteProp<any, T>;
};
export type OnboardingStackParamList = {
  ONBOARDING_MAIN_SCREEN: undefined;
};

export type AuthStackProps<T extends keyof AuthStackParamList> =
  GenericRouteProps<T>;
export type AuthStackParamList = {
  SIGN_IN_SCREEN: undefined;
  SIGN_UP_SCREEN: undefined;
  FORGOT_PASSWORD_SCREEN: undefined;
  OTP_SCREEN: { email: string; mode: OTPScreenType };
  RESET_PASSWORD_SCREEN: { email: string };
  RESET_PASSWORD_SUCCESS_SCREEN: { mode: OTPScreenType };
};

export type HistoryStackParamList = {
  LEARNING_MAIN_SCREEN: undefined;
};

export type ProfileStackParamList = {
  EDIT_PROFILE_SCREEN: undefined;
};
export type HomeStackParamList = {
  STAISTICS_SCREEN: undefined;
};

export type BottomTabTypes =
  | 'HOME_MAIN_SCREEN'
  | 'LEARNING_MAIN_SCREEN'
  | 'PROFILE_MAIN_SCREEN';

export type BottomTabParamList = {
  HOME_MAIN_SCREEN: undefined;
  LEARNING_MAIN_SCREEN: undefined;
  PROFILE_MAIN_SCREEN: undefined;
};
