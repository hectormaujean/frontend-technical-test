export type Conversation = {
    id: number;
    senderId: number;
    senderNickname: string;
    recipientId: number;
    recipientNickname: string;
    lastMessageTimestamp: number;
}
