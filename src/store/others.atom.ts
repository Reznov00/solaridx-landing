import { atom, useAtom } from 'jotai';

//Atoms
const specsBottomSheetAtom = atom<boolean>(false);

// Atom Hooks
export const useSpecsBottomSheetAtom = () => {
    const [bottomSheetVisible, setBottomSheetVisible] = useAtom(specsBottomSheetAtom);
    return { bottomSheetVisible, setBottomSheetVisible };
};


