import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

import { Message } from "./types";
import { API_URL } from "../constants";

export function useGetConversationMessages(conversationId: number) {
    const data = useQuery<Message[] | undefined, Error>(`conversation-messages/${conversationId}`, async () => {
        const { data } = await axios.get(
            `${API_URL}/messages/${conversationId}`
        );
        return data;
    });

    return data;
}

export function usePostMessage(conversationId: number, onSuccess: () => void) {
    const queryClient = useQueryClient();

    return useMutation(async (values: { body: string, authorId: number }) => await axios.post(`${API_URL}/messages/${conversationId}`, {
        body: values.body,
        conversationId,
        authorId: values.authorId,
        timestamp: 0
    }), {
        onSuccess: () => {
            onSuccess();
            queryClient.invalidateQueries(`conversation-messages/${conversationId}`)
        }
    })
}