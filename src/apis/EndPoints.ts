import { getItem, STORAGE_KEYS } from 'src/utilities';
// import Config from 'react-native-config';

// export const baseUrl = Config.DOMAIN;
// export const baseUrl = 'https://api.dev.fashx.ai';
export const baseUrl = 'https://api.fashx.ai';

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
export const updateUserURL = '/user/update-self';
export const deleteUserAccountURL = '/user';
export const deleteUserAccountDataURL = '/user/data';

//Brands
export const getAllBrandsURL = '/brands';
export const getBrandSpecificProductsURL = (params: {
  gender?: string;
  category?: string;
  type?: string;
  brand?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}): string => {
  params.limit = 8
  const baseUrl = '/product/search';
  const queryString = Object.entries(params)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
    .join('&');
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

//Products
export const getAllProductsURL = '/product';
export const uploadImageURL = '/upload/file';
export const imageGenerationURL = '/image-generation';
export const productPurchasesURL = `/product-purchase-history`;
export const productPurchasesHistoryURL = `/product-purchase-history/self`
export const deleteProductPurchasesURL = (id: string) =>
  `/product-purchase-history/${id}`;

export const getAccessToken = async () => {
  let storedToken = await getItem(STORAGE_KEYS.TOKEN);
  const token = JSON.parse(storedToken || 'false');
  return token;
};
