import { useQuery } from "react-query";
import axios from 'axios'; 

import { Conversation } from "./types";
import { API_URL } from "../constants";

export function useGetUserConversations(userId: number) {
    const data = useQuery<Conversation[] | undefined, Error>('user-conversations', async () => {
        const { data } = await axios.get(
            `${API_URL}/conversations/${userId}`
        );
        return data;
    });

    return data;
}
