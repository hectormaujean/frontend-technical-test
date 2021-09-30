import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";

import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";

import { usePostMessage } from "../../modules/messages/queries";
import { ConversationIdContext, UserIdContext } from "../../modules/contexts";

const MessageInput = () => {
  const userId = useContext(UserIdContext);
  const conversationId = useContext(ConversationIdContext);
  const [message, setMessage] = useState("");

  const { mutate: postMessage } = usePostMessage(conversationId, () =>
    setMessage("")
  );

  const handleMessageUpdate = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setMessage(event.target.value.replace("\n", ""));
  };

  const handleKeyboardSubmit = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter" && message.length) {
      postMessage({
        body: message,
        authorId: userId,
      });
    }
  };

  const handleSubmit = () => {
    if (message.length) {
      postMessage({
        body: message,
        authorId: userId,
      });
    }
  };

  return (
    <Box display="flex" alignItems="center" p={1.5}>
      <TextField
        value={message}
        onChange={handleMessageUpdate}
        size="small"
        variant="outlined"
        sx={{ flexGrow: 1, marginRight: 1 }}
        multiline
        maxRows={3}
        onKeyDown={handleKeyboardSubmit}
      />
      <SendIcon
        sx={{ cursor: message ? "pointer" : "auto" }}
        fontSize="large"
        htmlColor={message ? orange[700] : grey[400]}
        onClick={handleSubmit}
      />
    </Box>
  );
};

export default MessageInput;
