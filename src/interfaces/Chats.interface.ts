export interface ChatRoomInterface {
    _id: string;
    name: string
    createdAt: string
}
export interface MessageItemInterface {
    _id: string;
    prompt: string
    answer: string
    chatRoom: ChatRoomInterface
    createdAt: string
}
export type MessageType = 'prompt' | 'answer';
