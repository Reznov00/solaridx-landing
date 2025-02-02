import { Atom, useAtom } from 'jotai';
import { AtomWithMutationResult } from 'jotai-tanstack-query';
import { showToast } from 'src/components';
import { MutationErrorInterface } from 'src/interfaces';
import {
  spectaclesLinkAtom,
  spectaclesUnLinkAtom,
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

export const useSpecsLinkService = () => {
  const { setUser } = useUserAtom()
  return useMutationService(spectaclesLinkAtom, (data, _) => {
    showToast('success', 'Spectacles linked sucessfully');
    NavigationService.goBack()
    setUser(data)
  });
};

export const useSpecsUnLinkService = () => {
  const { setUser } = useUserAtom()
  return useMutationService(spectaclesUnLinkAtom, (data, _) => {
    showToast('success', 'Spectacles unlinked sucessfully');
    NavigationService.goBack()
    setUser(data)
  });
};
