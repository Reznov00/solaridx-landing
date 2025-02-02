import { OTPScreenType } from './Others.interface';
import { AccountProviders } from './User.interface';

export interface SignupFormInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
export interface SignInFormInterface {
  email: string;
  password: string;
  provider: AccountProviders;
  fcmToken?: string;
}
export interface SocialSignInInterface {
  email: string;
  name: string;
  fcmToken?: string;
}
export interface UpdatePasswordInterface {
  oldPassword: string;
  newPassword: string;
}
export interface SpectaclesConnectInterface {
  unique_code: string;
  username: string;
}
export interface UpdateUserDataInterface {
  profilePicture?: string,
  name?: string,
  password?: string,
  notificationsEnabled?: boolean,
  credits?: number
}

export interface AuthOTPInterface {
  email: string;
  authCode: string;
  type?: OTPScreenType;
}
export interface ResetPasswordInterface {
  email: string;
  fcmToken?: string;
  password: string;
}
