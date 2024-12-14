import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { AsyncStorage } from 'jotai/vanilla/utils/atomWithStorage';
import { STORAGE_KEYS } from 'src/utilities';
import { asyncStorage } from './storageHelpers';

//Atoms
export const loadingAtom = atom(false);
export const logoutAtom = atom(false);
export const authTokenAtom = atomWithStorage<null | string>(
  STORAGE_KEYS.TOKEN,
  null,
  asyncStorage as AsyncStorage<string | null>,
);

// Atom Hooks
export const useAuthTokenAtom = () => {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);
  return { authToken, setAuthToken };
};

