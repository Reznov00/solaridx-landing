import {useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
import {AsyncStorage} from 'jotai/vanilla/utils/atomWithStorage';
import {User} from 'src/interfaces';
import {STORAGE_KEYS} from 'src/utilities';
import {asyncStorage} from './storageHelpers';

//Atoms
// const userAtom = atom<User | null>();
export const userAtom = atomWithStorage<null | User>(
  STORAGE_KEYS.USER,
  null,
  asyncStorage as AsyncStorage<null | User>,
);

// Atom Hooks
const useUserAtom = () => {
  const [user, setUser] = useAtom(userAtom);
  return {user, setUser};
};

export {useUserAtom};
