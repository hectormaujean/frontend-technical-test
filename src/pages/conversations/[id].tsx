import { useContext } from "react";

import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

import { ConversationIdContext, UserIdContext } from "../../modules/contexts";
import { useGetUserConversations } from "../../modules/conversations/queries";
import { useGetConversationMessages } from "../../modules/messages/queries";

import ConversationHeader from "../../components/conversation/Header";
import MessageList from "../../components/message/List";
import MessageInput from "../../components/message/Input";

type Props = {
  id: string;
};

const Conversation = ({ id }: Props) => {
  const userId = useContext(UserIdContext);

  const { data: conversationsData, isLoading: isConversationDataLoading } =
    useGetUserConversations(userId);

  const { data: messagesData, isLoading: areMessagesLoading } =
    useGetConversationMessages(parseInt(id));

  const currentConversation = conversationsData?.find(
    (conversation) => conversation.id.toString() === id
  );

  return (
    <ConversationIdContext.Provider value={parseInt(id)}>
      <Box display="flex" flexDirection="column" height="100vh">
        {isConversationDataLoading ? (
          <Skeleton variant="rectangular" height={70} />
        ) : (
          <ConversationHeader conversation={currentConversation} />
        )}
        <Box flex="1 1 auto" overflow="scroll">
          {areMessagesLoading ? (
            <Box display="flex" justifyContent="center" marginTop={5}>
              <CircularProgress />
            </Box>
          ) : (
            <MessageList messages={messagesData} />
          )}
        </Box>
        <MessageInput />
      </Box>
    </ConversationIdContext.Provider>
  );
};

// TODO: prefetch data using clientQuery.prefetchQuery
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      id: params.id,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Conversation;
