import { useQuery } from "react-query";
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