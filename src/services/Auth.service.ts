import { Atom, useAtom } from 'jotai';
import { AtomWithMutationResult } from 'jotai-tanstack-query';
import { showToast } from 'src/components';
import { SCREENS_ENUM, STACKS_ENUM } from 'src/enums';
import { MutationErrorInterface } from 'src/interfaces';
import {
  appleLoginAtom,
  forgetPasswordAtom,
  googleLoginAtom,
  otpMutationAtom,
  resendOTPAtom,
  resetPasswordAtom,
  signInMutationAtom,
  signUpMutationAtom,
  updatePasswordAtom,
  updateUser,
  useAuthTokenAtom,
  useUserAtom
} from 'src/store';
import { NavigationService } from 'src/utilities';

// Helper function to reduce redundancy in mutate
const useMutationService = <TData, TError, TVariables>(
  atom: Atom<AtomWithMutationResult<TData, TError, TVariables, unknown>>,
  onSuccess: (val: TData, formData: TVariables) => void,
) => {
  const [{ mutate, isPending }] = useAtom(atom);

  const handleService = async (formData: TVariables) => {

    mutate(formData, {
      onSuccess: val => onSuccess(val, formData),
      onError: (error: TError) => {
        const err = error as MutationErrorInterface;
        showToast('error', err?.message ?? 'Error Encountered');
      },
    });
  };

  return { handleService, isPending };
};

export const useSignUpService = () => {
  return useMutationService(signUpMutationAtom, (val, formData) => {
    if (val.code === 200) {
      NavigationService.navigate(SCREENS_ENUM.OTP_SCREEN, {
        email: formData.email,
        mode: 'EMAIL_VERIFICATION',
      });
      showToast('success', 'OTP Sent');
    }
  });
};

export const useSignInService = () => {
  const { setAuthToken } = useAuthTokenAtom();
  const { setUser } = useUserAtom();

  return useMutationService(signInMutationAtom, async (val) => {
    setAuthToken(val.token);
    setUser(val.user);
    NavigationService.reset(STACKS_ENUM.MAIN_STACK);
    showToast('success', 'Login Successful');
  });
};

export const useGoogleSignInService = () => {
  const { setAuthToken } = useAuthTokenAtom();
  const { setUser } = useUserAtom();

  return useMutationService(googleLoginAtom, async (val) => {
    setAuthToken(val.token);
    setUser(val.user);
    showToast('success', 'Login Successful');
    NavigationService.reset(STACKS_ENUM.MAIN_STACK);
  });
};
export const useAppleSignInService = () => {
  const { setAuthToken } = useAuthTokenAtom();
  const { setUser } = useUserAtom();

  return useMutationService(appleLoginAtom, async (val) => {
    setAuthToken(val.token);
    setUser(val.user);
    showToast('success', 'Login Successful');
    NavigationService.reset(STACKS_ENUM.MAIN_STACK);
  });
};

export const useForgetPasswordService = () => {
  return useMutationService(forgetPasswordAtom, (val, formData) => {
    NavigationService.navigate(SCREENS_ENUM.OTP_SCREEN, {
      email: formData?.email,
      mode: 'FORGOT_PASSWORD',
    });
    showToast('success', 'OTP Sent');
    return val;
  });
};

export const useHandleOTPService = () => {
  const { setAuthToken } = useAuthTokenAtom();
  const { setUser } = useUserAtom();
  return useMutationService(otpMutationAtom, (val, formData) => {

    if (formData.type === 'EMAIL_VERIFICATION') {
      NavigationService.navigate(SCREENS_ENUM.RESET_PASSWORD_SUCCESS_SCREEN, {
        mode: 'EMAIL_VERIFICATION',
      });
      setAuthToken(val.token);
      setUser(val.user);
    } else {
      NavigationService.navigate(SCREENS_ENUM.RESET_PASSWORD_SCREEN, {
        email: formData.email,
      });
      showToast('success', 'OTP Verified Successfully');
    }
  });
};

export const useResetPasswordService = () => {
  return useMutationService(resetPasswordAtom, val => {
    if (val.code === 200) {
      NavigationService.navigate(SCREENS_ENUM.RESET_PASSWORD_SUCCESS_SCREEN, {
        mode: 'FORGOT_PASSWORD',
      });
      showToast('success', 'Password Reset Successfully');
    }
  });
};

export const useResendOTPService = () => {
  return useMutationService(resendOTPAtom, () => {
    showToast('success', 'OTP Resent Successfully');
  });
};

export const useUpdatePasswordService = () => {
  return useMutationService(updatePasswordAtom, () => {
    showToast('success', 'Password updated successfully');
  });
};

export const useUpdateUserService = () => {
  const { setUser } = useUserAtom();
  return useMutationService(updateUser, async (val) => {
    setUser(val)
  });
};