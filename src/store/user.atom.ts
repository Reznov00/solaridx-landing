import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { AsyncStorage } from 'jotai/vanilla/utils/atomWithStorage';
import { AccountDeletionType, User } from 'src/interfaces';
import { STORAGE_KEYS } from 'src/utilities';
import { asyncStorage } from './storageHelpers';

//Atoms
const userAtom = atom<User | null>();
// export const userAtom = atomWithStorage<null | User>(
//   STORAGE_KEYS.USER,
//   null,
//   asyncStorage as AsyncStorage<null | User>,
// );
const deleteAccountBottomSheet = atom<AccountDeletionType>('none');
const logoutAtom = atom(false);

// Atom Hooks

export const useUserAtom = () => {
  const [user, setUser] = useAtom(userAtom);
  return { user, setUser };
};

export const useDeleteAccountBottomSheetAtom = () => {
  const [showDeleteAccountBotomSheet, setShowDeleteAccountBotomSheet] =
    useAtom(deleteAccountBottomSheet);
  return { showDeleteAccountBotomSheet, setShowDeleteAccountBotomSheet };
};

export const useLogoutBottomSheetAtom = () => {
  const [showLogoutBottomSheet, setShowLogoutBottomSheet] = useAtom(logoutAtom);
  return { showLogoutBottomSheet, setShowLogoutBottomSheet };
};

