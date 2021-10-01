import { useContext } from "react";
import Link from "next/link";

import moment from "moment";

import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Conversation } from "../../modules/conversations/types";
import { UserIdContext } from "../../modules/contexts";

type Props = {
  conversation: Conversation;
};

const ConversationHeader = ({
  conversation: {
    senderId,
    recipientNickname,
    senderNickname,
    lastMessageTimestamp,
  },
}: Props) => {
  const userId = useContext(UserIdContext);

  const interlocutorNickname =
    userId === senderId ? recipientNickname : senderNickname;

  const humanizedDuration = moment
    .duration(moment().diff(moment(lastMessageTimestamp, "X")))
    .humanize();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      boxShadow="0 0 4px rgba(0, 0, 0, 0.2)"
    >
      <Box display="flex" alignItems="center">
        <Link href="/conversations" passHref>
          <ArrowBackIosIcon sx={{ color: grey[600], cursor: "pointer" }} />
        </Link>
        <Avatar sx={{ marginRight: 1 }} />
        <Box>
          <div>{interlocutorNickname}</div>
          <Typography variant="body2" color="rgba(0,0,0, 0.6)" noWrap>
            Il y a {humanizedDuration}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ConversationHeader;
