import { Atom, useAtom } from 'jotai';
import { AtomWithMutationResult } from 'jotai-tanstack-query';
import { useMemo } from 'react';
import { showToast } from 'src/components';
import { MutationErrorInterface } from 'src/interfaces';
import {
  getChatRoomsAtom,
  getChatsHistoryAtom,
  postChatMutationAtom,
  useChatRoomIDAtom,
  useChatsAtom
} from 'src/store';

// const useMutationService = <TData, TError, TVariables>(
//   atom: Atom<AtomWithMutationResult<TData, TError, TVariables, unknown>>,
//   onSuccess: (val: TData, formData: TVariables) => void,
// ) => {
//   const [{ mutate, isPending, data }] = useAtom(atom);

//   const handleService = async (formData: TVariables) => {

//    return mutate(formData, {
//       onSuccess: val => onSuccess(val, formData),
//       onError: (error: TError) => {
//         const err = error as MutationErrorInterface;
//         showToast('error', err?.message ?? 'Error Encountered');
//       },
//     });
//   };


//   return { handleService, isPending, data };
// };


const useMutationService = <TData, TError, TVariables>(
  atom: Atom<AtomWithMutationResult<TData, TError, TVariables, unknown>>,
  onSuccess: (val: TData, formData: TVariables) => void,
) => {
  const [{ mutateAsync, isPending, data }] = useAtom(atom);

  const handleService = async (formData: TVariables): Promise<TData> => {
    try {
      const result = await mutateAsync(formData, {
        onSuccess: (val) => onSuccess(val, formData),
        onError: (error: TError) => {
          const err = error as MutationErrorInterface;
          showToast('error', err?.message ?? 'Error Encountered');
        },
      });
      return result;
    } catch (error) {
      console.error('Mutation failed:', error);
      throw error;
    }
  };

  return { handleService, isPending, data };
};

export const useGetChatRoomsService = () => {
  const [{ data, isPending, isError, isLoading, refetch }] =
    useAtom(getChatRoomsAtom);
  return { data, isPending, isLoading, isError, refetch };
};


export const useGetChatHistoryService = () => {
  const { roomId } = useChatRoomIDAtom();
  const { setChats } = useChatsAtom();

  const chatsHistoryAtom = useMemo(() => {
    return getChatsHistoryAtom(roomId as string);
  }, [roomId]);

  const [{ data, isPending, isError, isLoading, refetch }] = useAtom(chatsHistoryAtom);
  setChats(data)
  return { data, isPending, isLoading, isError, refetch };
};


export const usePostChatService = () => {
  return useMutationService(postChatMutationAtom, (val, _) => {
    return val
  });
};
