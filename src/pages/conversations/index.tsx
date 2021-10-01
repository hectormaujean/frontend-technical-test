import { useContext } from "react";

import { Box } from "@mui/system";
import { List, Typography } from "@mui/material";

import { UserIdContext } from "../../modules/contexts";
import { useGetUserConversations } from "../../modules/conversations/queries";

import ConversationThumbnail from "../../components/conversation/Thumbnail";

const Conversations = () => {
  const userId = useContext(UserIdContext);

  const { data, isLoading } = useGetUserConversations(userId);

  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h5">Conversations</Typography>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List sx={{ marginTop: 2 }}>
          {data.map((conversation) => (
            <ConversationThumbnail
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default Conversations;
