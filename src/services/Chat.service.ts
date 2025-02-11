import { Atom, useAtom } from 'jotai';
import { AtomWithMutationResult } from 'jotai-tanstack-query';
import { useMemo } from 'react';
import { showToast } from 'src/components';
import { MutationErrorInterface } from 'src/interfaces';
import {
  getChatRoomsAtom,
  getChatsHistoryAtom,
  useChatRoomIDAtom,
  useChatsAtom
} from 'src/store';

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
