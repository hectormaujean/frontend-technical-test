import { useContext } from "react";

import { Box } from "@mui/system";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import { LoggedUserContext } from "../../modules/contexts";
import { Conversation } from "../../modules/conversations/types";
import { humanizeTimestamp } from "../../modules/conversations/utils";
import { useGetConversationMessages } from "../../modules/messages/queries";

type Props = {
  conversation: Conversation;
};

const ConversationThumbnail = ({
  conversation: {
    id,
    senderId,
    senderNickname,
    recipientNickname,
    lastMessageTimestamp,
  },
}: Props) => {
  const userId = useContext(LoggedUserContext);

  const { data, isLoading } = useGetConversationMessages(id);
  const lastMessage = data?.length ? data[data.length - 1].body : "";

  const interlocutorNickname =
    userId === senderId ? recipientNickname : senderNickname;

  const humanizedTimestamp = humanizeTimestamp(lastMessageTimestamp);

  return (
    <Paper
      elevation={2}
      sx={{
        border: `1px solid ${grey[400]}`,
        borderRadius: 10,
        marginBottom: 1,
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary={interlocutorNickname}
          secondary={
            <Box display="flex">
              {isLoading ? (
                <Skeleton variant="text" width="100%" sx={{ marginRight: 1 }} />
              ) : (
                <>
                  <Typography variant="body2" color="rgba(0,0,0, 0.6)" noWrap>
                    {lastMessage}
                  </Typography>
                  {lastMessage && <>&nbsp;·&nbsp;</>}
                </>
              )}
              <Typography
                variant="body2"
                color="rgba(0,0,0, 0.6)"
                flexShrink={0}
              >
                {humanizedTimestamp}
              </Typography>
            </Box>
          }
        />
      </ListItem>
    </Paper>
  );
};

export default ConversationThumbnail;