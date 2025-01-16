import { useCallback } from 'react';
import { STACKS_ENUM } from 'src/enums';
import { useAuthTokenAtom, useUserAtom } from 'src/store';
import { NavigationService } from 'src/utilities';

export const useLogout = () => {
  const { setAuthToken } = useAuthTokenAtom();
  const { setUser } = useUserAtom();

  const logout = useCallback(async () => {
    try {
      NavigationService.reset(STACKS_ENUM.AUTH_STACK);
      setAuthToken(null);
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }, [setAuthToken]);

  return logout;
};
