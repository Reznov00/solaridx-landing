export interface ChatRoomInterface {
    chatRoomId: string,
    header: string
}
export interface MessageItemInterface {
    _id: string;
    prompt: string
    answer: string
    createdAt: string
    image?: string
}
export type MessageType = 'prompt' | 'answer';
