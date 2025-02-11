import { atom, useAtom } from 'jotai';
import { atomWithMutation } from 'jotai-tanstack-query';
import { atomWithStorage } from 'jotai/utils';
import { axiosInstance, linkSpectaclesURL, unlinkSpectaclesURL } from 'src/apis';
import { AccountDeletionType, LatLongInterface, SpectaclesConnectInterface, User } from 'src/interfaces';
import { STORAGE_KEYS } from 'src/utilities';
import { asyncStorage } from './storageHelpers';
import { AsyncStorage } from 'jotai/vanilla/utils/atomWithStorage';

//Atoms
// const userAtom = atom<User | null>();
// const recentCoordsAtom = atom<LatLongInterface | null>();
export const userAtom = atomWithStorage<User | null>(
  STORAGE_KEYS.USER,
  null,
  asyncStorage as AsyncStorage<User | null>,
);
const recentCoordsAtom = atomWithStorage<LatLongInterface | null>(
  STORAGE_KEYS.RECENT_COORDS,
  null,
  asyncStorage as AsyncStorage<LatLongInterface | null>,
);
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

export const spectaclesLinkAtom = atomWithMutation(() => ({
  mutationKey: ['spectaclesLinkAtom'],
  mutationFn: async (values: SpectaclesConnectInterface) => {
    const { data } = await axiosInstance.post(linkSpectaclesURL, values);
    return data;
  },
}));

export const spectaclesUnLinkAtom = atomWithMutation(() => ({
  mutationKey: ['spectaclesUnLinkAtom'],
  mutationFn: async () => {
    const { data } = await axiosInstance.patch(unlinkSpectaclesURL);
    return data;
  },
}));


