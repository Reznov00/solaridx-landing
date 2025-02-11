import { atom, useAtom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import { axiosInstance, getAllChatRoomsURL, getChatHistoryURL } from 'src/apis';
import { MessageItemInterface } from 'src/interfaces';

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
// export const getChatsHistoryAtom = atomWithQuery(() => ({
//   queryKey: ['getChatsHistoryAtom'],
//   queryFn: async () => {
//     // const [roomId,] = useAtom(chatRoomAtom)
//     // console.log({ roomId })
//     const api = `${getChatHistoryURL}/${'roomId'}`
//     const { data } = await axiosInstance.get(api);
//     return data.chats;
//   },
// }));

export const getChatsHistoryAtom = (roomId: string) =>
  atomWithQuery(() => ({
    queryKey: ['getChatsHistoryAtom', roomId],
    queryFn: async () => {
      const api = `${getChatHistoryURL}/${roomId}`;
      const { data } = await axiosInstance.get(api);
      return data.chats;
    },
  }));

