import { atom, useAtom } from 'jotai';
import { atomWithMutation } from 'jotai-tanstack-query';
import { atomWithStorage } from 'jotai/utils';
import { AsyncStorage } from 'jotai/vanilla/utils/atomWithStorage';
import {
  appleAuthURL,
  axiosInstance,
  forgetPasswordURL,
  googleAuthURL,
  resendOTPURL,
  resetPasswordURL,
  signInURL,
  signUpURL,
  updatePasswordURL,
  updateUserURL,
  verifyOTPURL,
} from 'src/apis';
import {
  AccountProviders,
  AppleServerData,
  AuthOTPInterface,
  SocialSignInInterface,
  ResetPasswordInterface,
  SignInFormInterface,
  SignupFormInterface,
  UpdatePasswordInterface,
  UpdateUserDataInterface,
} from 'src/interfaces';
import { STORAGE_KEYS } from 'src/utilities';
import { asyncStorage } from './storageHelpers';

//Atoms
export const loadingAtom = atom(false);
export const logoutAtom = atom(false);
const backHandlerAtom = atom(false);
export const authTokenAtom = atomWithStorage<null | string>(
  STORAGE_KEYS.TOKEN,
  null,
  asyncStorage as AsyncStorage<string | null>,
);
export const appleTokenAtom = atomWithStorage<null | AppleServerData>(
  STORAGE_KEYS.APPLE_USER_DATA,
  null,
  asyncStorage as AsyncStorage<AppleServerData | null>,
);

// Atom Hooks
export const useAuthTokenAtom = () => {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);
  return { authToken, setAuthToken };
};
export const useAppleTokenAtom = () => {
  const [appleUserData, setAppleUserData] = useAtom(appleTokenAtom);
  return { appleUserData, setAppleUserData };
};
export const useLogoutBottomSheetAtom = () => {
  const [showLogoutBottomSheet, setShowLogoutBottomSheet] = useAtom(logoutAtom);
  return { showLogoutBottomSheet, setShowLogoutBottomSheet };
};
export const useBackHandlerStateAtom = () => {
  const [showBackHandler, setShowBackHandler] = useAtom(backHandlerAtom);
  return { showBackHandler, setShowBackHandler };
};

//Mutations
export const signUpMutationAtom = atomWithMutation(() => ({
  mutationKey: ['signup'],
  mutationFn: async (
    userInfo: SignupFormInterface & {
      provider: AccountProviders;
    },
  ) => {
    const { data } = await axiosInstance.post(signUpURL, userInfo);
    return data;
  },
}));
export const signInMutationAtom = atomWithMutation(() => ({
  mutationKey: ['signin'],
  mutationFn: async (userInfo: SignInFormInterface) => {
    const { data } = await axiosInstance.post(signInURL, userInfo);
    return data;
  },
}));
export const otpMutationAtom = atomWithMutation(() => ({
  mutationKey: ['otpVerification'],
  mutationFn: async (userInfo: AuthOTPInterface) => {
    const { data } = await axiosInstance.post(verifyOTPURL, userInfo);
    return data;
  },
}));
export const forgetPasswordAtom = atomWithMutation(() => ({
  mutationKey: ['forgetPasswordEmail'],
  mutationFn: async (userInfo: { email: string }) => {
    const { data } = await axiosInstance.post(forgetPasswordURL, userInfo);
    return data;
  },
}));
export const resetPasswordAtom = atomWithMutation(() => ({
  mutationKey: ['resetPassword'],
  mutationFn: async (userInfo: ResetPasswordInterface) => {
    const { data } = await axiosInstance.patch(resetPasswordURL, userInfo);
    return data;
  },
}));
export const resendOTPAtom = atomWithMutation(() => ({
  mutationKey: ['resetPasswordOTP'],
  mutationFn: async (userInfo: { email: string }) => {
    const { data } = await axiosInstance.post(resendOTPURL, userInfo);
    return data;
  },
}));
export const googleLoginAtom = atomWithMutation(() => ({
  mutationKey: ['googleLoginAtom'],
  mutationFn: async (userInfo: SocialSignInInterface) => {
    const { data } = await axiosInstance.post(googleAuthURL, userInfo);
    return data;
  },
}));
export const appleLoginAtom = atomWithMutation(() => ({
  mutationKey: ['appleLoginAtom'],
  mutationFn: async (userInfo: SocialSignInInterface) => {
    const { data } = await axiosInstance.post(appleAuthURL, userInfo);
    return data;
  },
}));
export const updatePasswordAtom = atomWithMutation(() => ({
  mutationKey: ['updatePassword'],
  mutationFn: async (passwordInfo: UpdatePasswordInterface) => {
    const { data } = await axiosInstance.post(updatePasswordURL, passwordInfo);
    return data;
  },
}));
export const updateUser = atomWithMutation(() => ({
  mutationKey: ['updateUser'],
  mutationFn: async (values: UpdateUserDataInterface) => {
    const { data } = await axiosInstance.patch(updateUserURL, values);
    return data;
  },
}));

