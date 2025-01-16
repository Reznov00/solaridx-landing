import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { AsyncStorage } from 'jotai/vanilla/utils/atomWithStorage';
import { AccountDeletionType, LatLongInterface, User } from 'src/interfaces';
import { STORAGE_KEYS } from 'src/utilities';
import { asyncStorage } from './storageHelpers';

//Atoms
const userAtom = atom<User | null>();
const recentCoordsAtom = atom<LatLongInterface | null>();
// export const userAtom = atomWithStorage<null | User>(
//   STORAGE_KEYS.USER,
//   null,
//   asyncStorage as AsyncStorage<null | User>,
// );
// const recentCoordsAtom = atomWithStorage<null | LatLongInterface>(
//   STORAGE_KEYS.RECENT_COORDS,
//   null,
//   asyncStorage as AsyncStorage<null | LatLongInterface>,
// );
const deleteAccountBottomSheet = atom<AccountDeletionType>('none');

// Atom Hooks
export const useUserAtom = () => {
  const [user, setUser] = useAtom(userAtom);
  return { user, setUser };
};
export const useRecentCoordsAtom = () => {
  const [recentCoords, setRecentCoords] = useAtom(recentCoordsAtom);
  return { recentCoords, setRecentCoords };
};

export const useDeleteAccountBottomSheetAtom = () => {
  const [showDeleteAccountBotomSheet, setShowDeleteAccountBotomSheet] =
    useAtom(deleteAccountBottomSheet);
  return { showDeleteAccountBotomSheet, setShowDeleteAccountBotomSheet };
};


