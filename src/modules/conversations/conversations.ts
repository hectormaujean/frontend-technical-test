import { useQuery } from "react-query";
import axios from 'axios'; 

import { Conversation } from "./types";

export function useGetUserConversations(userId: number) {
    const data = useQuery<Conversation[] | undefined, Error>('user-conversations', async () => {
        const { data } = await axios.get(
            `http://localhost:3005/conversations/${userId}`
        );
        return data;
    });

    return data;
}
