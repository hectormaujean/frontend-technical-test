import { useContext } from "react";

import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

import { UserIdContext } from "../../modules/contexts";
import { useGetUserConversations } from "../../modules/conversations/queries";
import { useGetConversationMessages } from "../../modules/messages/queries";

import ConversationHeader from "../../components/conversation/Header";
import MessageList from "../../components/message/List";

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
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {isConversationDataLoading ? (
        <Skeleton variant="rectangular" height={70} />
      ) : (
        <ConversationHeader conversation={currentConversation} />
      )}
      <Box flexGrow={1}>
        {areMessagesLoading ? (
          <Box display="flex" justifyContent="center" marginTop={5}>
            <CircularProgress />
          </Box>
        ) : (
          <MessageList messages={messagesData} />
        )}
      </Box>
      <div>MessageInput</div>
    </Box>
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
