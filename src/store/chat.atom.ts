import { atom, useAtom } from 'jotai';
import { atomWithMutation, atomWithQuery } from 'jotai-tanstack-query';
import { axiosInstance, deleteChatURL, getAllChatRoomsURL, getChatHistoryURL, postChatURL, postNewChatURL } from 'src/apis';
import { MessageDeleteRequestInterface, MessageItemInterface, MessagePostRequestInterface } from 'src/interfaces';

//Atoms
const chatRoomAtom = atom<string | null>();
export const chatsAtom = atom<MessageItemInterface[]>([]);

// Atom Hooks
export const useChatRoomIDAtom = () => {
  const [roomId, setRoomId] = useAtom(chatRoomAtom)
  return { roomId, setRoomId }
}
export const useChatsAtom = () => {
  const [chats, setChats] = useAtom(chatsAtom)
  return { chats, setChats }
}

export const getChatRoomsAtom = atomWithQuery(() => ({
  queryKey: ['getChatRoomsAtom'],
  queryFn: async () => {
    const { data } = await axiosInstance.get(getAllChatRoomsURL);
    return data.chatRooms;
  },
}));
export const getChatsHistoryAtom = (roomId: string) =>
  atomWithQuery(() => ({
    queryKey: ['getChatsHistoryAtom', roomId],
    queryFn: async () => {
      if (roomId === 'newchat') return []
      const api = `${getChatHistoryURL}/${roomId}`;
      const { data } = await axiosInstance.get(api);
      return data.chats;
    },
  }));

export const postChatMutationAtom = atomWithMutation(() => ({
  mutationKey: ['postChatMutationAtom'],
  mutationFn: async ({ userInfo, newChat }: { userInfo: MessagePostRequestInterface; newChat: boolean }) => {
    const ApiUrl = newChat ? postNewChatURL : postChatURL;
    const formData = userInfo.image || new FormData();

    formData.append('prompt', userInfo.prompt);
    !newChat && formData.append('chatRoomId', userInfo.chatRoomId as string);

    const { data } = await axiosInstance.post(ApiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  },
}));

export const deleteChatMutationAtom = atomWithMutation(() => ({
  mutationKey: ['deleteChatMutationAtom'],
  mutationFn: async ({ chatRoomId }: MessageDeleteRequestInterface) => {
    const { data } = await axiosInstance.delete(deleteChatURL(chatRoomId));
    return data;
  },
}));


