import { useContext } from "react";

import Link from "next/link";

import { LoggedUserContext } from "../../modules/contexts";
import { useGetUserConversations } from "../../modules/conversations/conversations";

import ConversationThumbnail from "../../components/conversation/Thumbnail";

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
        <>
          {data.map((conversation) => (
            <ConversationThumbnail
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Conversations;
