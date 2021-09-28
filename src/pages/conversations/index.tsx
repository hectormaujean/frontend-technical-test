import { useContext } from "react";

import Link from "next/link";

import { LoggedUserContext } from "../../modules/contexts";
import { useGetUserConversations } from "../../modules/conversations/queries";

import ConversationThumbnail from "../../components/conversation/Thumbnail";
import { List } from "@mui/material";

const Conversations = () => {
  const userId = useContext(LoggedUserContext);

  const { data, isLoading, error } = useGetUserConversations(userId);

  return (
    <div>
      <Link href="/">Go home</Link>
      <div>User conversations</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List sx={{ margin: 3 }}>
          {data.map((conversation) => (
            <ConversationThumbnail
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </List>
      )}
    </div>
  );
};

export default Conversations;
