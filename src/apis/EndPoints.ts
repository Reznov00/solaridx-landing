import { getItem, STORAGE_KEYS } from 'src/utilities';
// import Config from 'react-native-config';

// export const baseUrl = Config.DOMAIN;
// export const baseUrl = 'http://192.168.108.21:3000';
export const baseUrl = 'https://api.solaridx.com';

// Auth
export const signUpURL = '/auth/signup';
export const signInURL = '/auth/signin';
export const verifyOTPURL = '/auth/verify-otp';
export const forgetPasswordURL = '/auth/forget-password';
export const resetPasswordURL = '/auth/reset-password';
export const googleAuthURL = '/auth/google';
export const appleAuthURL = '/auth/apple';
export const resendOTPURL = '/auth/resend-otp';
export const updatePasswordURL = '/auth/update-password';

// User
export const updateUserURL = '/user/update-self';
export const deleteUserAccountURL = '/user';
export const deleteUserAccountDataURL = '/user/data';
export const linkSpectaclesURL = '/user/connect-specs';
export const unlinkSpectaclesURL = '/user/unlink-specs';



export const getAccessToken = async () => {
  let storedToken = await getItem(STORAGE_KEYS.TOKEN);
  const token = JSON.parse(storedToken || 'false');
  return token;
};
